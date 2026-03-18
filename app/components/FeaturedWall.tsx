import Image from "next/image";

export default function FeaturedWall() {
  return (
    <section id="featured" className="section section-light">
      <div className="container">
        <div className="eyebrow eyebrow-dark">Featured wall</div>
        <h2 className="section-title dark">
          A gallery of portraits built through graphite, tonal depth and close
          observation.
        </h2>
        <p className="section-intro dark-muted">
          The collection spans literary, cinematic, political and musical
          figures, each rendered by hand and presented with a gallery
          sensibility. The emphasis is always on character, atmosphere and
          recognisable presence.
        </p>

        <div className="feature-image">
          <Image
            src="/gallery_wall_portraits.png"
            alt="Portrait wall by Mark O'Keeffe"
            width={1800}
            height={1100}
          />
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <strong>Graphite realism</strong>
            <p>
              Traditional draftsmanship with tonal layering and a strong sense
              of form.
            </p>
          </div>
          <div className="stat-card">
            <strong>Exhibition-ready works</strong>
            <p>
              Framed portraits created for display, presentation and collection.
            </p>
          </div>
          <div className="stat-card">
            <strong>Recognisable sitters</strong>
            <p>
              Public figures, artists, writers, performers and private
              commissions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}