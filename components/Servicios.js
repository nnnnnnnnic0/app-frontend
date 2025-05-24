// components/Servicios.js
import { motion } from 'framer-motion'

const servicios = [
    {
        titulo: "Soporte TI Especializado",
        descripcion: "Instalación, reparación y asesoría tecnológica para hogares, pymes y empresas. Respuesta rápida y soluciones a medida.",
        icono: "🖥️",
        cta: "Solicitar Soporte"
    },
    {
        titulo: "Desarrollo Web para Negocios",
        descripcion: "Creamos tu página web profesional, autoadministrable y optimizada para atraer clientes. ¡Destaca en internet!",
        icono: "🌐",
        cta: "Quiero mi Web"
    }
];

export default function Servicios() {
    return (
        <section id="servicios" className="py-20 bg-gray-50">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">Nuestros Servicios</h2>
                <div className="flex flex-wrap justify-center gap-10">
                    {servicios.map((s, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: idx * 0.2 }}
                            className="bg-white shadow-2xl rounded-3xl p-10 w-80 text-center border-t-4 border-blue-700 transform hover:scale-105 hover:shadow-purple-200 transition"
                        >
                            <div className="text-6xl mb-5">{s.icono}</div>
                            <h3 className="text-2xl font-bold mb-2">{s.titulo}</h3>
                            <p className="text-gray-700 mb-6">{s.descripcion}</p>
                            <a href="#contacto"
                                className="px-6 py-2 bg-blue-800 text-white rounded-lg font-semibold hover:bg-blue-600 transition">
                                {s.cta}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
