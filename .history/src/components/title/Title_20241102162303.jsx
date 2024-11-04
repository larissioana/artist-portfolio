import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './title.css'

const Title = () => {
    const [isScrolling, setIsScrolling] = useState(false);
    const location = useLocation();
    const pathname = location.pathname;
    console.log({ pathname })

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
            <Link to="/" className="link" style={{
                fontSize: isScrolling ? "2rem" : "4rem",
                color: pathname === '/tour' ? "black" : ""
            }}>Slipknot</Link>
        </div>
    )
}

export default Title
