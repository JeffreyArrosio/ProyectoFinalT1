<?php

namespace App\Http\Controllers\Api\v1;



use App\Models\AntesDe;
use Orion\Concerns\DisableAuthorization;
use Orion\Http\Controllers\RelationController;

class AntesDeRegistroController extends RelationController
{
    use DisableAuthorization;
    protected $model = AntesDe::class;
    protected $relation = 'registro';
}
