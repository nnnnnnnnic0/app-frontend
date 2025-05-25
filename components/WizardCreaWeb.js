import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PreviewLanding from "./PreviewLanding";
import ConfettiCelebration from "./ConfettiCelebration";
import TagsInput from "./TagsInput";

// (AQUÍ PON TU ARRAY DE PASOS como siempre)

const pasos = [
    {
        nombre: "nombre",
        label: "¿Cómo se llama tu emprendimiento o empresa? 💡",
        tipo: "text",
        placeholder: "Ej: Soluciones Digitales Chile",
        ayuda: "¡Tu nombre será la base para tu marca online!",
        obligatorio: true,
        emoji: "💡",
    },
    {
        nombre: "rubro",
        label: "¿En qué rubro trabajas? 🏢",
        tipo: "select",
        opciones: [
            "Tecnología", "Comercio", "Gastronomía", "Servicios profesionales",
            "Salud", "Educación", "Belleza", "Construcción", "Otro"
        ],
        placeholder: "Selecciona tu rubro",
        ayuda: "Esto nos ayuda a elegir los mejores textos y ejemplos.",
        obligatorio: true,
        emoji: "🏢",
    },
    {
        nombre: "objetivo",
        label: "¿Cuál es el objetivo principal de tu web? 🎯",
        tipo: "checkboxes",
        opciones: [
            "Conseguir más clientes",
            "Mostrar servicios o productos",
            "Reservas o citas online",
            "Portafolio / Proyectos",
            "Presencia institucional",
            "Otro"
        ],
        ayuda: "Puedes elegir varias opciones si quieres.",
        obligatorio: true,
        emoji: "🎯",
    },
    {
        nombre: "colores",
        label: "¿Qué colores te gustaría para tu sitio? 🎨",
        tipo: "text",
        placeholder: "Ej: Azul marino y blanco, Violeta, Dorado, etc.",
        ayuda: "¿No sabes? Déjalo en blanco y te sugerimos algo atractivo. Puedes usar nombres o HEX (ej: #ff6600).",
        obligatorio: false,
        emoji: "🎨",
    },
    {
        nombre: "eslogan",
        label: "¿Tienes una frase de bienvenida, eslogan o mensaje principal? 📝",
        tipo: "text",
        placeholder: "Ej: Tecnología a tu alcance, Haz crecer tu negocio",
        ayuda: "¡Un mensaje inspirador ayuda a conectar con tus clientes!",
        obligatorio: false,
        emoji: "📝",
    },
    {
        nombre: "descripcion",
        label: "Cuéntanos brevemente sobre tu empresa o lo que te hace especial 🚀",
        tipo: "textarea",
        placeholder: "Ej: Somos especialistas en soporte TI para empresas y hogares. 10 años de experiencia.",
        ayuda: "Este será tu mensaje principal para atraer clientes.",
        obligatorio: false,
        emoji: "🚀",
    },
    {
        nombre: "servicios",
        label: "¿Cuáles son tus servicios o productos principales? 🛠️",
        tipo: "tags",
        placeholder: "Ej: Soporte remoto, Venta de equipos, Instalación de redes…",
        ayuda: "Puedes escribir hasta 5 y presionar Enter después de cada uno.",
        obligatorio: true,
        emoji: "🛠️",
    },
    {
        nombre: "testimonios",
        label: "¿Tienes testimonios de clientes? (opcional) 💬",
        tipo: "textarea",
        placeholder: "Ej: Excelente servicio, solucionaron todo rápido.",
        ayuda: "Puedes escribir uno o varios, separados por punto y coma.",
        obligatorio: false,
        emoji: "💬",
    },
    {
        nombre: "diferencial",
        label: "¿Qué te diferencia de la competencia? 🌟",
        tipo: "text",
        placeholder: "Ej: Atención personalizada, Respuesta rápida, 10 años de experiencia",
        ayuda: "¡Destaca tu mayor valor agregado!",
        obligatorio: false,
        emoji: "🌟",
    },
    {
        nombre: "contacto",
        label: "¿Cómo prefieres que te contacten? 📱",
        tipo: "checkboxes",
        opciones: [
            "WhatsApp",
            "Email",
            "Teléfono",
            "Formulario web"
        ],
        ayuda: "¡Puedes elegir más de una opción!",
        obligatorio: true,
        emoji: "📱",
    },
    {
        nombre: "redes",
        label: "¿Redes sociales para mostrar o enlazar? 🌐",
        tipo: "tags",
        placeholder: "Ej: Facebook, Instagram, LinkedIn",
        ayuda: "Puedes escribir varias, separadas por Enter.",
        obligatorio: false,
        emoji: "🌐",
    }
];


export default function WizardCreaWeb() {
    // HOOKS y lógica SIEMPRE VAN AQUÍ AL PRINCIPIO
    const [step, setStep] = useState(-1); // Empieza en -1 para onboarding
    const [form, setForm] = useState({});
    const [saltadas, setSaltadas] = useState([]);
    const [showTooltip, setShowTooltip] = useState(false);
    const [confetti, setConfetti] = useState(false);
    const timerRef = useRef(null);

    const progress = step < 0 ? 0 : Math.round(((step + 1) / (pasos.length + 1)) * 100);

    // Tooltip UX: si usuario se detiene 8 seg en una pregunta
    useEffect(() => {
        setShowTooltip(false);
        if (step >= 0 && step < pasos.length) {
            timerRef.current = setTimeout(() => setShowTooltip(true), 8000);
        }
        return () => clearTimeout(timerRef.current);
    }, [step]);

    // Celebración final
    useEffect(() => {
        if (step === pasos.length) {
            setConfetti(true);
            setTimeout(() => setConfetti(false), 3500);
        }
    }, [step]);

    const handleChange = (valor) => {
        setForm({ ...form, [pasos[step]?.nombre]: valor });
    };
    const siguiente = () => setStep(s => Math.min(s + 1, pasos.length));
    const atras = () => setStep(s => Math.max(s - 1, 0));
    const saltar = () => {
        setSaltadas([...saltadas, pasos[step].nombre]);
        siguiente();
    };

    const renderCampo = (p) => {
        switch (p.tipo) {
            case "text":
                return (
                    <input
                        className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="text"
                        placeholder={p.placeholder}
                        value={form[p.nombre] || ""}
                        onChange={e => handleChange(e.target.value)}
                        autoFocus
                    />
                );
            case "textarea":
                return (
                    <textarea
                        className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                        rows={3}
                        placeholder={p.placeholder}
                        value={form[p.nombre] || ""}
                        onChange={e => handleChange(e.target.value)}
                    />
                );
            case "select":
                return (
                    <select
                        className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={form[p.nombre] || ""}
                        onChange={e => handleChange(e.target.value)}
                    >
                        <option value="">Selecciona...</option>
                        {p.opciones.map((op, idx) => (
                            <option value={op} key={idx}>{op}</option>
                        ))}
                    </select>
                );
            case "radio":
                return (
                    <div className="flex flex-col gap-2">
                        {p.opciones.map((op, idx) => (
                            <label key={idx} className="inline-flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    className="form-radio text-blue-600"
                                    name={p.nombre}
                                    checked={form[p.nombre] === op}
                                    onChange={() => handleChange(op)}
                                />
                                <span className="ml-2">{op}</span>
                            </label>
                        ))}
                    </div>
                );
            case "checkboxes":
                return (
                    <div className="flex flex-col gap-2">
                        {p.opciones.map((op, idx) => (
                            <label key={idx} className="inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="form-checkbox text-blue-600"
                                    checked={Array.isArray(form[p.nombre]) && form[p.nombre].includes(op)}
                                    onChange={e => {
                                        if (e.target.checked) {
                                            handleChange([...(form[p.nombre] || []), op]);
                                        } else {
                                            handleChange((form[p.nombre] || []).filter(o => o !== op));
                                        }
                                    }}
                                />
                                <span className="ml-2">{op}</span>
                            </label>
                        ))}
                    </div>
                );
            case "tags":
                return (
                    <TagsInput
                        value={form[p.nombre] || []}
                        onChange={v => handleChange(v)}
                        placeholder={p.placeholder}
                    />
                );
            default:
                return null;
        }
    };

    // *** El IF y el RETURN DEBEN IR DESPUÉS de los hooks ***
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

    // *** El RESTO DEL COMPONENTE VA AQUÍ, IGUAL QUE ANTES ***

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
