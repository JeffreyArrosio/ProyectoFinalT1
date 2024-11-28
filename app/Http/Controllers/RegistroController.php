<?php

namespace App\Http\Controllers;

use App\Models\Registro;
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
        $registro->fecha_hora = now();
        $registro->inicio_ciclo = false;
        $registro->users_id = $request->user;
        $registro->composteras_id = $request->compostera;
        $registro->ciclos_id = 1;
        $registro->save();
        return back();

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
