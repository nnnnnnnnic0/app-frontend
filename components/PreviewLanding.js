// /components/PreviewLanding.js
import { motion } from "framer-motion";
import { extraerColores } from "../utils/colorUtils";

export default function PreviewLanding({ data }) {
    const [color1, color2] = extraerColores(data.colores);
    const heroImage = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80";
    const logoLetter = data.nombre ? data.nombre[0].toUpperCase() : "M";
    let testimonios = [];
    if (data.testimonios && data.testimonios.trim()) {
        testimonios = data.testimonios.split(";").map(t => t.trim()).filter(Boolean);
    }
    return (
        <motion.div
            className="shadow-2xl rounded-2xl overflow-hidden border border-blue-100 bg-white max-w-full w-full sm:max-w-md mx-auto"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Hero */}
            <div style={{
                background: `linear-gradient(120deg, ${color1} 70%, ${color2} 100%)`,
                minHeight: 140
            }} className="relative flex flex-col items-center justify-center pb-3">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white text-blue-800 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold shadow-xl absolute -top-8 left-4 sm:left-8 border-2 border-blue-200">{logoLetter}</div>
                <img src={heroImage} alt="Hero" className="w-full h-20 sm:h-24 object-cover rounded-b-3xl opacity-80" />
                <div className="text-white font-bold text-lg sm:text-2xl mt-3 drop-shadow">{data.nombre || "Tu Empresa"}</div>
                <div className="italic text-sm sm:text-md text-white mb-2 drop-shadow">{data.eslogan || "¡Tu frase impactante aquí!"}</div>
                <div className="mt-2 text-xs sm:text-sm text-white bg-blue-700 rounded-full inline-block px-4 py-1 shadow-lg">Así lucirá tu web 😍</div>
            </div>
            {/* Cards de servicios */}
            <div className="p-3 flex flex-wrap gap-2 justify-center">
                {(data.servicios || ["Servicio destacado", "Otro servicio"]).map((s, i) => (
                    <motion.div
                        key={i}
                        className="bg-blue-50 text-blue-800 px-3 py-2 rounded-xl shadow text-xs sm:text-sm mb-2"
                        whileHover={{ scale: 1.08 }}
                    >{s}</motion.div>
                ))}
            </div>
            {/* Diferencial + Testimonios */}
            <div className="px-4 pb-2">
                {data.diferencial && (
                    <div className="bg-green-100 text-green-700 px-2 py-1 rounded-xl mb-2 text-xs font-semibold">
                        ★ {data.diferencial}
                    </div>
                )}
                {testimonios.length > 0 && (
                    <div className="mb-1">
                        <span className="text-blue-600 font-bold text-xs">Testimonios:</span>
                        <ul className="list-disc ml-4 text-xs text-gray-600">
                            {testimonios.map((t, i) => <li key={i}>“{t}”</li>)}
                        </ul>
                    </div>
                )}
            </div>
            {/* Contacto rápido */}
            <div className="px-4 pb-3">
                <div className="mt-2">
                    <span className="text-blue-700 font-semibold text-xs">Contáctanos:</span>
                    <div className="text-xs text-gray-700">
                        {(data.contacto || []).length > 0
                            ? (Array.isArray(data.contacto) ? data.contacto.join(" | ") : data.contacto)
                            : <span className="italic">WhatsApp, email, formulario...</span>
                        }
                    </div>
                    {data.redes && data.redes.length > 0 && (
                        <div className="mt-1 text-blue-600 text-xs flex flex-wrap gap-1">
                            {data.redes.map((r, i) => (
                                <span key={i} className="bg-blue-50 px-2 py-1 rounded-xl">{r}</span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            {/* Footer */}
            <div className="bg-blue-900 text-white py-2 text-center text-xs rounded-b-2xl">
                <span>¿Te imaginas tu negocio aquí? <span className="font-bold">¡Es posible!</span></span>
            </div>
        </motion.div>
    );
}
