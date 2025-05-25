import { motion } from 'framer-motion';
import Link from 'next/link';

const servicios = [
    {
        titulo: "Soporte TI Especializado",
        descripcion: "Instalación, reparación y asesoría tecnológica para hogares, pymes y empresas. Respuesta rápida y soluciones a medida.",
        icono: (
            // Monitor SVG
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="12" rx="2.5" fill="#2563eb" />
                <rect x="5.5" y="7.5" width="13" height="7" rx="1.5" fill="#fff" />
                <rect x="9" y="19" width="6" height="2" rx="1" fill="#38bdf8" />
            </svg>
        ),
        cta: "Solicitar Soporte",
        link: "#contacto",
    },
    {
        titulo: "Mantenimiento & Seguridad",
        descripcion: "Respaldo, antivirus, prevención y protección avanzada para tus sistemas y datos.",
        icono: (
            // Shield SVG
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
                <path d="M12 3l7 4v5c0 5.25-3.5 9-7 10-3.5-1-7-4.75-7-10V7l7-4z" fill="#64748b" />
                <path d="M12 15l3-3-1.5-1.5L12 12l-1.5-1.5L9 12l3 3z" fill="#fff" />
            </svg>
        ),
        cta: "Solicitar Seguridad",
        link: "#contacto",
    },
    {
        titulo: "Crea tu Web Profesional",
        descripcion: "Lleva tu negocio al siguiente nivel con una web moderna y autoadministrable.",
        icono: (
            // Globe SVG
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" fill="#38bdf8" />
                <ellipse cx="12" cy="12" rx="6" ry="9" fill="#fff" />
                <path d="M3 12h18" stroke="#2563eb" strokeWidth="2" />
            </svg>
        ),
        cta: "Crear mi Web",
        link: "/demos/crea-tu-web",
    },
    {
        titulo: "Correo Institucional",
        descripcion: "Dominios y correos profesionales con AWS WorkMail y soporte para Outlook.",
        icono: (
            // Mail SVG
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="7" width="18" height="10" rx="2" fill="#2563eb" />
                <path d="M3 7l9 6 9-6" stroke="#fff" strokeWidth="2" />
            </svg>
        ),
        cta: "Solicitar Correo",
        link: "#contacto",
    },
    {
        titulo: "Dashboards y Análisis de Datos",
        descripcion: "Visualización interactiva, reportes y proyecciones a medida con Python y AWS.",
        icono: (
            // Chart SVG
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
                <rect x="4" y="15" width="3" height="5" rx="1" fill="#22c55e" />
                <rect x="10.5" y="9" width="3" height="11" rx="1" fill="#2563eb" />
                <rect x="17" y="4" width="3" height="16" rx="1" fill="#fb923c" />
            </svg>
        ),
        cta: "Ver Demos",
        link: "#contacto",
    },
    {
        titulo: "Automatización & Digitalización",
        descripcion: "Transforma tareas manuales en procesos automáticos y digitales en tu negocio.",
        icono: (
            // Robot/Automation SVG
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
                <rect x="6" y="9" width="12" height="8" rx="4" fill="#38bdf8" />
                <circle cx="8.5" cy="13" r="1" fill="#fff" />
                <circle cx="15.5" cy="13" r="1" fill="#fff" />
                <rect x="11" y="5" width="2" height="3" rx="1" fill="#22c55e" />
            </svg>
        ),
        cta: "Agendar Demo",
        link: "#contacto",
    },
    {
        titulo: "Consultoría en Nube AWS",
        descripcion: "Migración, optimización y asesoría personalizada para la nube más robusta.",
        icono: (
            // Cloud SVG
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
                <ellipse cx="13" cy="16" rx="7" ry="5" fill="#2563eb" />
                <ellipse cx="8" cy="18" rx="4" ry="2.5" fill="#38bdf8" />
                <ellipse cx="18" cy="17.5" rx="3" ry="2" fill="#64748b" />
            </svg>
        ),
        cta: "Consultar",
        link: "#contacto",
    },
];

export default function Servicios() {
    return (
        <section id="servicios" className="py-14 bg-altiwhite">
            <div className="container mx-auto px-3">
                <h2 className="text-3xl xs:text-4xl md:text-5xl font-black mb-12 text-center text-altiblue">
                    Nuestros Servicios
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicios.map((s, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: idx * 0.13 }}
                            className="bg-altiwhite shadow-2xl rounded-3xl p-8 flex flex-col items-center text-center border-t-4 border-altiblue hover:scale-[1.035] hover:shadow-altiblueLight/40 transition-all"
                        >
                            <div className="mb-5">{s.icono}</div>
                            <h3 className="text-xl md:text-2xl font-bold mb-2 text-altiblue">{s.titulo}</h3>
                            <p className="text-altigray mb-7 text-base">{s.descripcion}</p>
                            {s.link.startsWith('/') ? (
                                <Link href={s.link} legacyBehavior>
                                    <a className="w-full sm:w-auto px-6 py-3 bg-altiblue text-altiwhite rounded-xl font-semibold text-lg hover:bg-altiblueLight hover:text-altiblue transition block text-center shadow-md">
                                        {s.cta}
                                    </a>
                                </Link>
                            ) : (
                                <a
                                    href={s.link}
                                    className="w-full sm:w-auto px-6 py-3 bg-altiblue text-altiwhite rounded-xl font-semibold text-lg hover:bg-altiblueLight hover:text-altiblue transition block text-center shadow-md"
                                >
                                    {s.cta}
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
