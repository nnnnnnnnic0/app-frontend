// components/Ventajas.js
import { motion } from 'framer-motion'

const ventajas = [
    { icono: "⚡", titulo: "Respuesta Rápida" },
    { icono: "🤝", titulo: "Atención Personalizada" },
    { icono: "🔒", titulo: "Confianza y Seguridad" },
    { icono: "💡", titulo: "Soluciones a tu Medida" }
];

export default function Ventajas() {
    return (
        <section className="py-10 bg-white">
            <div className="container mx-auto px-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {ventajas.map((v, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="flex flex-col items-center text-center bg-blue-50 rounded-2xl py-8 px-4 shadow hover:shadow-lg transition"
                        >
                            <span className="text-4xl md:text-5xl mb-3">{v.icono}</span>
                            <span className="text-base sm:text-lg md:text-xl font-semibold text-blue-800">{v.titulo}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
