// components/Testimonios.js
import { motion } from 'framer-motion'

export default function Testimonios() {
    return (
        <section className="py-12 bg-blue-50">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-8 text-blue-800">Lo que opinan nuestros clientes</h2>
                <div className="flex flex-col md:flex-row justify-center gap-8">
                    {[{
                        texto: '"Excelente servicio, resolvieron todos mis problemas tecnológicos rápido y sin complicaciones."',
                        autor: '— Juan P., PYME'
                    }, {
                        texto: '"Mi página web quedó increíble, ahora recibo más clientes. 100% recomendados."',
                        autor: '— María C., Emprendedora'
                    }].map((testimonio, idx) => (
                        <motion.blockquote
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.3 }}
                            className="bg-white shadow rounded-xl p-6 max-w-sm mx-auto"
                        >
                            <p className="mb-4 text-gray-700">{testimonio.texto}</p>
                            <span className="text-blue-600 font-bold">{testimonio.autor}</span>
                        </motion.blockquote>
                    ))}
                </div>
            </div>
        </section>
    );
}
