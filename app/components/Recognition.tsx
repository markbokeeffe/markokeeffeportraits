import Image from "next/image";
import './recognition.css';

const letterImages = [
//   {
//     src: "/letter_deValera.jpeg",
//     alt: "Letter from de Valera",
//   },
  {
    src: "/letter_giscard.jpeg",
    alt: "Letter from Giscard",
  },
  {
    src: "/letter_jimmyCarter.jpeg",
    alt: "Letter from Jimmy Carter",
  },
  {
    src: "/letter_johnMajor.jpeg",
    alt: "Letter from John Major",
  },
];

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
    quote: "I greatly appreciate your gift - in both senses of that word.",
    author: "SEAMUS HEANEY",
  },
  {
    quote: "It is an amazing likeness - almost better than the \"original\"!",
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
            In addition to being featured across a range of galleries, Mark's work has been received a large number of notable individuals, such as taoisigh, U.S. Presidents and Popes.<strong></strong>
          </p>
        </div>

        <div className="recognition-content">
          {/* Left Column - Letters Grid + Testimonials */}
          <div className="recognition-left-column">
            {/* Letters Masonry Grid */}
            <div className="letters-masonry">
              {letterImages.map((image) => (
                <div key={image.src} className="letter-item">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={400}
                    className="letter-image"
                  />
                </div>
              ))}
            </div>

            {/* Testimonials */}
            <div className="recognition-testimonials">
              {testimonials.map((testimonial, index) => (
                <blockquote key={index} className="testimonial-block">
                  <p className="testimonial-text">{testimonial.quote}</p>
                  <footer className="testimonial-author">— {testimonial.author}</footer>
                </blockquote>
              ))}
            </div>
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