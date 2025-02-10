import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServiceImg from '../assets/nine.jpg';
import Footer from '../components/Footer';
import Trip from '../components/Trip';
import Trip2 from '../components/Trip2';


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
            <Trip2 />
            <Footer />
        </>
    );
}

export default Service;