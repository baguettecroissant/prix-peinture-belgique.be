import Link from 'next/link';

interface GuideLink {
  href: string;
  icon: string;
  title: string;
  desc: string;
}

const allGuideLinks: GuideLink[] = [
  { href: '/peinture-interieure/', icon: '🎨', title: 'Peinture intérieure', desc: 'Murs, couleurs tendance, finitions mat/satin' },
  { href: '/peinture-exterieure/', icon: '🏠', title: 'Peinture extérieure', desc: 'Façade, volets, murs extérieurs — prix' },
  { href: '/peinture-plafond/', icon: '⬜', title: 'Peinture plafonds', desc: 'Techniques, prix au m², conseils de pro' },
  { href: '/boiseries-portes/', icon: '🚪', title: 'Boiseries & portes', desc: 'Laque satin/brillant, préparation, ponçage' },
  { href: '/papier-peint/', icon: '🖼️', title: 'Papier peint', desc: 'Intissé, vinyle, pose et dépose — prix' },
  { href: '/preparation-murs/', icon: '🪣', title: 'Préparation murs', desc: 'Enduit, rebouchage, ponçage, sous-couche' },
  { href: '/tarif-peintre/', icon: '💰', title: 'Tarif peintre', desc: 'Prix au m² et à l\'heure par région' },
];

interface GuideLinksProps {
  currentPath: string;
  variant?: 'bar' | 'cards';
  title?: string;
}

export default function GuideLinks({ currentPath, variant = 'cards', title }: GuideLinksProps) {
  const filtered = allGuideLinks.filter(g => g.href !== currentPath && g.href !== currentPath + '/');

  if (variant === 'bar') {
    return (
      <nav className="guide-links-bar" aria-label="Navigation guides peinture">
        <div className="guide-links-bar-inner">
          {allGuideLinks.map(g => (
            <Link
              key={g.href}
              href={g.href}
              className={g.href === currentPath || g.href === currentPath + '/' ? 'active' : ''}
            >
              {g.icon} {g.title}
            </Link>
          ))}
        </div>
      </nav>
    );
  }

  return (
    <div className="related-guides">
      <div className="related-guides-title">
        {title || 'Articles connexes — Peinture en Belgique'}
      </div>
      <div className="related-guides-grid">
        {filtered.slice(0, 4).map(g => (
          <Link key={g.href} href={g.href} className="related-guide-card">
            <div className="rg-title">{g.icon} {g.title}</div>
            <div className="rg-desc">{g.desc}</div>
            <span className="rg-link">Lire le guide →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
