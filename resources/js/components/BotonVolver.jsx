import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function  BotonVolver () {
  const navigate = useNavigate();
  const iconStyle = "mr-3";


  const handleBack = () => {
    navigate(-1); // Navigate to previous route
  };

    return (
    
      <button 
      onClick={handleBack} 
      className="fixed bottom-4 left-4 right-4 flex items-center justify-center py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
    >
      <ArrowLeft className={iconStyle} size={24} />
      Volver
    </button>
    
    );
  };

