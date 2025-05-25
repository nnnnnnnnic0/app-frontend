// /pages/demos/crea-tu-web.js
import dynamic from "next/dynamic";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const WizardCreaWeb = dynamic(() => import("../../components/WizardCreaWeb"), { ssr: false });

export default function DemoCreaTuWeb() {
    return (
        <>
            <Head>
                <title>Generador de Webs | Demo Interactiva</title>
                <meta name="description" content="Crea la web de tu negocio en minutos con nuestro wizard interactivo. ¡Prueba la demo y mira tu preview en tiempo real!" />
            </Head>
            <Header />
            <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-50 to-white flex flex-col items-center justify-start">
                <section className="w-full max-w-7xl pt-4 pb-10">
                    <h1 className="text-xl sm:text-2xl font-bold text-blue-800 text-center mb-3">
                        Generador de Webs: Demo Interactiva
                    </h1>
                    <p className="text-center text-gray-700 max-w-xl mx-auto mb-8">
                        ¡Completa los pasos y mira cómo tu web cobra vida en tiempo real!
                    </p>
                    <WizardCreaWeb />
                </section>
            </main>
            <Footer />
        </>
    );
}
