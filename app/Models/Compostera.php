<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Compostera extends Model
{
    //
    public function myRegistros(){
        return $this->hasMany(Registro::class);
    }

    public function myCentro(){
        return $this->belongsTo(Centro::class);
    }
}

