// components/Hero.js
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section
            className="bg-gradient-to-br from-blue-800 via-indigo-700 to-purple-600 py-32 text-white text-center relative overflow-hidden"
            id="inicio"
        >
            <div className="container mx-auto z-10 relative">
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-5xl md:text-6xl font-bold drop-shadow mb-6"
                >
                    Soluciones TI y Web <br />
                    <span className="text-blue-300">para crecer sin límites</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="text-xl mb-8 font-medium drop-shadow"
                >
                    Soporte experto y desarrollo de páginas web<br />
                    Para hogares, pymes y empresas.
                </motion.p>
                <motion.a
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    href="#contacto"
                    className="inline-block px-10 py-4 bg-white text-blue-800 font-semibold text-lg rounded-2xl shadow-lg hover:bg-blue-300 hover:text-white transition"
                >
                    ¡Cotiza tu solución ahora!
                </motion.a>
            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 1.2 }}
                className="absolute -top-24 -right-32 w-96 h-96 bg-purple-400 opacity-20 rounded-full blur-2xl animate-pulse z-0"
            />
        </section>
    )
}
