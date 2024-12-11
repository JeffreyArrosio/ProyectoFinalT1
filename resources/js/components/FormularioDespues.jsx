import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Home } from 'lucide-react';
import BotonVerde from './BotonVerde';
import BotonVolver from './BotonVolver';
import { DataContext } from '../DataContext';

export default function FormularioDespues(props) {


    const { data, setData } = useContext(DataContext);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            registro: {
                ...prevData.registro,
                [name]: value
            }
        }));
    };
    const handlePhotoUpload = (e) => {
        const files = Array.from(e.target.files);
        console.log(files);
        setData(prev => ({
            ...prev,
            registro: {
                ...prev.registro,
                ['fotografias_finales']: files[0].name
            }
        }));
        console.log(data)
    };

    return (
        <>
            <div className="space-y-4 w-full max-w-lg">
                <div className="bg-white  rounded-lg p-2  space-y-4">
                    <h2 className="text-xl font-bold text-green-700 mb-4 text-center">
                        Registro Final
                    </h2>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <div>
                                <label className="block text-green-700 mb-2">Nivel Llenado Final (L)</label>
                                <input
                                    type="number"
                                    name="nivel_llenado_final"
                                    value={data.registro && data.registro.nivel_llenado_final ? data.registro.nivel_llenado_final : ''}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-green-200 rounded-lg text-green-700"
                                    placeholder="Nivel de Llenado Final"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-green-700 mb-2">Fotografías</label>
                            <div className="flex items-center  justify-center ">
                                <input
                                    type="file"
                                    name='fotografias_finales'
                                    onChange={handlePhotoUpload}
                                    // onChange={handlePhotoUpload}
                                    className="hidden"
                                    id="fotografias_finales"
                                    accept='image/*'
                                />
                                <label
                                    for="fotografias_finales"
                                    className="flex items-center cursor-pointer bg-green-100 p-2 rounded-lg text-green-700"
                                >
                                    <Camera size={20} className="mr-2" />
                                    Subir Fotos
                                </label>
                            </div>
                        </div>

                    </div>



                    <div>
                        <label className="block text-green-700 mb-2">Observaciones Finales</label>
                        <textarea
                            name="observaciones_final"
                            value={data.registro && data.registro.observaciones_final ? data.registro.observaciones_final : ''}
                            onChange={handleChange}
                            className="w-full p-2 border border-green-200 rounded-lg text-green-700"
                            rows="3"
                            placeholder="Observaciones finales del proceso..."
                        ></textarea>
                    </div>

                    <div className="flex justify-around">
                        <button
                            onClick={() => props.setActiveTab("Antes")}
                            className="mt-2 p-2 text-green-800 bg-green-100 rounded-lg ">
                            Anterior
                        </button>
                        <button
                            onClick={props.handleSubmit}
                            className="mt-2 p-2 text-white font-bold  bg-green-700 rounded-lg ">
                            Guardar Registro
                        </button>
                    </div>
                </div>
            </div>
            <BotonVolver />
        </>
    );
};

