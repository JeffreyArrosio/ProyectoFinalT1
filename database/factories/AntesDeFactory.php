<?php

namespace Database\Factories;

use App\Models\AntesDe;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\AntesDe>
 */
class AntesDeFactory extends Factory
{
    protected $model = AntesDe::class;

    public function definition(): array
    {
        return [
            'temperatura_ambiental'=>fake()->numberBetween(10, 40),
            'temperatura_compostera'=>fake()->numberBetween(10, 70),
            'nivel_llenado_inicial'=>fake()->numberBetween(10, 40),
            'olor'=>fake()->text(fake()->numberBetween(50, 200)),  
            'presencia_insectos'=>fake()->randomElement([ 'Si', 'No']),
            'humedad'=>fake()->randomElement(['Exceso', 'Buena', 'Defecto']),
            'fotografias_iniciales'=>fake()->url(),
            'observaciones_iniciales'=>fake()->text(fake()->numberBetween(50, 200)),
        ];
    }
}
 