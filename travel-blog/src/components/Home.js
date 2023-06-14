
import '../styles/home.css';
import Header from './Header';
import kep21 from '../styles/pics/kep21.jpg';
import kep22 from '../styles/pics/kep22.jpg';
import kep23 from '../styles/pics/kep23.jpg';
import kep24 from '../styles/pics/kep24.jpg';
import kep25 from '../styles/pics/kep25.jpg';
import kep26 from '../styles/pics/kep26.jpg';
import kep33 from '../styles/pics/kep33.jpg';
import kep19 from '../styles/pics/kep19.jpg';
import kep20 from '../styles/pics/kep20.jpg';



const Home = () => {

    function navigateToPage(postId,postTitle) {
        const url = '/post?id=' + postId + '&title=' + encodeURIComponent(postTitle);
        window.location.href = url;
    };

    return (
        <>
        <body>
            <Header/>     
            <div className="welcome-text">
                <h1>Welcome to our Travel Blog- your passport to adventure!</h1>
                {/* <p>"The traveler sees what he sees. The tourist sees what he has come to see."</p> */}
            </div>
            <div className="blogs">
                <h2>Search and read our blogs</h2>
                <div>
                    <p><span className="All">All</span></p>
                    <p>Popular</p>
                    <p>Latest</p>
                    <p>Favourites</p>
                </div>
                <div className="blog-container"> 
                <div className="blog-item">
                <img src={kep33} alt='' />
                <p>Report on the beautiful Taj Mahal</p>
                <button className="blog-item-button" onClick={() => navigateToPage(1, 'Report ont the beautiful Taj Mahal')}>View post</button>
                </div>
                <div className="blog-item">
                <img src={kep19} alt='' />
                <p>Discover the beautiful Santorini</p>
                <button className="blog-item-button"onClick={() => navigateToPage(2)}>View post</button>
                </div>
                <div className="blog-item">
                <img src={kep20} alt='' />
                <p>This is the first blog post</p>
                <button className="blog-item-button"onClick={() => navigateToPage(3)}>View post</button>
                </div>
                <div className="blog-item">
                <img src={kep21} alt='' />
                <p>This is the first blog post</p>
                <button className="blog-item-button"onClick={() => navigateToPage(4)}>View post</button>
                </div>
                <div className="blog-item">
                <img src={kep22} alt='' />
                <p>This is the first blog post</p>
                <button className="blog-item-button"onClick={() => navigateToPage(5)}>View post</button>
                </div>
                <div className="blog-item">
                <img src={kep23} alt='' />
                <p>This is the first blog post</p>
                <button className="blog-item-button"onClick={() => navigateToPage(6)}>View post</button>
                </div>
                <div className="blog-item">
                <img src={kep24} alt='' />
                <p>This is the first blog post</p>
                <button className="blog-item-button"onClick={() => navigateToPage(7)}>View post</button>
                </div>
                <div className="blog-item">
                <img src={kep25} alt='' />
                <p>This is the first blog post</p>
                <button className="blog-item-button"onClick={() => navigateToPage(8)}>View post</button>
                </div>
                <div className="blog-item">
                <img src={kep26} alt='' />
                <p>This is the first blog post</p>
                <button className="blog-item-button"onClick={() => navigateToPage(9)}>View post</button>
                </div>
                </div>
                <button className="blog-button">View All</button>
            </div>
            </body>
        </>
    )
}

export default Home;