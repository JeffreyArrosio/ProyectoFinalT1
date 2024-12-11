import React ,{useContext, useEffect} from 'react';
import { Cuboid, Vegan } from 'lucide-react';
import BotonVolver from '../components/BotonVolver';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataContext';


const buttonStyle = "w-full flex items-center justify-start px-4 py-3 mb-3 bg-white border border-green-300 rounded-lg shadow-sm text-green-700 hover:bg-green-50 transition-colors";
    const iconStyle = "mr-3";
export default function Estadiscas() {


    const { data, setData } = useContext(DataContext);
    const token = localStorage.getItem('authToken');

    useEffect(() => {
        if(!data.bolos){
            fetch('https://yeray.informaticamajada.es/api/bolos?registros',{
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                }
            })
            .then(response => response.json())
            .then(datos => setData({...data, bolos:datos}))
            .catch(error => console.error(error));
        }

    }, []);

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

