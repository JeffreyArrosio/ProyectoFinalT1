<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AntesDe extends Model
{
    use HasFactory;
    protected $fillable = [
        'registros_id',
        'temperatura_ambiental',
        'temperatura_compostera',
        'nivel_llenado_inicial',
        'olor',
        'presencia_insectos',
        'humedad',
        'fotografias_iniciales',
        'observaciones_iniciales'
    ];



    public function registro(): BelongsTo
    {
        return $this->belongsTo(Registro::class, 'registros_id', 'id');
    }
}
 