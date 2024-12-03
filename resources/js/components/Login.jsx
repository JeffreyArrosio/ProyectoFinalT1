import React from "react";

export default function Login() {
    return (
        <div className="min-h-screen bg-green-100 flex items-center justify-center">
            {/* Contenedor principal */}
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md border border-green-300">
                {/* Logo o encabezado */}
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-green-700">
                        🌱 EcoLogin
                    </h1>
                    <p className="text-sm text-green-500">
                        Conéctate y forma parte del cambio
                    </p>
                </div>

                {/* Formulario */}
                <form className="space-y-6">
                    {/* Campo de usuario */}
                    <div>
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-green-800"
                        >
                            Usuario
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            required
                            className="w-full mt-1 px-3 py-2 border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            placeholder="Introduce tu usuario"
                        />
                    </div>

                    {/* Campo de contraseña */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-green-800"
                        >
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            className="w-full mt-1 px-3 py-2 border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            placeholder="Introduce tu contraseña"
                        />
                    </div>

                    {/* Botón de inicio de sesión */}
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        Iniciar Sesión
                    </button>
                </form>

                {/* Pie del formulario */}
                <p className="mt-4 text-center text-sm text-green-600">
                    ¿No tienes cuenta?{" "}
                    <a href="#" className="font-medium text-green-700 hover:underline">
                        Regístrate aquí
                    </a>
                </p>
            </div>
        </div>
    );
}
