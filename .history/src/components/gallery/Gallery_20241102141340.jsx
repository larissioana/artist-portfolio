import './gallery.css'
import img from '../../../public/gallery1.png'
import img2 from '../../../public/gallery2.png'
import img3 from '../../../public/gallery3.png'
import img4 from '../../../public/gallery4.png'
import { gsap } from 'gsap'
import { useEffect, useRef, useState } from 'react'

const gallery = [
    {
        id: 1,
        img: img
    },
    {
        id: 2,
        img: img2
    },
    {
        id: 3,
        img: img3
    },
    {
        id: 4,
        img: img4
    }
]

const Gallery = () => {
    const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
    const galleryRef = useRef();

    const handleScroll = (e) => {
        e.preventDefault();
        const { deltaY } = e;

        if (deltaY > 0) {
            setCurrentGalleryIndex((prev) => Math.min(prev + 1, gallery.length - 1))
        } else if (deltaY < 0) {
            setCurrentGalleryIndex((prev) => Math.max(prev - 1, 0))
        }
    };

    useEffect(() => {
        galleryRef.current.forEach((item, index) => {
            const isActive = index === currentGalleryIndex;
            gsap.to(item, {
                scale: isActive ? 0.9 : 1,
                zIndex: isActive ? 10 : 1,
                duration: 0.5,
                ease: "power2.out",
                transform: `translateY(${(index - currentGalleryIndex) * 100}%)`
            })
        })
    }, []);


    return (
        <div>

        </div>
    )
}

export default Gallery
