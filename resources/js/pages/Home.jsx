import React from 'react';
import {
    ClipboardList,
    Calendar,
    BarChart3,
    LeafyGreen,
    Settings,
    Cuboid
} from 'lucide-react';

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../DataContext';
import { useEffect } from 'react';




export default function Home() {

    const buttonStyle = "w-full flex items-center justify-start px-4 py-3 mb-3 bg-white border border-green-300 rounded-lg shadow-sm text-green-700 hover:bg-green-50 transition-colors";
    const iconStyle = "mr-3";

    const { data, setData } = useContext(DataContext);


    useEffect(() => {
        setData({...data, url:"http://proyectofinalt1.test"});
      }, []);


    return (
        <div className="min-h-screen bg-green-100 flex items-center justify-center">
            <div className="p-4 space-y-4">

            <Link to="/hacerregistro/codigo">
                    <button className={buttonStyle}>
                        <Cuboid className={iconStyle} size={24} />
                        Composteras
                    </button></Link>

                {/* <Link to="/hacerregistro">
                    <button className={buttonStyle}>
                        <ClipboardList className={iconStyle} size={24} />
                        Hacer Registro
                    </button></Link> */}

                <Link to="/agenda">
                    <button className={buttonStyle}>
                        <Calendar className={iconStyle} size={24} />
                        Agenda
                    </button>
                </Link>


                <Link to="/estadisticas">
                    <button className={buttonStyle}>
                        <BarChart3 className={iconStyle} size={24} />
                        Estadísticas
                    </button>
                </Link>

                {/* <button className={buttonStyle}>
                    <LeafyGreen className={iconStyle} size={24} />
                    Nuevo Sustrato
                </button> */}

                <button className={buttonStyle}>
                    <Settings className={iconStyle} size={24} />
                    Settings
                </button>
            </div>
        </div>
    );
}
