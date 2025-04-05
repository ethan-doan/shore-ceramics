import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavbarModal.css";

type NavbarModalProps = {
    onClose: () => void;
    isClosing: boolean;
};

function NavbarModal({ onClose, isClosing }: NavbarModalProps) {
    const [showOverlay, setShowOverlay] = useState(false);

    useEffect(() => {
        if (!isClosing) {
            const timeout = setTimeout(() => {
                setShowOverlay(true);
            }, 10);

            return () => clearTimeout(timeout);
        } else {
            setShowOverlay(false);
        }
    }, [isClosing]);

    return (
        <div
            className={`modal-overlay ${showOverlay ? "visible" : ""}`}
            onClick={onClose}
        >
            <div
                className={`navbar-modal ${isClosing ? "closing" : ""}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="navbar-modal-content">
                    <ul>
                        <li>
                            <Link to="/" onClick={onClose}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/portfolio" onClick={onClose}>
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link to="/shop" onClick={onClose}>
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={onClose}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/about-me" onClick={onClose}>
                                About Me
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavbarModal;
