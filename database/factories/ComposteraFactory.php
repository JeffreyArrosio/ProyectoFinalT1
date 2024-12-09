<?php

namespace Database\Factories;

use App\Models\Compostera;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Compostera>
 */
class ComposteraFactory extends Factory
{
    protected $model = Compostera::class;

    public function definition(): array
    {
        return [
            'QR'=>fake()->uuid(),
            'tipo'=>fake()->randomElement(['11', '22', '33'])
        ];
    }
}
