<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Relations\HasMany;


class Bolo extends Model
{

    use HasFactory;
    protected $fillable = [
        'fecha_inicio',
        'fecha_fin',
        'terminado'
    ];

    public function ciclos(){
        return $this->hasMany(Ciclo::class,'bolos_id');
    }
}
