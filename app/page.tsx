import Link from "next/link";
import portraitsData from "../public/data/portraits.json";
import testimonialsData from "../public/data/testimonials.json";

const featured = (portraitsData as Portrait[]).filter((p) => p.featured).slice(0, 3);
const featuredTestimonials = (testimonialsData as Testimonial[]).slice(0, 3);

interface Portrait {
  id: number;
  title: string;
  description: string;
  filename: string;
  featured: boolean;
}

interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  type: string;
}

export default function Home() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #3a2e24 60%, #8b6f47 100%)",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "4rem 1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative background pattern */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 20% 80%, rgba(139,111,71,0.18) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139,111,71,0.12) 0%, transparent 50%)",
          }}
        />

        <div style={{ position: "relative", maxWidth: 720 }}>
          <p
            style={{
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#c9a97a",
              marginBottom: "1.25rem",
            }}
          >
            Fine Art Portrait Painter · Dublin, Ireland
          </p>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.15,
              margin: "0 0 1.5rem",
            }}
          >
            Portraits That Endure
            <br />
            <span style={{ color: "#c9a97a" }}>Across Generations</span>
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.75,
              marginBottom: "2.5rem",
              maxWidth: 560,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Bespoke oil and acrylic portraits hand-painted with extraordinary
            care — capturing the character, warmth, and story of the people
            you love most.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/portraits"
              style={{
                background: "#8b6f47",
                color: "#fff",
                padding: "0.85rem 2rem",
                borderRadius: 3,
                fontWeight: 600,
                fontSize: "0.9rem",
                letterSpacing: "0.04em",
                textDecoration: "none",
                textTransform: "uppercase",
                transition: "background 0.2s ease",
              }}
            >
              View Gallery
            </Link>
            <Link
              href="/contact"
              style={{
                background: "transparent",
                color: "#fff",
                padding: "0.85rem 2rem",
                borderRadius: 3,
                fontWeight: 600,
                fontSize: "0.9rem",
                letterSpacing: "0.04em",
                textDecoration: "none",
                textTransform: "uppercase",
                border: "1px solid rgba(255,255,255,0.35)",
              }}
            >
              Commission a Portrait
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured Portraits ───────────────────────────── */}
      <section style={{ padding: "5rem 1.5rem", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#1a1a1a", margin: "0 0 0.75rem" }}>
            Featured Work
          </h2>
          <p style={{ color: "#666", fontSize: "1.05rem", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
            A selection of recent portraits — each one a unique story told through paint.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {featured.map((portrait) => (
            <div
              key={portrait.id}
              style={{
                background: "linear-gradient(135deg, #f0ebe3, #e5ddd2)",
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
              }}
            >
              <div
                style={{
                  height: 300,
                  background: "linear-gradient(135deg, #d5c8b8, #c4b49e)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#999",
                  fontSize: "0.8rem",
                }}
              >
                {portrait.filename}
              </div>
              <div style={{ padding: "1rem 1.25rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#1a1a1a", margin: "0 0 0.35rem" }}>
                  {portrait.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "#666", margin: 0, lineHeight: 1.5 }}>
                  {portrait.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link
            href="/portraits"
            style={{
              display: "inline-block",
              padding: "0.75rem 1.75rem",
              border: "1px solid #8b6f47",
              color: "#8b6f47",
              borderRadius: 3,
              fontWeight: 600,
              fontSize: "0.875rem",
              letterSpacing: "0.04em",
              textDecoration: "none",
              textTransform: "uppercase",
            }}
          >
            View Full Gallery
          </Link>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section style={{ background: "#f7f4f0", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#1a1a1a", margin: "0 0 0.75rem" }}>
              What Clients Say
            </h2>
            <p style={{ color: "#666", fontSize: "1.05rem" }}>
              The words of the families whose stories I have had the privilege to paint.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
              marginBottom: "2.5rem",
            }}
          >
            {featuredTestimonials.map((t) => (
              <blockquote
                key={t.id}
                style={{
                  background: "#fff",
                  borderRadius: 4,
                  padding: "1.75rem",
                  margin: 0,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  borderLeft: "4px solid #8b6f47",
                }}
              >
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#444",
                    lineHeight: 1.75,
                    margin: "0 0 1.25rem",
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer>
                  <strong style={{ color: "#1a1a1a", fontSize: "0.9rem" }}>{t.name}</strong>
                  <span style={{ color: "#888", fontSize: "0.8rem", display: "block" }}>{t.location}</span>
                </footer>
              </blockquote>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link
              href="/testimonials"
              style={{
                display: "inline-block",
                padding: "0.75rem 1.75rem",
                border: "1px solid #8b6f47",
                color: "#8b6f47",
                borderRadius: 3,
                fontWeight: 600,
                fontSize: "0.875rem",
                letterSpacing: "0.04em",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              Read All Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* ── Call to Action ───────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(135deg, #3a2e24, #1a1a1a)",
          padding: "5rem 1.5rem",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: 700, margin: "0 0 1rem" }}>
          Commission Your Portrait
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "1.05rem",
            maxWidth: 500,
            margin: "0 auto 2rem",
            lineHeight: 1.75,
          }}
        >
          Every portrait begins with a conversation. Get in touch to discuss your
          vision and how I can create a painting that will be treasured forever.
        </p>
        <Link
          href="/contact"
          style={{
            background: "#8b6f47",
            color: "#fff",
            padding: "0.9rem 2.25rem",
            borderRadius: 3,
            fontWeight: 600,
            fontSize: "0.9rem",
            letterSpacing: "0.04em",
            textDecoration: "none",
            textTransform: "uppercase",
          }}
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
