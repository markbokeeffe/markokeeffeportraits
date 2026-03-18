'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import './presentations.css';

interface Presentation {
  filename: string;
  name: string;
  width: number;
  height: number;
}

const presentationData: Presentation[] = [
  { filename: 'albert_reynolds.jpg', name: 'Albert Reynolds', width: 1000, height: 667 },
  { filename: 'alex_ferguson.jpg', name: 'Alex Ferguson', width: 1000, height: 667 },
  { filename: 'bertie_ahern.jpg', name: 'Bertie Ahern', width: 1000, height: 667 },
  { filename: 'chris_hadfield.jpg', name: 'Chris Hadfield', width: 1000, height: 667 },
  { filename: 'desmond_tutu.jpg', name: 'Desmond Tutu', width: 1000, height: 667 },
  { filename: 'eamon_dunphy.jpg', name: 'Éamon Dunphy', width: 1000, height: 667 },
  { filename: 'fw_deklerk.jpg', name: 'F.W. de Klerk', width: 1000, height: 667 },
  { filename: 'garret_fitzgerald_2002.jpg', name: 'Garret FitzGerald', width: 1000, height: 667 },
  { filename: 'garret_fitzgerald_2006.jpg', name: 'Garret FitzGerald', width: 1000, height: 667 },
  { filename: 'ian_mckeever.jpg', name: 'Ian McKeever', width: 1000, height: 667 },
  { filename: 'jesse_jackson.jpg', name: 'Jesse Jackson', width: 1000, height: 667 },
  { filename: 'john_bruton.jpg', name: 'John Bruton', width: 1000, height: 667 },
  { filename: 'john_bruton_office.jpg', name: 'John Bruton', width: 1000, height: 667 },
  { filename: 'john_howard.jpg', name: 'John Howard', width: 1000, height: 667 },
  { filename: 'john_hume.jpg', name: 'John Hume', width: 1000, height: 667 },
  { filename: 'ip_mcmanus.jpg', name: 'IP McManus', width: 1000, height: 667 },
  { filename: 'luan_parle.jpg', name: 'Luan Parle', width: 1000, height: 667 },
  { filename: 'luan_parle_home.jpg', name: 'Luan Parle', width: 1000, height: 667 },
  { filename: 'mary_mcaleese.jpg', name: 'Mary McAleese', width: 1000, height: 667 },
  { filename: 'michael_d_higgins_2013.jpg', name: 'Michael D. Higgins', width: 1000, height: 667 },
  { filename: 'michael_d_higgins_2025.jpg', name: 'Michael D. Higgins', width: 1000, height: 667 },
  { filename: 'michael_o_muircheartaigh.jpg', name: 'Michael Ó Muircheartaigh', width: 1000, height: 667 },
  { filename: 'noam_chomsky.jpg', name: 'Noam Chomsky', width: 1000, height: 667 },
  { filename: 'norman_wisdom.jpg', name: 'Norman Wisdom', width: 1000, height: 667 },
  { filename: 'pope_benedict.jpg', name: 'Pope Benedict XVI', width: 1000, height: 667 },
  { filename: 'robert_ballagh.jpg', name: 'Robert Ballagh', width: 1000, height: 667 },
  { filename: 'robert_ballagh_studio.jpg', name: 'Robert Ballagh', width: 1000, height: 667 },
  { filename: 'smiley_bolger.jpg', name: 'Smiley Bolger', width: 1000, height: 667 },
  { filename: 'smiley_bolger_vicar_st.jpg', name: 'Smiley Bolger', width: 1000, height: 667 },
  { filename: 'tk_whitaker.jpg', name: 'T.K. Whitaker', width: 1000, height: 667 },
];

export default function PresentationsPage() {
  const [selectedPresentation, setSelectedPresentation] = useState<Presentation | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (presentation: Presentation, index: number) => {
    setSelectedPresentation(presentation);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPresentation(null);
    document.body.style.overflow = 'unset';
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + presentationData.length) % presentationData.length;
    setSelectedPresentation(presentationData[newIndex]);
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % presentationData.length;
    setSelectedPresentation(presentationData[newIndex]);
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    const handleArrows = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleEscape);
    window.addEventListener('keydown', handleArrows);
    return () => {
      window.removeEventListener('keydown', handleEscape);
      window.removeEventListener('keydown', handleArrows);
    };
  }, [currentIndex]);

  return (
    <>
      <Header />
      <main className="presentations-page">
        <div className="container">
          <h1 className="presentations-title">Presentations</h1>
          
          <div className="presentations-intro">
            <p className="intro-text">Portraits presented in public, civic and cultural settings.</p>
            <p className="intro-description">
              A selection of presentation photographs documenting portraits gifted and shared with notable public figures in formal and ceremonial contexts.
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="presentations-masonry">
            {presentationData.map((presentation, index) => (
              <div
                key={presentation.filename}
                className="presentation-item"
                onClick={() => handleImageClick(presentation, index)}
              >
                <Image
                  src={`/presentations/${presentation.filename}`}
                  alt={presentation.name}
                  width={presentation.width}
                  height={presentation.height}
                  className="presentation-image"
                  priority={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedPresentation && (
          <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal-content">
              <button className="modal-close" onClick={closeModal}>
                ×
              </button>
              
              <div className="modal-image-wrapper">
                <Image
                  src={`/presentations/${selectedPresentation.filename}`}
                  alt={selectedPresentation.name}
                  width={selectedPresentation.width}
                  height={selectedPresentation.height}
                  className="modal-image"
                  priority
                />
              </div>
              
              <p className="modal-caption">{selectedPresentation.name}</p>

              {/* Navigation Arrows */}
              <button className="modal-nav-button modal-prev" onClick={goToPrevious} aria-label="Previous image">
                ‹
              </button>
              <button className="modal-nav-button modal-next" onClick={goToNext} aria-label="Next image">
                ›
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}