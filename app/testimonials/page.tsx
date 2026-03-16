import Link from 'next/link';
import testimonialsData from '../../public/data/testimonials.json';

export const metadata = {
  title: 'Testimonials | Marko Keeffe Portraits',
  description: 'Read what clients say about their portrait commissions with Marko Keeffe.',
};

interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  type: string;
}

const testimonials = testimonialsData as Testimonial[];
const letters = testimonials.filter((t) => t.type === 'thank-you-letter');
const reviews = testimonials.filter((t) => t.type === 'testimonial');

export default function TestimonialsPage() {
  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '4rem 1.5rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1
          style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            color: '#1a1a1a',
            margin: '0 0 1rem',
          }}
        >
          Client Testimonials
        </h1>
        <div
          style={{ width: 60, height: 3, background: '#8b6f47', borderRadius: 2, margin: '0 auto 1.25rem' }}
          aria-hidden="true"
        />
        <p style={{ color: '#555', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 560, margin: '0 auto' }}>
          The greatest honour in this work is the trust families place in me to
          capture someone they love. These are some of the words they have shared.
        </p>
      </div>

      {/* Reviews */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '1.5rem' }}>
          Reviews
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {reviews.map((t) => (
            <blockquote
              key={t.id}
              style={{
                background: '#fff',
                border: '1px solid #eee',
                borderLeft: '4px solid #8b6f47',
                borderRadius: 4,
                padding: '1.75rem',
                margin: 0,
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
              }}
            >
              <p
                style={{
                  fontSize: '0.95rem',
                  color: '#444',
                  lineHeight: 1.8,
                  fontStyle: 'italic',
                  margin: '0 0 1.25rem',
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer>
                <strong style={{ color: '#1a1a1a', fontSize: '0.9rem', display: 'block' }}>
                  {t.name}
                </strong>
                <span style={{ color: '#888', fontSize: '0.8rem' }}>{t.location}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Thank-you letters */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '1.5rem' }}>
          Thank-You Letters
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {letters.map((t) => (
            <blockquote
              key={t.id}
              style={{
                background: '#f7f4f0',
                borderRadius: 4,
                padding: '2rem',
                margin: 0,
                borderLeft: '4px solid #c9a97a',
              }}
            >
              <p
                style={{
                  fontSize: '1rem',
                  color: '#333',
                  lineHeight: 1.85,
                  fontStyle: 'italic',
                  margin: '0 0 1.25rem',
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: '#8b6f47',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '1rem',
                    flexShrink: 0,
                  }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <strong style={{ color: '#1a1a1a', fontSize: '0.9rem', display: 'block' }}>
                    {t.name}
                  </strong>
                  <span style={{ color: '#888', fontSize: '0.8rem' }}>{t.location}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div
        style={{
          background: 'linear-gradient(135deg, #3a2e24, #1a1a1a)',
          borderRadius: 6,
          padding: '3rem 2rem',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0 0 0.75rem' }}>
          Ready to Commission Your Portrait?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', margin: '0 0 1.75rem', lineHeight: 1.7 }}>
          Get in touch to begin a conversation about your commission.
        </p>
        <Link
          href="/contact"
          style={{
            background: '#8b6f47',
            color: '#fff',
            padding: '0.85rem 2rem',
            borderRadius: 3,
            fontWeight: 600,
            fontSize: '0.875rem',
            letterSpacing: '0.04em',
            textDecoration: 'none',
            textTransform: 'uppercase',
          }}
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
