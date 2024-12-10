<?php

namespace App\Http\Controllers\Api\v1;



use App\Models\Compostera;
use Orion\Concerns\DisableAuthorization;
use Orion\Http\Controllers\RelationController;

class ComposteraRegistrosController extends RelationController
{

    protected $model = Compostera::class;
    protected $relation = 'registros';
}