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
    const galleryRef = useRef([]);

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
    }, [currentGalleryIndex]);

    useEffect(() => {
        window.addEventListener("wheel", handleScroll, { passive: false });
        return () => {
            window.removeEventListener("wheel", handleScroll);
        }
    }, []);


    return (
        <div className="gallery-container">
            {
                gallery.map((image, index) => {
                    return <img
                        key={image.id}
                        ref={(el) => (galleryRef.current[index] = el)}
                        src={image.img}
                        alt="slipknot gallery"
                        className="gallery-item"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '90%',
                            background: '#fff',
                            border: '1px solid #ccc',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: index === currentGalleryIndex ? 10 : 1,
                            opacity: index === currentGalleryIndex ? 1 : 0.5
                        }}
                    />
                })
            }
        </div>
    )
}

export default Gallery
