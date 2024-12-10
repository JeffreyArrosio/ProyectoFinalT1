<?php

namespace Database\Factories;

use App\Models\Centro;
use Illuminate\Database\Eloquent\Factories\Factory;

class CentroFactory extends Factory
{
    protected $model = Centro::class;

    public function definition(): array
    {
        return [
            'codigo' => fake()->unique()->randomNumber(5),
            'nombre' => fake()->company(),
            'direccion' => fake()->address(),
            'logotipo' => fake()->url(),
            'responsable' => fake()->name()
        ];
    }
}
