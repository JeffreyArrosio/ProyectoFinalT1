import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { DataContext } from '../DataContext';
import { useFetch } from '../utils/useFetch';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import GraficaTemperaturas from '../components/GraficaTemperaturas ';



export default function Sustrato() {
    const params = useParams();
    const { data, setData } = useContext(DataContext);

    const navigate = useNavigate();



    const handleBack = () => {
        navigate('/estadisticas/sustratos');
    }


    // console.log(data.bolos.find(item => item.id === parseInt(params.code)));

    const bolo = data.bolos.find(item => item.id === parseInt(params.code));
    console.log(bolo);

    let registros = bolo.ciclos.flatMap((ciclo) => {
        return ciclo.registros
    });
    let valores = registros.flatMap((registro) => {
        return {
            fecha_hora: registro.fecha_hora,
            temperatura_ambiental: registro.antes_registros[0].temperatura_ambiental,
            temperatura_compostera: registro.antes_registros[0].temperatura_compostera,
        }
    });


    valores = valores.sort((a, b) => {
        return new Date(a.fecha_hora) - new Date(b.fecha_hora);
    });

    valores = valores.flatMap((registro) => {
        return {
            fecha_hora: registro.fecha_hora.split(' ')[0].split('-').reverse().join('/')
            ,
            temperatura_ambiental: registro.temperatura_ambiental,
            temperatura_compostera: registro.temperatura_compostera,
        }
    })





    return (
        <div className="min-h-screen bg-green-100 flex items-center justify-center mb-16 ">
            <div className="p-4 space-y-4 w-full ">
                <div className="bg-green-600 border border-green-300 rounded-lg p-4 shadow-sm flex justify-around  w-full mb-4  ">
                    <div className="text-white text-center font-bold content-center">
                        <p>Sustrato {bolo.id}</p>
                    </div>
                    <div className="  text-white flex-col items-center justify-center font-bold ">
                        <p>Fecha Inicio: {bolo.fecha_inicio}</p>
                        <p>Fecha Fin: {bolo.fecha_fin}</p>
                    </div>
                    <div className="text-white text-center font-bold content-center">
                        <p>Terminado: {bolo.terminado ? 'Sí' : 'No'}</p>
                    </div>
                </div>

                <div className="border-green-300 rounded-lg p-4 flex justify-around  w-full mb-4  ">
                <GraficaTemperaturas valores={valores}/>
                </div>


                <div className=" bg-green-100 flex items-center justify-center mb-4">
                        <table className="table-auto w-full bg-white rounded-lg shadow-md ">
                            <thead className="bg-green-600 text-white">
                                <tr>
                                    <th className="px-4 py-2">Ciclo</th>
                                    <th className="px-4 py-2">Fecha Inicio</th>
                                    <th className="px-4 py-2">Fecha Fin</th>
                                    <th className="px-4 py-2">Terminado</th>
                                    <th className="px-4 py-2">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bolo.ciclos.map((ciclo, index) => (
                                    <tr
                                        key={ciclo.id}
                                        className={`${index % 2 === 0 ? "bg-green-50" : "bg-white"
                                            } hover:bg-green-100`}
                                    >
                                        <td className="border px-4 py-2 text-center">{index+1}º</td>
                                        <td className="border px-4 py-2 text-center">{ciclo.fecha_inicio}</td>
                                        <td className="border px-4 py-2 text-center">{ciclo.fecha_fin}</td>
                                        <td className="border px-4 py-2 text-center">
                                            {ciclo.terminado ? "Sí" : "No"}
                                        </td>
                                        <td className="border px-4 py-2 text-center">
                                            <Link to={`/estadisticas/sustratos/Ciclo/${ciclo.id}`}>
                                                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
                                                    Ver Detalles
                                                </button>
                                            </Link>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                </div>

                {/* Ciclos */}
            </div>
            <button
                onClick={handleBack}
                className="fixed bottom-4 left-4 right-4 flex items-center justify-center py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
                <ArrowLeft className="mr-3" size={24} />
                Volver
            </button>

        </div>
    );
}
