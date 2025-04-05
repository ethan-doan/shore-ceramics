import "../styles/Contact.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Socials from "./Socials.tsx";

function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                "service_rdjy9ce",
                "template_j742czr",
                formRef.current,
                "MqPxgpxuq6ZHXMigo"
            )
            .then(
                (result) => {
                    console.log("Email sent succesfully!", result.text);
                    formRef.current.reset();
                },
                (error) => {
                    console.error("Failed to send email:", error.text);
                }
            )
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="contact-container fade-in">
            <div className="contact-header">Contact Me</div>
            <div className="contact-description">
                Have inquiries about my collection or a commission? Shoot me an
                email and I we can chat!
            </div>
            <form
                ref={formRef}
                className="contact-form"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="form-input"
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    pattern="^\+?[0-9\s\-]{7,15}$"
                    placeholder="(123) 456-7890"
                    className="form-input"
                    required
                />
                <input
                    type="text"
                    name="email"
                    placeholder="yourname@example.com"
                    className="form-input"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Comment"
                    className="form-textarea"
                    rows={5}
                    required
                />
                <button className="contact-submit" tabIndex={0} type="submit">
                    {loading ? "Sending" : "Send"}
                </button>
            </form>
            <Socials />
        </div>
    );
}

export default Contact;
