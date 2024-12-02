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
        'terminado'
    ];


/**
 * Get the user that owns the Ciclo
*
* @return \Illuminate\Database\Eloquent\Relations\BelongsTo
*/
public function bolo(): BelongsTo
    {
        return $this->belongsTo(Bolo::class, 'bolos_id', 'id');
    }

    public function registro(): HasMany
    {
        return $this->hasMany(Registro::class);
    }

}
