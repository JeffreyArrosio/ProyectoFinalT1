import React, { useState } from 'react';

import BotonModal from './BotonModal';
import BotonModalFotos from './BotonModalFotos';

const AntesDe = ({ antes_registros }) => {

    const [registros, setRegistros] = useState(antes_registros);







    return (
        <div className="bg-green-100 flex items-center justify-center mb-4">
            <table className="table-auto w-full bg-white rounded-lg shadow-md">
                <thead className="bg-green-600 text-white">
                    <tr>
                        <th className="px-4 py-2" >ID</th>
                        <th className="px-4 py-2" >Temp. Ambiente</th>
                        <th className="px-4 py-2" >Temp. Compostera</th>
                        <th className="px-4 py-2" >Nivel Llenado</th>
                        <th className="px-4 py-2" >Insectos</th>
                        <th className="px-4 py-2" >Humedad</th>
                        <th className="px-4 py-2" >Olor</th>
                        <th className="px-4 py-2" >Fotografías</th>
                        <th className="px-4 py-2" >Observaciones Iniciales</th>
                    </tr>
                </thead>
                <tbody>
                    {registros.map((record, index) => (
                        <tr
                            key={record.id}
                            className={`${index % 2 === 0 ? "bg-green-50" : "bg-white"} hover:bg-green-100`}
                        >
                            <td className="border px-4 py-2 text-center">{record.id ? record.id : 'N/A'}</td>
                            <td className="border px-4 py-2 text-center">{record.temperatura_ambiental ? record.temperatura_ambiental + "°C" : 'N/A'}</td>
                            <td className="border px-4 py-2 text-center">{record.temperatura_compostera ? record.temperatura_compostera + "°C" : 'N/A'}</td>
                            <td className="border px-4 py-2 text-center">{record.nivel_llenado_inicial ? record.nivel_llenado_inicial + "%" : 'N/A'}</td>
                            <td className="border px-4 py-2 text-center">{record.presencia_insectos ? record.presencia_insectos : 'N/A'}</td>
                            <td className="border px-4 py-2 text-center">{record.humedad ? record.humedad : 'N/A'}</td>
                            <td className="border px-4 py-2 text-center">
                                {record.olor ? (
                                    <BotonModal mensaje={record.olor}>Si</BotonModal>
                                ) : (
                                    "No"
                                )}
                            </td>
                            <td className="border px-4 py-2 text-center">
                                {record.fotografias_iniciales ? (
                                    <BotonModalFotos url={record.fotografias_iniciales}>Si</BotonModalFotos>
                                ) : (
                                    "No"
                                )}
                            </td>
                            <td className="border px-4 py-2 text-center">
                                {record.observaciones_iniciales ? (
                                    <BotonModal mensaje={record.observaciones_iniciales}>Si</BotonModal>
                                ) : (
                                    "No"
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AntesDe;
