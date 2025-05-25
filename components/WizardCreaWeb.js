// /components/WizardCreaWeb.js

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PreviewLanding from "./PreviewLanding";
import ConfettiCelebration from "./ConfettiCelebration";
import TagsInput from "./TagsInput";

const pasos = [/* ...igual que tienes... */];

export default function WizardCreaWeb() {
    // ...igual que tu lógica...

    // Onboarding UX animación
    if (step < 0) return (
        <motion.div
            className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-50 px-3"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        >
            <motion.div className="bg-white p-7 sm:p-10 rounded-2xl shadow-xl flex flex-col items-center w-full max-w-sm sm:max-w-md"
                initial={{ scale: 0.96 }} animate={{ scale: 1 }} transition={{ duration: 0.8, type: "spring" }}>
                <span className="text-5xl mb-2">👋</span>
                <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-2 text-center">¡Bienvenido a tu Generador Web!</h2>
                <div className="mb-4 text-blue-700 text-center max-w-xs">
                    Te guiamos paso a paso para crear la página ideal para tu negocio.<br />Responde solo lo necesario y ¡verás cómo tu web cobra vida en la vista previa! 🚀
                </div>
                <motion.div
                    className="w-full bg-blue-200 rounded-full h-3 mb-3"
                    initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.3 }}
                >
                    <motion.div
                        className="bg-blue-700 h-3 rounded-full"
                        initial={{ width: 0 }} animate={{ width: "30%" }} transition={{ duration: 1.3 }}
                    />
                </motion.div>
                <button
                    onClick={() => setStep(0)}
                    className="w-full px-8 py-3 bg-blue-700 text-white rounded-lg font-bold shadow hover:bg-blue-800 transition mt-2"
                >
                    ¡Comenzar!
                </button>
            </motion.div>
        </motion.div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-50 to-white flex flex-col md:flex-row items-start justify-center py-8 px-3">
            <ConfettiCelebration show={confetti} />

            {/* Formulario wizard */}
            <div className="w-full md:w-1/2 max-w-xl bg-white shadow-xl rounded-2xl p-4 sm:p-8 relative mb-8 md:mb-0">
                {/* Progress bar */}
                <div className="mb-6 sm:mb-8">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-blue-800 font-bold text-base sm:text-lg">
                            Paso {Math.max(1, step + 1)} de {pasos.length}
                        </span>
                        <span className="text-blue-700 text-xs sm:text-sm">{progress}%</span>
                    </div>
                    <div className="w-full bg-blue-100 rounded-full h-2">
                        <motion.div
                            className="bg-blue-700 h-2 rounded-full transition-all"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.7 }}
                        />
                    </div>
                </div>
                {/* Pregunta + ayuda + feedback + tooltip */}
                <AnimatePresence mode="wait">
                    {step < pasos.length ? (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -60 }}
                            transition={{ duration: 0.4 }}
                        >
                            <label className="block text-base sm:text-lg mb-3 text-blue-900 font-bold flex items-center gap-2">
                                <span className="text-xl sm:text-2xl">{pasos[step].emoji}</span>
                                {pasos[step].label}
                            </label>
                            <div className="text-gray-500 mb-2 text-sm">{pasos[step].ayuda}</div>
                            {renderCampo(pasos[step])}
                            {/* Micro-feedback UX */}
                            {pasos[step].obligatorio && (
                                !form[pasos[step].nombre] ||
                                (Array.isArray(form[pasos[step].nombre]) && form[pasos[step].nombre].length === 0)
                            ) && (
                                    <motion.div
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                        className="text-red-600 text-sm mt-2"
                                    >
                                        Este campo es importante para que tu web sea única 😊
                                    </motion.div>
                                )}
                            {/* Tooltip si se detiene el usuario */}
                            {showTooltip && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                    className="mt-4 p-2 bg-blue-100 text-blue-800 text-xs rounded-xl shadow"
                                >
                                    {pasos[step].emoji} ¿Necesitas inspiración? Mira el ejemplo y responde con lo primero que se te ocurra. ¡Todo ayuda!
                                </motion.div>
                            )}
                            <div className="flex flex-col sm:flex-row justify-between mt-8 gap-2">
                                <button
                                    onClick={atras}
                                    disabled={step === 0}
                                    className="w-full sm:w-auto px-5 py-2 bg-gray-200 rounded-lg font-semibold hover:bg-gray-300 transition disabled:opacity-50"
                                >
                                    Atrás
                                </button>
                                <div className="flex gap-2 mt-2 sm:mt-0">
                                    {!pasos[step].obligatorio && (
                                        <button
                                            onClick={saltar}
                                            className="w-full sm:w-auto px-5 py-2 bg-yellow-100 text-yellow-800 rounded-lg font-semibold hover:bg-yellow-200 transition"
                                        >
                                            Saltar
                                        </button>
                                    )}
                                    <button
                                        onClick={siguiente}
                                        disabled={
                                            pasos[step].obligatorio &&
                                            (form[pasos[step].nombre] === undefined ||
                                                form[pasos[step].nombre] === "" ||
                                                (Array.isArray(form[pasos[step].nombre]) && form[pasos[step].nombre].length === 0))
                                        }
                                        className="w-full sm:w-auto px-5 py-2 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition disabled:opacity-50"
                                    >
                                        Siguiente
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="resumen"
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-blue-800 flex items-center gap-2">🎉 ¡Así quedaría tu web!</h2>
                            <div className="text-gray-600 mb-4 text-sm sm:text-base">
                                Si quieres que hagamos tu sitio realidad, haz clic aquí o contáctanos.<br />¡Nos encanta ayudar a crecer negocios como el tuyo!
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between mt-8 gap-2">
                                <button
                                    onClick={() => setStep(0)}
                                    className="w-full sm:w-auto px-5 py-2 bg-gray-200 rounded-lg font-semibold hover:bg-gray-300 transition"
                                >
                                    Completar o revisar respuestas
                                </button>
                                <a
                                    href="/#contacto"
                                    className="w-full sm:w-auto px-8 py-3 bg-blue-700 text-white rounded-lg font-bold shadow hover:bg-blue-800 transition text-center"
                                >
                                    ¡Quiero mi sitio web!
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="text-xs sm:text-sm text-gray-400 mt-3 text-center max-w-lg">
                    ¿Dudas? Completa solo lo que quieras, y juntos crearemos una web profesional que te hará destacar.<br />🚀
                </div>
            </div>
            {/* Sidebar Preview, en mobile va debajo */}
            <div className="w-full md:w-1/2 md:pl-10 flex flex-col items-center mt-8 md:mt-0">
                <div className="mb-2 text-blue-800 font-bold text-base sm:text-lg hidden md:block">Vista previa en tiempo real</div>
                <PreviewLanding data={form} />
            </div>
        </div>
    );
}
