import './navigation.scss';
import { Link } from 'react-router-dom';
import { socialMedia } from '../../utils/socialMedia';
import { useState } from 'react';

const Navigation = () => {
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleMobileNav = () => setMobileNavOpen(!isMobileNavOpen);
    return (
        <nav className="nav">
            <div className="burger" onClick={toggleMobileNav}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <div className="nav-left">
                {
                    socialMedia.map((media) => {
                        return <a href={media.url} key={media.id} target="_blank">
                            <img src={media.img} width="25px" alt="slipknot social media links" />
                        </a>
                    })
                }
            </div>
            <div className="nav-right">
                <Link to="/discography">Discography</Link>
                <Link to="/films">Films</Link>
                <Link to="/tour">Tour</Link>
            </div>
            <div className="mobile-nav">
                <div className="mobile-nav-left">
                    {
                        socialMedia.map((media) => {
                            return <a href={media.url} key={media.id} target="_blank">
                                <img src={media.img} width="25px" alt="slipknot social media links" />
                            </a>
                        })
                    }
                </div>
                <div className="mobile-nav-right">
                    <Link to="/discography">Discography</Link>
                    <Link to="/films">Films</Link>
                    <Link to="/tour">Tour</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
