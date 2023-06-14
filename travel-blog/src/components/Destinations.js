import "../styles/destinations.css";
import kep34 from '../styles/pics/kep34.jpg';

export default function Destinations() {


    return (
        <div className="dest-text-container">
            <h2 className="dest-h2">Destinations</h2>
            <img src={kep34} alt='' />
            <div className="mid-dest-container">
            <h3 className="dest-h3">Welcome to our Destination Guide! Explore breathtaking landscapes, vibrant cities, and rich cultures.</h3>
            <p>Embark on a journey with us as we discover breathtaking destinations around the globe. From stunning natural landscapes to vibrant cityscapes, we bring you the best of what the world has to offer. Whether you're a seasoned traveler or an aspiring adventurer, our travel blog is your gateway to endless exploration and inspiration.</p>
            <h5 className="dest-h5">So pack your bags, put on your adventurous spirit, and join us on this incredible expedition. Let our travel blog be your compass as you navigate the world and unravel the wonders that await you. Get ready to embark on a remarkable journey to the most captivating destinations on the planet!</h5>
            <h4 className="dest-h4">Join us as we dive into the enchanting beauty of remote islands, traverse the majestic peaks of breathtaking mountains, and wander through ancient streets steeped in history. Immerse yourself in the vibrant cultures, savor the local cuisines, and experience the warmth of hospitality from every corner of the world.</h4>
            </div>
        </div>
    )
};