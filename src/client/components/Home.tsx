import "../styles/Home.css";
import { SubmissionStatus } from "../enums/SubmissionStatus.ts";
import { useRef, useState } from "react";
import Socials from "./Socials.tsx";
import emailjs from "@emailjs/browser";
import { EmailJSResponseStatus } from "@emailjs/browser";
import { Media } from "../constants/Media.ts";
import { Link } from "react-router-dom";

function Home() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<SubmissionStatus>(SubmissionStatus.None);

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
        "MqPxgpxuq6ZHXMigo",
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log("Email sent succesfully!", result.text);
          setStatus(SubmissionStatus.Success);
          formRef.current?.reset();
        },
        (error: EmailJSResponseStatus) => {
          setStatus(SubmissionStatus.Error);
          console.error("Failed to send email:", error.text);
        },
      );
  };

  return (
    <div className="home-container fade-in">
      {/* <div className="home-upcoming-shows">
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
      </div> */}
      <div className="home-hero-content">
        <picture>
          <source media="(max-width: 600px)" srcSet={Media.HeroMobile} />
          <img
            className="home-hero"
            src={Media.Hero}
            alt="Shore Ceramics hero"
          />
        </picture>
        <h1 className="home-hero-title">Shore Ceramics</h1>
      </div>
      <div className="home-image-array">
        <img
          className="home-image"
          src={Media.RusticHoneypotVase}
          alt="purple mug"
        />
        <img className="home-image" src={Media.JadeMug} alt="red vasel" />
        <img
          className="home-image"
          src={Media.RusticHoneyBowl}
          alt="green planter"
        />
      </div>
      <div className="home-about-me">
        <div className="home-about-me-content">
          <div className="home-header" style={{ marginBottom: "1rem" }}>
            Comissions are OPEN!
          </div>
          <div className="home-description">
            Interested in purchasing a custom piece? Please contact me below and
            we can discuss further. Keep in mind creating a custom piece can
            take 3-5 weeks depending on quantity and complexity of design.
          </div>
          <Link to="/contact" className="home-commissions-button">
            Contact Me
          </Link>
        </div>
        <img
          alt="portrait"
          src={Media.Portrait2}
          className="home-about-me-image"
        />
      </div>
      <div className="home-image-array">
        <Link to="/shop" className="home-image-link">
          <span className="home-image-link-title">Shop</span>
          <img
            alt="mint chip vase"
            src={Media.PolishVase}
            className="home-image-nav"
          />
        </Link>
        <Link to="/portfolio" className="home-image-link">
          <span className="home-image-link-title">Portfolio</span>
          <img
            className="home-image-nav"
            src={Media.SpeckledMoonVase}
            alt="bookends"
          />
        </Link>
        <Link to="/about-me" className="home-image-link">
          <span className="home-image-link-title">About Me</span>
          <img
            alt="green planter"
            src={Media.MintChipVase}
            className="home-image-nav"
          />
        </Link>
      </div>
      <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
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
            Be the first to know about new collections, upcoming shows, and
            more.
          </div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="home-mailing-list-input"
            required
          />
          <button className="home-mailing-list-submit">Sign Up</button>
        </div>
      </form>
      <Socials />
    </div>
  );
}

export default Home;
