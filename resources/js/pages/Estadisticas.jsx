import React from 'react';
import { Cuboid, Vegan } from 'lucide-react';
import BotonVolver from '../components/BotonVolver';
import { Link } from 'react-router-dom';

const buttonStyle = "w-full flex items-center justify-start px-4 py-3 mb-3 bg-white border border-green-300 rounded-lg shadow-sm text-green-700 hover:bg-green-50 transition-colors";
    const iconStyle = "mr-3";
export default function Estadiscas() {
    return (
        <div className="min-h-screen bg-green-100 flex items-center justify-center">
            <div className="p-4 space-y-4 w-64">

                <Link to="/estadisticas/sustratos">
                <button className={buttonStyle}>
                    <Vegan className={iconStyle} size={24} />
                    Sustratos
                </button>
                </Link>

                <button className={buttonStyle}>
                    <Cuboid className={iconStyle} size={24} />
                    Composteras
                </button>
            </div>
            <BotonVolver />
        </div>
    );


}

