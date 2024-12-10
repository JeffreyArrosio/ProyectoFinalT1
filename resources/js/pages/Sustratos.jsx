import React, { useState, useEffect, useContext } from 'react';
import { Cuboid, Vegan } from 'lucide-react';
import BotonVolver from '../components/BotonVolver';
import { Link } from 'react-router-dom';
import { useFetch } from '../utils/useFetch';
import { DataContext } from '../DataContext';


export default function Estadisticas() {
    const buttonStyle = "w-full flex items-center justify-center px-4 py-3 mb-3 bg-white border border-green-300 rounded-lg shadow-sm text-green-700 hover:bg-green-50 transition-colors ";
    const iconStyle = "mr-3";

    const { data, setData } = useContext(DataContext);

    // useEffect(() => {
    //     if(!data.bolos){
    //         fetch('http://proyectofinalt1.test/api/bolos?registros')
    //         .then(response => response.json())
    //         .then(datos => setData({bolos:datos}))
    //         .catch(error => console.error(error));
    //     }
    // }, []);

    const bolos = data.bolos;


    return (
        <div className="min-h-screen bg-green-100 flex items-center justify-center">
            <div className="p-4 space-y-4 w-full mt-16 mb-16 ">
                {!bolos && <div>Loading...</div>}
                {bolos && bolos.map((bolosData) => (
                    <Link to={`/estadisticas/sustratos/${bolosData.id}`}>
                        <div className="bg-white border border-green-300 rounded-lg p-4 shadow-sm flex justify-between w-full">
                            <div className="text-green-600 text-center">
                                <p>Sustrato {bolosData.id}</p>
                            </div>
                            <div className="text-green-600 flex-col items-center justify-center">
                                <p>Fecha Inicio: {bolosData.fecha_inicio}</p>
                                <p>Fecha Fin: {bolosData.fecha_fin}</p>
                            </div>
                            <div className="text-green-600 text-center">
                                <p>Terminado: {bolosData.terminado ? 'Sí' : 'No'}</p>
                            </div>
                        </div>
                    </Link>
                ))}

                <button className={buttonStyle}>
                    <Vegan className={iconStyle} size={24} />
                    Sustratos
                </button>
                <button className={buttonStyle}>
                    <Cuboid className={iconStyle} size={24} />
                    Composteras
                </button>
                <BotonVolver />
            </div>
        </div>
    );
}

