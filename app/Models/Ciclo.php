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

    public function myBolo(){
        return $this->belongsTo(Bolo::class);
    }

    public function myRegistros(){
        return $this->hasMany(Registro::class);
    }
}
