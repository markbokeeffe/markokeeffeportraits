'use client';

import { useState } from 'react';
import ImageModal from '../components/ImageModal';
import presentationsData from '../../public/data/presentations.json';
import '../styles/Gallery.css';

interface Presentation {
  id: number;
  title: string;
  description: string;
  filename: string;
  date: string;
  venue: string;
}

const presentations = presentationsData as Presentation[];

export default function PresentationsPage() {
  const [selected, setSelected] = useState<Presentation | null>(null);

  return (
    <div className="gallery-section">
      <div className="gallery-header">
        <h1>Portrait Presentations</h1>
        <p>
          The moment of unveiling a portrait is always special. Here are some
          cherished presentation moments shared with permission by clients.
        </p>
      </div>

      <div className="masonry-grid">
        {presentations.map((item) => (
          <div
            key={item.id}
            className="masonry-item"
            onClick={() => setSelected(item)}
            role="button"
            tabIndex={0}
            aria-label={`View ${item.title}`}
            onKeyDown={(e) => e.key === 'Enter' && setSelected(item)}
          >
            <div className="masonry-image-placeholder">{item.filename}</div>
            <div className="masonry-overlay">
              <div className="masonry-overlay-text">
                <h3>{item.title}</h3>
                <p>{item.venue}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <ImageModal
          item={{ title: selected.title, description: `${selected.venue} · ${selected.date}`, filename: selected.filename }}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}
