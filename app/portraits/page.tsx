'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/app/components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import './portraits.css';

interface Portrait {
  filename: string;
  name: string;
}

const portraitData: Portrait[] = [
  { filename: 'albert_einstein.jpg', name: 'Albert Einstein' },
  { filename: 'alfred_hitchcock.jpg', name: 'Alfred Hitchcock' },
  { filename: 'amy_winehouse.jpg', name: 'Amy Winehouse' },
  { filename: 'bb_king.jpg', name: 'B.B. King' },
  { filename: 'billie_holiday.jpg', name: 'Billie Holiday' },
  { filename: 'collins_kiernan.jpg', name: 'Michael Collins, Kiernan Kiernan & the Kilkenny hurling team' },
  { filename: 'eamon_devalera.jpg', name: 'Éamon de Valera' },
  { filename: 'edmund_hillery_2.jpg', name: 'Edmund Hillary' },
  { filename: 'edmund_hillery.jpg', name: 'Edmund Hillary' },
  { filename: 'garret_fitzgerald.jpg', name: 'Garret FitzGerald' },
  { filename: 'gay_byrne.jpg', name: 'Gay Byrne' },
  { filename: 'george_bernard_shaw.jpg', name: 'George Bernard Shaw' },
  { filename: 'grace_kelly.jpg', name: 'Grace Kelly' },
  { filename: 'jack_charlton.JPG', name: 'Jack Charlton' },
  { filename: 'jack_nicholson.jpg', name: 'Jack Nicholson' },
  { filename: 'james_joyce.jpg', name: 'James Joyce' },
  { filename: 'james_stewart.jpg', name: 'James Stewart' },
  { filename: 'joe_lynch.jpg', name: 'Joe Lynch' },
  { filename: 'john_wayne.jpg', name: 'John Wayne' },
  { filename: 'louis_armstrong_2014.jpg', name: 'Louis Armstrong' },
  { filename: 'louis_armstrong.jpg', name: 'Louis Armstrong' },
  { filename: 'louis_le_brocquy.jpg', name: 'Louis le Brocquy' },
  { filename: 'luan_parle.jpg', name: 'Luan Parle' },
  { filename: 'marlene_dietrich.jpg', name: 'Marlene Dietrich' },
  { filename: 'mary_robinson.jpg', name: 'Mary Robinson' },
  { filename: 'maud_gonne.jpg', name: 'Maud Gonne' },
  { filename: 'michael_collins.jpg', name: 'Michael Collins' },
  { filename: 'michael_d_higgins.jpg', name: 'Michael D. Higgins' },
  { filename: 'mohandas_gandhi.jpg', name: 'Mahatma Gandhi' },
  { filename: 'morgan_freeman.jpg', name: 'Morgan Freeman' },
  { filename: 'nana_cunningham.jpg', name: 'Josephine Cunningham' },
  { filename: 'nelson_mandela.jpg', name: 'Nelson Mandela' },
  { filename: 'noam_chomsky.jpg', name: 'Noam Chomsky' },
  { filename: 'norman_wisdom.jpg', name: 'Norman Wisdom' },
  { filename: 'oscar_wilde.jpg', name: 'Oscar Wilde' },
  { filename: 'phil_lynott.jpg', name: 'Phil Lynott' },
  { filename: 'quentin_blake.jpg', name: 'Quentin Blake' },
  { filename: 'robert_ballagh.jpg', name: 'Robert Ballagh' },
  { filename: 'ronnie_drew.jpg', name: 'Ronnie Drew' },
  { filename: 'salvador_dali.jpg', name: 'Salvador Dalí' },
  { filename: 'samuel_beckett_2.jpg', name: 'Samuel Beckett' },
  { filename: 'samuel_beckett_3.jpg', name: 'Samuel Beckett' },
  { filename: 'samuel_beckett_1.jpg', name: 'Samuel Beckett' },
  { filename: 'seamus_heaney.jpg', name: 'Seamus Heaney' },
  { filename: 'seamus_mallon.jpg', name: 'Seamus Mallon' },
  { filename: 'sean_macbride.jpg', name: 'Seán MacBride' },
  { filename: 'tom_crean.jpg', name: 'Tom Crean' },
  { filename: 'wb_yeats.jpg', name: 'W.B. Yeats' },
  { filename: 'yulia_tymoshenko.jpg', name: 'Yulia Tymoshenko' },
];

export default function PortraitsPage() {
  const [selectedPortrait, setSelectedPortrait] = useState<Portrait | null>(null);

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
                />
              </div>
              <p className="modal-caption">{selectedPortrait.name}</p>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}