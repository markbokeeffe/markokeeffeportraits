import Image from "next/image";

const items = [
  {
    src: "/presentation_higgins.jpg",
    alt: "Presentation with President Higgins",
    text: "Presentation in a formal civic setting.",
  },
  {
    src: "/presentation_smiley_stage.jpg",
    alt: "Stage presentation",
    text: "Portrait presentation in a live public context.",
  },
  {
    src: "/presentation_tutu.jpg",
    alt: "Presentation with Desmond Tutu",
    text: "Portraits shared with internationally recognised figures.",
  },
  {
    src: "/presentation_jackson.jpg",
    alt: "Presentation with Jesse Jackson",
    text: "Graphite work as presentation and tribute.",
  },
];

export default function Recognition() {
  return (
    <section id="recognition" className="section section-olive">
      <div className="container">
        <div className="eyebrow">Recognition</div>
        <h2 className="section-title">
          Portraits presented in civic, cultural and public contexts.
        </h2>
        <p className="section-intro">
          Alongside studio practice, O&apos;Keeffe&apos;s portraits have been
          presented to notable public figures and shown in formal settings,
          giving the work a commemorative and ceremonial dimension.
        </p>

        <div className="recognition-masonry">
          {items.map((item) => (
            <div key={item.src} className="recognition-item">
              <Image
                src={item.src}
                alt={item.alt}
                width={700}
                height={780}
                className="recognition-image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}