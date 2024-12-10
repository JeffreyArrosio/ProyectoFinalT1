<?php

namespace App\Http\Controllers\Api\v1;


use Orion\Http\Controllers\Controller;
use App\Models\Compostera;
use Orion\Concerns\DisableAuthorization;

class ComposteraController extends Controller
{
    use DisableAuthorization;
    protected $model = Compostera::class;


}

