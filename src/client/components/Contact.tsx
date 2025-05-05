import "../styles/Contact.css";
import { SubmissionStatus } from "../enums/SubmissionStatus.ts";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { EmailJSResponseStatus } from "@emailjs/browser";
import Socials from "./Socials.tsx";

function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [phone, setPhone] = useState("");
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
                "template_j742czr",
                formRef.current,
                "MqPxgpxuq6ZHXMigo"
            )
            .then(
                (result: EmailJSResponseStatus) => {
                    console.log("Email sent succesfully!", result.text);
                    setStatus(SubmissionStatus.Success);
                    formRef.current?.reset();
                    setPhone("");
                },
                (error: any) => {
                    console.error("Failed to send email:", error.text);
                    setStatus(SubmissionStatus.Error);
                }
            );
    };

    const formatPhone = (value) => {
        const digits = value.replace(/\D/g, "").slice(0, 10);
        const area = digits.slice(0, 3);
        const middle = digits.slice(3, 6);
        const ending = digits.slice(6, 10);

        if (digits.length > 6) {
            return `(${area}) ${middle}-${ending}`;
        } else if (digits.length > 3) {
            return `(${area}) ${middle}`;
        } else if (digits.length > 0) {
            return `(${area}`;
        }
        return "";
    };

    return (
        <div className="contact-container fade-in">
            <div className="contact-header">Contact Me</div>
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
            <div className="contact-description">
                Have inquiries about my collection or a commission? Shoot me an
                email and we can chat! If you are interested in a specific
                piece, please detail which one.
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
                    value={phone}
                    pattern="^\(\d{3}\) \d{3}-\d{4}$"
                    onChange={(e) => {
                        setPhone(formatPhone(e.target.value));
                    }}
                    placeholder="(123) 456-7890"
                    className="form-input"
                    required
                />
                <input
                    type="email"
                    name="email"
                    inputMode="email"
                    placeholder="yourname@example.com"
                    className="form-input"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Comment (e.g., Interested in the Moody Bowl)"
                    className="form-textarea"
                    rows={5}
                    required
                />
                <button className="contact-submit" tabIndex={0} type="submit">
                    Send
                </button>
            </form>
            <Socials />
        </div>
    );
}

export default Contact;
