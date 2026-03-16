'use client';

import { useState, FormEvent } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In production, send to an API route or third-party service
    setSubmitted(true);
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem 1rem',
    border: '1px solid #ddd',
    borderRadius: 3,
    fontSize: '0.95rem',
    color: '#333',
    background: '#fff',
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontWeight: 600,
    fontSize: '0.875rem',
    color: '#333',
    marginBottom: '0.4rem',
  };

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '4rem 1.5rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h1
          style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            color: '#1a1a1a',
            margin: '0 0 0.75rem',
          }}
        >
          Commission a Portrait
        </h1>
        <div
          style={{ width: 60, height: 3, background: '#8b6f47', borderRadius: 2, marginBottom: '1.25rem' }}
          aria-hidden="true"
        />
        <p style={{ color: '#555', fontSize: '1rem', lineHeight: 1.75, maxWidth: 580 }}>
          Every portrait begins with a conversation. Please fill in the form below
          and I will be in touch within two business days to discuss your
          commission in detail.
        </p>
      </div>

      {submitted ? (
        <div
          style={{
            background: '#f0f9f0',
            border: '1px solid #4caf6e',
            borderRadius: 4,
            padding: '2rem',
            textAlign: 'center',
          }}
        >
          <h2 style={{ color: '#2e7d4f', margin: '0 0 0.75rem' }}>Thank You!</h2>
          <p style={{ color: '#444', margin: 0 }}>
            Your enquiry has been received. I look forward to speaking with you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.25rem',
              marginBottom: '1.25rem',
            }}
          >
            <div>
              <label htmlFor="name" style={labelStyle}>
                Full Name <span style={{ color: '#c0392b' }}>*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                style={inputStyle}
              />
            </div>
            <div>
              <label htmlFor="email" style={labelStyle}>
                Email Address <span style={{ color: '#c0392b' }}>*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                style={inputStyle}
              />
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.25rem',
              marginBottom: '1.25rem',
            }}
          >
            <div>
              <label htmlFor="phone" style={labelStyle}>
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+353 1 234 5678"
                style={inputStyle}
              />
            </div>
            <div>
              <label htmlFor="subject" style={labelStyle}>
                Type of Commission <span style={{ color: '#c0392b' }}>*</span>
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={form.subject}
                onChange={handleChange}
                style={inputStyle}
              >
                <option value="">Select…</option>
                <option value="individual">Individual Portrait</option>
                <option value="family">Family Portrait</option>
                <option value="couple">Couple&apos;s Portrait</option>
                <option value="pet">Pet Portrait</option>
                <option value="memorial">Memorial Portrait</option>
                <option value="corporate">Corporate / Institutional</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div style={{ marginBottom: '1.75rem' }}>
            <label htmlFor="message" style={labelStyle}>
              Tell Me About Your Commission <span style={{ color: '#c0392b' }}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={form.message}
              onChange={handleChange}
              placeholder="Please describe who or what you would like painted, the intended size, medium preferences, and any other details that will help me understand your vision…"
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </div>

          <button
            type="submit"
            style={{
              background: '#8b6f47',
              color: '#fff',
              padding: '0.9rem 2.25rem',
              borderRadius: 3,
              fontWeight: 700,
              fontSize: '0.9rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Send Enquiry
          </button>
        </form>
      )}

      {/* Contact details */}
      <div
        style={{
          marginTop: '3.5rem',
          paddingTop: '2rem',
          borderTop: '1px solid #eee',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {[
          { label: 'Studio', value: 'Dublin, Ireland' },
          { label: 'Email', value: 'hello@markokeeffeportraits.ie' },
          { label: 'Response Time', value: 'Within 2 business days' },
        ].map((item) => (
          <div key={item.label}>
            <p style={{ fontWeight: 700, fontSize: '0.8rem', color: '#8b6f47', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 0.3rem' }}>
              {item.label}
            </p>
            <p style={{ color: '#444', fontSize: '0.95rem', margin: 0 }}>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
