import React, { useState, useContext } from 'react';
import { Camera } from 'lucide-react';
import BotonVerde from '../components/BotonVerde';
import BotonVolver from '../components/BotonVolver';
import { DataContext } from '../DataContext';





export default function (props) {

    const { data, setData } = useContext(DataContext);


    const user = localStorage.getItem('user');

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


    const handlePhotoUpload = (event) => {

       let img = event.target.files[0];

        setData(prevData => ({
            ...prevData,
            registro: {
                ...prevData.registro,
                fotografias_iniciales: img
            }
        }));
        // setImage(event.target.files[0]);
      };
    // const handlePhotoUpload = (e) => {
    //     const files = Array.from(e.target.files);
    //     setFormData(prev => ({
    //         ...prev,
    //         fotografias_iniciales: files
    //     }));


    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Aquí iría la lógica de envío del formulario
    //     console.log(formData);
    // };

    return (
        <>
            <div className="space-y-4 w-full max-w-lg">
                <div className="bg-whiterounded-lg p-2  space-y-4 ">

                    <h2 className="text-xl font-bold text-green-700 mb-4 text-center">
                        Registro Inicial
                    </h2>

                    <div className="grid grid-cols-2 gap-4 flex justify-center">
                    <div >
                            <label className="block text-green-700 mb-2">Usuario</label>
                            <input
                                type="number"
                                name="user"
                                value={user}
                                readOnly
                                className="w-full p-2 border border-green-200 rounded-lg text-green-700"
                            />
                        </div>

                        <div >
                            <label className="block text-green-700 mb-2">Fecha</label>
                            <input
                                type="date"
                                name="fecha"
                                value={ new Date().toISOString().split('T')[0]}
                                onChange={handleChange}
                                className="w-full p-2 border border-green-200 rounded-lg text-green-700"
                                placeholder="Fecha"
                            />
                        </div>

                    </div>

                    <div className="grid grid-cols-2 gap-4">

                        <div>
                            <label className="block text-green-700 mb-2">Temp. Ambiental (°C)</label>
                            <input
                                type="number"
                                name="temperatura_ambiental"
                                value={data.registro && data.registro.temperatura_ambiental ? data.registro.temperatura_ambiental : ''}
                                onChange={handleChange}
                                className="w-full p-2 border border-green-200 rounded-lg text-green-700"
                                placeholder="Temp. Ambiental"
                            />
                        </div>
                        <div>
                            <label className="block text-green-700 mb-2">Temp. Compostera (°C)</label>
                            <input
                                type="number"
                                name="temperatura_compostera"
                                value={data.registro && data.registro.temperatura_compostera ? data.registro.temperatura_compostera : ''}
                                onChange={handleChange}
                                className="w-full p-2 border border-green-200 rounded-lg text-green-700"
                                placeholder="Temp. Compostera"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">

                    <div>
                            <label className="block text-green-700 mb-2">Nivel Llenado Inicial</label>
                            <input
                                type="number"
                                name="nivel_llenado_inicial"
                                value={data.registro && data.registro.nivel_llenado_inicial ? data.registro.nivel_llenado_inicial : ''}
                                onChange={handleChange}
                                className="w-full p-2 border border-green-200 rounded-lg text-green-700"
                            />
                        </div>


                        <div>
                            <label className="block text-green-700 mb-2">Olor</label>
                            <textarea
                                name="olor"
                                value={data.registro && data.registro.olor ? data.registro.olor : ''}
                                onChange={handleChange}
                                className="w-full p-2 border border-green-200 rounded-lg text-green-700"
                                rows="1"
                                placeholder="Olor"
                            ></textarea>
                        </div>

                    </div>

                    <div className="grid grid-cols-2 gap-4">


                        <div>
                            <label className="block text-green-700 mb-2">Presencia Insectos</label>
                            <select
                                name="presencia_insectos"
                                value={data.registro && data.registro.presencia_insectos ? data.registro.presencia_insectos : ''}
                                onChange={handleChange}
                                className="w-full p-2 border border-green-200 rounded-lg text-green-700"
                            >
                                <option value="">Seleccionar</option>
                                <option value="hormigas">Hormigas</option>
                                <option value="moscas">Moscas</option>
                                <option value="arañas">arañas</option>
                                <option value="cucarachas">Cucarachas</option>
                                <option value="otros">Otros</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-green-700 mb-2">Humedad</label>
                            <select
                                name="humedad"
                                value={data.registro && data.registro.humedad ? data.registro.humedad : ''}
                                onChange={handleChange}
                                className="w-full p-2 border border-green-200 rounded-lg text-green-700"
                            >
                                <option value="">Seleccionar</option>
                                <option value="Exceso">Exceso</option>
                                <option value="Buena">Buena</option>
                                <option value="Defecto">Defecto</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2 " >
                            <label className="block text-green-700 mb-2">Fotografías</label>
                            <div className="flex items-center  justify-center ">
                                <input
                                    type="file"
                                    multiple
                                    onChange={handlePhotoUpload}
                                    className="hidden"
                                    id="photoUpload"
                                    accept="image/*"
                                />
                                <label
                                    htmlFor="photoUpload"
                                    className="flex items-center cursor-pointer bg-green-100 p-2 rounded-lg text-green-700"
                                >
                                    <Camera size={20} className="mr-2" />
                                    Subir Fotos
                                </label>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-green-700 mb-2">Observaciones Iniciales</label>
                        <textarea
                            name="observaciones_iniciales"
                            value={data.registro && data.registro.observaciones_iniciales ? data.registro.observaciones_iniciales : ''}

                            onChange={handleChange}
                            className="w-full p-2 border border-green-200 rounded-lg text-green-700"
                            rows="3"
                            placeholder="Observaciones iniciales..."
                        ></textarea>
                    </div>

                    <div className="flex justify-center">

                        <button
                        onClick={() => props.setActiveTab("Durante")}
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
