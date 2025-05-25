// /pages/demos/preview.js
import { useState } from "react";
import PreviewLanding from "../../components/PreviewLanding";

export default function DemoPreview() {
    // Demo data, puedes modificar, usar context o query params
    const [data] = useState({
        nombre: "Ejemplo Negocio",
        rubro: "Servicios profesionales",
        eslogan: "Conectando soluciones con personas",
        descripcion: "Somos expertos en tecnología.",
        servicios: ["Soporte", "Consultoría", "Desarrollo"],
        contacto: ["WhatsApp", "Formulario web"],
        redes: ["Facebook", "Instagram"],
        colores: "Azul y blanco"
    });

    return (
        <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-2 py-6">
            <h1 className="text-lg sm:text-xl font-bold text-blue-800 mb-4 text-center">
                Vista previa de tu Landing Page
            </h1>
            <PreviewLanding data={data} />
        </div>
    );
}
