import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  {
    "id": 1,
    "fecha_hora": "2008-04-20 07:00:57",
    "temperatura_ambiental": 39,
    "temperatura_compostera": 15,
    "humedad": "Defecto"
  },
  {
    "id": 2,
    "fecha_hora": "1999-11-26 05:45:58",
    "temperatura_ambiental": 10,
    "temperatura_compostera": 35,
    "humedad": "Exceso"
  },
  {
    "id": 3,
    "fecha_hora": "2002-11-07 06:24:44",
    "temperatura_ambiental": 35,
    "temperatura_compostera": 27,
    "humedad": "Buena"
  },
  {
    "id": 4,
    "fecha_hora": "2011-05-29 02:09:52",
    "temperatura_ambiental": 12,
    "temperatura_compostera": 69,
    "humedad": "Defecto"
  }
];

const Grafico = () => {
  return (
    <LineChart width={500} height={300} data={data}>
      <Line type="monotone" dataKey="temperatura_ambiental" stroke="#8884d8" />
      <Line type="monotone" dataKey="temperatura_compostera" stroke="#82ca9d" />
      <XAxis dataKey="fecha_hora" />
      <YAxis />
      <CartesianGrid stroke="#ccc" />
      <Tooltip />
    </LineChart>
  );
};

export default Grafico;
