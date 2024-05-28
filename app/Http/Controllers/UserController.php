<?php

namespace App\Http\Controllers;

use App\Models\Reports;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        return Inertia::render(
            'Users/Index', [
                'users' => User::all(),
            ]
        );
    }

    public function show(User $user)
    {
        return Inertia::render(
            'Users/Profile/Show', [
                'user' => $user,
            ]
        );
    }

    public function edit(User $user)
    {
        return Inertia::render(
            'Users/Edit', [
                'user' => $user,
            ]
        );
    }

    public function update(Request $request, User $user)
    {
        $request->validate(
            [
                'name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email,' . $user->id],
                'password' => ['nullable', 'string', 'min:8', 'confirmed'],
                'role' => ['required', 'string', 'max:255'],
            ]
        );

        $user->update($request->all());

        if ($request->password) {
            $user->update(
                [
                    'password' => bcrypt($request->password),
                ]
            );
        }

        $user->save();

        Reports::create(
            [
                'user_id' => auth()->user()->id,
                'description' => $user->name . ' was updated by ' . auth()->user()->name,
                'date' => now(),
                'name' => 'User Update',
            ]
        );

        return redirect()->route('users.show', $user);
    }

    public function destroy(User $user)
    {
        $user->delete();
        Reports::create(
            [
                'user_id' => auth()->user()->id,
                'description' => $user->name . ' was deleted by ' . auth()->user()->name,
                'date' => now(),
                'name' => 'User Delete',
            ]
        );
        return redirect()->route('users.index');
    }
}
