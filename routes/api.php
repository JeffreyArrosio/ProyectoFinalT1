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
    Orion::resource('centros', CentroController::class);
    Orion::hasManyResource('centros', 'users', CentroController::class);
    Orion::hasManyResource('centros', 'composteras', CentroController::class);
    Orion::resource('users', UserController::class);
    Orion::resource('bolos', BoloController::class);
    Orion::hasManyResource('bolos', 'ciclos', BoloController::class);
    Orion::resource('ciclos', CicloController::class);
    Orion::belongsToResource('ciclos', 'bolo', CicloController::class);
    Orion::belongsToResource('ciclos', 'compostera', CicloController::class);
    Orion::hasManyResource('ciclos', 'registros', CicloController::class);
    Orion::resource('composteras', ComposteraController::class);
    Orion::belongsToResource('composteras', 'centro', ComposteraController::class);
    Orion::hasManyResource('composteras', 'registros', ComposteraController::class);
    Orion::resource('registros', RegistroController::class);
    Orion::hasManyResource('registros', 'antes_registros', RegistroController::class);
    Orion::hasManyResource('registros', 'durante_registros', RegistroController::class);
    Orion::hasManyResource('registros', 'despues_registros',  RegistroController::class);
    Orion::belongsToResource('registros', 'user', RegistroController::class);
    Orion::belongsToResource('registros', 'compostera', RegistroController::class);
    Orion::belongsToResource('registros', 'ciclo', RegistroController::class);
    Orion::resource('antesde', AntesDeController::class);
    Orion::belongsToResource('antesde', 'registro', AntesDeController::class);
    Orion::resource('durante', DuranteController::class);
    Orion::belongsToResource('durante', 'registro', DuranteController::class);
    Orion::resource('despuesde', DespuesDeController::class);
    Orion::belongsToResource('despuesde', 'registro', DespuesDeController::class);
});



