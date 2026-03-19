import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import './about.css';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-image">
                <Image
                  src="/beckett-apollo.jpg"
                  alt="Mark O'Keeffe"
                  width={400}
                  height={500}
                  className="portrait-image"
                />
              </div>
              <div className="hero-text">
                <h1 className="hero-title">Mark O'Keeffe</h1>
                <div className="hero-subtitle-line">
                  <span className="line"></span>
                  <span className="hero-subtitle">About</span>
                  <span className="line"></span>
                </div>
                <p className="hero-description">
                  Mark O'Keeffe is a portrait artist from Dublin. He began drawing portraits in 1998. In his work, he is always careful in attempting to achieve accuracy in his portraits, believing that no detail can be regarded as minor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="about-content">
          <div className="container">
            <div className="content-grid">
              {/* Left Column - Text */}
              <div className="about-text-section">
                <p className="about-intro">
                  Mark achieved his first success in this area in 2000, when the then Taoiseach, Bertie Ahern, presented one of his portraits to the then U.S. President, Bill Clinton. Subsequently, Bertie Ahern went on to present Mark's work to several more figures, including Pope Benedict XVI and Tony Blair.
                </p>
                <p className="about-intro">In 2002, his work was presented by the then Lord Mayor of Dublin, Michael Mulcahy, to the former President of the Soviet Union, Mikhail Gorbachev. His work has also been received by many other notables, including Noam Chomsky, Desmond Tutu and Al Gore.</p>

                {/* Images Grid */}
                <div className="about-images-grid">
                  <div className="about-image-item">
                    <Image
                      src="/vicar_street.jpg"
                      alt="Pope Benedict XVI presentation"
                      width={300}
                      height={200}
                      className="grid-image"
                    />
                  </div>
                  <div className="about-image-item">
                    <Image
                      src="/apollo.jpg"
                      alt="Presentation event"
                      width={300}
                      height={200}
                      className="grid-image"
                    />
                  </div>
                </div>
                <p className="about-intro">Mark has participated in several exhibitions, including a solo one in Malahide Library in 2012. In 2013, he had the honour to be invited to Áras an Uachtaráin in Dublin, where he was privileged to present his work to the President of Ireland, Michael D. Higgins.</p>
                <p className="about-intro">His work has appeared in journals and other publications as far away as the Netherlands and New Zealand. In 2013, he provided the illustrations for "The GAA & Radio Éireann: 1926 - 2010" by Pat Guthrie.</p>
                <p className="about-intro">Mark's portraits have been featured in several other galleries and establishments in Dublin, including the Duke Street Gallery, Apollo Gallery, the Nora Dunne Gallery, Grogan's Pub and the View Gallery.</p>

                {/* YouTube Video */}
                <div className="video-container">
                  <iframe
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/HWS5uiob80k"
                    title="Mark O'Keeffe - Portrait Artist"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Right Column - Images */}
              <div className="about-sidebar">
                <div className="sidebar-image-wrapper">
                  <Image
                    src="/presentations/pope_benedict.jpg"
                    alt="Mark with portrait"
                    width={300}
                    height={400}
                    className="sidebar-image"
                  />
             
                </div>

                <div className="sidebar-image-wrapper sidebar-image-wrapper-2">
                  <Image
                    src="/presentations/alex_ferguson.jpg"
                    alt="Mark drawing"
                    width={300}
                    height={400}
                    className="sidebar-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Galleries & Publications Section */}
        <section className="galleries-section">
          <div className="container">
            <div className="galleries-grid">
              {/* Left Column - Text */}
              <div className="galleries-text">
                <h2 className="galleries-title">Galleries & Publications</h2>
                <p>
                  Mark has participated in a solo and group exhibitions at The Duke Street Gallery, Apollo Gallery, the Nora Dunne Gallery, Grogan's Pub, and The View Gallery.
                </p>
                <p>
                  Mark's portraits of Éamon de Valera are featured in several publications at Áras an Uachtarán to present his work to he President of Ireland, <strong>Michael D. Higgins</strong> in 2013.
                </p>
              </div>

              {/* Right Column - Image */}
              <div className="galleries-image">
                <Image
                  src="/presentations/michael_d_higgins_2025.jpg"
                  alt="Mark with President"
                  width={400}
                  height={300}
                  className="large-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="container">
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <p className="testimonial-text">
                  "indeed a vy fine representation of the character of my late father"
                </p>
                <p className="testimonial-author">— Family Member</p>
              </div>
              <div className="testimonial-card">
                <p className="testimonial-text">
                  "it is an excellent likeness - much better than most of the photographs"
                </p>
                <p className="testimonial-author">— Satisfied Client</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}