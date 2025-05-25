import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Servicios from '../components/Servicios';
import Ventajas from '../components/Ventajas';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <Head>
                <title>AltiCloud · Soluciones TI, Web y Datos para Chile</title>
                <meta name="description" content="Impulsa tu empresa con tecnología: webs rápidas, correos profesionales, análisis de datos y soporte TI. Especialistas AWS y atención local." />
            </Head>
            <Header />
            <main className="px-2 sm:px-0">
                <Hero />
                <Servicios />
                <Ventajas />
                <Contacto />
            </main>
            <Footer />
        </>
    );
}
