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

            return redirect()->route('dashboard');
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

        return redirect()->route('dashboard');
    }

    public function register()
    {
        return Inertia::render('Auth/Register');
    }

    public function registerStore(Request $request)
    {

        $formData = $request->validate(
            [
                'name' => 'required|min:3|max:255',
                'email' => 'required|email|min:3|max:255|unique:users,email',
                'password' => 'required|min:3|max:255|confirmed',
                'role' => 'required|string'
            ]
        );



        $formData['password'] = bcrypt($formData['password']);

        $user = User::create($formData);

        auth()->login($user);

        return redirect()->route('dashboard');
    }
}
