import '../styles/footer.css';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {

    return (
        <>
            <div className="footer-container">
                <footer className="footer">
                    <ul className="social_icon">
                    <a href="#"><i className="footer_social_link"></i><FaFacebookF /></a>
                    <a href="#"><i className="footer_social_link"></i><FaInstagram /></a> 
                    <a href="#"><i className="footer_social_link"></i><FaTwitter /></a>
                    <a href="#"><i className="footer_social_link"></i><FaYoutube /></a>
                    </ul>
                    <ul className="footer_menu">
                    <Link className="footer_menu_link" to="#">Home</Link>
                    <Link className="footer_menu_link" to="#">About</Link>
                    <Link className="footer_menu_link" to="#">Destinations</Link>
                    <Link className="footer_menu_link" to="#">Gallery</Link>
                    <Link className="footer_menu_link" to="#">Contact</Link>
                    </ul>
                    <p>2023 Travel blog by Livi | All Rights Reserved</p>
                </footer>
            </div>
        </>
    )
}

export default Footer;