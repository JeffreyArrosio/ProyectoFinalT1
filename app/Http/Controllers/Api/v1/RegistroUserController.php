<?php

namespace App\Http\Controllers\Api\v1;



use App\Models\Registro;
use Orion\Concerns\DisableAuthorization;
use Orion\Http\Controllers\RelationController;

class RegistroUserController extends RelationController
{
    use DisableAuthorization;
    protected $model = Registro::class;
    protected $relation = 'user';
}