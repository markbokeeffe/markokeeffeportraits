'use client';

import React, { useState } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import './letters.css';

interface Letter {
  filename: string;
  name: string;
  width: number;
  height: number;
}

const letterData: Letter[] = [
  { filename: 'letter_john_hume.jpeg', name: 'John Hume', width: 800, height: 1000 },
  { filename: 'letter_quentin_blake.jpeg', name: 'Quentin Blake', width: 800, height: 1000 },
  { filename: 'letter_gordon_brown.jpeg', name: 'Gordon Brown', width: 800, height: 1000 },
  { filename: 'letter_austin_currie.jpeg', name: 'Austin Currie', width: 800, height: 1000 },
  { filename: 'letter_terry_devalera.jpeg', name: 'de Valera family', width: 800, height: 1000 },
  { filename: 'letter_seamus_heaney.jpeg', name: 'Seamus Heaney', width: 800, height: 1000 },
  { filename: 'letter_james_callaghan.jpeg', name: 'James Callaghan', width: 800, height: 1000 },
  { filename: 'letter_edmund_hillery.jpeg', name: 'Sir Edmund Hillary', width: 800, height: 1000 },
  { filename: 'letter_john_major.jpeg', name: 'John Majr', width: 800, height: 1000 },
  { filename: 'letter_al_gore.jpeg', name: 'Al Gore', width: 800, height: 1000 },
  { filename: 'letter_pat_hitchcock.jpeg', name: 'Pat Hitchcock', width: 800, height: 1000 },
  { filename: 'letter_jimmy_carter.jpeg', name: 'Jimmy Carter', width: 800, height: 1000 },
  { filename: 'letter_albert_reynolds.jpeg', name: 'Albert Reynolds', width: 800, height: 1000 },
  { filename: 'letter_queen_elizabeth.jpeg', name: 'Queen Elizabeth', width: 800, height: 1000 },
];

export default function LettersPage() {
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (letter: Letter, index: number) => {
    setSelectedLetter(letter);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedLetter(null);
    document.body.style.overflow = 'unset';
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + letterData.length) % letterData.length;
    setSelectedLetter(letterData[newIndex]);
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % letterData.length;
    setSelectedLetter(letterData[newIndex]);
    setCurrentIndex(newIndex);
  };

  React.useEffect(() => {
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
      <main className="letters-page">
        <div className="container">
          <h1 className="letters-title">Letters</h1>
          
          <div className="letters-intro">
            <p className="intro-text">A selection of some letters received from public figures by Mark, in appreciation of his work.</p>
          </div>

          {/* Gallery Wall Grid */}
          <div className="letters-gallery">
            {letterData.map((letter, index) => (
              <div
                key={letter.filename}
                className="letter-frame"
                onClick={() => handleImageClick(letter, index)}
              >
                <div className="frame-inner">
                  <Image
                    src={`/letters/${letter.filename}`}
                    alt={letter.name}
                    width={letter.width}
                    height={letter.height}
                    className="letter-image"
                    priority={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedLetter && (
          <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal-content">
              <button className="modal-close" onClick={closeModal}>
                ×
              </button>
              
              <div className="modal-image-wrapper">
                <Image
                  src={`/letters/${selectedLetter.filename}`}
                  alt={selectedLetter.name}
                  width={selectedLetter.width}
                  height={selectedLetter.height}
                  className="modal-image"
                  priority
                />
              </div>
              
              <p className="modal-caption">{selectedLetter.name}</p>

              {/* Navigation Arrows */}
              <button className="modal-nav-button modal-prev" onClick={goToPrevious} aria-label="Previous letter">
                ‹
              </button>
              <button className="modal-nav-button modal-next" onClick={goToNext} aria-label="Next letter">
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