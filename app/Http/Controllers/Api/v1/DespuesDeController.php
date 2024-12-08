<?php

namespace App\Http\Controllers\Api\v1;


use Orion\Http\Controllers\Controller;
use App\Models\DespuesDe;
use Orion\Concerns\DisableAuthorization;

class DespuesDeController extends Controller
{

    protected $model = DespuesDe::class;
}
