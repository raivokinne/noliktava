<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ReportsController;
use App\Http\Controllers\ShelfController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\IsAdmin;
use App\Http\Middleware\IsSorter;
use App\Http\Middleware\IsWorker;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

Route::middleware('guest')->group(
    function () {
        Route::get('/', [AuthController::class, 'create'])->name('login');
        Route::post('/login', [AuthController::class, 'store'])->name('login.store');
    }
);

Route::middleware('auth')->group(
    function () {

        Route::get('/users', [UserController::class, 'index'])->name('users.index');
        Route::get('/users/{user}/show', [UserController::class, 'show'])->name('users.show');
        Route::post('/users/search', [UserController::class, 'search'])->name('users.search'); 
        Route::put('/users/{users}/update', [UserController::class, 'update'])->name('users.update');


        Route::delete('/logout', [AuthController::class, 'destroy'])->name('logout');

        Route::get(
            '/dashboard',
            function () {
                return Inertia::render('Dashboard/Index');
            }
        )->name('dashboard');
    }
);

Route::get('/api/user', function () {
    return Auth::user();
});

