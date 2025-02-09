import './Footer.css';
import LogoImg from '../assets/atom-light.png'

const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                <div className="">
                    <h1 className='footer-logo'>Polaris <img src={LogoImg} /></h1>
                    <p>Our Journey, Our Story.</p>
                </div>
                <div className="">
                    <a href="/">
                        <i className='fa-brands fa-facebook'></i>
                    </a>
                    <a href="/">
                        <i className='fa-brands fa-instagram'></i>
                    </a>
                    <a href="/">
                        <i className='fa-brands fa-linkedin'></i>
                    </a>
                    <a href="/">
                        <i className='fa-brands fa-github'></i>
                    </a>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">GitHub</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact Us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;