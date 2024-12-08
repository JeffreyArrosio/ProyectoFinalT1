<?php

namespace App\Http\Controllers\Api\v1;



use App\Models\Bolo;
use Orion\Concerns\DisableAuthorization;
use Orion\Http\Controllers\RelationController;

class BoloCiclosController extends RelationController
{
    protected $model = Bolo::class;
    protected $relation = 'ciclos';
}