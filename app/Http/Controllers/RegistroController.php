<?php

namespace App\Http\Controllers;

use App\Models\Registro;
use App\Queries\RegistroQuery;
use App\Http\Requests\RegistroForm;
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
    public function store(RegistroForm $request)
    {
        $data = $request->validated();
        $registro = new Registro();

        $registro->fecha_hora = now();
        $registro->inicio_ciclo = false;
        $registro->users_id = $data->user;
        $registro->composteras_id = $data->compostera;
        $registro->ciclos_id = 1;
        $registro->save();

        $antes = (new RegistroQuery())->setAntes($registro,$data);
        $durante = (new RegistroQuery())->setDurante($registro,$data);
        $despues = (new RegistroQuery())->setDespues($registro,$data);
        
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
