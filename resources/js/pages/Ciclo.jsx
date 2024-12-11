import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { DataContext } from '../DataContext';
import { useFetch } from '../utils/useFetch';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AntesDe from '../components/AntesDe';
import DespuesDe from '../components/DespuesDe';
import Durante from '../components/Durante';



export default function Sustrato() {
    const params = useParams();
    const { data, setData } = useContext(DataContext);
    const [activeTab, setActiveTab] = useState('Antes');

    const navigate = useNavigate();

    const tabs = ['Antes', 'Durante', 'Despues'];


    const handleBack = () => {
        navigate(-1);
    }



    const ciclo = data.bolos.flatMap((item) => item.ciclos).find(item => item.id === parseInt(params.code));

    const registros = ciclo.registros;
    const antes_registros = registros.flatMap((item) => item.antes_registros);
    const despues_registros = registros.flatMap((item) => item.despues_registros);
    const durante_registros = registros.flatMap((item) => item.durante_registros);
    // console.log(registros[0]);
    console.log(durante_registros);



    return (
        <div className="min-h-screen bg-green-100 flex items-center justify-center mb-16 ">
            <div className="p-4 space-y-4 w-full">
                <div className="bg-green-600 border border-green-300 rounded-lg p-4 shadow-sm flex justify-around  w-full mb-10">
                    <div className="text-white text-center content-center font-bold">
                        <p>Ciclo {ciclo.id}</p>
                    </div>
                    <div className="text-white flex-col items-center justify-center content-center font-bold">
                        <p>Fecha Inicio: {ciclo.fecha_inicio}</p>
                        <p>Fecha Fin: {ciclo.fecha_fin}</p>
                    </div>
                    <div className="text-white text-center content-center font-bold">
                        <p>Terminado: {ciclo.terminado ? 'Sí' : 'No'}</p>
                    </div>
                </div>



                <div className=" bg-green-100 flex   items-center justify-center">
                    <div className="w-full max-w-md  ">
                        <div className="flex justify-between">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 rounded mb-4 ${activeTab === tab
                                        ? 'bg-white text-green-700 font-bold border border-green-300'
                                        : 'text-white bg-green-600 font-bold'
                                        }`}>
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <div >
                            {activeTab === 'Antes' && (
                                <AntesDe antes_registros={antes_registros} />
                            )}
                            {activeTab === 'Durante' && (
                                <div className="text-center text-green-700">
                                <Durante durante_registros={durante_registros} />
                                </div>
                            )}
                            {activeTab === 'Despues' && (
                                <div className="text-center text-green-700">
                                <DespuesDe despues_registros={despues_registros} />
                                </div>
                            )}
                        </div>
                    </div>

                </div>



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
