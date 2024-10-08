import React from 'react';
import { toast } from 'react-toastify';

function FormEquipo({ nextStep, handleChange, values, prevStep }) {

    function handleNext() {
        const form = document.getElementById("formEquipo");

        if (values.equipo_a_adquirir.length > 50) {
            toast.error("El nombre del equipo no puede exceder los 50 caracteres.");
            return;
        }

        if (!/^\d{15}$/.test(values.imei)) {
            toast.error("El IMEI debe contener exactamente 15 dígitos.");
            return;
        }

        if (form.checkValidity()) {
            nextStep();
        } else {
            form.reportValidity(); // Muestra mensajes de error nativos del navegador
        }
    }

    return (
        <div className='flex justify-center w-full px-4 md:px-8 lg:px-16'>
            <form id='formEquipo' className='dark:shadow-custom shadow-2xl mt-5 mb-12 max-w-xl rounded-xl p-5 px-12 w-full max-w-4xl' onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-10">
                    <h1 className="text-xl w-full md:w-96 text-left mt-4 font-semibold">Registro del Equipo</h1>

                    <div className="text-left">
                        <label htmlFor="equipo_a_adquirir" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                            Equipo a adquirir
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="equipo_a_adquirir"
                                id="equipo_a_adquirir"
                                value={values.equipo_a_adquirir || ''}
                                onChange={handleChange}
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                required
                                maxLength="50" // Limitar la longitud a 50 caracteres
                            />
                        </div>
                    </div>

                    <div className="text-left">
                        <label htmlFor="imei" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                            IMEI
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="imei"
                                id="imei"
                                value={values.imei || ''}
                                onChange={handleChange}
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                required
                                pattern="^\d{15}$"
                                minLength="15"
                                maxLength="15"
                                title="El IMEI debe contener exactamente 15 dígitos."
                            />
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <button type="button" onClick={prevStep} className="rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white">
                            Anterior
                        </button>
                        <button type="button" onClick={handleNext} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white">
                            Siguiente
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FormEquipo;
