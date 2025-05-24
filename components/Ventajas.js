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
        <section className="py-14 bg-white">
            <div className="container mx-auto flex flex-wrap justify-center gap-10">
                {ventajas.map((v, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.15 }}
                        className="flex flex-col items-center w-52"
                    >
                        <span className="text-5xl mb-3">{v.icono}</span>
                        <span className="text-xl font-semibold text-blue-800">{v.titulo}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
