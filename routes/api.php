<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Orion\Facades\Orion;
use App\Http\Controllers\Api\v1\BoloController;
use App\Http\Controllers\Api\v1\RegistroController;
use App\Http\Controllers\Api\v1\AntesDeController;
use App\Http\Controllers\Api\v1\DuranteController;
use App\Http\Controllers\Api\v1\DespuesDeController;
use App\Http\Controllers\Api\v1\ComposteraController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::group(['as' => 'api.'], function() {
    Orion::resource('bolos', BoloController::class);
});
Route::group(['as' => 'api.'], function() {
    Orion::resource('registros', RegistroController::class);
});
Route::group(['as' => 'api.'], function() {
    Orion::resource('antesde', AntesDeController::class);
});
Route::group(['as' => 'api.'], function() {
    Orion::resource('durante', DuranteController::class);
});
Route::group(['as' => 'api.'], function() {
    Orion::resource('despuesde', DespuesDeController::class);
});
Route::group(['as' => 'api.'], function() {
    Orion::resource('compostera', ComposteraController::class);
});

