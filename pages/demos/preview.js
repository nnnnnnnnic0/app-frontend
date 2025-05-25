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
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-50 to-white flex flex-col items-center justify-center px-2 py-10">
            <h1 className="text-lg sm:text-xl font-bold text-altiblue mb-5 text-center">
                Vista previa de tu Landing Page
            </h1>
            <div className="w-full max-w-md mx-auto mb-6">
                <PreviewLanding data={data} />
            </div>
            <div className="text-sm text-altigray text-center max-w-sm mt-2">
                Esta es una <span className="font-semibold text-altiblue">vista previa interactiva</span>.
                ¿Te imaginas tu negocio con una web así?
                <a
                    href="/#contacto"
                    className="ml-1 text-altiblueLight underline hover:text-altiblue font-semibold"
                >
                    Agenda tu asesoría gratuita
                </a>
            </div>
        </div>
    );
}
