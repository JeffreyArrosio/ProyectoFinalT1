<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RegistroController;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('dashboard');
})->middleware(['auth:sanctum'])->name('dashboard');

Route::resource('users', UserController::class)->middleware('can:administrate,App\Models\User'); // Ruta para el CRUD de usuarios(Admin).

Route::get('/registro', function () {
    return view('registro');
});

Route::post('/registro', action: [RegistroController::class, 'store'])
    ->middleware('auth');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



require __DIR__.'/auth.php';
