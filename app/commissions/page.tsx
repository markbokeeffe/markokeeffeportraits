import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import './commissions.css';

export default function CommissionsPage() {
  return (
    <>
      <Header />
      <main className="commissions-page">
        <div className="container">
          <div className="commissions-content">
            {/* Left Column - Text */}
            <div className="commissions-text">
              <h1 className="commissions-title">Commissions</h1>
              
              <p className="commissions-intro">
                I am open to commissions for custom graphite portraits based on your photograph, capturing the essence of the subject.
              </p>

              <div className="commission-ideas">
                <h2 className="ideas-title">Have an idea in mind?</h2>
                <ul className="ideas-list">
                  <li>Anniversary presents</li>
                  <li>Retirement presents</li>
                  <li>Commemorative portraits of loved ones</li>
                  <li>Book illustrations or covers</li>
                  <li>Album artwork</li>
                  <li>Other bespoke pieces</li>
                </ul>
              </div>

              <p className="commissions-description">
                Reach out to discuss a unique, hand-drawn portrait for a special occasion, a book illustration, an album cover, or bespoke artwork of any kind.
              </p>

              <a href="mailto:mark.okeeffe@gmail.com" className="contact-button">Contact Mark at mark.okeeffe@gmail.com</a>
            </div>

            {/* Right Column - Images */}
            <div className="commissions-images">
              <div className="image-stack">
                <div className="stacked-image image-1">
                  <div className="frame">
                    <Image
                      src="/portraits/joe_lynch.jpg"
                      alt="Joe Lynch"
                      width={300}
                      height={400}
                      className="commission-image"
                    />
                  </div>
                </div>
                
                <div className="stacked-image image-2">
                  <div className="frame">
                    <Image
                      src="/portraits/jack_charlton.jpg"
                      alt="Jack Charlton"
                      width={350}
                      height={280}
                      className="commission-image"
                    />
                  </div>
                </div>
                
                <div className="stacked-image image-3">
                  <div className="frame">
                    <Image
                      src="/portraits/gay_byrne.jpg"
                      alt="Gay Byrne"
                      width={280}
                      height={380}
                      className="commission-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}