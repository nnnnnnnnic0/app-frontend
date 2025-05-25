import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section
            className="relative pt-20 pb-16 md:py-32 text-altiwhite text-center overflow-hidden bg-altiblue"
            id="inicio"
        >
            {/* Fondo cordillera SVG */}
            <div
                className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none"
                aria-hidden="true"
            >
                <svg
                    viewBox="0 0 1440 390"
                    className="absolute bottom-0 left-0 w-full h-auto"
                    preserveAspectRatio="none"
                >
                    {/* Cielo */}
                    <rect x="0" y="0" width="1440" height="390" fill="url(#cieloAndes)" />
                    <defs>
                        <linearGradient id="cieloAndes" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.29" />
                            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.92" />
                        </linearGradient>
                    </defs>

                    {/* Cordillera fondo (lejana) */}
                    <path
                        d="
                M0 320 
                Q 80 260 220 280
                Q 290 230 430 270
                Q 580 210 700 250
                Q 820 180 930 210
                Q 1050 140 1180 170
                Q 1280 150 1440 200
                V390 H0Z"
                        fill="#64748b"
                        fillOpacity="0.32"
                    />

                    {/* Cordillera primer plano, más picos y nevados */}
                    <path
                        d="
                M0 340 
                Q 80 300 160 330
                Q 240 270 330 320
                Q 400 250 480 300
                Q 550 230 630 270
                Q 700 210 780 255
                Q 860 180 940 240
                Q 1020 170 1120 200
                Q 1200 190 1320 220
                Q 1370 200 1440 240
                V390 H0Z"
                        fill="#fff"
                        fillOpacity="0.92"
                    />

                    {/* Sombra al pie de la montaña */}
                    <path
                        d="
                M0 390 
                Q 200 380 400 385
                Q 720 388 1440 380
                V390 H0Z"
                        fill="#2563eb"
                        fillOpacity="0.12"
                    />
                </svg>
                {/* Overlay gradiente para contraste */}
                <div className="absolute inset-0 bg-gradient-to-t from-altiblue/90 via-altiblue/30 to-transparent" />
            </div>



            <div className="container mx-auto relative z-10 px-4">
                {/* Slogan principal */}
                <motion.h1
                    initial={{ opacity: 0, y: -38 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight drop-shadow-xl"
                >
                    <span className="block mb-2 text-altiwhite drop-shadow-lg">
                        Soluciones TI & Web para tu negocio
                    </span>
                    <span className="block text-altiblueLight font-bold drop-shadow">
                        Moderniza tu empresa con tecnología y altura.
                    </span>
                </motion.h1>

                {/* Subtítulo vendedor */}
                <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="text-base xs:text-lg sm:text-xl mb-8 font-medium drop-shadow-lg text-altiwhite"
                >
                    Webs rápidas, correos profesionales, análisis de datos y soporte TI.<br className="hidden sm:inline" />
                    Todo con el respaldo de AWS y atención local en Chile.
                </motion.p>

                {/* Sello de confianza AWS */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="inline-flex items-center gap-2 bg-altiwhite text-altiblue px-4 py-1 rounded-full text-xs font-semibold shadow-lg mb-7 border border-altiblue"
                    aria-label="Potenciado por AWS Cloud y soporte local"
                >
                    <svg className="inline" width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" fill="#2563eb" fillOpacity=".13" />
                        <path d="M7 13l3 3 6-6" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Potenciado por <b>AWS Cloud</b> & Soporte local
                </motion.div>


                {/* Botones acción */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 1.12 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4"
                >
                    <a
                        href="#contacto"
                        className="w-full sm:w-auto px-8 py-4 bg-altiwhite text-altiblue font-bold text-lg rounded-2xl shadow-lg hover:bg-altiblueLight hover:text-altiwhite transition"
                    >
                        ¡Cotiza tu solución ahora!
                    </a>
                    <a
                        href="/#servicios"
                        className="w-full sm:w-auto px-8 py-4 bg-altiblueLight text-altiwhite font-bold text-lg rounded-2xl shadow-lg hover:bg-altiblue hover:text-altiblueLight transition border-2 border-altiwhite"
                    >
                        Ver servicios
                    </a>
                </motion.div>

                {/* Iconos + Servicios */}
                <motion.ul
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.24 }}
                    className="flex flex-wrap justify-center gap-3 xs:gap-4 text-sm xs:text-base font-semibold mt-3"
                >
                    <li className="flex items-center gap-2 bg-altiwhite/10 px-4 py-2 rounded-lg border border-altiwhite/20 shadow text-altiwhite">
                        <span aria-hidden="true" className="text-xl">🌐</span> Web moderna
                    </li>
                    <li className="flex items-center gap-2 bg-altiwhite/10 px-4 py-2 rounded-lg border border-altiwhite/20 shadow text-altiwhite">
                        <span aria-hidden="true" className="text-xl">📧</span> Correo institucional
                    </li>
                    <li className="flex items-center gap-2 bg-altiwhite/10 px-4 py-2 rounded-lg border border-altiwhite/20 shadow text-altiwhite">
                        <span aria-hidden="true" className="text-xl">📊</span> Análisis de datos
                    </li>
                    <li className="flex items-center gap-2 bg-altiwhite/10 px-4 py-2 rounded-lg border border-altiwhite/20 shadow text-altiwhite">
                        <span aria-hidden="true" className="text-xl">🛠️</span> Soporte TI
                    </li>
                </motion.ul>
            </div>
        </section>
    )
}
