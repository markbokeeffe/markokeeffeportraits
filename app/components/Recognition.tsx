import Image from "next/image";
import './Recognition.css';

const recognitionImages = [
  {
    src: "/presentation_higgins.jpg",
    alt: "Presentation with President Higgins",
  },
  {
    src: "/presentation_smiley_stage.jpg",
    alt: "Stage presentation",
  },
  {
    src: "/presentation_tutu.jpg",
    alt: "Presentation with Desmond Tutu",
  },
  {
    src: "/presentation_jackson.jpg",
    alt: "Presentation with Jesse Jackson",
  },
];

const testimonials = [
  {
    quote: "A remarkable talent who's given a new dimension to the art of portraiture.",
    author: "BILL CLINTON",
  },
  {
    quote: "Absolutely wonderful. You've deeply captured his essence.",
    author: "DESMOND TUTU",
  },
];

export default function Recognition() {
  return (
    <section id="recognition" className="recognition-section">
      <div className="container">
        <div className="recognition-header">
          <h2>Recognition</h2>
          <p className="recognition-subtitle">
            Portraits presented in civic, cultural and <strong>public contexts.</strong>
          </p>
          <p className="recognition-description">
            Alongside studio practice, O&apos;Keeffe&apos;s portraits have been
            presented to notable public figures and shown in formal settings, giving
            the work a commemorative and ceremonial dimension.
          </p>
        </div>

        <div className="recognition-content">
          {/* Left Column - Testimonials */}
          <div className="recognition-testimonials">
            {testimonials.map((testimonial, index) => (
              <blockquote key={index} className="testimonial-block">
                <p className="testimonial-text">{testimonial.quote}</p>
                <footer className="testimonial-author">— {testimonial.author}</footer>
              </blockquote>
            ))}
          </div>

          {/* Right Column - Images */}
          <div className="recognition-gallery">
            {recognitionImages.map((image) => (
              <div key={image.src} className="recognition-image-item">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="recognition-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}