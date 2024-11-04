import { useEffect, useRef, useState } from 'react'
import './band.css'
import { gsap } from 'gsap'
import { band } from '../../utils/band';

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
        <div>

        </div>
    )
}

export default Band
