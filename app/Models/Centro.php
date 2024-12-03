<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Centro extends Model
{
    public function myUsers(){
        return $this->hasMany(User::class);
    }

    public function myComposteras(){
        return $this->hasMany(Compostera::class);
    }

    public function users(){
        return $this->hasMany(User::class,'centros_id');
    }

    public function composteras(){
        return $this->hasMany(Compostera::class,'centros_id');
    }

}
