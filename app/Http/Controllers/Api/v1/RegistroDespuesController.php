<?php

namespace App\Http\Controllers\Api\v1;



use App\Models\Registro;
use Orion\Concerns\DisableAuthorization;
use Orion\Http\Controllers\RelationController;

class RegistroDespuesController extends RelationController
{
    protected $model = Registro::class;
    protected $relation = 'despues_registros';
}