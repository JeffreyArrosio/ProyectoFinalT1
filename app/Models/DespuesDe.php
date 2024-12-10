<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
class DespuesDe extends Model
{
    use HasFactory;

    protected $fillable = [
        'registros_id',
        'nivel_llenado_final',
        'fotografias_finales',
        'observaciones_finales'
    ];


    public function registro(){
        return $this->belongsTo(Registro::class,'registros_id');

    }
}
