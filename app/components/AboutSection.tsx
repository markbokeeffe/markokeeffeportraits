import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="section section-dark">
      <div className="container story-grid">
        {/* <div className="story-image">
          <Image
            src="/presentation_parle.jpg"
            alt="Mark O'Keeffe in the studio"
            width={900}
            height={1100}
          />
        </div> */}

        <div className="story-panel">
          <div className="eyebrow">About Mark O&apos;Keeffe</div>
          <h2 className="section-title">
            Drawing the person, not only the likeness.
          </h2>
          <p>
            Working primarily in graphite, Mark O&apos;Keeffe builds portraits
            gradually through patient tonal layering and close observation. The
            result is realism with atmosphere — likeness balanced with
            character.
          </p>
          <p>
            The body of work ranges from iconic cultural figures to personal
            commissions and framed presentation pieces. Across all of it, the
            aim is the same: to create portraits that feel enduring, direct and
            recognisably human.
          </p>
        </div>
      </div>
    </section>
  );
}