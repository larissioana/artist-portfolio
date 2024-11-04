import { useState, useEffect } from 'react'
import { discography } from '../../utils/discography'
import './modal.scss'
import { Tooltip } from 'react-tooltip'
import PageTransition from '../pageTransition/PageTransition'

const Modal = ({ onClose, selectedAlbum, selectedImage, setSelectedImage, setSelectedAlbum }) => {
    const [isHovered, setIsHovered] = useState(null);

    const handleHovered = (index) => {
        setIsHovered(index);
    };

    const handleAlbum = (image, album) => {
        setSelectedImage(image)
        setSelectedAlbum(album)
    }

    useEffect(() => {
        discography.forEach(album => {
            const img = new Image();
            img.src = album.image;
        });
    }, []);

    return (
        <PageTransition>

            <div
                className="modal-overlay"
                initial={{ clipPath: 'circle(0% at 50% 50%)' }}
                animate={{ clipPath: 'circle(100% at 50% 50%)' }}
                exit={{ clipPath: 'circle(0% at 50% 50%)' }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <div className="albums">
                    {
                        discography.map((album) => {
                            return <div key={album.id}>
                                <img
                                    src={album.image}
                                    onClick={() => handleAlbum(album.image, album)}
                                    data-tooltip-id="my-tooltip" data-tooltip-content={album.name.toUpperCase()}
                                    style={{
                                        opacity: selectedImage === album.image ? "1" : "0.3",
                                        transition: "opacity .4s ease-in"
                                    }}
                                />
                                <Tooltip id="my-tooltip" place="bottom" />
                            </div>
                        })
                    }
                </div>
                <p className="close" onClick={onClose}>Close here</p>
                <div className="modal-content">
                    <h1>Slipknot</h1>
                    <div className="album-container">
                        <h3>{selectedAlbum.name}</h3>
                        <h3>year {selectedAlbum.year}</h3>
                        <img src={selectedAlbum.image} alt={selectedAlbum.name} width="200px" height="200px" />
                        {
                            selectedAlbum.songNames.map((song, index) => {
                                return <div key={song.id} onMouseEnter={() => handleHovered(index)} onMouseLeave={() => handleHovered(null)} style={{
                                    background: isHovered === index ? selectedAlbum.color : "",
                                    cursor: "pointer",
                                    padding: ".5rem",
                                    transition: "background .2s ease-in",
                                    borderRadius: ".5rem",
                                    color: isHovered === index ? "white" : ""
                                }} className="songs-container"
                                >
                                    <div className="song-and-album-name" >
                                        <p className="song">{song.name}</p>
                                        <p className="album" style={{
                                            color: isHovered === index ? "white" : ""
                                        }}>{selectedAlbum.name}</p>
                                    </div>
                                    <span style={{
                                        color: isHovered === index ? "white" : ""
                                    }}>{song.duration}</span>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div >
        </PageTransition>
    )
}

export default Modal
