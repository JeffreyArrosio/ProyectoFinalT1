import React, { useState } from 'react';
import { Pointer, Check } from 'lucide-react';
import BotonVolver from '../components/BotonVolver';
import { Link } from 'react-router-dom';
import BotonVerde from '../components/BotonVerde';

export default function Codigo() {

    const [code, setCode] = useState('');
    const [isValid, setIsValid] = useState(false);

    const handleCodeChange = (e) => {
        const inputCode = e.target.value;
        setCode(inputCode);
        setIsValid(inputCode.length === 2);
    };
    return (
        <div className="min-h-screen bg-green-100 flex items-center justify-center">
            <div className="p-4 space-y-4">
                <div className="bg-white border border-green-300 rounded-lg p-4 shadow-sm">
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
                </div>

            </div>
            <BotonVolver />
        </div>
    );
}
