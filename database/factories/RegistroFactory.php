<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Registro;



class RegistroFactory extends Factory
{
    protected $model = Registro::class;
    
    public function definition(): array
    {
        return [
            'fecha_hora'=>fake()->dateTime(),
            'inicio_ciclo' => fake()->boolean(),
            // 'users_id',
            // 'composteras_id',
            // 'ciclos_id'
        ];
    }
}