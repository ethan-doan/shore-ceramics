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
                    loading="lazy"
                />
                <img
                    className="portfolio-item"
                    src={Media.GreenMug}
                    alt="Green Mug"
                    loading="lazy"
                />
                <img
                    className="portfolio-item"
                    src={Media.GreenMugTall}
                    alt="Dark Planter"
                    loading="lazy"
                />
                <img
                    className="portfolio-item"
                    src={Media.CactusMug}
                    alt="Cactus Mug"
                    loading="lazy"
                />
                <img
                    className="portfolio-item"
                    src={Media.PurpleBubbleVase}
                    alt="Purple Bubble Vase"
                    loading="lazy"
                />
                <img
                    className="portfolio-item"
                    src={Media.ModernLineVase}
                    alt="Modern Line Vase"
                    loading="lazy"
                />
                <img
                    className="portfolio-item"
                    src={Media.BubblegumMug}
                    alt="Bubblegum Mug"
                    loading="lazy"
                />
                <img
                    className="portfolio-item"
                    src={Media.MoodyBowl}
                    alt="Moody Bowl"
                    loading="lazy"
                />
                <img
                    className="portfolio-item"
                    src={Media.DoubleMugs}
                    alt="Double Mugs"
                    loading="lazy"
                />
                <img
                    className="portfolio-item"
                    src={Media.PurpleMug}
                    alt="Purple Mug"
                    loading="lazy"
                />
                <img
                    className="portfolio-item"
                    src={Media.RedVase}
                    alt="Red Vase"
                    loading="lazy"
                />
                <img
                    className="portfolio-item"
                    src={Media.LightPinkRingDish}
                    alt="Light Pink Ring Dish"
                    loading="lazy"
                />
                <img
                    className="portfolio-item"
                    src={Media.RainforestMug}
                    alt="Rainforest Mug"
                    loading="lazy"
                />
                <img
                    className="portfolio-item"
                    src={Media.GreenCup}
                    alt="Green Cup"
                    loading="lazy"
                />
                <img
                    className="portfolio-item"
                    src={Media.RusticRedVase}
                    alt="Rustic Red Vase"
                    loading="lazy"
                />
                <img
                    className="portfolio-item"
                    src={Media.GalaxyCup}
                    alt="Galaxy Cup"
                    loading="lazy"
                />
                <img
                    className="portfolio-item"
                    src={Media.SeaweedVase}
                    alt="Seaweed Vase"
                    loading="lazy"
                />
            </div>
            <Socials />
        </div>
    );
}

export default Portfolio;
