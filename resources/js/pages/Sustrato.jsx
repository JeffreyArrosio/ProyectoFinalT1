import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../DataContext';
import { useFetch } from '../utils/useFetch';


export default function Sustrato() {
    const params = useParams();
    const { data, setData } = useContext(DataContext);


    // console.log(data.bolos.find(item => item.id === parseInt(params.code)));

    const bolo = data.bolos.find(item => item.id === parseInt(params.code));
    console.log(bolo);


    return (
        <div className="min-h-screen bg-green-100 flex items-center justify-center ">
            <div className="p-4 space-y-4 w-full mt-16  ">
                <div className="bg-white border border-green-300 rounded-lg p-4 shadow-sm flex justify-between w-full">
                    <div className="text-green-600 text-center">
                        <p>Sustrato {bolo.id}</p>
                    </div>
                    <div className="text-green-600 flex-col items-center justify-center">
                        <p>Fecha Inicio: {bolo.fecha_inicio}</p>
                        <p>Fecha Fin: {bolo.fecha_fin}</p>
                    </div>
                    <div className="text-green-600 text-center">
                        <p>Terminado: {bolo.terminado ? 'Sí' : 'No'}</p>
                    </div>
                </div>

                {/* Ciclos */}
                {bolo.ciclos.map((ciclo) => (
                    <div key={ciclo.id} className="bg-white border border-green-300 rounded-lg p-4 shadow-sm w-full">
                        <div className="text-green-600 mb-4">
                            <p>Ciclo {ciclo.id}</p>
                            <p>Fecha Inicio: {ciclo.fecha_inicio}</p>
                            <p>Fecha Fin: {ciclo.fecha_fin}</p>
                            <p>Terminado: {ciclo.terminado ? 'Sí' : 'No'}</p>
                        </div>

                        {/* Registros de cada Ciclo */}
                        {ciclo.registros.map((registro) => (
                            <div key={registro.id} className="bg-green-50 border border-green-200 rounded-lg p-3 mb-2">
                                <div className="text-green-700">
                                    <p>Registro ID: {registro.id}</p>
                                    <p>Fecha y Hora: {registro.fecha_hora}</p>
                                    <p>Inicio de Ciclo: {registro.inicio_ciclo ? 'Sí' : 'No'}</p>
                                    <p>Usuario ID: {registro.users_id}</p>

                                    {/* Antes Registros */}
                                    {registro.antes_registros && registro.antes_registros.map((antes) => (
                                        <div key={antes.id} className="mt-2 bg-white p-2 rounded">
                                            <p className="font-bold">Antes del Registro:</p>
                                            <p>Temperatura Ambiental: {antes.temperatura_ambiental}°C</p>
                                            <p>Temperatura Compostera: {antes.temperatura_compostera}°C</p>
                                            <p>Nivel Llenado Inicial: {antes.nivel_llenado_inicial}%</p>
                                            <p>Olor: {antes.olor}</p>
                                            <p>Presencia Insectos: {antes.presencia_insectos}</p>
                                            <p>Humedad: {antes.humedad}</p>
                                        </div>
                                    ))}

                                    {/* Durante Registros */}
                                    {registro.durante_registros && registro.durante_registros.map((durante) => (
                                        <div key={durante.id} className="mt-2 bg-white p-2 rounded">
                                            <p className="font-bold">Durante el Registro:</p>
                                            <p>Riego: {durante.riego}</p>
                                            <p>Revolver: {durante.revolver}</p>
                                            <p>Aporte Verde: {durante.aporte_verde}</p>
                                            <p>Tipo Aporte Verde: {durante.tipo_aporte_verde}</p>
                                            <p>Aporte Seco: {durante.aporte_seco}</p>
                                            <p>Tipo Aporte Seco: {durante.tipo_aporte_seco}</p>
                                        </div>
                                    ))}

                                    {/* Después Registros */}
                                    {registro.despues_registros && registro.despues_registros.map((despues) => (
                                        <div key={despues.id} className="mt-2 bg-white p-2 rounded">
                                            <p className="font-bold">Después del Registro:</p>
                                            <p>Nivel Llenado Final: {despues.nivel_llenado_final}%</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
