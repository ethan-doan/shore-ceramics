import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./client/components/Navbar.tsx";
import Home from "./client/components/Home.tsx";
import Portfolio from "./client/components/Portfolio.tsx";
import Shop from "./client/components/Shop.tsx";
import Contact from "./client/components/Contact.tsx";
import AboutMe from "./client/components/AboutMe.tsx";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about-me" element={<AboutMe />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
