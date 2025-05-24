const servicios = [
    {
        titulo: "Desarrollo SaaS",
        descripcion: "Construcción de sistemas escalables en la nube.",
        icono: "💻",
    },
    {
        titulo: "Dashboards de Datos",
        descripcion: "Visualización interactiva de KPIs y métricas.",
        icono: "📊",
    },
    {
        titulo: "Automatización",
        descripcion: "Bots, scripts y APIs para optimizar procesos.",
        icono: "⚙️",
    },
];

export default function Servicios() {
    return (
        <section id="servicios" className="py-20 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">Servicios</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {servicios.map((s, idx) => (
                        <div key={idx} className="bg-white shadow-lg rounded-xl p-8 w-80 text-center hover:scale-105 transition">
                            <div className="text-5xl mb-4">{s.icono}</div>
                            <h3 className="text-2xl font-semibold mb-2">{s.titulo}</h3>
                            <p className="text-gray-700">{s.descripcion}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
