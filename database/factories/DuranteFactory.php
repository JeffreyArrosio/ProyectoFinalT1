<?php

namespace Database\Factories;

use App\Models\Durante;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Durante>
 */
class DuranteFactory extends Factory
{
    protected $model = Durante::class;
    public function definition(): array
    {
        return [
            'riego'=>fake()->randomElement(['si','no']),
            'revolver'=>fake()->randomElement(['si','no']),
            'aporte_verde'=>fake()->numberBetween(1, 10),
            'tipo_aporte_verde'=>fake()->text(fake()->numberBetween(5, 200)),
            'aporte_seco'=>fake()->numberBetween(1, 10),
            'tipo_aporte_seco'=>fake()->text(fake()->numberBetween(5, 200)),
            'fotografias_durante'=>fake()->url(),
            'observaciones_durante'=>fake()->numberBetween(50, 200)
        ];
    }
}
