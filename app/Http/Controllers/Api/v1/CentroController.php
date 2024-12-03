<?php

namespace App\Http\Controllers\Api\v1;


use Orion\Http\Controllers\Controller;
use App\Models\Centro;
use Orion\Concerns\DisableAuthorization;

class CentroController extends Controller
{
    use DisableAuthorization;
    protected $model = Centro::class;
}