<?php

namespace App\Http\Controllers\Api\v1;



use App\Models\Durante;
use Orion\Concerns\DisableAuthorization;
use Orion\Http\Controllers\RelationController;

class DuranteRegistroController extends RelationController
{
    use DisableAuthorization;
    protected $model = Durante::class;
    protected $relation = 'registro';
}