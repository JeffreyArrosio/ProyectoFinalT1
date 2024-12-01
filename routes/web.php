<?php

use App\Http\Controllers\ProfileController;
// use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
})->name('welcome');



// Route::get('/', function () {
//     return view('welcome');
// })
// ->middleware(['auth'])
// ->name('welcome');

// Route::resource('users', UserController::class)->middleware('can:administrate,App\Models\User'); // Ruta para el CRUD de usuarios(Admin).

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// require __DIR__.'/auth.php';
?>