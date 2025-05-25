// components/Hero.js
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section
            className="bg-gradient-to-br from-blue-800 via-indigo-700 to-purple-600 pt-20 pb-16 md:py-32 text-white text-center relative overflow-hidden"
            id="inicio"
        >
            <div className="container mx-auto relative z-10 px-4">
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow mb-6 leading-tight"
                >
                    Soluciones TI y Web <br />
                    <span className="text-blue-300">para crecer sin límites</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="text-base xs:text-lg sm:text-xl mb-8 font-medium drop-shadow"
                >
                    Soporte experto y desarrollo de páginas web<br />
                    Para hogares, pymes y empresas.
                </motion.p>
                <motion.a
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    href="#contacto"
                    className="inline-block w-full sm:w-auto px-8 py-4 bg-white text-blue-800 font-semibold text-lg rounded-2xl shadow-lg hover:bg-blue-300 hover:text-white transition"
                >
                    ¡Cotiza tu solución ahora!
                </motion.a>
            </div>
            {/* Decorativo, siempre fuera de foco y no cubre nada importante */}
            <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 1.2 }}
                className="absolute -top-40 -right-36 xs:-top-36 xs:-right-32 w-72 h-72 xs:w-80 xs:h-80 sm:w-96 sm:h-96 bg-purple-400 opacity-20 rounded-full blur-2xl animate-pulse z-0"
            />
        </section>
    )
}
