// components/Contacto.js
import { motion } from 'framer-motion'

export default function Contacto() {
    return (
        <motion.section
            id="contacto"
            className="py-14 bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-500 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <div className="container mx-auto px-2 text-center">
                <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold mb-4 leading-snug">
                    ¿Listo para mejorar tu tecnología o tu presencia online?
                </h2>
                <p className="mb-7 text-base sm:text-lg">
                    Agenda tu asesoría gratuita o cotiza tu web personalizada.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="mailto:tuemail@tudominio.com"
                        className="w-full sm:w-auto px-8 py-4 bg-white text-blue-800 font-semibold rounded-2xl shadow hover:bg-blue-200 transition text-lg text-center"
                    >
                        Contáctanos Ahora
                    </a>
                    <a
                        href="https://wa.me/56966487992" target="_blank" rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white rounded-2xl font-bold hover:bg-green-600 transition text-lg"
                    >
                        <span className="mr-2">💬</span> Whatsapp Directo
                    </a>
                </div>
            </div>
        </motion.section>
    );
}
