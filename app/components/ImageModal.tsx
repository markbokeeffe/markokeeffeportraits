'use client';

import { useEffect, useCallback } from 'react';
import './ImageModal.css';

interface ModalItem {
  title: string;
  description?: string;
  filename?: string;
}

interface ImageModalProps {
  item: ModalItem;
  onClose: () => void;
}

export default function ImageModal({ item, onClose }: ImageModalProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="modal-image-wrapper">
          <div className="modal-image-placeholder">
            {/* Replace with <Image /> once real assets are added */}
            <span>{item.filename ?? item.title}</span>
          </div>
        </div>

        <div className="modal-caption">
          <h3>{item.title}</h3>
          {item.description && <p>{item.description}</p>}
        </div>
      </div>
    </div>
  );
}
