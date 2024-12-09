import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import BotonVerde from '../components/BotonVerde';
import BotonVolver from '../components/BotonVolver';



export default function () {
  const [formData, setFormData] = useState({
    temperatura_ambiental: '',
    temperatura_compostera: '',
    nivel_llenado_inicial: '',
    olor: '',
    presencia_insectos: '',
    humedad: '',
    fotografias_iniciales: [],
    observaciones_iniciales: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      fotografias_iniciales: files
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    console.log(formData);
  };

  return (
    <>
      <div className="space-y-4 w-full max-w-lg">
        <form onSubmit={handleSubmit} className="bg-whiterounded-lg p-2 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-green-700 mb-4 text-center">
            Registro Inicial
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-green-700 mb-2">Temp. Ambiental (°C)</label>
              <input 
                type="number" 
                name="temperatura_ambiental"
                value={formData.temperatura_ambiental}
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
                value={formData.temperatura_compostera}
                onChange={handleChange}
                className="w-full p-2 border border-green-200 rounded-lg text-green-700"
                placeholder="Temp. Compostera"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
  

            <div>
              <label className="block text-green-700 mb-2">Nivel Llenado Inicial</label>
              <select 
                name="nivel_llenado_inicial"
                value={formData.nivel_llenado_inicial}
                onChange={handleChange}
                className="w-full p-2 border border-green-200 rounded-lg text-green-700"
              >
                <option value="">Seleccionar</option>
                <option value="0">0%</option>
                <option value="12.5">12.5%</option>
                <option value="25">25%</option>
                <option value="50">50%</option>
                <option value="75">75%</option>
                <option value="100">100%</option>
              </select>
            </div>

            <div>
              <label className="block text-green-700 mb-2">Olor</label>
              <select 
                name="olor"
                value={formData.olor}
                onChange={handleChange}
                className="w-full p-2 border border-green-200 rounded-lg text-green-700"
              >
                <option value="">Seleccionar</option>
                <option value="Podrido">Podrido</option>
                <option value="Sin olor malo">Sin olor malo</option>
                <option value="Tierra">Tierra</option>
                <option value="Fermentación">Fermentación</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
        

            <div>
              <label className="block text-green-700 mb-2">Presencia Insectos</label>
              <select 
                name="presencia_insectos"
                value={formData.presencia_insectos}
                onChange={handleChange}
                className="w-full p-2 border border-green-200 rounded-lg text-green-700"
              >
                <option value="">Seleccionar</option>
                <option value="No">No</option>
                <option value="Moscas">Moscas</option>
                <option value="Lombrices">Lombrices</option>
                <option value="Otros">Otros</option>
              </select>
            </div>
            <div>
              <label className="block text-green-700 mb-2">Humedad</label>
              <select 
                name="humedad"
                value={formData.humedad}
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
              value={formData.observaciones_iniciales}
              onChange={handleChange}
              className="w-full p-2 border border-green-200 rounded-lg text-green-700"
              rows="3"
              placeholder="Observaciones iniciales..."
            ></textarea>
          </div>

          <div className="flex justify-center">
            <BotonVerde texto="Guardar Registro" type="submit" />
          </div>
        </form>
      </div>
      <BotonVolver />
    </>
  );
};