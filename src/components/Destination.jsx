import './Destination.css';
import DestinationData from './DestinationData';
import wasteland1 from '../assets/one.jpg';
import wasteland2 from '../assets/two.jpg';
import wasteland3 from '../assets/three.jpg';
import wasteland4 from '../assets/four.jpg';


const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>

            <DestinationData
                className='first-des'
                heading='Frozen Volcano, Kepler-32c'
                text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores omnis autem ea soluta iure perspiciatis sit maxime delectus ad quasi alias molestias vitae a laborum ducimus, vel ipsam temporibus! Incidunt.'
                img1={wasteland1}
                img2={wasteland2}
            />

            <DestinationData
                className='first-des-reverse'
                heading='Photon Caelum, Trappist-1a'
                text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores omnis autem ea soluta iure perspiciatis sit maxime delectus ad quasi alias molestias vitae a laborum ducimus, vel ipsam temporibus! Incidunt.'
                img1={wasteland3}
                img2={wasteland4}
            />

        </div>
    )
}

export default Destination;