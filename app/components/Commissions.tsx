import Image from "next/image";

export default function Commissions() {
  return (
    <section id="commissions" className="section section-light">
      <div className="container commission-grid">
        <div className="commission-box">
          <div className="eyebrow eyebrow-dark">Commissions</div>
          <h2 className="section-title dark">
            Private portraits, presentation pieces and commemorative works.
          </h2>
          <p className="dark-muted">
            Commission a portrait for personal collection, family gift,
            institutional presentation or public event. Framed graphite works
            can be produced with the same exhibition-led finish seen throughout
            the collection.
          </p>

          <div className="commission-list">
            <div>• Personal and family portrait commissions</div>
            <div>• Presentation works for public figures</div>
            <div>• Framed exhibition-ready graphite portraits</div>
          </div>
        </div>

        <div className="commission-image">
          <Image
            src="/20210207_215549.jpg"
            alt="Featured commissioned portrait"
            width={900}
            height={1100}
          />
        </div>
      </div>
    </section>
  );
}