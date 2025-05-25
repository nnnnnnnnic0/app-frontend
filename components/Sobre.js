// /components/sobre.js
import { motion } from 'framer-motion';
import Link from 'next/link';

// Timeline y Stack igual que antes
const timeline = [
    {
        year: '2014',
        title: 'Comienzo de estudios en Informática',
        description: 'Estudio Ingeniería en Informática en Duoc UC, Viña del Mar.',
        icon: '🎓'
    },
    {
        year: '2017',
        title: 'Práctica profesional en la Armada de Chile',
        description: 'Apoyo en desarrollo de soluciones internas y soporte TI.',
        icon: '⚓'
    },
    {
        year: '2021',
        title: 'Web corporativa: WRG.cl',
        description: 'Desarrollo de página y apoyo digital a empresa nacional.',
        link: 'https://wrg.cl',
        icon: '💼'
    },
    {
        year: '2024',
        title: 'Dropshipping: RitmoNatural.cl',
        description: 'Desarrollo de ecommerce con WooCommerce y automatización logística.',
        link: 'https://ritmonatural.cl',
        icon: '🌱'
    },
    {
        year: '2022-2024',
        title: 'Experiencia en empresas privadas',
        description: 'Automatización, soporte TI, análisis de datos y desarrollo de herramientas internas para varias empresas.',
        icon: '🏢'
    },
    {
        year: '2025',
        title: 'Fundación de AltiCloud',
        description: 'Nace el proyecto AltiCloud para llevar tecnología cloud, datos y automatización a pymes y negocios de Chile.',
        icon: '🏔️'
    },
];
const stack = [
    { name: "AWS", svg: "/aws.svg" },
    { name: "Next.js", svg: "/nextdotjs.svg" },
    { name: "Python", svg: "/python.svg" },
    { name: "Tailwind", svg: "/tailwindcss.svg" },
];

export default function Sobre() {
    return (
        <section className="relative min-h-screen bg-gradient-to-b from-altiblueLight/10 via-white to-altiwhite py-12 md:py-20 overflow-hidden">
            {/* Fondo SVG Torres del Paine, decorativo */}
            <div className="pointer-events-none absolute inset-0 z-0 flex items-end">
                <svg
                    viewBox="0 0 1600 340"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-72 md:h-96 opacity-40 blur-[2px]"
                >
                    <path
                        d="M0 340L160 330L220 290L280 270L340 320L390 310L430 260L500 250L560 310L600 280L650 330L710 300L790 270L860 320L940 300L980 330L1100 270L1160 290L1260 310L1300 260L1380 320L1440 330L1600 340V0H0V340Z"
                        fill="#2563eb"
                        fillOpacity="0.14"
                    />
                    <path
                        d="M0 340L150 320L200 270L260 260L340 310L410 270L480 240L570 300L640 280L720 320L810 300L880 260L950 310L1050 290L1160 270L1240 310L1340 280L1450 320L1600 340"
                        fill="#38bdf8"
                        fillOpacity="0.12"
                    />
                </svg>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto bg-white/90 rounded-3xl shadow-xl px-6 md:px-12 py-10 md:py-14 flex flex-col md:flex-row gap-8">
                {/* IZQUIERDA: Avatar + Pitch + Stack */}
                <div className="md:w-2/5 flex flex-col items-center md:items-start text-center md:text-left gap-6">
                    {/* Logo de AltiCloud */}
                    <div className="w-24 h-24 rounded-full border-4 border-altiblue bg-white flex items-center justify-center overflow-hidden shadow-lg mb-2">
                        <img
                            src="/alticloud.png" // <-- Cambia por la ruta real de tu logo
                            alt="Logo AltiCloud"
                            className="w-20 h-20 object-contain"
                            style={{ background: "white" }}
                        />
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-altiblue">Sergio Nicolás Reyes Vallejos</h1>
                        <div className="text-altigray font-medium text-lg mt-1">
                            Cloud · Automatización · Datos · Web · Chile
                        </div>
                        <div className="bg-altiblueLight/10 text-altiblue px-3 py-2 rounded-xl text-base mt-2 font-semibold inline-block">
                            Conecto empresas y personas con tecnología moderna, datos y automatización para crecer y digitalizarse.<br className="hidden md:inline" />
                            ¡Con respaldo AWS y soporte humano!
                        </div>
                    </div>

                    {/* Stack Técnico */}
                    <div>
                        <h3 className="text-altiblue font-bold text-base mb-2 mt-3">Stack principal</h3>
                        <div className="flex flex-wrap gap-4 items-center">
                            {stack.map(({ name, svg }) => (
                                <div key={name} className="flex flex-col items-center gap-1">
                                    <img src={svg} alt={name} className="h-9 w-9 object-contain" />
                                    <span className="text-altigray text-xs">{name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* DERECHA: Timeline + detalles */}
                <div className="md:w-3/5 flex flex-col gap-8">
                    {/* Timeline */}
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-altiblue mb-2">Mi trayecto profesional</h2>
                        <div className="relative pl-5 border-l-4 border-altiblue/20">
                            {timeline.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -24 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.13 }}
                                    className="mb-7 relative"
                                >
                                    <div className="absolute -left-8 top-0 bg-altiblue text-altiwhite w-9 h-9 flex items-center justify-center rounded-full border-4 border-white shadow-lg text-xl">
                                        {item.icon}
                                    </div>
                                    <div className="ml-2">
                                        <div className="text-altiblue font-bold">{item.year}</div>
                                        <div className="font-semibold text-altiblue mb-1">{item.title}</div>
                                        <div className="text-altigray text-sm">
                                            {item.link ? (
                                                <a href={item.link} className="text-altiblueLight underline hover:text-altiblue" target="_blank" rel="noopener noreferrer">
                                                    {item.description}
                                                </a>
                                            ) : (
                                                item.description
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Casos destacados y misión */}
                    <div>
                        <h3 className="text-altiblue font-bold text-lg mb-2">¿Por qué AltiCloud?</h3>
                        <div className="text-altigray text-base leading-relaxed mb-3">
                            Mi misión es democratizar tecnología avanzada para pymes y emprendedores chilenos.<br />
                            Desde digitalización, datos y nube, hasta el soporte personalizado y local.<br />
                            Porque todos merecen soluciones modernas, confiables y humanas.
                        </div>
                        <div className="mb-2">
                            <h4 className="text-altiblue font-bold mb-1">Casos destacados</h4>
                            <ul className="text-base text-altigray space-y-1">
                                <li>
                                    • Ecommerce automatizado:{" "}
                                    <a href="https://www.ritmonatural.cl" className="text-altiblueLight underline hover:text-altiblue" target="_blank" rel="noopener noreferrer">
                                        ritmonatural.cl
                                    </a>
                                </li>
                                <li>
                                    • Web corporativa:{" "}
                                    <a href="https://www.wrg.cl" className="text-altiblueLight underline hover:text-altiblue" target="_blank" rel="noopener noreferrer">
                                        wrg.cl
                                    </a>
                                </li>
                                <li>
                                    • Automatización de reportes y soporte TI para empresas privadas.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-6">
                        <div className="text-altiblue font-bold mb-2 text-lg">
                            ¿Quieres ser parte del próximo caso de éxito?
                        </div>
                        <Link href="/#contacto" className="inline-block px-6 py-3 bg-altiblue hover:bg-altiblueLight text-white font-semibold rounded-xl shadow transition">
                            Agenda una reunión
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
