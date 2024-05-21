<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ReportsController;
use App\Http\Controllers\StorageController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\IsAdmin;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get(
    '/', function () {
        return Inertia::render('Welcome');
    }
)->name('home');


Route::get('/login', [AuthController::class, 'create'])->name('login');
Route::post('/login', [AuthController::class, 'store'])->name('login.store');
Route::delete('/logout', [AuthController::class, 'destroy'])->name('logout');


//routes ko tikai admin var tikt
Route::middleware(IsAdmin::class)->group(function () {

    Route::get('/register', [AuthController::class, 'register'])->name('register');
    Route::post('/register', [AuthController::class, 'registerStore'])->name('register.store');

    Route::get('/users', [UserController::class, 'index'])->name('users.index');
    Route::get('/users/{users}', [UserController::class, 'show'])->name('users.show');
    Route::get('/users/{users}/edit', [UserController::class, 'edit'])->name('users.edit');
    Route::delete('/users/{users}', [UserController::class, 'destroy'])->name('users.destroy');
    Route::put('/users/{users}', [UserController::class, 'update'])->name('users.update');
    
});



Route::get('/storage', [StorageController::class, 'index'])->name('storage.index');
Route::get('/storage/{storage}', [StorageController::class, 'show'])->name('storage.show');
Route::get('/storage/{storage}/edit', [StorageController::class, 'edit'])->name('storage.edit');
Route::delete('/storage/{storage}', [StorageController::class, 'destroy'])->name('storage.destroy');
Route::put('/storage/{storage}', [StorageController::class, 'update'])->name('storage.update');
Route::post('/storage', [StorageController::class, 'store'])->name('storage.store');
Route::get('/storage/create', [StorageController::class, 'create'])->name('storage.create');


Route::get('/shelfs', [StorageController::class, 'index'])->name('shelf.index');
Route::get('/shelfs/{shelf}', [StorageController::class, 'show'])->name('shelf.show');
Route::get('/shelfs/{shelf}/edit', [StorageController::class, 'edit'])->name('shelf.edit');
Route::put('/shelfs/{shelf}/update', [StorageController::class, 'update'])->name('shelf.update');
Route::post('/shelfs', [StorageController::class, 'store'])->name('shelf.store');
Route::get('/shelfs/create', [StorageController::class, 'create'])->name('shelf.create');





