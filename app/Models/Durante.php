<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
class Durante extends Model
{

    use HasFactory;
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
    public function registro(): BelongsTo
    {
        return $this->belongsTo(Registro::class, 'registros_id', 'id');
    }
}
