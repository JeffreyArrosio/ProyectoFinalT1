<?php

namespace App\Http\Controllers\Api\v1;


use Orion\Http\Controllers\Controller;
use App\Models\Bolo;
use App\Models\Ciclo;
use Orion\Concerns\DisableAuthorization;
use Illuminate\Http\Request;

class BoloController extends Controller
{
    use DisableAuthorization;
    protected $model = Bolo::class;

    public function index(Request $request)
    {
        if ($request->has('terminados')) {
            $bolos = Bolo::where('terminado', 1)->get();
            return response()->json($bolos);
        }else if($request->has('compostando')){
            $bolos = Bolo::where('terminado', 0)->get();
            return response()->json($bolos);
        }else if($request->has('ciclos')){
            $bolos = Bolo::where('terminado', 0)->with('ciclos')->get();
            return response()->json($bolos);
        } else if ($request->has('registros')) {
            $bolos = Bolo::with('ciclos.registros.antes_registros', 'ciclos.registros.durante_registros', 'ciclos.registros.despues_registros')->get();
            return response()->json($bolos);
        }else{
            $bolos = Bolo::getAll();
            return response()->json($bolos);
        }
    }

    public function store(Request $request)
    {
        if ($request->has('nuevobolo')) {

            if(!Ciclo::where('terminado', 0 )->where('composteras_id', 1)->exists()){
                $bolo = new Bolo();
            $timeNow = now();
            if($request->has('fecha_inicio')) {
                $bolo->fecha_inicio = $request->input('fecha_inicio');
            }else{
                $bolo->fecha_inicio =$timeNow;
            }
            $bolo->save();

            $ciclo = new Ciclo();
            $ciclo->bolos_id = $bolo->id;
            $ciclo->fecha_inicio = $timeNow;
            $ciclo->composteras_id = 1;

            $ciclo->save();

            return response()->json($ciclo);
            }else{
                return response()->json(['message' => 'La compostera esta ocupada']);
            }
        }
    }


}
