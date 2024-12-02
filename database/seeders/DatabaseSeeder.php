<?php

namespace Database\Seeders;
use App\Models\Centro;
use App\Models\Registro;
use App\Models\AntesDe;
use App\Models\Durante;
use App\Models\DespuesDe;
use App\Models\Compostera;
use App\Models\Bolo;
use App\Models\Ciclo;
use App\Models\User;

use Illuminate\Support\Facades\DB;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;


use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */


    public function run(): void
    {
        $composterasBolos = [1,0,0];


            // 1.[Bolo],[],[] = [1,0,0]
            // 2.[Bolo],[Bolo],[]
            // 3.[Bolo],[Bolo],[Bolo]
            // 4.[],[Bolo],[Bolo]
            // 5.[],[],[Bolo]

        $primerCentro = Centro::factory()->create([
            'codigo' => 35003630,
            'nombre' => 'San Diego De Alacala',
            'direccion' => 'Primero de Mayo',
            'logotipo' => 'https://example.com/logo1.png',
            'responsable' => 'director',
        ]);

        User::factory()->create([
            'name' => 'Guille',
            'email' => 'email@gmail.com',
            'password' => bcrypt('0145'),
            'admin' => 1,
            'centros_id' => $primerCentro->id
        ]);

        $centros = Centro::factory()->count(3)->create();

        foreach ($centros as $centro) {
            $users = User::factory()->count(4)->create([
                'centros_id' => $centro->id
            ]);

        $composteras = [];

            foreach (['11', '22', '33'] as $tipo) {
                $composteras[] = Compostera::factory()->create([
                    'tipo' => $tipo,
                    'centros_id' => $centro->id
                ]);
            }
            $composteras = collect($composteras);

        $bolos = Bolo::factory()->count(4)->create(['terminado'=>1]);


// BOLOS TERMINADOS
        foreach ($bolos->take(3) as $bolo) {

            $ciclos = Ciclo::factory(3)->create([
                'bolos_id' => $bolo->id,
            ]);

            foreach ($ciclos as $ciclo) {
                $registros = Registro::factory(3)->create([
                    'ciclos_id' => $ciclo->id,
                    'users_id' => $users->random()->id,
                    'composteras_id' => $composteras->random()->id,
                ]);

                foreach ($registros as $registro) {
                    AntesDe::factory()->create([
                        'registros_id' => $registro->id,
                    ]);

                    Durante::factory()->create([
                        'registros_id' => $registro->id,
                    ]);

                    DespuesDe::factory()->create([
                        'registros_id' => $registro->id,
                    ]);
                }
            }
        }



            // 1.[Bolo],[],[]
            // 2.[Bolo],[Bolo],[]
            // 3.[Bolo],[Bolo],[Bolo]
            // 4.[],[Bolo],[Bolo]
            // 5.[],[],[Bolo]


            if($composterasBolos[0] == 1){

// COMPOSTERA UNO OCUPADA
            $boloComposteraUno = Bolo::factory()->create([
                'fecha_inicio' => '2023-01-01',
                'fecha_fin' => null,
                'terminado' => 0
            ]);

            $ciclosComposteraUno = Ciclo::factory()->create([
                'bolos_id' => $boloComposteraUno->id,
            ]);

            $fechas=['2023-01-01', '2023-01-15', '2023-01-30'];

            foreach ($fechas as $fecha) {
                $ciclo = Ciclo::factory()->create([
                    'bolos_id' => $boloComposteraUno->id,
                    'fecha_inicio' => $fecha,
                    'fecha_fin' => null,
                ]);

                $registros = Registro::factory(3)->create([
                    'ciclos_id' => $ciclo->id,
                    'users_id' => $users->random()->id,
                    'composteras_id' => $composteras->random()->id,
                ]);

                foreach ($registros as $registro) {
                    AntesDe::factory()->create([
                        'registros_id' => $registro->id,
                    ]);

                    Durante::factory()->create([
                        'registros_id' => $registro->id,
                    ]);

                    DespuesDe::factory()->create([
                        'registros_id' => $registro->id,
                    ]);
                }


            }

// CREA BOLOS RANDOM
        // foreach ($bolos as $bolo) {
        //     $ciclos = Ciclo::factory(3)->create([
        //         'bolos_id' => $bolo->id,
        //     ]);

        //     foreach ($ciclos as $ciclo) {
        //         $registros = Registro::factory(3)->create([
        //             'ciclos_id' => $ciclo->id,
        //             'users_id' => $users->random()->id,
        //             'composteras_id' => $composteras->random()->id,
        //         ]);

        //         foreach ($registros as $registro) {
        //             AntesDe::factory()->create([
        //                 'registros_id' => $registro->id,
        //             ]);

        //             Durante::factory()->create([
        //                 'registros_id' => $registro->id,
        //             ]);

        //             DespuesDe::factory()->create([
        //                 'registros_id' => $registro->id,
        //             ]);
        //         }
        //     }
        // }




    }
    }
}
}
