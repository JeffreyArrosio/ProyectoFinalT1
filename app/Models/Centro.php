<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Centro extends Model
{

    public function users(){
        return $this->hasMany(User::class,'centros_id');
    }

    public function composteras(){
        return $this->hasMany(Compostera::class,'centros_id');
    }

}
