<?php

namespace App\Http\Controllers\Api\v1;


use Orion\Http\Controllers\Controller;

use App\Models\Registro;

use App\Models\Ciclo;

use App\Models\AntesDe;
use App\Models\Durante;
use App\Models\DespuesDe;
use App\Queries\RegistroQuery;


use Orion\Concerns\DisableAuthorization;
use Illuminate\Http\Request;


class RegistroController extends Controller
{
    protected $model = Registro::class;

    public function store(Request $request)
    {

        if ($request->has('hacerregistro')) {

            $request->validated([
                'fotografias_iniciales' => ['file','image','max:2048'],
                'fotografias_durante' => ['file','image','max:2048'],
                'fotografias_finales' => ['file','image','max:2048'],
            ]);
            $ciclo = Ciclo::find($request->ciclo_id);
            $registro = new Registro();
            $registro->fecha_hora = $request->fecha;
            $registro->users_id = $request->user; // POR ARREGLAR
            $registro->inicio_ciclo = 0;
            $registro->ciclos_id = $request->ciclo_id;
            $registro->composteras_id = $ciclo->composteras_id;
            $registro->save();

            $antes = (new RegistroQuery())->setAntes($registro, $request);
            $durante = (new RegistroQuery())->setDurante($registro, $request);
            $despues = (new RegistroQuery())->setDespues($registro, $request);

            $antes->save();
            $durante->save();
            $despues->save();


            // $antesDe = new AntesDe();
            // $antesDe->registros_id = $registro->id;
            // $antesDe->temperatura_ambiental = $request->temperatura_ambiental;
            // $antesDe->temperatura_compostera = $request->temperatura_compostera;
            // $antesDe->nivel_llenado_inicial = $request->nivel_llenado_inicial;
            // $antesDe->olor = $request->olor;
            // $antesDe->presencia_insectos = $request->presencia_insectos;
            // $antesDe->presencia_insectos = $request->presencia_insectos;
            // $antesDe->observaciones_iniciales = $request->observaciones_iniciales;
            // $antesDe->save();



            // $durante = new Durante();
            // $durante->registros_id = $registro->id;
            // $durante->riego = $request->riego;
            // $durante->revolver = $request->revolver;
            // $durante->aporte_verde = $request->aporte_verde;
            // $durante->tipo_aporte_verde = $request->tipo_aporte_verde;
            // $durante->aporte_seco = $request->aporte_seco;
            // $durante->tipo_aporte_seco = $request->tipo_aporte_seco;
            // $durante->observaciones_durante = $request->observaciones_durante;

            // $durante->save();



            return response()->json(['message' => 'Crear Registro']);
        }
    }
}
