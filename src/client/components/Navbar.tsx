import { useState } from "react";
import { Link } from "react-router-dom";
import NavbarIcon from "./NavbarIcon.tsx";
import NavbarModal from "./NavbarModal.tsx";
import "../styles/Navbar.css";

function Navbar() {
    const [isClosing, setIsClosing] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClose = () => {
        setIsClosing(true);

        setTimeout(() => {
            setIsClosing(false);
            setIsModalOpen(false);
        }, 300);
    };

    return (
        <div className="navbar">
            <div className="icon-wrapper" tabIndex={0} role="button">
                <NavbarIcon
                    onClick={() => {
                        setIsModalOpen(true);
                    }}
                    className={`navbar-icon ${isModalOpen ? "hidden" : "visible"}`}
                >
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                </NavbarIcon>
                <NavbarIcon
                    onClick={() => {
                        handleClose();
                    }}
                    className={`navbar-icon ${isModalOpen ? "visible" : "hidden"}`}
                >
                    <path d="M18 6 6 18" />
                    <path d="M6 6 18 18" />
                </NavbarIcon>
            </div>
            <div className="navbar-header">
                <Link to="/">Shore Ceramics</Link>
            </div>
            <button className="contact-me">
                <Link to="/contact">Contact Me</Link>
            </button>
            {isModalOpen && (
                <NavbarModal onClose={handleClose} isClosing={isClosing} />
            )}
        </div>
    );
}

export default Navbar;
