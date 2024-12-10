<?php

namespace App\Http\Controllers;

use App\Models\Bolo;
use App\Models\Ciclo;
use Illuminate\Http\Request;


class BoloController extends Controller
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
        // if ($request->has('nuevobolo')) {
        //     $bolo = new Bolo();
        //     if($request->has('fecha_inicio')) {
        //         $bolos->fecha_inicio = $request->input('fecha_inicio');
        //     }else{
        //         $bolos->fecha_inicio = now();
        //     }
        //     $bolo->save();

        //     $ciclo = new Ciclo();
        //     $ciclo->bolo_id = $bolo->id;
        //     $ciclo->composteras_id = 1;

        //     $ciclo->save();

        //     return response()->json($bolos);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Bolo $bolo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Bolo $bolo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Bolo $bolo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Bolo $bolo)
    {
        //
    }
}
