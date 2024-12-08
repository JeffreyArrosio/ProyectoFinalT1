<?php

namespace App\Http\Controllers\Api\v1;


use Orion\Http\Controllers\Controller;
use App\Models\Ciclo;
use Orion\Concerns\DisableAuthorization;

class CicloController extends Controller
{
    protected $model = Ciclo::class;
}