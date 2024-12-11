<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Centro extends Model
{

    use HasFactory;

    protected $fillable = [
        'codigo',
        'nombre',
        'direccion',
        'responsable',
        'logotipo'
    ];


    public function users(){
        return $this->hasMany(User::class,'centros_id');
    }

    public function composteras(){
        return $this->hasMany(Compostera::class,'centros_id');
    }

}

