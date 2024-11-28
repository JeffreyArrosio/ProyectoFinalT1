<?php

namespace App\Http\Controllers;

use App\Models\AntesDe;
use App\Models\Registro;
use App\Models\DespuesDe;
use App\Models\Durante;
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
    public function store(Request $request)
    {
        $registro = new Registro();
        $antes = new AntesDe();
        $durante = new Durante();
        $despues = new DespuesDe();

        $registro->fecha_hora = now();
        $registro->inicio_ciclo = false;
        $registro->users_id = $request->user;
        $registro->composteras_id = $request->compostera;
        $registro->ciclos_id = 1;
        $registro->save();

        $antes->registro_id = $registro->id;
        $antes->temperatura_ambiental = $request->temperatura_ambiental;
        $antes->temperatura_compostera = $request->temperatura_compostera;
        $antes->nivel_llenado_inicial = $request->nivel_llenado_inicial;
        $antes->olor = $request->olor;
        $antes->presencia_insectos = $request->presencia_insectos;
        $antes->humedad = $request->humedad;
        if ($request->fotografias_iniciales) {
            $antes->fotografias_iniciales->$request->fotografias_iniciales;
        }
        $antes->observaciones_iniciales = $request->observaciones_iniciales;

        $durante->registro_id = $registro->id;
        $durante->riego = $request->riego;
        $durante->revolver = $request->revolver;
        $durante->aporte_verde = $request->aporte_verde;
        $durante->tipo_aporte_verde = $request->tipo_aporte_verde;
        $durante->aporte_seco = $request->aporte_seco;
        $durante->tipo_aporte_seco = $request->tipo_aporte_seco;
        if ($request->fotografias_durante) {
            $durante->fotografias_durante = $request->fotografias_durante;
        }
        $durante->observaciones_durante = $request->observaciones_durante;


        $despues->registro_id = $registro->id;
        $despues->nivel_llenado_final = $request->nivel_llenado_final;
        if ($request->fotografias_finales) {
            $despues->fotografias_finales = $request->fotografias_finales;
        }
        $despues->observaciones_finales = $request->observaciones_finales;

        $antes->save();
        $durante->save();
        $despues->save();

        return view('/dashboard');

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

    public function addAntes(Request $request) {}

    public function addDurante(Request $request) {}

    public function addDespues(Request $request) {}

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
