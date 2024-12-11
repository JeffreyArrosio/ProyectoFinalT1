import React, { useState, useEffect, useContext } from 'react';
import { Cuboid, Vegan, ArrowLeft } from 'lucide-react';
import BotonVolver from '../components/BotonVolver';
import { Link } from 'react-router-dom';
import { useFetch } from '../utils/useFetch';
import { DataContext } from '../DataContext';
import { useNavigate } from 'react-router-dom';



export default function Estadisticas() {
    const buttonStyle = "w-full flex items-center justify-center px-4 py-3 mb-3 bg-white border border-green-300 rounded-lg shadow-sm text-green-700 hover:bg-green-50 transition-colors ";
    const iconStyle = "mr-3";
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    }



    const { data, setData } = useContext(DataContext);
    const token = localStorage.getItem('authToken');

    useEffect(() => {
        if(!data.bolos){
            fetch(`${data.url}/api/bolos?registros`,{
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                }
            })
            .then(response => response.json())
            .then(datos => setData({...data, bolos:datos}))
            .catch(error => console.error(error));
        }

    }, []);


    const bolos = data.bolos;
    bolos.sort((a, b) => b.id - a.id);

    return (
        <div className="min-h-screen bg-green-100 flex items-center justify-center mb-16 ">
            <div className="p-4 space-y-4 w-full ">
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
                    <button
            onClick={handleBack}
            className="fixed bottom-4 left-4 right-4 flex items-center justify-center py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
            <ArrowLeft className="mr-3" size={24} />
            Volver
        </button>
            </div>
        </div>
    );
}

