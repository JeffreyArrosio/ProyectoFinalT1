<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Durante extends Model
{
    protected $fillable = [
        'registros_id',
        'riego',
        'revolver',
        'aporte_verde',
        'tipo_aporte_verde',
        'aporte_seco',
        'tipo_aporte_seco',
        'fotografias_durante',
        'observaciones_durante'
    ];

    public function registro(){
        return $this->belongsTo(Registro::class,'registros_id');
    }
}
