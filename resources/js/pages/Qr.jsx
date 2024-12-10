import { React, useState } from 'react';
import BotonVolver from '../components/BotonVolver';
import { Camera } from 'lucide-react';

export default function Qr() {

    const [capturedImage, setCapturedImage] = useState(null);

    const handleCapture = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setCapturedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="min-h-screen bg-green-100 flex items-center justify-center">
            <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center p-4">
                <div className="w-full max-w-md bg-white shadow-md rounded-lg border border-green-300 p-6">
                    <div className="mb-4 text-center">
                        <h2 className="text-xl font-bold text-green-700 mb-2">Capturar Código QR</h2>
                    </div>

                    <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                        {capturedImage ? (
                            <img
                                src={capturedImage}
                                alt="Captured"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="text-center text-gray-500">
                                <Camera size={48} className="mx-auto mb-2 text-green-600" />
                                <p>Ninguna imagen capturada</p>
                            </div>
                        )}
                    </div>

                    <input
                        type="file"
                        accept="image/*"
                        capture="environment"
                        onChange={handleCapture}
                        className="hidden"
                        id="qr-capture"
                    />

                    <label
                        htmlFor="qr-capture"
                        className="w-full flex items-center justify-center px-4 py-3 mb-3 bg-white border border-green-300 rounded-lg shadow-sm text-green-700 hover:bg-green-50 transition-colors cursor-pointer"
                    >
                        <Camera className="mr-3" size={24} />
                        Tomar Foto
                    </label>

                    <button
                        className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                        Ingresar
                    </button>
                </div>
            </div>
            <BotonVolver />
        </div>
    );
}
