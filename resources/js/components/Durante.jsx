import React from 'react';
import BotonModal from './BotonModal';

const Durante = ({ durante_registros }) => {
    return (
        <div className="bg-green-100 flex items-center justify-center mb-4">
            <table className="table-auto w-full bg-white rounded-lg shadow-md">
                <thead className="bg-green-600 text-white">
                    <tr>
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Riego</th>
                        <th className="px-4 py-2">Revolver</th>
                        <th className="px-4 py-2">Aporte Verde</th>
                        <th className="px-4 py-2">Tipo Aporte Verde</th>
                        <th className="px-4 py-2">Aporte Seco</th>
                        <th className="px-4 py-2">Tipo Aporte Seco</th>
                        {/* <th className="px-4 py-2">Fotografías</th> */}
                        <th className="px-4 py-2">Observaciones</th>
                    </tr>
                </thead>
                <tbody>
                    {durante_registros.map((record, index) => (
                        <tr
                            key={record.id}
                            className={`${index % 2 === 0 ? "bg-green-50" : "bg-white"} hover:bg-green-100`}
                        >
                            <td className="border px-4 py-2 text-center">{record.id ? record.id : 'N/A'}</td>
                            <td className="border px-4 py-2 text-center">
                                {record.riego === 'si' ? 'Sí' : 'No'}
                            </td>
                            <td className="border px-4 py-2 text-center">
                                {record.revolver === 'si' ? 'Sí' : 'No'}
                            </td>
                            <td className="border px-4 py-2 text-center">{record.aporte_verde ? record.aporte_verde : 'N/A'}</td>
                            <td className="border px-4 py-2 text-center">
                                {record.tipo_aporte_verde ? (
                                    <BotonModal mensaje={record.tipo_aporte_verde}>Ver</BotonModal>
                                ) : (
                                    "No"
                                )}
                            </td>
                            <td className="border px-4 py-2 text-center">{record.aporte_seco ? record.aporte_seco : 'N/A'}</td>
                            <td className="border px-4 py-2 text-center">
                                {record.tipo_aporte_seco ? (
                                    <BotonModal mensaje={record.tipo_aporte_seco}>Ver</BotonModal>
                                ) : (
                                    "No"
                                )}
                            </td>
                            {/* <td className="border px-4 py-2 text-center">
                                <a
                                    href={record.fotografias_durante}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-600 hover:underline"
                                >
                                    Ver Fotografía
                                </a>
                            </td> */}
                            <td className="border px-4 py-2 text-center">
                                {record.observaciones_durante ? (
                                    <BotonModal mensaje={record.observaciones_durante}>Si</BotonModal>
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

export default Durante;
