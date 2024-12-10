import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Home } from 'lucide-react';
import BotonVerde from './BotonVerde';
import BotonVolver from './BotonVolver';


const FormularioDurante = () => {
  const [formData, setFormData] = useState({
    riego: '',
    revolver: '',
    aporte_verde: '',
    tipo_aporte_verde: '',
    aporte_seco: '',
    tipo_aporte_seco: '',
    fotografias_durante: '',
    observaciones_durante: ''
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
      fotografias_durante: files
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="space-y-4 w-full max-w-lg">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-green-700 mb-2">Riego</label>
              <select 
                name="riego"
                value={formData.riego}
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
                value={formData.revolver}
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
                value={formData.aporte_verde}
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
                value={formData.tipo_aporte_verde}
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
                value={formData.aporte_seco}
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
                value={formData.tipo_aporte_seco}
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
            <label className="block text-green-700 mb-2">Observaciones Durante</label>
            <textarea 
              name="observaciones_durante"
              value={formData.observaciones_durante}
              onChange={handleChange}
              className="w-full p-2 border border-green-200 rounded-lg text-green-700"
              rows="3"
              placeholder="Observaciones durante el proceso..."
            ></textarea>
          </div>

          <div className="flex justify-center">
            <BotonVerde texto="Guardar Registro" type="submit" />
          </div>
      </div>
      <BotonVolver />
    </>
  );
};

export default FormularioDurante;