import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function BotonVerde(props) {


  return (
      <button className="mt-2 p-2 text-green-800 bg-green-100 rounded-lg ">
        {props.texto}
      </button>
  );
};

