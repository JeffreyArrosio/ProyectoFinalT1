<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
class Ciclo extends Model
{

    use HasFactory;

    protected $fillable = [
        'fecha_inicio',
        'fecha_fin',
        'terminado',
        'composteras_id'
    ];

        return $this->belongsTo(Bolo::class,'bolos_id');
    }

    public function compostera(){
        return $this->belongsTo(Compostera::class,'composteras_id');
    }

    public function registros(){
        return $this->hasMany(Registro::class,'ciclos_id');
    }

}
