<?php

namespace App\Http\Controllers;

use App\Models\Registro;
use App\Models\Bolo;
use App\Models\Ciclo;
use App\Models\Compostera;
use App\Queries\RegistroQuery;
use App\Http\Requests\RegistroRequest;
use Illuminate\Http\Request;

class RegistroController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RegistroRequest $request)
    {
        $data = $request->validated();
        // dd($data);
        $registro = new Registro();

        if ($request->has('inicio_ciclo')) {
            $registro->inicio_ciclo = true;
            $ciclo = new Ciclo();
            if (Compostera::where('id', $data['compostera'])
                ->where('tipo', '11')
                ->exists()
            ) {
                $bolo = new Bolo();
                $bolo->fecha_inicio = $data['date'];
                $bolo->save();

                $ciclo->fecha_inicio = $data['date'];
                $ciclo->bolos_id = $bolo->id;
                $ciclo->composteras_id = $data['compostera'];
            } else if (Compostera::where('id', $data['compostera'])
                ->where('tipo', '22')
                ->exists()
            ) {
                $ciclo->fecha_inicio = $data['date'];
                $composteraAnterior = Compostera::where('id', $data['compostera'] - 1)
                    ->where('tipo', '11')->value('id');
                $cicloActual = Ciclo::where('composteras_id', $composteraAnterior)
                    ->where('terminado', 1)->orderBy('id', 'desc')->value('id');
                $ciclo->bolos_id = Bolo::where('ciclos_id', $cicloActual)->value('id');
                $ciclo->composteras_id = $data['compostera'];
            } else {
                $ciclo->fecha_inicio = $data['date'];
                $composteraAnterior = Compostera::where('id', $data['compostera'] - 1)
                    ->where('tipo', '22')->value('id');
                $cicloActual = Ciclo::where('composteras_id', $composteraAnterior)
                    ->where('terminado', 1)->orderBy('id', 'desc')->value('id');
                $ciclo->bolos_id = Bolo::where('ciclos_id', $cicloActual)->value('id');
                $ciclo->composteras_id = $data['compostera'];
            }
            $ciclo->save();
            $registro->ciclos_id = $ciclo->id;
        } else {
            $registro->inicio_ciclo = false;
            $registro->ciclos_id = Ciclo::where('composteras_id', $data['compostera'])->where('terminado', 0)->value('id');
        }
        $registro->fecha_hora = $data['date'];
        $registro->users_id = $data['user'];
        $registro->composteras_id = $data['compostera'];
        $registro->save();

        $antes = (new RegistroQuery())->setAntes($registro, $request);
        $durante = (new RegistroQuery())->setDurante($registro, $request);
        $despues = (new RegistroQuery())->setDespues($registro, $request);

        $antes->save();
        $durante->save();
        $despues->save();

        return view('/welcome');

        // $request->merge([
        //     'fecha_hora' => now(),
        //     'inicio_ciclo' => false,
        //     'users_id' => $request->user,
        //     'composteras_id' => $request->compostera,
        //     'ciclos_id' => 1
        // ]);
        // Registro::create($request->all());
        // return back();

    }
    /**
     * Display the specified resource.
     */
    public function show(Registro $registro)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Registro $registro)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Registro $registro)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Registro $registro)
    {
        //
    }
}
