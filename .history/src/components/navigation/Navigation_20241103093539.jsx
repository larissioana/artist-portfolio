import './navigation.scss';
import { Link } from 'react-router-dom';
import { socialMedia } from '../../utils/socialMedia';

const Navigation = () => {
    return (
        <nav className="nav">
            <div className="burger">
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
        </nav>
    )
}

export default Navigation
