import React, { useState, useEffect, useContext } from 'react';
import { Pointer, Check, Cuboid , ArrowLeft } from 'lucide-react';
import BotonVolver from '../components/BotonVolver';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataContext';
import { useNavigate } from 'react-router-dom';


export default function Codigo() {

    const navigate = useNavigate();
    const { data, setData } = useContext(DataContext);
    const [composterasMasBolo, setComposterasMasBolo] = useState([]);
    const [cargadoTodo, setCargadoTodo] = useState(false);


    useEffect(() => {
        const fetchData = async () => {

            try {
                if (!data.composteras) {
                    const response = await fetch(`${data.url}/api/composteras`);
                    const datos = await response.json();
                    setData((prevData) => ({ ...prevData, composteras: datos }));
                }

                if (!data.bolos) {
                    const response = await fetch(`${data.url}/api/bolos?registros`);
                    const datos = await response.json();
                    setData((prevData) => ({ ...prevData, bolos: datos }));
                }
            } catch (error) {
                console.error(error);
            } finally {
                setCargadoTodo(true);
            }


            let composteras = data.composteras?.data; // Usar encadenamiento opcional
            let bolosNoTerminados = data.bolos?.filter((ciclo) => ciclo.terminado == 0);

            let ciclosNoTerminados = bolosNoTerminados?.flatMap((bolo) =>
                bolo.ciclos.filter((ciclo) => ciclo.terminado === 0)
            );

            if (!composteras) {
                return <div>Cargando datos...</div>; // Mostrar un indicador de carga mientras no haya datos
            }

            if(cargadoTodo){
            let composterasMasBolo = composteras && composteras.map((compostera) => {
                let ciclo = ciclosNoTerminados.find((ciclo) => ciclo.composteras_id == compostera.id);
                if (ciclo) {

                    return {
                        compostera_id: compostera.id,
                        tipo: compostera.tipo,
                        bolo: {
                            ciclo_id: ciclo.id,
                            bolo_id: ciclo.bolos_id,
                            fecha_inicio: new Date(ciclo.fecha_inicio)
                                .toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }),
                            registros: ciclo.registros
                        }
                    }
                } else {
                    return {
                        compostera_id: compostera.id,
                        tipo: compostera.tipo,
                    }
                }
            })

            setComposterasMasBolo(composterasMasBolo);
        }
        };

        fetchData();
    }, [cargadoTodo]);
    // console.log(composterasMasBolo);


    const descartarbolo = (e) => {
        e.preventDefault();

        let id = e.target.name;

        try {
            fetch(`${data.url}/api/ciclos/${id}?descartarbolo` , {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                //   'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                },
                body: JSON.stringify({
                _method: 'PUT',
                id: id
                })
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error(error));

                limpiarBolosData();
                navigate('/hacerregistro/codigo');

        } catch (error) {
            console.error(error);
        }

    }

    const crearBolo = (e) => {
        e.preventDefault();
        try {
            fetch(`${data.url}/api/bolos?nuevobolo`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                //   'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                },
                body: JSON.stringify({
                _method: 'POST',
                })
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error(error));

                limpiarBolosData() ;
                navigate('/hacerregistro/codigo');

        } catch (error) {
            console.error(error);
        };
    }


    const terminarCiclo = (e) => {
        e.preventDefault();
        let id = e.target.name;
        try {
            fetch(`${data.url}/api/ciclos/${id}?terminarciclo`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                //   'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                },
                body: JSON.stringify({
                _method: 'PUT',
                id: id
                })
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error(error));

                limpiarBolosData() ;
                navigate('/hacerregistro/codigo');

        } catch (error) {
            console.error(error);
        };
    }


    function limpiarBolosData() {
        setCargadoTodo(false);
        let eliminarBolos = data;
        delete eliminarBolos.bolos;
        setData(eliminarBolos);
    }

    const handleBack = () => {
        navigate('/'); // Navigate to previous route
    };


    return (

        // <div></div>
        <div className="min-h-screen bg-green-100 flex items-center justify-center">
            <div className="p-4 space-y-4 mt-16 mb-16">
                {/* Mostrar composteras por api */}

                {composterasMasBolo.map((compostera, index) => (
                    <div id={compostera.id} key={index} className="bg-white border border-green-300 rounded-lg p-4 shadow-sm ">
                        <div className="w-full flex items-center justify-start px-4 py-3 mb-3 bg-white flex flex-row justify-center text-green-700 ">
                            <Cuboid className="mr-3 " size={24} />
                            <label className="block text-green-700 mb-2 text-xl">
                                Compostera {compostera.tipo}
                            </label>
                        </div>

                        {
                            compostera.bolo ? (
                                <div className="text-green-900 grid grid-cols-3 gap-4 items-center mt-3">
                                    <div className="flex flex-col items-center">
                                        <span className="font-semibold text-green-600">Sustrato:</span>
                                        <p>{compostera.bolo.bolo_id}</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <span className="font-semibold text-green-600">Fecha de inicio:</span>
                                        <p>{
                                            compostera.bolo.fecha_inicio}</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <span className="font-semibold text-green-600">Registros:</span>
                                        <p>{compostera.bolo.registros.length}</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-green-900 flex flex-col items-center">
                                    <p>Sin sustrato</p>
                                </div>
                            )}


                        <div className="flex items-center justify-center mt-5">
                            {
                                !compostera.bolo && compostera.tipo == '11' ? (
                                        <button onClick={crearBolo} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                            Nuevo Sustrato
                                        </button>
                                ) : (
                                    compostera.bolo &&
                                    <div>

                                        <Link to={`/hacerregistro/${compostera.bolo.ciclo_id && compostera.bolo.ciclo_id}`}
                                            >
                                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                                Realizar Registro
                                            </button>
                                        </Link>

                                        <form onSubmit={terminarCiclo} name={compostera.bolo.ciclo_id && compostera.bolo.ciclo_id}
                                            action={`/api/ciclos/${compostera.bolo.ciclo_id && compostera.bolo.ciclo_id}`}
                                            className="inline-block bg-yellow-600  hover:bg-yellow-700 text-white text-green-800 font-bold py-2 px-4 rounded ml-3">
                                            <button  type="submit">
                                                Terminar Ciclo
                                            </button>
                                        </form>


                                        <form onSubmit={descartarbolo} name={compostera.bolo.ciclo_id && compostera.bolo.ciclo_id}
                                            action={`/api/ciclos/${compostera.bolo.ciclo_id && compostera.bolo.ciclo_id}`}
                                            className="inline-block bg-red-300 hover:bg-red-700 hover:text-white text-green-800 font-bold py-2 px-4 rounded ml-3">
                                            <button type="submit">
                                                Descartar
                                            </button>
                                        </form>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                ))}

            </div>
            <button
            onClick={handleBack}
            className="fixed bottom-4 left-4 right-4 flex items-center justify-center py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
            <ArrowLeft className= "mr-3" size={24} />
            Volver
        </button>
        </div>
    );
}
