<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Orion\Facades\Orion;
use App\Http\Controllers\Api\v1\BoloController;
use App\Http\Controllers\Api\v1\CentroController;
use App\Http\Controllers\Api\v1\UserController;
use App\Http\Controllers\Api\v1\RegistroController;
use App\Http\Controllers\Api\v1\AntesDeController;
use App\Http\Controllers\Api\v1\DuranteController;
use App\Http\Controllers\Api\v1\DespuesDeController;
use App\Http\Controllers\Api\v1\ComposteraController;
use App\Http\Controllers\Api\v1\CicloController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::group(['as' => 'api.'], function() {
    Orion::resource('users', UserController::class);
    Orion::resource('centros', CentroController::class);
    Orion::resource('bolos', BoloController::class);
    Orion::resource('registros', RegistroController::class);
    Orion::resource('antesde', AntesDeController::class);
    Orion::resource('durante', DuranteController::class);
    Orion::resource('despuesde', DespuesDeController::class);
    Orion::resource('composteras', ComposteraController::class);
    Orion::resource('ciclos', CicloController::class);
});



