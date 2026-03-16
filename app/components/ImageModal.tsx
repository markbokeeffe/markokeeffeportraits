import React from 'react';
import './ImageModal.css';

type ImageModalProps = {
    isOpen: boolean;
    imageUrl: string;
    title: string;
    onClose: () => void;
};

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, imageUrl, title, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="image-modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>{title}</h2>
                <img src={imageUrl} alt={title} />
            </div>
        </div>
    );
};

export default ImageModal;