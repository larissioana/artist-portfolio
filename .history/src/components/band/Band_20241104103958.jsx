import { useEffect, useRef, useState } from 'react'
import './band.css'
import { gsap } from 'gsap'
import { band } from '../../utils/band';
import Title from '../title/Title';

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
            const distance = index - currentSlide;
            const isActive = distance === 0;

            gsap.to(slide, {
                scale: isActive ? 1 : 0.9 + 0.05 * Math.abs(distance), // Scale down with distance
                opacity: isActive ? 1 : 0.5 - 0.1 * Math.abs(distance), // Opacity lowers with distance
                zIndex: -Math.abs(distance), // Ensure layering with distance
                y: distance * 30, // Adjust `y` position slightly for each item to stack vertically
                duration: 0.5,
                ease: "power2.out",
            });
        });
    }, [currentSlide]);

    useEffect(() => {
        window.addEventListener('wheel', handleScroll, { passive: false });
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);

    return (
        <div className="band-container">
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
                            background: '#fff',
                            border: '1px solid #2a2929',
                            display: 'flex',
                            borderRadius: ".4rem",
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: index === currentSlide ? 10 : 1,
                            opacity: index === currentSlide ? 1 : 0.3,
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
