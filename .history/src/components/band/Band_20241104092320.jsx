import { useRef, useState } from 'react'
import './band.css'
import { gsap } from 'gsap'

const Band = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef([]);

    const handleScroll = (e) => {
        e.preventDefault();
    }
    return (
        <div>

        </div>
    )
}

export default Band
