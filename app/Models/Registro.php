<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
class Registro extends Model
{
    use HasFactory;

    protected $fillable = [
        'fecha_hora',
        'inicio_ciclo',
        'users_id',
        'composteras_id',
        'ciclos_id'
    ];


    public function antes_registros(){
        return $this->hasMany(AntesDe::class,'registros_id');
    }
    public function durante_registros(){
        return $this->hasMany(Durante::class,'registros_id');
    }
    public function despues_registros(){
        return $this->hasMany(DespuesDe::class,'registros_id');
    }


    public function user(){
        return $this->belongsTo(User::class,'centros_id');
    }

    public function compostera(){
        return $this->belongsTo(Compostera::class,'composteras_id');
    }

    public function ciclo(){
        return $this->belongsTo(Ciclo::class,'ciclos_id');

    }

}
