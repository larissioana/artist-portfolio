import { useState } from 'react';
import './navigation.scss';
import { Link } from 'react-router-dom';
import { socialMedia } from '../../utils/socialMedia';

const Navigation = () => {
    const [selectedLink, setSelectedLink] = useState("home");
    const handleSelectedLink = (link) => {
        setSelectedLink(link);
    };

    return (
        <nav className="nav">
            <div className="nav-left">
                {
                    socialMedia.map((media) => {
                        return <a href={media.url} key={media.id} target="_blank">
                            <img src={media.img} width="30px" alt="slipknot social media links" />
                        </a>
                    })
                }
            </div>
            <div className="nav-right">
                <Link to="/discography">Discography</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/tour">Tour</Link>
            </div>
        </nav>
    )
}

export default Navigation
