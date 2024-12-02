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
 
    public function ciclo(): BelongsTo
    {
        return $this->belongsTo(Ciclo::class, 'ciclos_id', 'id');
    }

    public function compostera(): BelongsTo
    {
        return $this->belongsTo(Compostera::class, 'composteras_id', 'id');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'users_id', 'id');
    }
    
    public function antesDe(): HasMany
    {
        return $this->hasMany(AntesDe::class);
    }

    public function durante(): HasMany
    {
        return $this->hasMany(Durante::class);
    }

    public function despuesDe(): HasMany
    {
        return $this->hasMany(DespuesDe::class);
    }



}
