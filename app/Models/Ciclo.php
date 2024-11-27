<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ciclo extends Model
{
    protected $fillable = [
        'fecha_inicio',
        'fecha_fin',
        'terminado'
    ];
}
