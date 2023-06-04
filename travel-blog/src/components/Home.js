import kep1 from '../styles/pics/kep1.jpg';
import '../styles/home.css';

const Home = () => {

    return(
        <>
        <div className="main-pic">
        <img src={kep1} alt="kep1" style={{ width: '100%'}}/>
        <h2 className="main-text">Travel blog</h2>
        <p>"The traveler sees what he sees. The tourist sees what he has come to see."</p>
        </div>
        </>
    )
}

export default Home;