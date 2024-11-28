<?php

namespace App\Http\Controllers\Api\v1;


use Orion\Http\Controllers\Controller;
use App\Models\Registro;
use Orion\Concerns\DisableAuthorization;

class RegistroController extends Controller
{
    use DisableAuthorization;
    protected $model = Registro::class;
}