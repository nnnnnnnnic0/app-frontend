import { motion } from "framer-motion";
import { extraerColores } from "../utils/colorUtils";

// Puedes definir variables CSS con tu paleta en tu CSS global o tailwind.config.js
// aquí simulo inline por claridad
const defaultColors = {
    azul: "#2563eb",
    celeste: "#38bdf8",
    gris: "#64748b",
    blanco: "#fff",
    verde: "#22c55e",
    naranja: "#fb923c"
};

// SVG montaña simple para el hero
function CordilleraSVG({ color1 = "#2563eb", color2 = "#38bdf8" }) {
    return (
        <svg viewBox="0 0 340 70" width="100%" height="70" aria-hidden="true" className="absolute left-0 right-0 top-0 w-full h-[70px] pointer-events-none">
            <defs>
                <linearGradient id="cordi" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor={color1} />
                    <stop offset="100%" stopColor={color2} />
                </linearGradient>
            </defs>
            <path
                d="M0 60 Q30 30 60 40 T120 38 Q140 27 160 42 Q180 61 210 36 Q220 23 235 36 Q245 44 260 40 Q290 31 340 65 L340 70 L0 70 Z"
                fill="url(#cordi)"
                opacity="0.65"
            />
        </svg>
    );
}

export default function PreviewLanding({ data }) {
    const [color1, color2] = extraerColores(data.colores);
    const heroImage = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80";
    const logoLetter = data.nombre ? data.nombre[0].toUpperCase() : "A";
    let testimonios = [];
    if (data.testimonios && data.testimonios.trim()) {
        testimonios = data.testimonios.split(";").map(t => t.trim()).filter(Boolean);
    }

    // Dynamic accent
    const accent = color1 === defaultColors.azul ? defaultColors.naranja : defaultColors.verde;

    return (
        <motion.div
            className="shadow-2xl rounded-2xl overflow-hidden border border-blue-100 bg-white max-w-full w-full sm:max-w-md mx-auto relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                // Puedes usar variables css: var(--altiblue) etc si prefieres
                fontFamily: "Inter, sans-serif"
            }}
        >
            {/* HERO area */}
            <div className="relative flex flex-col items-center justify-end pt-7 pb-2" style={{ background: `linear-gradient(120deg, ${color1} 80%, ${color2} 100%)`, minHeight: 130 }}>
                <CordilleraSVG color1={color1} color2={color2} />
                <div className="absolute left-4 sm:left-7 top-4 sm:top-5 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-white shadow-lg border-2 border-blue-200 z-10 text-blue-800 font-bold text-xl sm:text-2xl">
                    {logoLetter}
                </div>
                <img src={heroImage} alt="Hero" className="w-full h-16 sm:h-20 object-cover rounded-b-3xl opacity-80 mt-8" />
                <div className="text-white font-bold text-lg sm:text-2xl mt-2 drop-shadow">{data.nombre || "Tu Empresa"}</div>
                <div className="italic text-xs sm:text-md text-white mb-2 drop-shadow">{data.eslogan || "¡Tu frase impactante aquí!"}</div>
                <div className="mt-2 text-xs sm:text-sm text-white bg-blue-700/80 rounded-full inline-block px-4 py-1 shadow-lg">Vista previa real</div>
            </div>

            {/* Servicios cards */}
            <div className="p-3 flex flex-wrap gap-2 justify-center">
                {(data.servicios || ["Servicio destacado", "Otro servicio"]).map((s, i) => (
                    <motion.div
                        key={i}
                        className="bg-blue-50 text-blue-800 px-3 py-2 rounded-xl shadow text-xs sm:text-sm mb-2"
                        whileHover={{ scale: 1.08 }}
                    >{s}</motion.div>
                ))}
            </div>

            {/* Diferencial y testimonios */}
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
                <span>¿Te imaginas tu negocio aquí? <span className="font-bold" style={{ color: accent }}>¡Es posible!</span></span>
            </div>
        </motion.div>
    );
}
