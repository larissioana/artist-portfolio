import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Title = () => {
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

    return (
        <div className="title">
            <Link to="/" className="link" style={{
                fontSize: isScrolling ? "2rem" : "4rem"
            }}>Slipknot</Link>
        </div>
    )
}

export default Title
