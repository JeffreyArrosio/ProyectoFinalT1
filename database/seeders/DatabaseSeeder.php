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
        $numeroDeCentros = 1;


        // Actualizar Informacion Base de datos:         php artisan migrate:fresh --seed

        $composterasCodigos = ['11', '22', '33'];
        $primerCentro = Centro::factory()->create([
            'codigo' => 35003630,
            'nombre' => 'San Diego De Alacala',
            'direccion' => 'Primero de Mayo',
            'logotipo' => 'https://example.com/logo1.png',
            'responsable' => 'director',
        ]);


        User::factory()->create([
            'name' => 'Guille',
            'email' => 'gmail@gmail.com',
            'password' => bcrypt('0145'),
            'admin' => 1,
            'centros_id' => $primerCentro->id
        ]);


        $centros = Centro::factory()->count($numeroDeCentros)->create([
            'nombre' => 'Majada',
        ]);


        User::factory()->create([
            'name' => 'Guille2',
            'email' => 'email2@gmail.com',
            'password' => bcrypt('0145'),
            'admin' => 1,
            'centros_id' => 2,
        ]);


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
            };
            // $composteras = collect($composteras);

        $bolos = Bolo::factory()->count(4)->create(['terminado'=>1]);


// BOLOS TERMINADOS
        foreach ($bolos->take(3) as $indice => $bolo) {

            $ciclos = Ciclo::factory(3)->create([
                'bolos_id' => $bolo->id,
                'composteras_id' => $composteras[$indice]->id,
                'terminado' => 1

            ]);



            foreach ($ciclos as $ciclo) {
                $registros = Registro::factory(3)->create([
                    'ciclos_id' => $ciclo->id,
                    'users_id' => $users->random()->id,
                    'composteras_id' =>  $composteras[$indice]->id
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



    }

    function crearCompostera($fecha,$ciclos){

        $bolo = Bolo::factory()->create([
            'fecha_inicio' => $fecha,
            'fecha_fin' => null,
            'terminado' => 0
        ]);


        $fechaInicioCiclo=$fecha;

        $primerCiclo = true;


        for ($i=0; $i < $ciclos; $i++) {
        $fechaFinDeciclo;
        $fechaFinDeciclo = $i+1==$ciclos ? null : date('Y-m-d', strtotime($fechaInicioCiclo . ' + 30 days'));
        $iniciodeCiclo;

        $tipo;
        if($i==0){
            $tipo = '11';
        } else if($i==1){
            $tipo = '22';
        }else if($i==2){
            $tipo = '33';
        }

        $ciclo=Ciclo::factory()->create([
            'bolos_id' => $bolo->id,
            'composteras_id' => Compostera::where('tipo',$tipo)->first()->id,
            'fecha_inicio' => $fechaInicioCiclo,
            'fecha_fin' => $fechaFinDeciclo,
            'terminado' => 1
        ]);

        if($i==$ciclos-1){
            $ciclo->terminado = 0;
            $ciclo->save();
        }

        $registros = Registro::factory(3)->create([
            'ciclos_id' => $ciclo->id,
            'users_id' => User::all()->random()->id,
            'composteras_id' => Compostera::where('tipo',$tipo)->first()->id,
            'fecha_hora' => $fechaInicioCiclo,
        ]);

        $fechasRegistros = [$fechaInicioCiclo, date('Y-m-d', strtotime($fechaInicioCiclo . ' + 15 days')), date('Y-m-d', strtotime($fechaInicioCiclo . ' + 30 days'))];

        foreach ($registros as $indice => $registro) {
                $registro->fecha_hora = $fechasRegistros[$indice];
                $registro->inicio_ciclo = 0;
                $registro->save();
        };
        if($i==0){
            $registros[0]->inicio_ciclo = 1;
        }

        foreach ($registros as $indice => $registro) {
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
        $fechaInicioCiclo = $fechaFinDeciclo;
        }

    }

    crearCompostera('2023-01-01',3);
    crearCompostera('2023-02-01',2);
    // crearCompostera('2023-03-01',1);

}

}
