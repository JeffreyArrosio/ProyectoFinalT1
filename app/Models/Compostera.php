<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo; 
class Compostera extends Model
{
    use HasFactory;
    protected $fillable = [
        'QR',
        'tipo',
    ];

 
    public function registro(): HasMany
    {
        return $this->hasMany(Registro::class);
    }

    public function centro(): BelongsTo
    {
        return $this->belongsTo(Centro::class, 'centros_id', 'id');
    }
}
 