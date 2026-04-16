import Link from 'next/link';
import Image from 'next/image';
import LeadForm from './components/LeadForm';
import FAQ from './components/FAQ';
import { paintingPrices, hourlyRates } from './data/prices';
import { guides } from './data/guides';

const homeFAQ = [
  {
    question: 'Combien coûte un peintre en Belgique en 2026 ?',
    answer: 'Le prix moyen d\'un peintre en Belgique varie de 15€ à 40€/m² pour la peinture intérieure (2 couches). Les plafonds coûtent 20 à 35€/m², le laquage de portes 30 à 55€/porte, et la peinture extérieure 15 à 40€/m². Le tarif horaire d\'un peintre indépendant est de 25 à 45€/h selon la région. Pour une maison complète (150 m²), comptez entre 4 000€ et 10 000€ tout compris.',
  },
  {
    question: 'Quels sont les signes qu\'il est temps de repeindre ?',
    answer: 'Les 5 signes principaux : 1) Peinture qui s\'écaille, cloque ou craquelle, 2) Couleur jaunie ou ternie par le temps, 3) Taches de moisissure noire dans les angles ou les pièces humides, 4) Traces qui ne partent plus au nettoyage, 5) Papier peint décollé ou démodé. Si vos murs n\'ont pas été repeints depuis plus de 8-10 ans, un rafraîchissement est recommandé.',
  },
  {
    question: 'Quelle finition choisir : mat, satin ou brillant ?',
    answer: 'Le MAT (velouté) masque les imperfections et crée une ambiance feutrée — idéal pour les séjours et chambres. Le SATIN est légèrement lustré, lavable et résistant — parfait pour cuisines, salles de bain, couloirs et chambres d\'enfants. Le BRILLANT (laque) est ultra-résistant et facile à nettoyer — réservé aux boiseries, portes, plinthes et châssis. La tendance 2026 est au mat velouté (type Levis Ambiance Extra Mat).',
  },
  {
    question: 'Quelle est la TVA sur les travaux de peinture ?',
    answer: 'TVA 6% pour la main-d\'œuvre et les matériaux fournis par le peintre, si votre habitation a plus de 10 ans. TVA 21% pour les constructions neuves (moins de 10 ans) ou si vous fournissez vous-même la peinture. Sur un chantier de 5 000€, cette différence de taux représente une économie de 750€.',
  },
  {
    question: 'Combien de temps durent les travaux de peinture ?',
    answer: 'Pour une maison standard : 1-2 pièces (2-3 jours), appartement complet (5-7 jours), maison complète (10-15 jours). La préparation (ponçage, enduit, sous-couche) prend autant de temps que la peinture elle-même. Un bon peintre peint 25-35 m² par jour (2 couches). Si du papier peint doit être décollé, ajoutez 1-2 jours par pièce.',
  },
  {
    question: 'Faut-il une sous-couche avant de repeindre ?',
    answer: 'La sous-couche (primer) est recommandée dans ces cas : mur neuf (plâtre, Gyproc), changement de couleur radical (foncé vers clair), ancien mur farineux, taches d\'humidité traitées, ou bois neuf avant laquage. Elle améliore l\'adhérence, bloque les taches et réduit la consommation de peinture de finition de 20-30%. C\'est l\'investissement le plus rentable en peinture.',
  },
];

const diagnosticSigns = [
  { num: 1, text: 'Peinture écaillée — la peinture craquelle, cloque ou se décolle en plaques' },
  { num: 2, text: 'Couleur jaunie — les murs blancs virent au jaunâtre, surtout en cuisine' },
  { num: 3, text: 'Moisissures — taches noires dans les angles, salle de bain, cuisine' },
  { num: 4, text: 'Traces et taches — marques indélébiles malgré le nettoyage' },
  { num: 5, text: 'Fissures dans l\'enduit — les fissures se multiplient, l\'enduit s\'effrite' },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            🎨 Comparateur de prix — Belgique 2026
          </div>
          <h1>
            Travaux de <span className="highlight">Peinture</span> en Belgique
          </h1>
          <p className="hero-subtitle">
            Un bon peintre, c&apos;est 80% de préparation et 20% de peinture.
            Comparez les prix et recevez 3 devis gratuits de peintres professionnels certifiés.
          </p>
          <div className="hero-actions">
            <Link href="/devis/" className="btn btn-primary btn-lg">
              🎨 Comparez les Prix
            </Link>
            <Link href="/guides/" className="btn btn-white">
              Voir les guides →
            </Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">15€–40€</div>
              <div className="hero-stat-label">Prix au m² posé</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">556</div>
              <div className="hero-stat-label">Communes couvertes</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">48h</div>
              <div className="hero-stat-label">Réponse garantie</div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden' }}>
        <Image src="/images/hero-homepage.png" alt="Salon belge élégant en cours de peinture – rouleau professionnel et pots Levis" fill style={{ objectFit: 'cover', objectPosition: 'center 45%' }} priority sizes="100vw" />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(to top, var(--bg-primary), transparent)' }} />
      </section>

      <div className="brush-separator" />

      {/* ===== PRICE TABLE ===== */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Prix peinture en Belgique 2026</h2>
          <p className="section-subtitle">
            Tous les prix au m² posé, par type de travaux. TVA 6% pour les maisons de plus de 10 ans.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table className="price-table">
              <thead>
                <tr>
                  <th>Type de travaux</th>
                  <th>Prix (posé)</th>
                  <th>Durée de vie</th>
                  <th>Couches</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {paintingPrices.map((row) => (
                  <tr key={row.type}>
                    <td>
                      <strong>{row.icon} {row.type}</strong>
                    </td>
                    <td>
                      <span className="price-value">{row.prixMin}€ – {row.prixMax}€</span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}> /{row.unite.replace('€/', '')}</span>
                    </td>
                    <td>{row.dureeVie}</td>
                    <td>{row.couches}</td>
                    <td>
                      <span className={`badge badge-${row.badgeColor}`}>{row.badge}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Hourly rates */}
          <h3 className="mt-6" style={{ textAlign: 'center' }}>Tarifs horaires peintres par région</h3>
          <div style={{ overflowX: 'auto', marginTop: '1.5rem' }}>
            <table className="comparison-table" style={{ maxWidth: '600px', margin: '0 auto' }}>
              <thead>
                <tr>
                  <th>Profil</th>
                  <th>Tarif horaire (HTVA)</th>
                  <th>Zone</th>
                </tr>
              </thead>
              <tbody>
                {hourlyRates.map((row, i) => (
                  <tr key={i}>
                    <td><strong>{row.profil}</strong></td>
                    <td><span className="price-highlight">{row.tarifMin}€ – {row.tarifMax}€/h</span></td>
                    <td>{row.zone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-4">
            <Link href="/devis/" className="btn btn-primary btn-lg">
              🎨 Recevez vos Devis Gratuits
            </Link>
          </div>
        </div>
      </section>

      <div className="brush-separator" />

      {/* ===== DIAGNOSTIC CHECKLIST ===== */}
      <section className="section-alt">
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="badge badge-red" style={{ marginBottom: '1rem', display: 'inline-flex' }}>⚠️ Diagnostic</span>
              <h2>5 signes qu&apos;il est temps de repeindre</h2>
              <p className="text-muted">
                Les intérieurs belges se repeignent en moyenne tous les 7-10 ans.
                Vérifiez si vos murs présentent ces symptômes.
              </p>
              <ul className="checklist">
                {diagnosticSigns.map(s => (
                  <li key={s.num}>
                    <span className="checklist-icon">{s.num}</span>
                    <span>{s.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Link href="/devis/" className="btn btn-urgence">
                  🔴 Moisissures ? — Devis urgent
                </Link>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="card" style={{ borderLeftColor: 'var(--primary)' }}>
                <span className="card-icon">🎨</span>
                <div className="card-title">Peinture intérieure</div>
                <div className="card-subtitle">Murs, couloirs, chambres — mat, satin, finitions tendance 2026. Levis, Sikkens, Sigma.</div>
                <Link href="/peinture-interieure/" style={{ fontSize: '0.9rem', marginTop: '0.5rem', display: 'inline-block' }}>En savoir plus →</Link>
              </div>
              <div className="card" style={{ borderLeftColor: 'var(--exterieur)' }}>
                <span className="card-icon">🏠</span>
                <div className="card-title">Peinture extérieure</div>
                <div className="card-subtitle">Façade, volets, murs extérieurs — siloxane, pliolite, acrylique.</div>
                <Link href="/peinture-exterieure/" style={{ fontSize: '0.9rem', marginTop: '0.5rem', display: 'inline-block' }}>En savoir plus →</Link>
              </div>
              <div className="card" style={{ borderLeftColor: 'var(--interieur)' }}>
                <span className="card-icon">🚪</span>
                <div className="card-title">Laquage boiseries</div>
                <div className="card-subtitle">Portes, châssis, escalier — laque satin/brillant, préparation, ponçage.</div>
                <Link href="/boiseries-portes/" style={{ fontSize: '0.9rem', marginTop: '0.5rem', display: 'inline-block' }}>En savoir plus →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="brush-separator" />

      {/* ===== LEAD FORM ===== */}
      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>
          <LeadForm variant="full" />
        </div>
      </section>

      <div className="brush-separator" />

      {/* ===== GUIDES ===== */}
      <section className="section-alt">
        <div className="container">
          <h2 className="section-title">Guides peinture experts</h2>
          <p className="section-subtitle">
            Tout ce qu&apos;il faut savoir avant de faire peindre votre intérieur en Belgique.
          </p>
          <div className="card-grid">
            {guides.map(g => (
              <Link key={g.slug} href={`/guides/${g.slug}/`} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ height: '100%' }}>
                  <span className="card-icon">{g.icon}</span>
                  <div className="card-title">{g.title}</div>
                  <div className="card-subtitle">{g.description}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="brush-separator" />

      {/* ===== PRIMES PAR REGION ===== */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">TVA réduite — Toute la Belgique</h2>
          <p className="section-subtitle">
            TVA 6% au lieu de 21% pour les travaux de peinture dans les logements de plus de 10 ans.
          </p>
          <div className="card-grid-3">
            <div className="card" style={{ borderLeftColor: 'var(--accent)' }}>
              <span className="badge badge-green" style={{ marginBottom: '0.75rem' }}>Wallonie</span>
              <div className="card-title">TVA 6% — Main-d&apos;œuvre + matériaux</div>
              <div className="card-subtitle">Pour les habitations de plus de 10 ans. Le peintre fournit la peinture et facture le tout à 6%.</div>
              <div className="price-value" style={{ marginTop: '0.75rem' }}>Économie : 750€ sur 5 000€</div>
            </div>
            <div className="card" style={{ borderLeftColor: '#2563EB' }}>
              <span className="badge badge-blue" style={{ marginBottom: '0.75rem' }}>Bruxelles</span>
              <div className="card-title">TVA 6% — Idem + primes rénovation</div>
              <div className="card-subtitle">Même avantage TVA + possibilité de primes Rénolution pour isolation intérieure combinée.</div>
              <div className="price-value" style={{ marginTop: '0.75rem' }}>TVA 6% + Primes</div>
            </div>
            <div className="card" style={{ borderLeftColor: 'var(--interieur)' }}>
              <span className="badge badge-taupe" style={{ marginBottom: '0.75rem' }}>Flandre</span>
              <div className="card-title">BTW 6% — Arbeidsloon + materialen</div>
              <div className="card-subtitle">Voor woningen ouder dan 10 jaar. De schilder levert de verf en factureert alles aan 6%.</div>
              <div className="price-value" style={{ marginTop: '0.75rem' }}>Besparing: 750€ op 5 000€</div>
            </div>
          </div>
        </div>
      </section>

      <div className="brush-separator" />

      {/* ===== URGENCE BANNER ===== */}
      <section className="section-alt">
        <div className="container">
          <div className="urgence-banner">
            <div style={{ flex: 1 }}>
              <h3>🔴 Moisissures ou taches d&apos;humidité ? Traitement urgent</h3>
              <p>
                Les moisissures sur les murs nécessitent un traitement anti-mousse avant peinture.
                Ne laissez pas le problème s&apos;aggraver — obtenez un devis rapide.
              </p>
            </div>
            <Link href="/devis/" className="btn btn-white btn-lg" style={{ flexShrink: 0 }}>
              Devis Urgent →
            </Link>
          </div>
        </div>
      </section>

      <div className="brush-separator" />

      {/* ===== MAILLAGE EXTERNE ===== */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Rénovation complète de votre maison</h2>
          <p className="section-subtitle">
            La peinture n&apos;est qu&apos;un élément de votre projet de rénovation. Découvrez nos partenaires.
          </p>
          <div className="card-grid-4">
            <a href="https://prix-facade.be" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div className="card" style={{ textAlign: 'center', height: '100%' }}>
                <span className="card-icon">🧱</span>
                <div className="card-title">Peinture façade</div>
                <div className="card-subtitle">Peinture extérieure et crépi</div>
              </div>
            </a>
            <a href="https://traitement-humidite-belgique.be" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div className="card" style={{ textAlign: 'center', height: '100%' }}>
                <span className="card-icon">💧</span>
                <div className="card-title">Traitement humidité</div>
                <div className="card-subtitle">Avant peinture : traiter l&apos;humidité</div>
              </div>
            </a>
            <a href="https://prix-chassis-belgique.be" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div className="card" style={{ textAlign: 'center', height: '100%' }}>
                <span className="card-icon">🪟</span>
                <div className="card-title">Châssis &amp; Fenêtres</div>
                <div className="card-subtitle">Châssis + laquage boiseries</div>
              </div>
            </a>
            <a href="https://prix-faux-plafond.fr" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div className="card" style={{ textAlign: 'center', height: '100%' }}>
                <span className="card-icon">🏗️</span>
                <div className="card-title">Faux plafond</div>
                <div className="card-subtitle">Faux plafond + peinture</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <div className="brush-separator" />

      {/* ===== FAQ ===== */}
      <section className="section-alt">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title">Questions fréquentes</h2>
          <p className="section-subtitle">
            Tout ce que vous devez savoir sur les travaux de peinture en Belgique.
          </p>
          <FAQ items={homeFAQ} />
        </div>
      </section>

      {/* ===== COMMUNES LINKS ===== */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Peintres dans votre commune</h2>
          <p className="section-subtitle">Trouvez un peintre professionnel dans les principales villes belges</p>
          <div className="card-grid-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))' }}>
            {[
              { icon: '🏛️', name: 'Bruxelles', link: '/peintre/bruxelles-1000/' },
              { icon: '🏔️', name: 'Liège', link: '/peintre/liege-4000/' },
              { icon: '🏰', name: 'Namur', link: '/peintre/namur-5000/' },
              { icon: '🏭', name: 'Charleroi', link: '/peintre/charleroi-6000/' },
              { icon: '⛏️', name: 'Mons', link: '/peintre/mons-7000/' },
              { icon: '🗼', name: 'Tournai', link: '/peintre/tournai-7500/' },
              { icon: '🏡', name: 'Wavre', link: '/peintre/wavre-1300/' },
              { icon: '🌲', name: 'Arlon', link: '/peintre/arlon-6700/' },
              { icon: '⚓', name: 'Antwerpen', link: '/nl/schilder/antwerpen-2000/' },
              { icon: '🏰', name: 'Gent', link: '/nl/schilder/gent-9000/' },
              { icon: '🌊', name: 'Brugge', link: '/nl/schilder/brugge-8000/' },
              { icon: '🎓', name: 'Leuven', link: '/nl/schilder/leuven-3000/' },
            ].map(v => (
              <Link key={v.name} href={v.link} className="related-guide-card">
                <div className="rg-title">{v.icon} {v.name}</div>
                <div className="rg-desc">Devis peinture →</div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/peintre/" className="btn btn-primary btn-lg">📍 Voir les {556} communes de Belgique →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
