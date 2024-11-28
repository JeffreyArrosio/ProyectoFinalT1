<?php

namespace App\Http\Requests;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Http\FormRequest;



class RegistroForm extends FormRequest
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
    public function rules(): array
    {
        return [
            'temperatura_ambiental' => 'nullable|integer|between:1,100',
            'temperatura_compostera' => 'nullable|integer|between:1,100',
            'nivel_llenado_inicial' => 'nullable|numeric|between:0,100',
            'olor' => 'nullable|string|max:50',
            'humedad' => 'nullable|numeric|between:0,100',
            'fotografias_iniciales' => ['nullable','file','image','max:200'],
            'observaciones_iniciales' => 'nullable|string|max:1000',
            'aporte_verde' => 'nullable|integer|between:0,1000',
            'tipo_aporte_verde' => 'nullable|string|max:255',
            'aporte_seco' => 'nullable|integer|between:0,1000',
            'tipo_aporte_seco' => 'nullable|string|max:255',
            'fotografias_durante' => ['nullable','file','image','max:200'],
            'observaciones_durante' => 'nullable|string|max:1000',
            'nivel_llenado_final' => 'nullable|integer|between:1,100',
            'fotografias_finales' => ['nullable','file','image','max:200'],
            'observaciones_finales' => 'nullable|string|max:1000',
        ];
    }
}
