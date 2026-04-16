'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="header-logo">
          <span className="logo-icon">🎨</span>
          Prix<span className="logo-accent">Peinture</span>.be
        </Link>

        <button
          className="header-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          <Link href="/peinture-interieure/" onClick={() => setMenuOpen(false)}>Intérieur</Link>
          <Link href="/peinture-exterieure/" onClick={() => setMenuOpen(false)}>Extérieur</Link>
          <Link href="/peinture-plafond/" onClick={() => setMenuOpen(false)}>Plafonds</Link>
          <Link href="/boiseries-portes/" onClick={() => setMenuOpen(false)}>Boiseries</Link>
          <Link href="/peintre/" onClick={() => setMenuOpen(false)}>Communes</Link>
          <Link href="/guides/" onClick={() => setMenuOpen(false)}>Guides</Link>
          <Link href="/devis/" className="header-cta" onClick={() => setMenuOpen(false)}>
            Devis Gratuit
          </Link>
        </nav>
      </div>
    </header>
  );
}
