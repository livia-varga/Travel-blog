import { Link } from 'react-router-dom';
import '../styles/navigation.css';
import {useState} from "react";

function Navigation() {
     const [active, setActive] = useState("nav_menu");
     const [toggleIcon, setToggleIcon] = useState("nav_toggler");
     const navToggle = () => {
        active === 'nav_menu' ? setActive('nav_menu nav_active') : setActive("nav_menu");

        // TogglerIcon

     toggleIcon === "nav_toggler"
     ? setToggleIcon('nav_toggler toggle')
     : setToggleIcon("nav_toggler");
     };

    

    return (
        <>
            <nav className="nav">
                <Link to="#" className="nav_brand">Travel Blog</Link>
                <ul className={active}>
                    <li className="nav_item"><Link to="#" className="nav_link">Home</Link></li>
                    <li className="nav_item"><Link to="#" className="nav_link">About</Link></li>
                    <li className="nav_item"><Link to="#" className="nav_link">Skills</Link></li>
                    <li className="nav_item"><Link to="#" className="nav_link">Portfolio</Link></li>
                    <li className="nav_item"><Link to="#" className="nav_link">Contact</Link></li>
                </ul>
                <div onClick = {navToggle} className={toggleIcon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </>
    )
}

export default Navigation;