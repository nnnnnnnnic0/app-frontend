import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sobre from '../components/Sobre';

export default function SobrePage() {
    return (
        <>
            <Head>
                <title>Sobre mí | AltiCloud</title>
                <meta name="description" content="Conoce la experiencia, historia y misión de AltiCloud y Sergio Reyes, tu aliado en tecnología, automatización y datos en Chile." />
            </Head>
            <Header />
            <main>
                <Sobre />
            </main>
            <Footer />
        </>
    );
}
