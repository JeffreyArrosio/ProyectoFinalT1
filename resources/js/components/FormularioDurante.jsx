import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Home } from 'lucide-react';
import BotonVerde from './BotonVerde';
import BotonVolver from './BotonVolver';
import { DataContext } from '../DataContext';


const FormularioDurante = (props) => {

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
        const file = e.target.files[0];
        console.log(file);
        setData(prev => ({
            ...prev,
            registro: {
                ...prev.registro,
                ['fotografias_durante']: file
            }
        }));
        console.log(data)
    };



    return (
        <>
            <div className="space-y-4 w-full max-w-lg">
                <div  className="bg-white p-2 space-y-4">
                    <h2 className="text-xl font-bold text-green-700 mb-4 text-center">
                        Registro Durante
                    </h2>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-green-700 mb-2">Riego</label>
                            <select
                                name="riego"
                                value={data.registro && data.registro.riego ? data.registro.riego : ''}
                                onChange={handleChange}
                                className="w-full p-2 border border-green-200 rounded-lg text-green-700"
                            >
                                <option value="">Seleccionar</option>
                                <option value="Si">Sí</option>
                                <option value="No">No</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-green-700 mb-2">Revolver</label>
                            <select
                                name="revolver"
                                value={data.registro && data.registro.revolver ? data.registro.revolver : ''}
                                onChange={handleChange}
                                className="w-full p-2 border border-green-200 rounded-lg text-green-700"
                            >
                                <option value="">Seleccionar</option>
                                <option value="Si">Sí</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-green-700 mb-2">Aporte Verde (Litros)</label>
                            <input
                                type="number"
                                name="aporte_verde"
                                value={data.registro && data.registro.aporte_verde ? data.registro.aporte_verde : ''}
                                onChange={handleChange}
                                className="w-full p-2 border border-green-200 rounded-lg text-green-700"
                                placeholder="Litros"
                            />
                        </div>

                        <div>
                            <label className="block text-green-700 mb-2">Tipo Aporte Verde</label>
                            <input
                                type="text"
                                name="tipo_aporte_verde"
                                value={data.registro && data.registro.tipo_aporte_verde ? data.registro.tipo_aporte_verde : ''}
                                onChange={handleChange}
                                className="w-full p-2 border border-green-200 rounded-lg text-green-700"
                                placeholder="Descripción"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-green-700 mb-2">Aporte Seco (Litros)</label>
                            <input
                                type="number"
                                name="aporte_seco"
                                value={data.registro && data.registro.aporte_seco ? data.registro.aporte_seco : ''}
                                onChange={handleChange}
                                className="w-full p-2 border border-green-200 rounded-lg text-green-700"
                                placeholder="Litros"
                            />
                        </div>

                        <div>
                            <label className="block text-green-700 mb-2">Tipo Aporte Seco</label>
                            <input
                                type="text"
                                name="tipo_aporte_seco"
                                value={data.registro && data.registro.tipo_aporte_seco ? data.registro.tipo_aporte_seco : ''}
                                onChange={handleChange}
                                className="w-full p-2 border border-green-200 rounded-lg text-green-700"
                                placeholder="Descripción"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2 " >
                            <label className="block text-green-700 mb-2">Fotografías</label>
                            <div className="flex items-center  justify-center ">
                                <input
                                    type="file"
                                    name='fotografias_durante'
                                    onChange={handlePhotoUpload}
                                    className='hidden'
                                    id="fotografias_durante"
                                    accept='image/*'
                                />
                                <label
                                    htmlFor="fotografias_durante"
                                    className="flex items-center cursor-pointer bg-green-100 p-2 rounded-lg text-green-700"
                                >
                                    <Camera size={20} className="mr-2" />
                                    Subir Fotos
                                </label>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-green-700 mb-2">Observaciones Durante</label>
                        <textarea
                            name="observaciones_durante"
                            value={data.registro && data.registro.observaciones_durante ? data.registro.observaciones_durante : ''}
                            onChange={handleChange}
                            className="w-full p-2 border border-green-200 rounded-lg text-green-700"
                            rows="3"
                            placeholder="Observaciones durante el proceso..."
                        ></textarea>
                    </div>

                    <div className="flex justify-around">
                        <button
                        onClick={() => props.setActiveTab("Antes")}
                        className="mt-2 p-2 text-green-800 bg-green-100 rounded-lg ">
                            Anterior
                        </button>
                        <button
                        onClick={() => props.setActiveTab("Despues")}
                        className="mt-2 p-2 text-green-800 bg-green-100 rounded-lg ">
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>
            <BotonVolver />
        </>
    );
};

export default FormularioDurante;
