import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './title.css'

const Title = () => {
    const [isScrolling, setIsScrolling] = useState(false);
    const location = useLocation();
    const pathname = location.pathname;

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

    return (
        <div className="title">
            <Link to="/" className="logo" style={{
                fontSize: isScrolling ? "2rem" : "3rem",
                textShadow: pathname === '/' ? " 3px 1px 1px rgb(172, 14, 14)" : "",
                right: pathname === '/band' ? "3rem" : ""
            }}>Slipknot</Link>
        </div>
    )
}

export default Title
