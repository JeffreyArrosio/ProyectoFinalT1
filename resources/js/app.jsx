import { React, useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Login from './components/Login';
import '../css/app.css';
import '../css/tailwind.css'
import HacerRegistro from './pages/HacerRegistro';
import Qr from './pages/Qr';
import Codigo from './pages/Codigo';
import IntroducirRegistro from './pages/IntroducirRegistro';
import Estadisticas from './pages/Estadisticas';
import Sustratos from './pages/Sustratos';
import Sustrato from './pages/Sustrato';
import { DataProvider } from './DataContext';
window.compostera = []

function App() {

    return (
        <DataProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />

                        <Route path="hacerregistro" element={<HacerRegistro />} />
                        <Route path="hacerregistro/qr" element={<Qr />} />
                        <Route path="hacerregistro/codigo" element={<Codigo />} />
                        <Route path="hacerregistro/:code" element={<IntroducirRegistro />} />

                        <Route path="estadisticas" element={<Estadisticas />} />
                        <Route path="estadisticas/sustratos" element={<Sustratos />} />
                        <Route path="estadisticas/sustratos/:code" element={<Sustrato />} />

                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </DataProvider>
    );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
