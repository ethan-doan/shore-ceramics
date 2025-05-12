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
                    src={Media.BlueMugThumbnail}
                    alt="Blue Mug"
                    loading="lazy"
                />
                <img
                    className="portfolio-item"
                    src={Media.GreenMugThumbnail}
                    alt="Green Mug"
                    loading="lazy"
                />
                <img
                    className="portfolio-item"
                    src={Media.GreenMugTallThumbnail}
                    alt="Dark Planter"
                    loading="lazy"
                />
                <img
                    className="portfolio-item"
                    src={Media.CactusMugThumbnail}
                    alt="Cactus Mug"
                    loading="lazy"
                />
                <img
                    className="portfolio-item"
                    src={Media.PurpleBubbleVaseThumbnail}
                    alt="Purple Bubble Vase"
                    loading="lazy"
                />
                <img
                    className="portfolio-item"
                    src={Media.ModernLineVaseThumbnail}
                    alt="Modern Line Vase"
                    loading="lazy"
                />
                <img
                    className="portfolio-item"
                    src={Media.BubblegumMugThumbnail}
                    alt="Bubblegum Mug"
                    loading="lazy"
                />
                <img
                    className="portfolio-item"
                    src={Media.MoodyBowlThumbnail}
                    alt="Moody Bowl"
                    loading="lazy"
                />
                <img
                    className="portfolio-item"
                    src={Media.DoubleMugsThumbnail}
                    alt="Double Mugs"
                    loading="lazy"
                />
                <img
                    className="portfolio-item"
                    src={Media.PurpleMugThumbnail}
                    alt="Purple Mug"
                    loading="lazy"
                />
                <img
                    className="portfolio-item"
                    src={Media.RedVaseThumbnail}
                    alt="Red Vase"
                    loading="lazy"
                />
                <img
                    className="portfolio-item"
                    src={Media.LightPinkRingDishThumbnail}
                    alt="Light Pink Ring Dish"
                    loading="lazy"
                />
                <img
                    className="portfolio-item"
                    src={Media.RainforestMugThumbnail}
                    alt="Rainforest Mug"
                    loading="lazy"
                />
                <img
                    className="portfolio-item"
                    src={Media.GreenCupThumbnail}
                    alt="Green Cup"
                    loading="lazy"
                />
                <img
                    className="portfolio-item"
                    src={Media.RusticRedVaseThumbnail}
                    alt="Rustic Red Vase"
                    loading="lazy"
                />
                <img
                    className="portfolio-item"
                    src={Media.GalaxyCupThumbnail}
                    alt="Galaxy Cup"
                    loading="lazy"
                />
                <img
                    className="portfolio-item"
                    src={Media.SeaweedVaseThumbnail}
                    alt="Seaweed Vase"
                    loading="lazy"
                />
            </div>
            <Socials />
        </div>
    );
}

export default Portfolio;
