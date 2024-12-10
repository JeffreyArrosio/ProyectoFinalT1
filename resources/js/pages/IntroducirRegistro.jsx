import React from 'react';
import { useState } from 'react';
import BotonVolver from '../components/BotonVolver';
import FormularioAntes from '../components/FormularioAntes';
import FormularioDurante from '../components/FormularioDurante';
import FormularioDespues from '../components/FormularioDespues';
import BotonVerde from '../components/BotonVerde';


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
                    <form action="/registro" method="post" enctype="multipart/form-data">
                        <div className={`text-center text-green-700 ${activeTab === 'Antes' ?
                            ''
                            :
                            'hidden'
                            }`} >
                            <h2 className="text-xl font-bold text-green-700 mb-4 text-center">
                                Registro Inicial
                            </h2>
                            <FormularioAntes />
                        </div>
                        <div className={`text-center text-green-700 ${activeTab === 'Durante' ?
                            ''
                            :
                            'hidden'
                            }`} >
                            <h2 className="text-xl font-bold text-green-700 mb-4 text-center">
                                Registro Durante
                            </h2>
                            <FormularioDurante />
                        </div>
                        <div className={`text-center text-green-700 ${activeTab === 'Despues' ?
                            ''
                            :
                            'hidden'
                            }`} >
                            <h2 className="text-xl font-bold text-green-700 mb-4 text-center">
                                Registro Final de Compostera
                            </h2>
                            <FormularioDespues />
                            <div className="flex justify-center">
                                <BotonVerde texto="Guardar Registro" type="submit" />
                            </div>
                        </div>

                    </form>
                </div>
            </div>
            <BotonVolver />
        </div>
    );

}

