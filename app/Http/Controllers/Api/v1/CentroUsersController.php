<?php

namespace App\Http\Controllers\Api\v1;



use App\Models\Centro;
use Orion\Concerns\DisableAuthorization;
use Orion\Http\Controllers\RelationController;

class CentroUsersController extends RelationController
{

    protected $model = Centro::class;
    protected $relation = 'users';
}