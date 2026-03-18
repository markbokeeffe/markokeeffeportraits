'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/app/components/Header';
// import Footer from '@/app/components/Footer';
import Image from 'next/image';
import './portraits.css';

interface Portrait {
  filename: string;
  name: string;
}

const portraitData: Portrait[] = [
  { filename: 'president-higgins-portrait-2013.jpg', name: 'Michael D. Higgins' },
  { filename: 'Amy Winehouse 2015.jpg', name: 'Amy Winehouse' },
  { filename: 'Ed Hillary.JPG', name: 'Edmund Hillary' },
  { filename: 'jack-nicholson-portrait-2015.jpg', name: 'Jack Nicholson' },
  { filename: 'Louis Armstrong 2014.jpg', name: 'Louis Armstrong' },
  { filename: 'mahatmaGandhi_2014 (1).jpg', name: 'Mahatma Gandhi' },
  { filename: 'marilyn_monroe_2013.jpg', name: 'Marilyn Monroe' },
  { filename: 'Quentin Blake 2015.jpg', name: 'Quentin Blake' },
  { filename: 'leonard-cohen-portrait.jpg', name: 'Leonard Cohen' },
  { filename: 'iggy-pop-portrait.jpg', name: 'Iggy Pop' },
  { filename: 'jack-nicholson-portrait.jpg', name: 'Jack Nicholson' },
  { filename: 'anthony-hopkins-portrait.jpg', name: 'Anthony Hopkins' },
  { filename: 'morgan-freeman-portrait.jpg', name: 'Morgan Freeman' },
  { filename: 'ian-mckellen-portrait.jpg', name: 'Sir Ian McKellen' },
  { filename: 'sean-connery-portrait.jpg', name: 'Sean Connery' },
  { filename: 'samuel-beckett-portrait.jpg', name: 'Samuel Beckett' },
  { filename: 'desmond-tutu-portrait.jpg', name: 'Desmond Tutu' },
  { filename: 'bill-clinton-portrait.jpg', name: 'Bill Clinton' },
];

export default function PortraitsPage() {
  const [selectedPortrait, setSelectedPortrait] = useState<Portrait | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);

  const handleImageClick = (portrait: Portrait) => {
    setSelectedPortrait(portrait);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPortrait(null);
    document.body.style.overflow = 'unset';
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      <Header />
      <main className="portraits-page">
        <div className="container">
          <h1 className="portraits-title">PORTRAITS</h1>

          <div className="portraits-masonry">
            {portraitData.map((portrait) => (
              <div
                key={portrait.filename}
                className="portrait-grid-item"
                onClick={() => handleImageClick(portrait)}
              >
                <div className="portrait-image-wrapper">
                  <Image
                    src={`/portraits/${portrait.filename}`}
                    alt={portrait.name}
                    width={300}
                    height={375}
                    className="portrait-grid-image"
                    priority={false}
                  />
                </div>
                <p className="portrait-name">{portrait.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedPortrait && (
          <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal-content">
              <button className="modal-close" onClick={closeModal}>
                ×
              </button>
              <div className="modal-image-wrapper">
                <Image
                  src={`/portraits/${selectedPortrait.filename}`}
                  alt={selectedPortrait.name}
                  width={600}
                  height={750}
                  className="modal-image"
                  priority
                  onError={() => setImageError(`Failed to load ${selectedPortrait.name}`)}
                />
              </div>
              <p className="modal-caption">{selectedPortrait.name}</p>
            </div>
          </div>
        )}
      </main>
      {/* <Footer /> */}
    </>
  );
}