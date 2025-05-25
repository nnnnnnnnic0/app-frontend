// components/Testimonios.js
import { motion } from 'framer-motion'

const testimonios = [
    {
        texto: '"Excelente servicio, resolvieron todos mis problemas tecnológicos rápido y sin complicaciones."',
        autor: '— Juan P., PYME'
    },
    {
        texto: '"Mi página web quedó increíble, ahora recibo más clientes. 100% recomendados."',
        autor: '— María C., Emprendedora'
    }
];

export default function Testimonios() {
    return (
        <section className="py-10 bg-blue-50">
            <div className="container mx-auto px-2 text-center">
                <h2 className="text-xl sm:text-2xl font-bold mb-8 text-blue-800">Lo que opinan nuestros clientes</h2>
                <div className="
                    flex flex-col items-center gap-6
                    sm:flex-row sm:justify-center sm:gap-8
                ">
                    {testimonios.map((testimonio, idx) => (
                        <motion.blockquote
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.3 }}
                            className="
                                bg-white shadow-lg rounded-2xl p-6 max-w-xs w-full
                                sm:max-w-sm sm:w-96 text-left
                            "
                        >
                            <p className="mb-4 text-gray-700 text-base sm:text-lg">{testimonio.texto}</p>
                            <span className="text-blue-600 font-bold text-sm">{testimonio.autor}</span>
                        </motion.blockquote>
                    ))}
                </div>
            </div>
        </section>
    );
}
