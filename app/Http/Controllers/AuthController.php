<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function create()
    {
        return Inertia::render('Auth/Login');
    }

    public function store(Request $request)
    {
        $request->validate(
            [
                'email' => 'required|email|min:3|max:255',
                'password' => 'required'
            ]
        );

        $credentials = $request->only('email', 'password');

        if (auth()->attempt($credentials)) {
            $request->session()->regenerate();

            return redirect()->route('home');
        }

        return back()->withErrors(
            [
                'email' => 'The provided credentials do not match our records.',
            ]
        );
    }

    public function destroy(Request $request)
    {
        auth()->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()->route('home');
    }

    public function register()
    {
        return Inertia::render('Auth/Register');
    }

    public function registerStore(Request $request)
    {
        $request->validate(
            [
                'name' => 'required|min:3|max:255',
                'email' => 'required|email|min:3|max:255|unique:users,email',
                'password' => 'required|min:3|max:255|confirmed'
            ]
        );

        $credentials = $request->only('name', 'email', 'password');

        $credentials['password'] = bcrypt($credentials['password']);

        $user = User::create($credentials);

        auth()->login($user);

        return redirect()->route('home');
    }
}
