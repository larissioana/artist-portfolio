import { useEffect, useState } from 'react';
import './header.scss';
import { useNavigate, Link } from 'react-router-dom';
import { Blurhash } from 'react-blurhash';
import Title from '../title/Title';

const Header = () => {
    const imageToPreload = '/img.webp';
    const navigate = useNavigate();
    const [isLoaded, setIsLoaded] = useState(false);

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
            <Title />
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
