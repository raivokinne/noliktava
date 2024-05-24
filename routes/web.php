<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ShelfController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ReportsController;
use App\Http\Middleware\IsAdmin;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get(
    '/dashboard',
    function () {
        return Inertia::render('Dashboard/Index');
    }
)->name('dashboard')->middleware(IsAdmin::class);

Route::get('/', [AuthController::class, 'create'])->name('login');
Route::post('/login', [AuthController::class, 'store'])->name('login.store');
Route::get('/logout', [AuthController::class, 'destroy'])->name('logout');

Route::middleware(IsAdmin::class)->group(function () {
    Route::get('/register', [AuthController::class, 'register'])->name('register');
    Route::post('/register', [AuthController::class, 'registerStore'])->name('register.store');

    Route::get('/users', [UserController::class, 'index'])->name('users.index');
    Route::get('/users/{users}', [UserController::class, 'show'])->name('users.show');
    Route::get('/users/{users}/edit', [UserController::class, 'edit'])->name('users.edit');
    Route::delete('/users/{users}', [UserController::class, 'destroy'])->name('users.destroy');
    Route::put('/users/{users}', [UserController::class, 'update'])->name('users.update');

    Route::get('/shelfs', [ShelfController::class, 'index'])->name('shelf.index');
    Route::get('/shelfs/{shelf}', [ShelfController::class, 'show'])->name('shelf.show');
    Route::get('/shelfs/{shelf}/edit', [ShelfController::class, 'edit'])->name('shelf.edit');
    Route::put('/shelfs/{shelf}/update', [ShelfController::class, 'update'])->name('shelf.update');
    Route::post('/shelfs', [ShelfController::class, 'store'])->name('shelf.store');
    Route::get('/shelfs/create', [ShelfController::class, 'create'])->name('shelf.create');

    Route::get('/reports', [ReportsController::class, 'index'])->name('report.index');
    Route::get('/reports/{report}', [ReportsController::class, 'show'])->name('report.show');
    Route::get('/reports/{report}/edit', [ReportsController::class, 'edit'])->name('report.edit');
    Route::put('/reports/{report}/update', [ReportsController::class, 'update'])->name('report.update');
    Route::post('/reports', [ReportsController::class, 'store'])->name('report.store');
    Route::get('/reports/create', [ReportsController::class, 'create'])->name('report.create');
    Route::delete('/reports/{report}', [ReportsController::class, 'destroy'])->name('report.destroy');
});
