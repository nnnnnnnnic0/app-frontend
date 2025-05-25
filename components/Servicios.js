// components/Servicios.js
import { motion } from 'framer-motion'
import Link from 'next/link'

const servicios = [
    {
        titulo: "Soporte TI Especializado",
        descripcion: "Instalación, reparación y asesoría tecnológica para hogares, pymes y empresas. Respuesta rápida y soluciones a medida.",
        icono: "🖥️",
        cta: "Solicitar Soporte",
        link: "#contacto",
    },
    {
        titulo: "Mantenimiento y Seguridad Informática",
        descripcion: "Soluciones de respaldo, antivirus y soporte preventivo para mantener tus sistemas protegidos.",
        icono: "🔒",
        cta: "Solicitar Seguridad",
        link: "#contacto",
    },
    {
        titulo: "Crea tu Web Profesional",
        descripcion: "Lleva tu negocio al siguiente nivel con una página web moderna, autoadministrable y optimizada para clientes.",
        icono: "🌐",
        cta: "Crear mi Web",
        link: "/demos/crea-tu-web",
    },
];

export default function Servicios() {
    return (
        <section id="servicios" className="py-12 bg-gray-50">
            <div className="container mx-auto px-2">
                <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold mb-8 text-center text-blue-800">Nuestros Servicios</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicios.map((s, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: idx * 0.2 }}
                            className="bg-white shadow-xl rounded-2xl p-7 flex flex-col items-center text-center border-t-4 border-blue-700 hover:shadow-blue-200 transition"
                        >
                            <div className="text-5xl mb-4">{s.icono}</div>
                            <h3 className="text-xl md:text-2xl font-bold mb-2">{s.titulo}</h3>
                            <p className="text-gray-700 mb-6 text-base">{s.descripcion}</p>
                            {s.link.startsWith('/') ? (
                                <Link href={s.link} legacyBehavior>
                                    <a className="w-full sm:w-auto px-6 py-3 bg-blue-800 text-white rounded-lg font-semibold hover:bg-blue-600 transition block text-center text-lg">
                                        {s.cta}
                                    </a>
                                </Link>
                            ) : (
                                <a
                                    href={s.link}
                                    className="w-full sm:w-auto px-6 py-3 bg-blue-800 text-white rounded-lg font-semibold hover:bg-blue-600 transition block text-center text-lg"
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
