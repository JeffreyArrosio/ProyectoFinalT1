<?php

namespace App\Http\Requests;
use Illuminate\Support\Facades\Auth;
use Orion\Http\Requests\Request;



class RegistroRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function storeRules(): array
    {
        return [
            'user' => 'integer',
            'compostera' => 'integer',
            'temperatura_ambiental' => 'nullable|integer|between:1,100',
            'temperatura_compostera' => 'nullable|integer|between:1,100',
            'nivel_llenado_inicial' => 'nullable|numeric|between:0,100',
            'olor' => 'nullable|string|max:50',
            'fotografias_iniciales' => ['file','image','max:200'],
            'observaciones_iniciales' => 'nullable|string|max:1000',
            'aporte_verde' => 'nullable|integer|between:0,1000',
            'tipo_aporte_verde' => 'nullable|string|max:255',
            'aporte_seco' => 'nullable|integer|between:0,1000',
            'tipo_aporte_seco' => 'nullable|string|max:255',
            'fotografias_durante' => ['file','image','max:200'],
            'observaciones_durante' => 'nullable|string|max:1000',
            'nivel_llenado_final' => 'nullable|numeric|between:1,100',
            'fotografias_finales' => ['file','image','max:200'],
            'observaciones_finales' => 'nullable|string|max:1000',
        ];
    }
}
