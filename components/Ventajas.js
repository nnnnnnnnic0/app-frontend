// components/Ventajas.js
import { motion } from 'framer-motion'

const mainVentajas = [
    {
        titulo: "Respuesta Rápida",
        icono: (
            <svg width="42" height="42" fill="none">
                <path d="M20 6L10 27h10l-2 9 14-18h-10l2-12z"
                    fill="#2563eb"
                    stroke="#38bdf8" strokeWidth="2"
                    strokeLinejoin="round"
                />
            </svg>
        )
    },
    {
        titulo: "Atención Personalizada",
        icono: (
            <svg width="42" height="42" fill="none">
                <path d="M11 27l7 7c2 2 6 2 8 0l7-7"
                    stroke="#fb923c" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M10 18c0-4 4-6 8-6h6c4 0 8 2 8 6"
                    stroke="#2563eb" strokeWidth="2.1" />
            </svg>
        )
    },
    {
        titulo: "Confianza y Seguridad",
        icono: (
            <svg width="42" height="42" fill="none">
                <rect x="12" y="20" width="18" height="14" rx="6" fill="#64748b" />
                <rect x="16" y="15" width="10" height="7" rx="3.5" fill="#fff" />
                <rect x="19" y="28" width="4" height="6" rx="2" fill="#2563eb" />
            </svg>
        )
    },
    {
        titulo: "Soluciones a tu Medida",
        icono: (
            <svg width="42" height="42" fill="none">
                <ellipse cx="21" cy="22" rx="11" ry="13" fill="#38bdf8" />
                <rect x="17" y="32" width="8" height="4" rx="2" fill="#fb923c" />
                <rect x="18.5" y="36" width="5" height="2" rx="1" fill="#2563eb" />
            </svg>
        )
    }
];

const extraVentajas = [
    {
        texto: "AWS Cloud",
        icono: (
            <svg width="24" height="24" fill="none">
                <ellipse cx="12" cy="13" rx="9" ry="7" fill="#2563eb" />
                <ellipse cx="12" cy="16" rx="7" ry="4" fill="#38bdf8" />
            </svg>
        ),
    },
    {
        texto: "Dashboards y Análisis",
        icono: (
            <svg width="24" height="24" fill="none">
                <rect x="3" y="14" width="3" height="6" rx="1.5" fill="#22c55e" />
                <rect x="8.5" y="10" width="3" height="10" rx="1.5" fill="#2563eb" />
                <rect x="14" y="7" width="3" height="13" rx="1.5" fill="#fb923c" />
            </svg>
        ),
    },
    {
        texto: "Automatización",
        icono: (
            <svg width="24" height="24" fill="none">
                <circle cx="12" cy="12" r="9" fill="#64748b" />
                <path d="M16 8l-8 8M8 8l8 8" stroke="#fff" strokeWidth="1.8" />
            </svg>
        ),
    },
    {
        texto: "Soporte Local y Remoto",
        icono: (
            <svg width="24" height="24" fill="none">
                <circle cx="12" cy="12" r="9" fill="#2563eb" />
                <ellipse cx="12" cy="15.5" rx="4.5" ry="2.5" fill="#38bdf8" />
                <circle cx="12" cy="10" r="3" fill="#fff" />
            </svg>
        ),
    },
    {
        texto: "Correo & Dominio Pro",
        icono: (
            <svg width="24" height="24" fill="none">
                <rect x="3" y="7" width="18" height="10" rx="3" fill="#fff" stroke="#2563eb" strokeWidth="1.5" />
                <path d="M3 7l9 7 9-7" stroke="#38bdf8" strokeWidth="1.3" fill="none" />
            </svg>
        ),
    },
    {
        texto: "Precios Flexibles",
        icono: (
            <svg width="24" height="24" fill="none">
                <ellipse cx="12" cy="13" rx="8" ry="5" fill="#22c55e" />
                <path d="M12 9v8" stroke="#2563eb" strokeWidth="1.7" />
            </svg>
        ),
    },
    {
        texto: "Integraciones fáciles",
        icono: (
            <svg width="24" height="24" fill="none">
                <circle cx="12" cy="12" r="9" fill="#fb923c" />
                <rect x="8" y="8" width="8" height="8" rx="3" fill="#fff" />
            </svg>
        ),
    },
    {
        texto: "Capacitación & Postventa",
        icono: (
            <svg width="24" height="24" fill="none">
                <ellipse cx="12" cy="15" rx="7" ry="3" fill="#64748b" />
                <circle cx="12" cy="8" r="5" fill="#2563eb" />
                <circle cx="12" cy="8" r="2.5" fill="#fff" />
            </svg>
        ),
    }
];

export default function Ventajas() {
    return (
        <section className="py-10 bg-white">
            <div className="container mx-auto px-2">
                {/* Ventajas principales */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    {mainVentajas.map((v, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.13 }}
                            className="flex flex-col items-center text-center bg-blue-50 rounded-2xl py-8 px-4 shadow hover:shadow-lg transition"
                        >
                            <span className="mb-3">{v.icono}</span>
                            <span className="text-lg md:text-xl font-bold text-altiblue">{v.titulo}</span>
                        </motion.div>
                    ))}
                </div>
                {/* Ventajas extendidas */}
                <div className="mt-3">
                    <h3 className="text-center text-altiblue font-semibold text-base md:text-lg mb-4">
                        Más ventajas de elegir <span className="font-bold text-altiblue">AltiCloud</span>…
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 text-xs sm:text-sm md:text-base text-altigray font-semibold">
                        {extraVentajas.map((v, idx) => (
                            <div key={idx} className="flex items-center gap-2 justify-center bg-blue-50 rounded-xl py-2 px-3 shadow-sm hover:bg-blue-100">
                                <span className="flex-shrink-0">{v.icono}</span>
                                <span>{v.texto}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
