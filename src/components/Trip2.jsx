import './Trip.css';
import TripData from './TripData';
import Wasteland7 from '../assets/seven.jpg';
import Wasteland10 from '../assets/ten.jpg';
import Wasteland11 from '../assets/eleven.jpg';


function Trip2() {
    return(
        <div className="trip">
            <div className="tripcard">
                <TripData
                    image={Wasteland7}
                    heading={'Trip to Alpha Centauri'}
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dolorem doloremque repudiandae aspernatur at numquam ab id praesentium distinctio vel, ea accusamus eligendi nobis qui obcaecati error labore, maiores corrupti?'}
                />

                <TripData
                    image={Wasteland10}
                    heading={'Trip to Beta Orionis'}
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dolorem doloremque repudiandae aspernatur at numquam ab id praesentium distinctio vel, ea accusamus eligendi nobis qui obcaecati error labore, maiores corrupti?'}
                />

                <TripData
                    image={Wasteland11}
                    heading={'Trip to Trappist 1b'}
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dolorem doloremque repudiandae aspernatur at numquam ab id praesentium distinctio vel, ea accusamus eligendi nobis qui obcaecati error labore, maiores corrupti?'}
                />
            </div>
        </div>
    )
}


export default Trip2;