import { useEffect, useRef, useState } from 'react'
import './band.css'
import { gsap } from 'gsap'
import { band } from '../../utils/band';
import Title from '../title/Title';
import { Link } from 'react-router-dom';

const Band = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef([]);

    const handleScroll = (e) => {
        e.preventDefault();
        const { deltaY } = e;

        if (deltaY > 0) {
            setCurrentSlide((prev) => Math.min(prev + 1, band.length - 1))
        } else if (deltaY < 0) {
            setCurrentSlide((prev) => Math.max(prev - 1, 0))
        }
    };

    useEffect(() => {
        slideRef.current.forEach((slide, index) => {
            const isActive = index === currentSlide;
            gsap.to(slide, {
                scale: isActive ? 0.9 : 1,
                zIndex: isActive ? 10 : 1,
                duration: 0.5,
                ease: "power2.out",
                transform: `translateY(${(index - currentSlide) * 100}%)`
            })
        })
    }, [currentSlide]);

    useEffect(() => {
        window.addEventListener('wheel', handleScroll, { passive: false });
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);

    return (
        <div className="band-container">
            <div className="band-link">
                <Link to="/" className="link"> {"- Return home"}</Link>
            </div>
            <Title />
            {
                band.map((artist, index) => {
                    return <div
                        key={artist.id}
                        ref={(el) => (slideRef.current[index] = el)}
                        className="slide"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            borderRadius: ".4rem",
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: index === currentSlide ? 10 : 1,
                            opacity: index === currentSlide ? 1 : 0,
                        }}
                    >
                        <img src={artist.img} alt={artist.name} />
                        <h1>{artist.name}</h1>
                        <p>{artist.description}</p>
                    </div>
                })
            }
        </div>
    )
}

export default Band
