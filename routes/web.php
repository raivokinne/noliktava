<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\StorageController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get(
    '/', function () {
        return Inertia::render('Welcome');
    }
);

Route::get('/register', [AuthController::class, 'register'])->name('register');
Route::post('/register', [AuthController::class, 'registerStore'])->name('register.store');
Route::get('/login', [AuthController::class, 'create'])->name('login');
Route::post('/login', [AuthController::class, 'store'])->name('login.store');
Route::delete('/logout', [AuthController::class, 'destroy'])->name('logout');


Route::get('/storage', [StorageController::class, 'index'])->name('storage.index');
Route::get('/storage/{storage}', [StorageController::class, 'show'])->name('storage.show');
Route::get('/storage/{storage}/edit', [StorageController::class, 'edit'])->name('storage.edit');
Route::delete('/storage/{storage}', [StorageController::class, 'edit'])->name('storage.destroy');
Route::put('/storage/{storage}', [StorageController::class, 'update'])->name('storage.update');
Route::post('/storage', [StorageController::class, 'store'])->name('storage.store');
Route::get('/storage/create', [StorageController::class, 'create'])->name('storage.create');
