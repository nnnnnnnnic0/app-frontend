import Hero from '../components/Hero'
import Servicios from '../components/Servicios'
import Sobre from '../components/Sobre'
import Contacto from '../components/Contacto'

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Servicios />
                <Sobre />
                <Contacto />
            </main>
            <Footer />
        </>
    )
}
