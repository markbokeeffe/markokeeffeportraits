import Image from "next/image";
import './PortraitMasonry.css'; 

const portraits = [
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
  {
    src: "/20210207_215549.jpg",
    alt: "Portrait drawing",
    width: 900,
    height: 1200,
  },
];

export default function PortraitMasonry() {
  return (
    <section className="section section-light" id="portraits">
      <div className="container">
        <div className="eyebrow eyebrow-dark">Portrait collection</div>
        <h2 className="section-title dark">
          Individual works presented as a gallery wall.
        </h2>
        <p className="section-intro dark-muted">
          Each portrait is shown as an individual framed work, allowing the
          collection to breathe more like an exhibition than a single montage.
        </p>

        <div className="portrait-masonry">
          {portraits.map((portrait) => (
            <article className="portrait-masonry-item" key={portrait.src}>
              <div className="portrait-frame">
                <div className="portrait-mount">
                  <Image
                    src={portrait.src}
                    alt={portrait.alt}
                    width={portrait.width}
                    height={portrait.height}
                    className="portrait-image"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}