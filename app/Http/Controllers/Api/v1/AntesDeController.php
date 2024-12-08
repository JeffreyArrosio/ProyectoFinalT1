<?php

namespace App\Http\Controllers\Api\v1;


use Orion\Http\Controllers\Controller;
use App\Models\AntesDe;
use Orion\Concerns\DisableAuthorization;

class AntesDeController extends Controller
{
    
    protected $model = AntesDe::class;
}
