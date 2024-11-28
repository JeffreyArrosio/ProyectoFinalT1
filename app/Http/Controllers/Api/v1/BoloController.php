<?php

namespace App\Http\Controllers\Api\v1;


use Orion\Http\Controllers\Controller;
use App\Models\Bolo;
use Orion\Concerns\DisableAuthorization;

class BoloController extends Controller
{
    use DisableAuthorization;
    protected $model = Bolo::class;
}
