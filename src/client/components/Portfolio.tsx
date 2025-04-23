import "../styles/Portfolio.css";
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
                <img
                    className="portfolio-item"
                    src="/media/DoubleMugs.jpg"
                    alt=""
                />
                <img
                    className="portfolio-item"
                    src="/media/PurpleMug.jpg"
                    alt=""
                />
                <img
                    className="portfolio-item"
                    src="/media/RedVase.jpg"
                    alt=""
                />
                <img
                    className="portfolio-item"
                    src="/media/LightPinkRingDish.jpg"
                    alt=""
                />
                <img
                    className="portfolio-item"
                    src="/media/RainforestMug.jpg"
                    alt=""
                />
                <img
                    className="portfolio-item"
                    src="/media/GreenCup.jpg"
                    alt=""
                />
            </div>
            <Socials />
        </div>
    );
}

export default Portfolio;
