<?php

namespace App\Http\Controllers\Api\v1;



use App\Models\Ciclo;
use Orion\Concerns\DisableAuthorization;
use Orion\Http\Controllers\RelationController;

class CicloComposteraController extends RelationController
{

    protected $model = Ciclo::class;
    protected $relation = 'compostera';
}