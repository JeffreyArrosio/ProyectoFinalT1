<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bolo extends Model
{
    protected $fillable = [
        'fecha_inicio',
        'fecha_fin',
        'terminado'
    ];

    public function myCiclos(){
        return $this->hasMany(Ciclo::class);
    }

}
