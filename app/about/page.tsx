import Link from "next/link";

export const metadata = {
  title: "About | Marko Keeffe Portraits",
  description: "Learn about Marko Keeffe — Irish fine art portrait painter based in Dublin.",
};

export default function AboutPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "4rem 1.5rem" }}>
      {/* Header */}
      <div style={{ marginBottom: "3rem" }}>
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 700,
            color: "#1a1a1a",
            margin: "0 0 1rem",
          }}
        >
          About Marko Keeffe
        </h1>
        <div
          style={{ width: 60, height: 3, background: "#8b6f47", borderRadius: 2 }}
          aria-hidden="true"
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        {/* Image placeholder */}
        <div
          style={{
            background: "linear-gradient(135deg, #e8e0d8, #d5c8b8)",
            borderRadius: 4,
            height: 480,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#999",
            fontSize: "0.85rem",
          }}
        >
          artist-photo.jpg
        </div>

        {/* Biography */}
        <div>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#333",
              lineHeight: 1.85,
              marginBottom: "1.5rem",
            }}
          >
            Marko Keeffe is an Irish fine art portrait painter whose work is
            distinguished by its warmth, technical precision, and deep empathy
            for the human spirit. Based in Dublin, he has been painting
            commissioned portraits for families, individuals, and institutions
            across Ireland for over two decades.
          </p>
          <p
            style={{
              fontSize: "1rem",
              color: "#555",
              lineHeight: 1.85,
              marginBottom: "1.5rem",
            }}
          >
            His portraits are painted in oils and acrylics, drawing on the
            classical traditions of European portraiture while embracing a
            contemporary sensibility. Each commission begins with in-depth
            consultation — understanding not just what a person looks like, but
            who they are.
          </p>
          <p
            style={{
              fontSize: "1rem",
              color: "#555",
              lineHeight: 1.85,
              marginBottom: "1.5rem",
            }}
          >
            Marko&apos;s work has been exhibited at galleries throughout Ireland,
            including the Dublin Gallery of Fine Art and the Kilkenny Arts
            Festival. His portraits hang in private homes, corporate collections,
            and public institutions across the country.
          </p>
          <p
            style={{
              fontSize: "1rem",
              color: "#555",
              lineHeight: 1.85,
              marginBottom: "2rem",
            }}
          >
            &quot;A portrait is more than a likeness — it is a record of a life,
            painted with love and passed down through generations. It is the
            greatest honour to be trusted with that task.&quot;
          </p>
          <div
            style={{
              padding: "0.75rem 1.25rem",
              borderLeft: "3px solid #8b6f47",
              background: "#f7f4f0",
              borderRadius: "0 4px 4px 0",
              marginBottom: "2rem",
            }}
          >
            <p style={{ margin: 0, fontStyle: "italic", color: "#555", fontSize: "0.95rem" }}>
              — Marko Keeffe
            </p>
          </div>

          <Link
            href="/contact"
            style={{
              display: "inline-block",
              background: "#8b6f47",
              color: "#fff",
              padding: "0.85rem 2rem",
              borderRadius: 3,
              fontWeight: 600,
              fontSize: "0.875rem",
              letterSpacing: "0.04em",
              textDecoration: "none",
              textTransform: "uppercase",
            }}
          >
            Commission a Portrait
          </Link>
        </div>
      </div>

      {/* Skills / Mediums */}
      <section style={{ marginTop: "4rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1a1a1a", marginBottom: "1.5rem" }}>
          Media &amp; Techniques
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
          }}
        >
          {[
            { title: "Oil Painting", detail: "Traditional oils on linen or board" },
            { title: "Acrylic", detail: "Fast-drying acrylics for vibrant colour" },
            { title: "Charcoal Study", detail: "Detailed charcoal preliminary sketches" },
            { title: "Mixed Media", detail: "Combining media for unique textures" },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: "#f7f4f0",
                padding: "1.25rem",
                borderRadius: 4,
                borderTop: "3px solid #8b6f47",
              }}
            >
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a1a1a", margin: "0 0 0.4rem" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.85rem", color: "#666", margin: 0, lineHeight: 1.5 }}>
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
