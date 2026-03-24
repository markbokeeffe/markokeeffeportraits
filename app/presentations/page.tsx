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
  { filename: 'albert_reynolds.jpg', name: 'Former Taoiseach, Albert Reynolds, UCD, February 2002', width: 1000, height: 667 },
  { filename: 'alex_ferguson.jpg', name: 'Manager of Manchester United, Alex Ferguson, Kilmallock, July 2002', width: 1000, height: 667 },
  { filename: 'bertie_ahern.jpg', name: 'Then Taoiseach Bertie Ahern, UCD, January 2003', width: 1000, height: 667 },
  { filename: 'chris_hadfield.jpg', name: 'Astronaut, Chris Hadfield, Dublin, December 2014', width: 1000, height: 667 },
  { filename: 'desmond_tutu.jpg', name: 'Archbishop Desmond Tutu, UCD, February 2009', width: 1000, height: 667 },
  { filename: 'eamon_dunphy.jpg', name: 'Éamon Dunphy in interview with RTE at his home, with portrait behind him.  June 2002', width: 1000, height: 667 },
  { filename: 'fw_deklerk.jpg', name: 'Former President of South Africa, F.W. de Klerk, UCD, January 2004', width: 1000, height: 667 },
  { filename: 'garret_fitzgerald_2002.jpg', name: 'Former Taoiseach, Garret FitzGerald, UCD, October 2002', width: 1000, height: 667 },
  { filename: 'garret_fitzgerald_2006.jpg', name: 'Former Taoiseach, Garret FitzGerald, Ranelagh, June 2006', width: 1000, height: 667 },
  { filename: 'ian_mckeever.jpg', name: 'World record-breaking mountaineer, Ian McKeever, Dun Laoighaire, September 2008', width: 1000, height: 667 },
  { filename: 'jesse_jackson.jpg', name: 'Civil Rights Leader, Jesse Jackson, UCD, November 2004', width: 1000, height: 667 },
  { filename: 'john_bruton.jpg', name: 'Former Taoiseach, John Bruton, UCD, October 2002', width: 1000, height: 667 },
  { filename: 'john_bruton_office.jpg', name: 'Former Taoiseach, John Bruton in his office in 2004, with portrait of Michael Collins behind him.  Photo courtesy of Colm Henry.', width: 1000, height: 667 },
  { filename: 'john_howard.jpg', name: 'Then Prime Minister of Australia, John Howard, UCD, May 2006', width: 1000, height: 667 },
  { filename: 'john_hume.jpg', name: 'SDLP Leader,John Hume, UCD, October 2001', width: 1000, height: 667 },
  { filename: 'jp_mcmanus.jpg', name: 'Champion Racehorse Owner, JP McManus, Martinstown, Kilmallock, July 2002', width: 1000, height: 667 },
  { filename: 'luan_parle.jpg', name: 'Singer Luan Parle, Dublin, 2008', width: 1000, height: 667 },
  { filename: 'luan_parle_home.jpg', name: 'Singer Luan Parle at her home with portrait behind her, 2008', width: 1000, height: 667 },
  { filename: 'mary_mcaleese.JPG', name: 'Then President of Ireland, Mary McAleese, Mulhuddert, Dublin, 2009', width: 1000, height: 667 },
  { filename: 'michael_d_higgins_2013.jpg', name: 'Then President of Ireland, Michael D. Higgins, Aras an Uachtarain, July 2013', width: 1000, height: 667 },
  { filename: 'michael_d_higgins_2025.jpg', name: 'Then President of Ireland, Michael D. Higgins, Aras an Uachtarain, July 2025', width: 1000, height: 667 },
  { filename: 'micheal_o_muircheartaigh.jpg', name: 'Broadcaster, Micheal Ó Muircheartaigh, Artane, November 2010', width: 1000, height: 667 },
  { filename: 'noam_chomsky.jpg', name: 'Linguist, Noam Chomsky, UCD, January 2006', width: 1000, height: 667 },
  { filename: 'norman_wisdom.jpg', name: 'Actor &amp; Comedian, Norman Wisdom, Terenue, July 2004', width: 1000, height: 667 },
  { filename: 'pope_benedict.jpg', name: 'Presentation by Taoiseach Bertie Ahern to Pope Benedict XVI, Vatican, July 2005', width: 1000, height: 667 },
  { filename: 'robert_ballagh.jpg', name: 'Robert Ballagh, Irish Film Institute, August 2006', width: 1000, height: 667 },
  { filename: 'robert_ballagh_studio.jpg', name: 'Artist Robert Ballagh working in his studio with portrait of Alfred Hitchcock on his desk, 2007.  Photo courtesy of Irish Times', width: 1000, height: 667 },
  { filename: 'smiley_bolger.jpg', name: 'Journalist &amp; Promoter Smiley Bolger, Dublin, January 2011', width: 1000, height: 667 },
  { filename: 'smiley_bolger_vicar_st.jpg', name: 'Journalist &amp; Promoter Smiley Bolger with portrait of Phil Lynott, Vicar Street, January 2011', width: 1000, height: 667 },
  { filename: 'tk_whitaker.jpg', name: 'Former Governor of the Central Bank of Ireland, T.K. Whitaker, UCD, February 2005', width: 1000, height: 667 },
  { filename: 'bill_oherlihy.jpg', name: "Presentation to boradcaster Bill O'Herlihy by RTE on the night of his retirement, July 2014", width: 1000, height: 667 },
  { filename: 'henry_kissinger.jpg', name: 'Former U.S. Secretary of State, Henry Kissinger, Yorba Linda, California, July 2001', width: 1000, height: 667 },
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
            <p className="intro-text">              A selection of presentation photographs documenting portraits gifted and shared with notable public figures.</p>
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