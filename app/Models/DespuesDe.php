<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DespuesDe extends Model
{
    protected $fillable = [
        'registros_id',
        'nivel_llenado_final',
        'fotografias_finales',
        'observaciones_finales'
    ];

    public function myRegistro(){
        return $this->belongsTo(Registro::class);
    }
}
