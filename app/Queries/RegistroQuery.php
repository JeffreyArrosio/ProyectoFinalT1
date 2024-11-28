<?php

namespace App\Queries;

use App\Models\Registro;
use App\Models\AntesDe;
use App\Models\Durante;
use App\Models\DespuesDe;
use Illuminate\Http\Request;
use App\Http\Requests\RegistroForm;


class RegistroQuery
{
    public function setAntes(Registro $registro, RegistroForm $request)
    {
        $antes = new AntesDe();
        $antes->registros_id = $registro->id;
        $antes->temperatura_ambiental = $request->temperatura_ambiental;
        $antes->temperatura_compostera = $request->temperatura_compostera;
        $antes->nivel_llenado_inicial = $request->nivel_llenado_inicial;
        $antes->olor = $request->olor;
        if ($request->presencia_insectos != 'No anotado') $antes->presencia_insectos = $request->presencia_insectos;
        if ($request->humedad != 'No anotado') $antes->humedad = $request->humedad;
        if ($request->fotografias_iniciales) $antes->fotografias_iniciales->$request->fotografias_iniciales;
        $antes->observaciones_iniciales = $request->observaciones_iniciales;
        return $antes;
    }

    public function setDurante(Registro $registro, RegistroForm $request)
    {
        $durante = new Durante();
        $durante->registros_id = $registro->id;
        if ($request->riego != 'No anotado') $durante->riego = $request->riego;
        if ($request->revolver != 'No anotado') $durante->revolver = $request->revolver;
        $durante->aporte_verde = $request->aporte_verde;
        $durante->tipo_aporte_verde = $request->tipo_aporte_verde;
        $durante->aporte_seco = $request->aporte_seco;
        $durante->tipo_aporte_seco = $request->tipo_aporte_seco;
        if ($request->fotografias_durante) $durante->fotografias_durante = $request->fotografias_durante;
        $durante->observaciones_durante = $request->observaciones_durante;
        return $durante;
    }

    public function setDespues(Registro $registro, RegistroForm $request)
    {
        $despues = new DespuesDe();
        $despues->registros_id = $registro->id;
        $despues->nivel_llenado_final = $request->nivel_llenado_final;
        if ($request->fotografias_finales) $despues->fotografias_finales = $request->fotografias_finales;
        $despues->observaciones_finales = $request->observaciones_finales;
        return $despues;
    }
}
