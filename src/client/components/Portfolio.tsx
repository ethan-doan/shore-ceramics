import "../styles/Portfolio.css";
import BlueMug from "../media/BlueMug.jpeg";
import GreenMug from "../media/GreenMug.jpeg";
import PurpleMug from "../media/PurpleMug.jpeg";
import RedVase from "../media/RedVase.jpeg";
import RusticMug from "../media/RusticMug.jpeg";
import SandyMug from "../media/SandyMug.jpeg";
import Socials from "./Socials.tsx";

function Portfolio() {
    return (
        <div className="portfolio-container fade-in">
            <div className="portfolio-header">Portfolio</div>
            <div className="portfolio-grid">
                <img
                    className="portfolio-item"
                    src="/media/BlueMug.jpg"
                    alt=""
                />
                <img
                    className="portfolio-item"
                    src="/media/GreenMug.jpg"
                    alt=""
                />
                <img
                    className="portfolio-item"
                    src="/media/GreenMugTall.jpg"
                    alt=""
                />
                <img
                    className="portfolio-item"
                    src="/media/CactusMug.jpg"
                    alt=""
                />
                <img
                    className="portfolio-item"
                    src="/media/PurpleBubbleVase.jpg"
                    alt=""
                />
                <img
                    className="portfolio-item"
                    src="/media/ModernLineVase.jpg"
                    alt=""
                />
                <img
                    className="portfolio-item"
                    src="/media/BubblegumMug.jpg"
                    alt=""
                />
                <img
                    className="portfolio-item"
                    src="/media/MoodyBowl.jpg"
                    alt=""
                />
                <img className="portfolio-item" src={PurpleMug} alt="" />
                <img className="portfolio-item" src={RedVase} alt="" />
                <img className="portfolio-item" src={RusticMug} alt="" />
                <img className="portfolio-item" src={SandyMug} alt="" />
            </div>
            <Socials />
        </div>
    );
}

export default Portfolio;
