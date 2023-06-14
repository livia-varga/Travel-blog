import "../styles/header.css";
import kep16 from '../styles/pics/kep16.jpg';

export default function Header () {
    return (
        <div className="header">
           <div className="header-titles">
           {/* <span className="header-title-small">Travel</span> */}
           <span className="header-title-big">Travel Blog</span>
           </div>
           <img className="header-img" src={kep16}></img>
        </div>
    )
}