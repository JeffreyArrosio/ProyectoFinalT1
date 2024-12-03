import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Home } from 'lucide-react';
import BotonVerde from './BotonVerde';
import BotonVolver from './BotonVolver';

export default function FormularioDespues() {
  const [formData, setFormData] = useState({
    riego: '',
    revolver: '',
    aporte_verde: '',
    tipo_aporte_verde: '',
    aporte_seco: '',
    tipo_aporte_seco: '',
    fotografias_final: [],
    observaciones_final: ''
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
      fotografias_final: files
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="space-y-4 w-full max-w-lg">
        <form onSubmit={handleSubmit} className="bg-white  rounded-lg p-2 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-green-700 mb-4 text-center">
            Registro Final de Compostera
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-green-700 mb-2">Nivel Llenado Final</label>
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
            <label className="block text-green-700 mb-2">Observaciones Finales</label>
            <textarea
              name="observaciones_final"
              value={formData.observaciones_final}
              onChange={handleChange}
              className="w-full p-2 border border-green-200 rounded-lg text-green-700"
              rows="3"
              placeholder="Observaciones finales del proceso..."
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

