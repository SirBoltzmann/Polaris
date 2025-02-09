import { Component } from "react"
import './Destination.css';
// import wasteland1 from '../assets/one.jpg';
// import wasteland2 from '../assets/two.jpg';
// import wasteland3 from '../assets/three.jpg';
// import wasteland4 from '../assets/four.jpg';

class DestinationData extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>

                <div className="image">
                    <img src={this.props.img1} alt="img" />
                    <img src={this.props.img2} alt="img" />
                </div>
            </div>
        )
    }
}

export default DestinationData 