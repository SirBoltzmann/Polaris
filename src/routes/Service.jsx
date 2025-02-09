import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServiceImg from '../assets/nine.jpg';
import Footer from '../components/Footer';
import Trip from '../components/Trip';


function Service () {
    return (
        <>
            <Navbar />
            <Hero 
                cName='hero-mid'
                heroImg={ServiceImg}
                title='Service'
                btnClass='hide'
            />
            <Trip />
            <Footer />
        </>
    );
}

export default Service;