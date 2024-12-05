import React from 'react';
import { QrCode, Keyboard, ArrowLeft, ClipboardList } from 'lucide-react';
import BotonVolver from '../components/BotonVolver';
import { Link } from 'react-router-dom';

export default function HacerRegistro() {


    const buttonStyle = "w-full flex items-center justify-start px-4 py-3 mb-3 bg-white border border-green-300 rounded-lg shadow-sm text-green-700 hover:bg-green-50 transition-colors";
    const iconStyle = "mr-3";


    return (
        <div className="min-h-screen bg-green-100 flex items-center justify-center">
            <div className="p-4 space-y-4 w-full">

                <Link to="/hacerregistro/qr">
                    <button className={buttonStyle}>
                        <QrCode className={iconStyle} size={24} />
                        Escanear QR
                    </button>
                </Link>


                <Link to="/hacerregistro/codigo">
                    <button className={buttonStyle}>
                        <Keyboard className={iconStyle} size={24} />
                        Introducir Código
                    </button>
                </Link>

                <BotonVolver />
            </div>
        </div>

    );
};

