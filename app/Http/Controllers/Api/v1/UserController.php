<?php

namespace App\Http\Controllers\Api\v1;


use Orion\Http\Controllers\Controller;
use App\Models\User;
use Orion\Concerns\DisableAuthorization;

class UserController extends Controller
{
    use DisableAuthorization;
    protected $model = User::class;
}