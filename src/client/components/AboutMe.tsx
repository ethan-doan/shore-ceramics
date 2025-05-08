import "../styles/AboutMe.css";
import Socials from "./Socials.tsx";
import { Media } from "../constants/Media.ts";

function AboutMe() {
    return (
        <div className="about-me-container fade-in">
            <div className="about-me-header">About Me</div>
            <img
                className="about-me-portrait"
                src={Media.Portrait}
                alt="portrait"
            />
            <div className="about-me-content">
                Hi, I’m Lauren and I’ve been doing pottery for as long as I can
                remember. I started in art class in elementary school, and
                really focused on throwing on the wheel in high school. Now that
                I’m in my twenties, I’ve rediscovered my passion for ceramics!
                Take a look around at my recent work and contact me about
                commissions or to purchase a piece. Currently hand delivery in
                Omaha, and shipping throughout the US.
            </div>
            <Socials />
        </div>
    );
}

export default AboutMe;
