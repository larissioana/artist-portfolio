import { useEffect, useState } from 'react';
import './header.scss';
import { useNavigate, Link } from 'react-router-dom';
import { Blurhash } from 'react-blurhash';

const Header = () => {
    const imageToPreload = '/gallery1.png';
    const navigate = useNavigate();
    const [isLoaded, setIsLoaded] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    const handleClick = () => {
        navigate('/discography');
    };

    useEffect(() => {
        const img = new Image();
        img.src = imageToPreload;
    }, [imageToPreload]);


    return (
        <div>
            <div className="title">
                <Link to="/" className="link" style={{
                    fontSize: isScrolling ? "2rem" : "4rem"
                }}>Slipknot</Link>
            </div>
            <div className="description">
                <div>CELEBRATING 25 YEARS OF 'SLIPKNOT' |
                    CELEBRATING 25 YEARS OF 'SLIPKNOT' |
                    CELEBRATING 25 YEARS OF 'SLIPKNOT' |
                    CELEBRATING 25 YEARS OF 'SLIPKNOT' |
                    CELEBRATING 25 YEARS OF 'SLIPKNOT' |
                    CELEBRATING 25 YEARS OF 'SLIPKNOT' |
                </div>
            </div>
            {!isLoaded && (
                <Blurhash
                    hash="LuKBE,t7W=s:.mofRjWVaKj[M{jZ"
                    width="100%"
                    height="900px"
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                    style={{ position: 'absolute', top: 0, left: 0 }}
                />
            )}
            <img
                className="header-img"
                style={{
                    display: isLoaded ? 'block' : 'none',
                }}
                src={imageToPreload}
                alt="slipknot"
                onLoad={handleImageLoad}
            />
            <button onClick={handleClick} className="btn">View discography</button>
        </div>
    )
}

export default Header