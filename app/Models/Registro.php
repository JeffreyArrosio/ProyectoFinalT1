<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Registro extends Model
{
    protected $fillable = [
        'fecha_hora',
        'inicio_ciclo',
        'users_id',
        'composteras_id',
        'ciclos_id'
    ];
}
