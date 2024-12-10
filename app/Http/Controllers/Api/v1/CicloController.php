<?php

namespace App\Http\Controllers\Api\v1;


use Orion\Http\Controllers\Controller;
use App\Models\Ciclo;
use App\Models\Bolo;
use Orion\Concerns\DisableAuthorization;
use Illuminate\Http\Request;


class CicloController extends Controller
{
    use DisableAuthorization;
    protected $model = Ciclo::class;

    public function index(Request $request)
    {
        if ($request->has('composteras')) {
            $ciclosEnComposteras = Ciclo::where('terminado', 0)->with('compostera')->get();
            return response()->json($ciclosEnComposteras);
        }
    }

    public function update(Request $request, ...$args)
    {
        if ($request->has('terminarciclo')) {

            $ciclo = Ciclo::find($args[0]);

            $fechaFin = now();
            if($request->has('fecha_fin')) {
                $fechaFin = $request->input('fecha_fin');
            }


            if($ciclo->composteras_id == 1){

                if(!Ciclo::where('terminado', 0 )->where('composteras_id', 2)->exists()){

                    $ciclo->terminado = 1;
                    $ciclo->fecha_fin = $fechaFin;
                    $ciclo->update();

                    $nuevoCiclo = new Ciclo();
                    $nuevoCiclo->bolos_id = $ciclo->bolos_id;
                    $nuevoCiclo->fecha_inicio = $fechaFin;
                    $nuevoCiclo->composteras_id = 2;

                    $nuevoCiclo->save();
                    return response()->json($ciclo);
                }else{
                    return response()->json(['message' => 'La compostera esta ocupada']);
                }

            }else
             if($ciclo->composteras_id == 2)  {
                if(!Ciclo::where('terminado', 0 )->where('composteras_id', 3)->exists()){

                    $ciclo->terminado = 1;
                    $ciclo->fecha_fin = $fechaFin;
                    $ciclo->update();

                    $nuevoCiclo = new Ciclo();
                    $nuevoCiclo->bolos_id = $ciclo->bolos_id;
                    $nuevoCiclo->fecha_inicio = $fechaFin;
                    $nuevoCiclo->composteras_id = 3;

                    $nuevoCiclo->save();
                    return response()->json($ciclo);
                    }else{
                        return response()->json(['message' => 'La compostera esta ocupada']);
                    }
            }else
            if($ciclo->composteras_id == 3)  {
                    $ciclo->terminado = 1;
                    $ciclo->fecha_fin = $fechaFin;
                    $ciclo->update();

                    $bolo = Bolo::find($ciclo->bolos_id);

                    $bolo->fecha_fin = $fechaFin;
                    $bolo->terminado = 1;

                    $bolo->update();

                    return response()->json(['message' => 'Se ha finalizado el ciclo y el bolo']);
            }



            return response()->json(['message' => 'No se hizo nada']);
        }  else if($request->has('descartarbolo'))  {

            $ciclo = Ciclo::find($args[0]);
            $ciclo->terminado = 1;
            $ciclo->update();
            return response()->json($ciclo);

            $bolo = Bolo::find($ciclo->bolos_id);
            $bolo->terminado = 1;
            $bolo->update();

            return response()->json(['message' => 'Descartar Bolo']);
         }
    }

}
