import "../styles/Portfolio.css";
import BlueMug from "../media/BlueMug.jpeg";
import GreenMug from "../media/GreenMug.jpeg";
import GreenMugTall from "../media/GreenMugTall.jpeg";
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
                <img className="portfolio-item" src={BlueMug} alt="" />
                <img className="portfolio-item" src={GreenMug} alt="" />
                <img className="portfolio-item" src={GreenMugTall} alt="" />
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
