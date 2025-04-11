import "../styles/Home.css";
import Socials from "./Socials.tsx";
import HomeImage from "../media/HomeImage.jpeg";

function Home() {
    return (
        <div className="home-container">
            <div className="home-image-wrapper">
                <div className="home-image-text">Pottery by Lauren Shore</div>
                <img className="home-image" src={HomeImage} alt="homeimage" />
            </div>
            <Socials />
        </div>
    );
}

export default Home;
