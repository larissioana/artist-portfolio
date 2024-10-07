import { useEffect } from 'react';
import './header.scss';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const imageToPreload = '/img.webp';
    const navigate = useNavigate();

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
                <h1>Slipknot</h1>
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
            <img className="header-img" src={imageToPreload} alt="slipknot" />
            <button onClick={handleClick} className="btn">View discography</button>
        </div>
    )
}

export default Header
