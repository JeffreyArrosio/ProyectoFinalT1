import React, { useState } from 'react';

const ConfirmationModal = ({
    isOpen,
    onClose,
    onConfirm,
    title,
    message
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
                <div className="mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                    <p className="text-gray-600 mt-2">{message}</p>
                </div>
                <div className="flex justify-end space-x-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                    >
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
