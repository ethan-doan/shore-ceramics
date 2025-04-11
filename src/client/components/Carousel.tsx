import "../styles/Carousel.css";
import BlueMug from "../media/BlueMug.jpeg";
import GreenMug from "../media/GreenMug.jpeg";
import GreenMugTall from "../media/GreenMugTall.jpeg";
import PurpleMug from "../media/PurpleMug.jpeg";
import RedVase from "../media/RedVase.jpeg";
import RusticMug from "../media/RusticMug.jpeg";
import SandyMug from "../media/SandyMug.jpeg";
import Socials from "./Socials.tsx";

const images = [
    BlueMug,
    GreenMug,
    GreenMugTall,
    PurpleMug,
    RedVase,
    RusticMug,
    SandyMug,
];

const loopedImages = [...images, ...images]; // Double up for looping effect

function Carousel() {
    return (
        <div className="carousel-wrapper">
            <div className="carousel-track">
                {loopedImages.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt={`Slide ${i + 1}`}
                        className="carousel-slide"
                    />
                ))}
            </div>
            <Socials />
        </div>
    );
}

export default Carousel;
