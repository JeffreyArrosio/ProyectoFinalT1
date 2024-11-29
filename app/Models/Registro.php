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

    public function myAntes(){
        return $this->hasMany(AntesDe::class);
    }
    public function myDurantes(){
        return $this->hasMany(Durante::class);
    }
    public function myDespues(){
        return $this->hasMany(DespuesDe::class);
    }

    public function myUser(){
        return $this->belongsTo(User::class);
    }

    public function myCompostera(){
        return $this->belongsTo(Compostera::class);
    }

    public function myCiclo(){
        return $this->belongsTo(Ciclo::class);
    }
}
