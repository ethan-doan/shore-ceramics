import "../styles/Portfolio.css";
import Socials from "./Socials.tsx";
import { Media } from "../constants/Media.ts";

function Portfolio() {
    return (
        <div className="portfolio-container fade-in">
            <div className="portfolio-header">Portfolio</div>
            <div className="portfolio-grid">
                <img
                    className="portfolio-item"
                    src={Media.BlueMug}
                    alt="Blue Mug"
                />
                <img
                    className="portfolio-item"
                    src={Media.GreenMug}
                    alt="Green Mug"
                />
                <img
                    className="portfolio-item"
                    src={Media.GreenMugTall}
                    alt="Dark Planter"
                />
                <img
                    className="portfolio-item"
                    src={Media.CactusMug}
                    alt="Cactus Mug"
                />
                <img
                    className="portfolio-item"
                    src={Media.PurpleBubbleVase}
                    alt="Purple Bubble Vase"
                />
                <img
                    className="portfolio-item"
                    src={Media.ModernLineVase}
                    alt="Modern Line Vase"
                />
                <img
                    className="portfolio-item"
                    src={Media.BubblegumMug}
                    alt="Bubblegum Mug"
                />
                <img
                    className="portfolio-item"
                    src={Media.MoodyBowl}
                    alt="Moody Bowl"
                />
                <img
                    className="portfolio-item"
                    src={Media.DoubleMugs}
                    alt="Double Mugs"
                />
                <img
                    className="portfolio-item"
                    src={Media.PurpleMug}
                    alt="Purple Mug"
                />
                <img
                    className="portfolio-item"
                    src={Media.RedVase}
                    alt="Red Vase"
                />
                <img
                    className="portfolio-item"
                    src={Media.LightPinkRingDish}
                    alt="Light Pink Ring Dish"
                />
                <img
                    className="portfolio-item"
                    src={Media.RainforestMug}
                    alt="Rainforest Mug"
                />
                <img
                    className="portfolio-item"
                    src={Media.GreenCup}
                    alt="Green Cup"
                />
                <img
                    className="portfolio-item"
                    src={Media.RusticRedVase}
                    alt="Rustic Red Vase"
                />
                <img
                    className="portfolio-item"
                    src={Media.GalaxyCup}
                    alt="Galaxy Cup"
                />
                <img
                    className="portfolio-item"
                    src={Media.SeaweedVase}
                    alt="Seaweed Vase"
                />
            </div>
            <Socials />
        </div>
    );
}

export default Portfolio;
