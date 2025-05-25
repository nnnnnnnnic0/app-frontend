// components/Contacto.js
import { motion } from 'framer-motion'

export default function Contacto() {
    return (
        <motion.section
            id="contacto"
            className="relative overflow-hidden pt-14 pb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            {/* Fondo degradado tipo hero */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-altiblue via-altiblueLight to-altiwhite" />

            {/* SVG Cerro El Plomo ancho completo */}
            <svg
                className="absolute left-0 bottom-0 w-screen h-40 md:h-56 z-0 select-none pointer-events-none"
                viewBox="0 0 1440 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                aria-hidden="true"
                style={{ minWidth: '100vw' }}
            >
                <path
                    d="M0 180 Q250 140 380 180 Q550 210 700 120 Q820 90 1000 160 Q1200 210 1440 120 L1440 200 L0 200Z"
                    fill="#fff"
                    fillOpacity="0.96"
                />
                <path
                    d="M0 200 Q400 130 700 180 Q1100 230 1440 160 L1440 200 L0 200Z"
                    fill="#38bdf8"
                    fillOpacity="0.17"
                />
            </svg>

            {/* Contenido en fondo blanco translúcido para contraste */}
            <div className="container mx-auto relative z-10 px-4 flex justify-center">
                <div className="w-full max-w-2xl mx-auto bg-white/90 shadow-xl rounded-2xl px-4 sm:px-10 py-10 border border-altiblue/20 backdrop-blur-md">
                    <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold mb-3 leading-snug text-altiblue drop-shadow">
                        ¿Listo para llevar tu empresa al siguiente nivel?
                    </h2>
                    <p className="mb-8 text-base sm:text-lg text-altigray font-medium">
                        Agenda tu asesoría gratuita, cotiza tu web o recibe soporte inmediato.<br />
                        <span className="font-bold text-altiblue">Atención 100% personalizada y local.</span>
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-5 mb-5">
                        <a
                            href="mailto:tuemail@tudominio.com"
                            className="w-full sm:w-auto px-8 py-4 bg-altiwhite text-altiblue font-semibold rounded-2xl shadow hover:bg-altiblue hover:text-altiwhite border-2 border-altiblue transition text-lg text-center"
                        >
                            <span className="inline-block align-middle mr-2">📧</span>
                            Contáctanos Ahora
                        </a>
                        <a
                            href="https://wa.me/56966487992" target="_blank" rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-altiverde text-white rounded-2xl font-bold hover:bg-green-600 border-2 border-white transition text-lg"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.768.967-.941 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.298-.346.446-.519.151-.172.2-.296.298-.495.099-.198.05-.371-.025-.52-.075-.148-.669-1.612-.916-2.212-.242-.582-.487-.503-.669-.512-.173-.007-.372-.009-.57-.009-.198 0-.52.074-.792.371-.272.297-1.04 1.017-1.04 2.479 0 1.463 1.065 2.875 1.213 3.074.149.198 2.097 3.2 5.077 4.361.709.244 1.262.39 1.694.498.712.181 1.36.155 1.872.094.571-.067 1.758-.719 2.007-1.413.247-.693.247-1.287.173-1.413-.073-.126-.271-.198-.57-.347zm-5.421 7.617h-.004A10.044 10.044 0 0 1 2.002 19.106 9.942 9.942 0 0 1 .04 13.057C.942 6.604 6.326 1.537 12.775 1.529h.015c2.676.002 5.189 1.044 7.077 2.938a10.047 10.047 0 0 1 2.92 7.084c-.008 6.451-5.393 11.518-11.74 11.518z" />
                            </svg>
                            Whatsapp Directo
                        </a>
                    </div>
                    <div className="mt-8 text-xs text-altiblueLight font-semibold bg-white/80 px-4 py-2 rounded-xl inline-block shadow border border-altiblueLight">
                        Tiempo promedio de respuesta: <b>menos de 2 horas hábiles</b>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
