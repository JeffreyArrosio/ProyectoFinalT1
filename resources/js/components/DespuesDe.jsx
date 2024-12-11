import React, { useState } from 'react';
import BotonModal from './BotonModal';

const DespuesDe = ({ despues_registros }) => {
    return (
        <div className="bg-green-100 flex items-center justify-center mb-4">
            <table className="table-auto w-full bg-white rounded-lg shadow-md">
                <thead className="bg-green-600 text-white">
                    <tr>
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Nivel Llenado Final</th>
                        {/* <th className="px-4 py-2">Fotografías Finales</th> */}
                        <th className="px-4 py-2">Observaciones Finales</th>
                    </tr>
                </thead>
                <tbody>
                    {despues_registros.map((record, index) => (
                        <tr
                            key={record.id}
                            className={`${index % 2 === 0 ? "bg-green-50" : "bg-white"} hover:bg-green-100`}
                        >
                            <td className="border px-4 py-2 text-center">{record.id ? record.id : 'N/A'}</td>
                            <td className="border px-4 py-2 text-center">{record.nivel_llenado_final ? record.nivel_llenado_final : 'N/A'}%</td>
                            {/* <td className="border px-4 py-2 text-center">
                                <a
                                    href={record.fotografias_finales}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-600 hover:underline"
                                >
                                    Ver Fotografía
                                </a>
                            </td> */}
                            <td className="border px-4 py-2 text-center">
                                {record.observaciones_finales ? (
                                    <BotonModal mensaje={record.observaciones_finales}>Si</BotonModal>
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

export default DespuesDe;
