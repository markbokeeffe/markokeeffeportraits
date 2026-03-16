'use client';

import { useState } from 'react';
import ImageModal from '../components/ImageModal';
import portraitsData from '../../public/data/portraits.json';
import '../styles/Gallery.css';

interface Portrait {
  id: number;
  title: string;
  description: string;
  filename: string;
  featured: boolean;
}

const portraits = portraitsData as Portrait[];

export default function PortraitsPage() {
  const [selected, setSelected] = useState<Portrait | null>(null);

  return (
    <div className="gallery-section">
      <div className="gallery-header">
        <h1>Portrait Gallery</h1>
        <p>
          A collection of original portraits — each one a unique conversation
          between artist and subject, captured in paint.
        </p>
      </div>

      <div className="masonry-grid">
        {portraits.map((portrait) => (
          <div
            key={portrait.id}
            className="masonry-item"
            onClick={() => setSelected(portrait)}
            role="button"
            tabIndex={0}
            aria-label={`View ${portrait.title}`}
            onKeyDown={(e) => e.key === 'Enter' && setSelected(portrait)}
          >
            <div className="masonry-image-placeholder">{portrait.filename}</div>
            <div className="masonry-overlay">
              <div className="masonry-overlay-text">
                <h3>{portrait.title}</h3>
                <p>{portrait.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <ImageModal item={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
