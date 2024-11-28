<?php

namespace App\Http\Controllers\Api\v1;


use Orion\Http\Controllers\Controller;
use App\Models\AntesDe;
use Orion\Concerns\DisableAuthorization;

class AntesDeController extends Controller
{
    use DisableAuthorization;
    protected $model = AntesDe::class;
}
