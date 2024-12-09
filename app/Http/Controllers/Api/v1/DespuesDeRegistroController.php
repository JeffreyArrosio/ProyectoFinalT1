<?php

namespace App\Http\Controllers\Api\v1;



use App\Models\DespuesDe;
use Orion\Concerns\DisableAuthorization;
use Orion\Http\Controllers\RelationController;

class DespuesDeRegistroController extends RelationController
{
    use DisableAuthorization;
    protected $model = DespuesDe::class;
    protected $relation = 'registro';
}