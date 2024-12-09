<?php

namespace Database\Factories;

use App\Models\DespuesDe;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\DespuesDe>
 */
class DespuesDeFactory extends Factory
{
    protected $model = DespuesDe::class;

    public function definition(): array
    {
        return [
            // 'registros_id',
            'nivel_llenado_final' => fake()->randomElement([0, 12.5, 25, 50, 75, 100]),
            'fotografias_finales'=>fake()->url(),
            'observaciones_finales'=>fake()->text(fake()->numberBetween(50, 200))
        ];
    }
}
