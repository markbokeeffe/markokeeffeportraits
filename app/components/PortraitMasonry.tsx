'use client';

import Image from "next/image";
import { useRef } from "react";
import './PortraitMasonry.css';

const allPortraits = [
  {
    src: "/president-higgins-portrait-2013.jpg",
    alt: "Portrait of President Higgins",
    width: 900,
    height: 1200,
  },
  {
    src: "/Amy Winehouse 2015.jpg",
    alt: "Portrait of Amy Winehouse",
    width: 900,
    height: 1200,
  },
  {
    src: "/Ed Hillary.JPG",
    alt: "Portrait of Edmund Hillary",
    width: 900,
    height: 1200,
  },
  {
    src: "/jack-nicholson-portrait-2015.jpg",
    alt: "Portrait of Jack Nicholson",
    width: 900,
    height: 1200,
  },
  {
    src: "/Louis Armstrong 2014.jpg",
    alt: "Portrait of Louis Armstrong",
    width: 900,
    height: 1200,
  },
  {
    src: "/mahatmaGandhi_2014 (1).jpg",
    alt: "Portrait of Gandhi",
    width: 900,
    height: 1200,
  },
  {
    src: "/marilyn_monroe_2013.jpg",
    alt: "Portrait of Marilyn Monroe",
    width: 900,
    height: 1200,
  },
  {
    src: "/Quentin Blake 2015.jpg",
    alt: "Portrait of Quentin Blake",
    width: 900,
    height: 1200,
  },
//   {
//     src: "/20210207_215549.jpg",
//     alt: "Portrait drawing",
//     width: 900,
//     height: 1200,
//   },
];

// Featured portraits for mobile swipe gallery (first 6)
const featuredPortraits = allPortraits.slice(0, 6);

export default function PortraitMasonry() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="section section-light w-full flex justify-center" id="portraits">
      <div className="container">
        {/* Desktop Gallery Wall */}
        <div className="portrait-masonry-desktop">
          {allPortraits.map((portrait) => (
            <article className="portrait-masonry-item" key={portrait.src}>
              <div className="portrait-frame">
                <div className="portrait-mount">
                  <Image
                    src={portrait.src}
                    alt={portrait.alt}
                    width={portrait.width}
                    height={portrait.height}
                    className="portrait-image"
                    priority={false}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile Swipe Gallery */}
        <div className="portrait-masonry-mobile">
          <div className="mobile-gallery-container">
            <div className="mobile-gallery-scroll" ref={scrollContainerRef}>
              {featuredPortraits.map((portrait) => (
                <article className="portrait-mobile-item" key={portrait.src}>
                  <div className="portrait-frame">
                    <div className="portrait-mount">
                      <Image
                        src={portrait.src}
                        alt={portrait.alt}
                        width={portrait.width}
                        height={portrait.height}
                        className="portrait-image"
                        priority={false}
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Scroll Controls */}
            <div className="mobile-gallery-controls">
              <button
                className="scroll-button scroll-button-left"
                onClick={() => scroll('left')}
                aria-label="Scroll left"
              >
                ‹
              </button>
              <button
                className="scroll-button scroll-button-right"
                onClick={() => scroll('right')}
                aria-label="Scroll right"
              >
                ›
              </button>
            </div>
          </div>

          {/* View Full Gallery Button */}
          <div className="mobile-gallery-footer">
            <a href="#full-gallery" className="view-gallery-button">
              View Full Gallery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}