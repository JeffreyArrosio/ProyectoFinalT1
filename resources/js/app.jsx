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


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="contact" element={<Contact />} />

                    <Route path="hacerregistro" element={<HacerRegistro />} />
                    <Route path="hacerregistro/qr" element={<Qr />} />
                    <Route path="hacerregistro/codigo" element={<Codigo />} />
                    <Route path="hacerregistro/:code" element={<IntroducirRegistro />} />
                    
                    <Route path="*" element={<NoPage />} />
                </Route>
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);