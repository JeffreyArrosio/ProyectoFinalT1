import React from 'react';
import { useState, useEffect, useContext } from 'react';
import BotonVolver from '../components/BotonVolver';
import FormularioAntes from '../components/FormularioAntes';
import FormularioDurante from '../components/FormularioDurante';
import FormularioDespues from '../components/FormularioDespues';
import { DataContext } from '../DataContext';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';



export default function IntroducirRegistro() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Antes');
    const [code, setCode] = useState('');
    const isValid = code.length === 2;
    const { data, setData } = useContext(DataContext);
    const token = localStorage.getItem('authToken');

    const params = useParams();
    const id = params && params.code;
    const user = localStorage.getItem('user');


    useEffect(() => {

        setData({
            ...data, registro: {
                ciclo_id: id && id,

                user: user,
                fecha: '',
                temperatura_ambiental: '',
                temperatura_compostera: '',
                nivel_llenado_inicial: '',
                olor: '',
                presencia_insectos: '',
                humedad: '',

                fotografias_iniciales: '',
                observaciones_iniciales: '',

                riego: '',
                revolver: '',
                aporte_verde: '',
                tipo_aporte_verde: '',
                aporte_seco: '',
                tipo_aporte_seco: '',
                fotografias_durante: '',
                observaciones_durante: '',

                fotografias_finales: '',
                nivel_llenado_final: '',
                observaciones_final: ''
            }
        });

    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);

    function limpiarBolosData() {
        let eliminarBolos = data;
        if (eliminarBolos.bolos) {
            delete eliminarBolos.bolos;
        }
        setData(eliminarBolos);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data.registro);
        const formData = new FormData();

        for (const key in data.registro) {
            console.log(key, data.registro[key]);
            formData.append(key, data.registro[key]);
        }
        console.log(formData);
        try {
            fetch(`${data.url}/api/registros?hacerregistro&ciclo_id=${id}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                },
                body: formData,
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error(error));


        } catch (error) {
            console.log(error);
        }

        limpiarBolosData();
        navigate('/hacerregistro/codigo');
    }

    const handleBack = () => {
        navigate('/hacerregistro/codigo'); // Navigate to previous route
    };



    const tabs = ['Antes', 'Durante', 'Despues'];

    return (



        <div className="min-h-screen bg-green-100 flex p-6  items-center justify-center">
            <div className="w-full max-w-md mt-16 mb-16">


                {/* Tab Navigation */}
                <div className="flex justify-between">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-t-lg ${activeTab === tab
                                ? 'bg-white text-green-700 border-x border-t border-green-300'
                                : 'bg-green-200 text-green-600'
                                }`}>
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}


                <form action="" encType="multipart/form-data">
                    <div className="bg-white border border-green-300 rounded-lg p-4 shadow-sm">
                        {activeTab === 'Antes' && (
                            <div className="text-center text-green-700">
                                <FormularioAntes setActiveTab={setActiveTab} />
                            </div>
                        )}
                        {activeTab === 'Durante' && (
                            <div className="text-center text-green-700">
                                <FormularioDurante setActiveTab={setActiveTab} />
                            </div>
                        )}
                        {activeTab === 'Despues' && (
                            <div className="text-center text-green-700">
                                <FormularioDespues setActiveTab={setActiveTab} handleSubmit={handleSubmit} />
                            </div>
                        )}
                    </div>
                </form>

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

