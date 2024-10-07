import { useState } from 'react';
import './navigation.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [selectedLink, setSelectedLink] = useState("home");
    const handleSelectedLink = (link) => {
        setSelectedLink(link);
    };

    return (
        <nav className="nav">
            <div className="nav-left">
                <a
                    href="/"
                    style={{
                        textDecoration: selectedLink === "home" ? "underline" : "",
                    }}
                    onClick={() => handleSelectedLink("home")}
                >Home
                </a>
                <a
                    href="#"
                    style={{
                        textDecoration: selectedLink === "shop" ? "underline" : ""
                    }}
                    onClick={() => handleSelectedLink("shop")}
                >Shop
                </a>
                <Link
                    to="/discography"
                    style={{
                        textDecoration: selectedLink === "music" ? "underline" : "",
                    }}
                    onClick={() => handleSelectedLink("music")}
                >Music
                </Link>
                <a
                    href="#"
                    style={{
                        textDecoration: selectedLink === "gallery" ? "underline" : ""
                    }}
                    onClick={() => handleSelectedLink("gallery")}
                >Gallery
                </a>
            </div>
            <div className="nav-right">
                <a
                    href="#"
                    style={{
                        textDecoration: selectedLink === "tour" ? "underline" : ""
                    }}
                    onClick={() => handleSelectedLink("tour")}
                >Tour
                </a>
                <a href="#"
                    style={{
                        textDecoration: selectedLink === "search" ? "underline" : ""
                    }}
                    onClick={() => handleSelectedLink("search")}
                >Search
                </a>
            </div>
        </nav>
    )
}

export default Navigation
