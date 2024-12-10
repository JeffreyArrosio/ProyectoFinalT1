import React, { useState, useEffect } from 'react';
import { Pointer, Check } from 'lucide-react';
import BotonVolver from '../components/BotonVolver';
import { Link } from 'react-router-dom';

export default function Codigo() {

    const [code, setCode] = useState('');
    const [isValid, setIsValid] = useState(false);
    const token = localStorage.getItem('authToken');

    const handleCodeChange = (e) => {
        const inputCode = e.target.value;
        setCode(inputCode);
        setIsValid(inputCode.length === 2);
    };

    const [datos, setDatos] = useState([]);

    useEffect(() => {
        fetch('http://proyectofinalt1.test/api/composteras', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data); // Aquí puedes ver la respuesta del servidor
                setDatos(data);
            });
    }, []);


    return (
        <div className="min-h-screen bg-green-100 flex items-center justify-center">
            <div className="p-4 space-y-4">
                {/* Mostrar composteras por api */}
                {datos && datos.data && datos.data.map((dato, index) => (
                    <div key={index} className="bg-white border border-green-300 rounded-lg p-4 shadow-sm">
                        <label className="block text-green-700 mb-2">
                            Compostera {dato.tipo}
                        </label>
                        <div className="flex items-center justify-center">
                            <Link to={`/hacerregistro/${dato.id}`}>
                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                    Selecionar
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}

                {/* INTRODUCIR CODIGO COMPOSTERA */}
                {/* <div className="bg-white border border-green-300 rounded-lg p-4 shadow-sm">
                    <label className="block text-green-700 mb-2">
                        Insertar Código de Compostera
                    </label>
                    <div className="flex items-center">
                        <input
                            type="text"
                            value={code}
                            onChange={handleCodeChange}
                            maxLength={2}
                            placeholder="_ _"
                            className="w-full p-2 border border-green-200 rounded-lg text-center tracking-widest text-green-700"
                        />

                    </div>
                    {isValid && (
                        <div className="mt-2 text-green-600 flex items-center">
                            <Check size={20} className="mr-2" />
                            Código válido
                        </div>
                    )}
                    <div className="flex items-center justify-center">
                        <Link to={`/hacerregistro/${code}`}>
                            <BotonVerde texto="Continuar" />
                        </Link>
                    </div>
                </div> */}

            </div>
            <BotonVolver />
        </div>
    );
}
