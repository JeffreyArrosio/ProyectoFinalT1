import React from 'react';
import { useState } from 'react';
import BotonVolver from '../components/BotonVolver';
import FormularioAntes from '../components/FormularioAntes';
import FormularioDurante from '../components/FormularioDurante';
import FormularioDespues from '../components/FormularioDespues';

export default function IntroducirRegistro() {


    const [activeTab, setActiveTab] = useState('Antes');
    const [code, setCode] = useState('');
    const isValid = code.length === 2;

    const handleCodeChange = (e) => {
        setCode(e.target.value.toUpperCase());
    };

    const tabs = ['Antes', 'Durante', 'Despues'];

    return (



        <div className="min-h-screen bg-green-100 flex p-6  items-center justify-center">
            <div className="w-full max-w-md">

                {/* Tab Navigation */}
                <div className="flex justify-between">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-t-lg ${activeTab === tab
                                ? 'bg-white text-green-700 border-x border-t border-green-300'
                                : 'bg-green-200 text-green-600'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}

                <div className="bg-white border border-green-300 rounded-lg p-4 shadow-sm">
                    {activeTab === 'Antes' && (
                        <div className="text-center text-green-700">
                            <FormularioAntes />
                        </div>
                    )}
                    {activeTab === 'Durante' && (
                        <div className="text-center text-green-700">
                            <FormularioDurante />
                        </div>
                    )}
                    {activeTab === 'Despues' && (
                        <div className="text-center text-green-700">
                            <FormularioDespues />
                        </div>
                    )}
                </div>

            </div>
            <BotonVolver />
        </div>
    );

}

