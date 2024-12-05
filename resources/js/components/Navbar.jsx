import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(){
    return(
        <nav className="bg-green-600 shadow-md absolute w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <h1 className="text-white text-lg font-bold">
                        🌱 EcoGavia
                    </h1>
                </div>

                {/* Menú */}
                <ul className="hidden md:flex space-x-4">
                    <li>
                        <Link
                            to="/"
                            className="text-white hover:text-green-200 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/blogs"
                            className="text-white hover:text-green-200 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Blogs
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="text-white hover:text-green-200 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/login"
                            className="text-white hover:text-green-200 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Login
                        </Link>
                    </li>
                </ul>

                {/* Menú móvil (opcional, para pantallas pequeñas) */}
                <div className="md:hidden">
                    <button
                        type="button"
                        className="text-white hover:text-green-200 focus:outline-none focus:ring-2 focus:ring-white"
                    >
                        {/* Icono de menú hamburguesa */}
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>

                </div>
            </div>
        </div>
    </nav>
);
}
