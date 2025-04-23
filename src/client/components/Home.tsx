import "../styles/Home.css";
import Socials from "./Socials.tsx";

function Home() {
    return (
        <div className="home-container">
            <div className="home-image-wrapper">
                <div className="home-image-text">Pottery by Lauren Shore</div>
                <img
                    className="home-image"
                    src="/media/HomeImage.jpg"
                    alt="homeimage"
                />
            </div>
            <Socials />
        </div>
    );
}

export default Home;
