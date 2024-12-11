<?php

namespace App\Http\Controllers\Api\v1;


use Orion\Http\Controllers\Controller;
use App\Models\Durante;
use Orion\Concerns\DisableAuthorization;

class DuranteController extends Controller
{
    protected $model = Durante::class;
}
