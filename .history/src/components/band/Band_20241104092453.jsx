import { useRef, useState } from 'react'
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
    }
    return (
        <div>

        </div>
    )
}

export default Band
