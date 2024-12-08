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


    public function ciclos(){
        return $this->hasMany(Ciclo::class,'bolos_id');
    }

}
