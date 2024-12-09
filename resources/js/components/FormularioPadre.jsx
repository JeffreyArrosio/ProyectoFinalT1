import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { React, useState } from 'react';
import Formulariopreguntas from './Formulariopreguntas';

export default function FormularioPadre() {

    const [pregunta, setPregunta]= useState([]);
    const [idActualPregunta, setIdActualPregunta] = useState(0);

    const addQuestion = (nueva) => {
        nueva.id = idActualPregunta;
        setIdActualPregunta(idActualPregunta + 1);
        setPregunta([...pregunta, nueva]);
    };

    return (

        <Formulariopreguntas aniadePregunta={addQuestion} />
    );
}
