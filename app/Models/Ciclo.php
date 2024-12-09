<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ciclo extends Model
{
    protected $fillable = [
        'fecha_inicio',
        'fecha_fin',
        'terminado',
        'composteras_id'
    ];


    public function bolo(){
        return $this->belongsTo(Bolo::class,'bolos_id');
    }

    public function compostera(){
        return $this->belongsTo(Compostera::class,'composteras_id');
    }

    public function registros(){
        return $this->hasMany(Registro::class,'ciclos_id');

    }
}
