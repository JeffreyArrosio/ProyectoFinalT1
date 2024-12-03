<?php

namespace App\Http\Controllers\Api\v1;



use App\Models\Centro;
use Orion\Concerns\DisableAuthorization;
use Orion\Http\Controllers\RelationController;

class CentroComposterasController extends RelationController
{
    use DisableAuthorization;
    protected $model = Centro::class;
    protected $relation = 'composteras';
}