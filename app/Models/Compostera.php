<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo; 
class Compostera extends Model
{
    public function registros(){
        return $this->hasMany(Registro::class,'composteras_id');
    }

    public function centro(){
        return $this->belongsTo(Centro::class,'centros_id');

    }
}
 