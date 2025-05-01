import "../styles/Home.css";
import { useRef, useState } from "react";
import Socials from "./Socials.tsx";
import emailjs from "@emailjs/browser";
import { EmailJSResponseStatus } from "@emailjs/browser";

function Home() {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) {
            return;
        }

        setLoading(true);

        emailjs
            .sendForm(
                "service_rdjy9ce",
                "template_bvcc7cp",
                formRef.current,
                "MqPxgpxuq6ZHXMigo"
            )
            .then(
                (result: EmailJSResponseStatus) => {
                    console.log("Email sent succesfully!", result.text);
                    formRef.current?.reset();
                },
                (error: any) => {
                    console.error("Failed to send email:", error.text);
                }
            )
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="home-container fade-in">
            <div className="home-image-array">
                <img
                    className="home-image"
                    src="/media/PurpleMug.jpg"
                    alt="purple mug"
                />
                <img
                    className="home-image"
                    src="/media/RedVase.jpg"
                    alt="red vasel"
                />
                <img
                    className="home-image"
                    src="/media/GreenMugTall.jpg"
                    alt="green planter"
                />
            </div>
            <div className="home-about-me">
                <div className="home-about-me-content">
                    <div className="home-about-me-header">Handmade Pottery</div>
                    <div className="home-about-me-description">
                        Hi, I’m Lauren and I’ve been doing pottery for as long
                        as I can remember. I started in art class in elementary
                        school, and really focused on throwing on the wheel in
                        high school. Now that I’m in my twenties, I’ve
                        rediscovered my passion for ceramics! Take a look around
                        at my recent work and contact me about commissions or to
                        purchase a piece. Currently offering hand delivery in
                        Omaha, and shipping throughout the US.
                    </div>
                </div>
            </div>
            <form
                ref={formRef}
                className="contact-form"
                onSubmit={handleSubmit}
            >
                <div className="home-mailing-list">
                    <div className="home-mailing-list-header">
                        Stay in the loop!
                    </div>
                    <div className="home-mailing-list-description">
                        Be the first to know about new collections, upcoming
                        shows, and more.
                    </div>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="home-mailing-list-input"
                        required
                    />
                    <button className="home-mailing-list-submit">
                        {loading ? "Sending..." : "Sign Up"}
                    </button>
                </div>
            </form>
            <Socials />
        </div>
    );
}

export default Home;
