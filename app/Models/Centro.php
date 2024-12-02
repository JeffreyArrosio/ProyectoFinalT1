<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Centro extends Model
{
    use HasFactory;

    protected $fillable = [
        'codigo',
        'nombre',
        'direccion',
        'responsable',
        'logotipo'
    ];

    public function compostera(): HasMany
    {
        return $this->hasMany(Compostera::class);
    }

    // Add this method if it's not working
    public static function factory()
    {
        return \Database\Factories\CentroFactory::new();
    }
} 