'use client';

import { useState } from 'react';
import Link from 'next/link';
import './Navigation.css';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
          Marko<span>Keeffe</span>
        </Link>

        <button
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {[
            { href: '/portraits', label: 'Portraits' },
            { href: '/presentations', label: 'Presentations' },
            { href: '/testimonials', label: 'Testimonials' },
            { href: '/about', label: 'About' },
            { href: '/contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
