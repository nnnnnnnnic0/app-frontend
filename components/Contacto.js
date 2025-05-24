// components/Contacto.js
import { motion } from 'framer-motion'

export default function Contacto() {
    return (
        <motion.section
            id="contacto"
            className="py-20 bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-500 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">¿Listo para mejorar tu tecnología o tu presencia online?</h2>
                <p className="mb-8 text-lg">Agenda tu asesoría gratuita o cotiza tu web personalizada.</p>
                <a href="mailto:tuemail@tudominio.com"
                    className="inline-block px-12 py-4 bg-white text-blue-800 font-semibold rounded-2xl shadow hover:bg-blue-200 transition text-lg">
                    Contáctanos Ahora
                </a>
                <div className="mt-6">
                    <a href="https://wa.me/56966487992" target="_blank"
                        className="inline-flex items-center px-8 py-2 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 transition">
                        <span className="mr-2">💬</span> Whatsapp Directo
                    </a>
                </div>
            </div>
        </motion.section>
    );
}
