import "../styles/Home.css";
import { SubmissionStatus } from "../enums/SubmissionStatus.ts";
import { useRef, useState } from "react";
import Socials from "./Socials.tsx";
import emailjs from "@emailjs/browser";
import { EmailJSResponseStatus } from "@emailjs/browser";
import { Media } from "../constants/Media.ts";

function Home() {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<SubmissionStatus>(
        SubmissionStatus.None
    );

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) {
            return;
        }

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
                    setStatus(SubmissionStatus.Success);
                    formRef.current?.reset();
                },
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (error: any) => {
                    setStatus(SubmissionStatus.Error);
                    console.error("Failed to send email:", error.text);
                }
            );
    };

    return (
        <div className="home-container fade-in">
            {true && (
                <div className="home-upcoming-shows">
                    <div className="home-header">Upcoming Shows</div>
                    <div
                        className="home-description"
                        style={{ marginTop: "0.5rem" }}
                    >
                        Saturday, June 7th
                    </div>
                    <div className="home-description">
                        Additional Details Coming Soon...
                    </div>
                </div>
            )}

            <div className="home-image-array">
                <img
                    className="home-image"
                    src={Media.PurpleMug}
                    alt="purple mug"
                />
                <img
                    className="home-image"
                    src={Media.RedVase}
                    alt="red vasel"
                />
                <img
                    className="home-image"
                    src={Media.GreenMugTall}
                    alt="green planter"
                />
            </div>
            <div className="home-about-me">
                <div className="home-about-me-content">
                    <div
                        className="home-header"
                        style={{ marginBottom: "1rem" }}
                    >
                        Handmade Pottery
                    </div>
                    <div className="home-description">
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
                <div className="home-mailing-list-alert-banner">
                    {status !== SubmissionStatus.None && (
                        <div
                            className={`alert-banner ${
                                status === SubmissionStatus.Success
                                    ? "alert-success"
                                    : "alert-error"
                            }`}
                        >
                            {status === SubmissionStatus.Success
                                ? "Email sent successfully!"
                                : "Failed to send email. Please try again."}
                        </div>
                    )}
                </div>
                <div className="home-mailing-list">
                    <div className="home-header">Stay in the loop!</div>
                    <div
                        className="home-description"
                        style={{
                            textAlign: "center",
                            marginTop: "1rem",
                            marginBottom: "1rem",
                        }}
                    >
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
                        Sign Up
                    </button>
                </div>
            </form>
            <Socials />
        </div>
    );
}

export default Home;
