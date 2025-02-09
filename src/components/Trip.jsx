import './trip.css';
import TripData from './TripData';
import Wasteland5 from '../assets/five.jpg';
import Wasteland6 from '../assets/six.jpg';
import Wasteland8 from '../assets/eight.jpg';

function Trip() {
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>

            <div className="tripcard">
                <TripData
                    image={Wasteland5}
                    heading={'Trip to Alpha Centauri'}
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dolorem doloremque repudiandae aspernatur at numquam ab id praesentium distinctio vel, ea accusamus eligendi nobis qui obcaecati error labore, maiores corrupti?'}
                />

                <TripData
                    image={Wasteland6}
                    heading={'Trip to Beta Orionis'}
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dolorem doloremque repudiandae aspernatur at numquam ab id praesentium distinctio vel, ea accusamus eligendi nobis qui obcaecati error labore, maiores corrupti?'}
                />

                <TripData
                    image={Wasteland8}
                    heading={'Trip to Trappist 1b'}
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dolorem doloremque repudiandae aspernatur at numquam ab id praesentium distinctio vel, ea accusamus eligendi nobis qui obcaecati error labore, maiores corrupti?'}
                />
            </div>
        </div>
    )
}

export default Trip;