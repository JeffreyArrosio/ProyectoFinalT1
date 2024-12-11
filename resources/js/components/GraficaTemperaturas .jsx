import React from "react";

import { LineChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line } from 'recharts';

export default function GraficaTemperaturas({valores}) {
    console.log(valores);



    // let valores = [{
    //     name: 'Page A',
    //     uv: 4000,
    //     pv: 2400,
    //     amt: 2400,
    // }, {
    //     name: 'Page B',
    //     uv: 3000,
    //     pv: 1398,
    //     amt: 2210,
    // }, {
    //     name: 'Page C',
    //     uv: 2000,
    //     pv: 9800,
    //     amt: 2290,
    // }, {
    //     name: 'Page D',
    //     uv: 2780,
    //     pv: 3908,
    //     amt: 2000,
    // }, {
    //     name: 'Page E',
    //     uv: 1890,
    //     pv: 4800,
    //     amt: 2181,
    // }
    // ]


    return (

        // <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={400} data={valores} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>

            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip/>
            <Legend/>

            <XAxis dataKey="fecha_hora" />
            <YAxis />


            <Line type="monotone" dataKey="temperatura_ambiental" stroke="#8884d8" fill="#8884d8" />
            <Line type="monotone" dataKey="temperatura_compostera" stroke="#82ca9d" fill="#82ca9d" />
        </LineChart>
        // </ResponsiveContainer>

    );

    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${label} : ${payload[0].value}°C`}</p>
                </div>
            );
        }

        return null;
    };
}
