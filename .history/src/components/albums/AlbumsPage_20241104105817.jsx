import { useState, useEffect } from "react";
import './albums.scss';
import { discography } from "../../utils/discography";
import { Link } from "react-router-dom";
import Modal from "../../components/modal/Modal";
import { Tooltip } from 'react-tooltip'
import Title from "../title/Title";

const AlbumsPage = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAlbum = (album, image) => {
        setSelectedAlbum(album);
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedAlbum(null);
    };

    useEffect(() => {
        setIsOpen(true);
    }, []);

    useEffect(() => {
        discography.forEach(album => {
            const img = new Image();
            img.src = album.image;
        });
    }, []);

    return (
        <div className={`album-page ${isOpen ? 'open' : ''}`}>
            <div className="title-albums">
                <Title />
            </div>
            <div className="discography-container">
                {
                    discography.map((album) => {
                        return <div key={album.id}>
                            <img
                                style={{
                                    filter: selectedImage === album.image ? "none" : "grayscale(50%)"
                                }}
                                key={album.id}
                                onClick={() => handleAlbum(album, album.image)}
                                src={album.image}
                                alt={album.name}
                                data-tooltip-id="my-tooltip" data-tooltip-content={album.name.toUpperCase()}
                            />
                            <Tooltip id="my-tooltip" place="bottom" />
                        </div>
                    })
                }
            </div>
            <div className="title-flex-container">
                <h1>Discography</h1>
                <Link to="/" className="link"> {"- Return home"}</Link>
            </div>
            <div className="about-artists">
                <p>Slipknot is an American heavy metal band <br /> formed in Des Moines, Iowa, <br /> in 1995 by percussionist Shawn Crahan, <br /> former vocalist Anders Colsefni, <br /> and bassist Paul Gray.</p>
            </div>
            {
                isModalOpen &&
                <Modal onClose={closeModal} setSelectedAlbum={setSelectedAlbum} selectedAlbum={selectedAlbum} setSelectedImage={setSelectedImage} selectedImage={selectedImage} />
            }
        </div>
    )
}

export default AlbumsPage