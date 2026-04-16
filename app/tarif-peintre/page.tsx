import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { paintingPrices, hourlyRates } from '../data/prices';
import LeadForm from '../components/LeadForm';
import FAQ from '../components/FAQ';
import GuideLinks from '../components/GuideLinks';

export const metadata: Metadata = {
  title: 'Tarif Peintre Belgique 2026 — Prix au m² et à l\'heure',
  description: 'Tarif peintre en Belgique 2026 : 25 à 45€/h, 15 à 40€/m². Prix par type de travaux (intérieur, extérieur, plafonds, boiseries). Devis gratuit.',
  alternates: { canonical: 'https://prix-peinture-belgique.be/tarif-peintre/' },
};

const faq = [
  { question: 'Quel est le tarif horaire d\'un peintre en Belgique ?', answer: 'Le tarif horaire varie de 25 à 45€/h HTVA selon la région : 25-35€/h en Wallonie, 30-40€/h à Bruxelles, 30-45€/h en Flandre. Une entreprise de peinture (PME) facture 35 à 50€/h. À cela s\'ajoute la TVA : 6% pour habitations de 10+ ans, 21% pour le neuf.' },
  { question: 'Vaut-il mieux un devis au m² ou à l\'heure ?', answer: 'Le devis au m² est toujours préférable : il vous protège contre les dépassements de budget. Le devis à l\'heure peut sembler moins cher mais le peintre peut prendre plus de temps que prévu. Exigez un montant total forfaitaire basé sur le métrage.' },
  { question: 'Comment économiser sur les travaux de peinture ?', answer: 'Trois leviers : 1) Planifiez en basse saison (nov-fév) pour -10-15%. 2) Faites fournir la peinture par le peintre pour bénéficier de la TVA 6% sur tout. 3) Préparez vous-même (déplacement des meubles, dépose des rideaux/cadres, bâchage) pour gagner 1-2h de main-d\'œuvre.' },
];

export default function TarifPeintrePage() {
  return (
    <>
      <GuideLinks currentPath="/tarif-peintre" variant="bar" />
      <section className="commune-header">
        <div className="container">
          <h1>💰 Tarif peintre en Belgique 2026 — Prix au m² et à l&apos;heure</h1>
          <p>Tous les tarifs de peinture en Belgique : prix au m² par type de travaux, tarif horaire par région, budget type par projet et astuces pour économiser.</p>
        </div>
      </section>

      <section style={{ position: 'relative', width: '100%', height: '320px', overflow: 'hidden' }}>
        <Image src="/images/hero-tarif-peintre.png" alt="Outils de peintre professionnels organisés : pots Levis, pinceaux, rouleaux, scotch" fill style={{ objectFit: 'cover', objectPosition: 'center 50%' }} priority sizes="100vw" />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(to top, var(--bg-primary), transparent)' }} />
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="article-prose">
            <p>Combien coûte un peintre en Belgique ? C&apos;est la question N°1 des propriétaires. Ce guide complet vous donne tous les tarifs 2026 — au m², à l&apos;heure, et par projet — pour chaque région.</p>

            <div className="article-callout callout-tip">
              <div className="article-callout-icon">💡</div>
              <div className="article-callout-content">
                <strong>En résumé</strong>
                <p>Au m² : <strong>15-40€</strong> (intérieur) | À l&apos;heure : <strong>25-45€</strong> (HTVA) | TVA <strong>6%</strong> pour logements 10+ ans</p>
              </div>
            </div>

            <h2>Tarif peintre au m² — Tous les travaux</h2>
          </div>

          <table className="comparison-table">
            <thead><tr><th>Type de travaux</th><th>Prix posé (m²)</th><th>Durée de vie</th><th>Couches</th></tr></thead>
            <tbody>
              {paintingPrices.map(row => (
                <tr key={row.type}><td><strong>{row.icon} {row.type}</strong></td><td><span className="price-highlight">€{row.prixMin} – €{row.prixMax}</span></td><td>{row.dureeVie}</td><td>{row.couches}</td></tr>
              ))}
            </tbody>
          </table>

          <div className="article-prose" style={{ marginTop: '2rem' }}>
            <h2>Tarif horaire par région</h2>
          </div>

          <table className="comparison-table">
            <thead><tr><th>Profil</th><th>Tarif (HTVA)</th><th>Zone</th></tr></thead>
            <tbody>
              {hourlyRates.map((row, i) => (
                <tr key={i}><td><strong>{row.profil}</strong></td><td><span className="price-highlight">{row.tarifMin}€ – {row.tarifMax}€/h</span></td><td>{row.zone}</td></tr>
              ))}
            </tbody>
          </table>

          <div className="article-prose" style={{ marginTop: '2rem' }}>
            <h2>Prix par région</h2>
            <table className="comparison-table">
              <thead><tr><th>Région</th><th>Murs (m²)</th><th>Plafonds (m²)</th><th>Portes (unité)</th></tr></thead>
              <tbody>
                <tr><td><strong>🏛️ Bruxelles</strong></td><td>20-40€</td><td>25-40€</td><td>35-65€</td></tr>
                <tr><td><strong>🏔️ Wallonie</strong></td><td>15-30€</td><td>18-32€</td><td>28-50€</td></tr>
                <tr><td><strong>🌊 Flandre</strong></td><td>18-35€</td><td>22-38€</td><td>32-58€</td></tr>
              </tbody>
            </table>

            <h2>Budget par projet</h2>
            <table className="comparison-table">
              <thead><tr><th>Projet</th><th>Budget TTC</th><th>Durée</th></tr></thead>
              <tbody>
                <tr><td><strong>🛏️ 1 chambre</strong></td><td>350€ – 700€</td><td>1-2 j</td></tr>
                <tr><td><strong>🍳 Cuisine</strong></td><td>800€ – 1 500€</td><td>2-3 j</td></tr>
                <tr><td><strong>🏢 Appart 80 m²</strong></td><td>2 500€ – 5 500€</td><td>5-8 j</td></tr>
                <tr><td><strong>🏠 Maison 150 m²</strong></td><td>5 000€ – 12 000€</td><td>10-18 j</td></tr>
              </tbody>
            </table>

            <h2>TVA 6% vs 21% — Économisez 750€</h2>
            <div className="article-callout callout-tip">
              <div className="article-callout-icon">💰</div>
              <div className="article-callout-content">
                <strong>Faites fournir la peinture par le peintre</strong>
                <p>Si le peintre fournit la peinture, TOUTE la facture (MO + peinture) bénéficie de la TVA 6% pour les logements de 10+ ans. Si vous l&apos;achetez vous-même : 21% sur la peinture + perte du taux réduit. Sur 5 000€ de travaux = <strong>750€ d&apos;économie</strong>.</p>
              </div>
            </div>

            <h2>3 astuces pour économiser</h2>
            <ol>
              <li><strong>Basse saison</strong> — Planifiez vos travaux en novembre-février pour -10-15% sur la MO</li>
              <li><strong>Préparez vous-même</strong> — Déplacez meubles, cadres, rideaux. Gain : 1-2h de MO</li>
              <li><strong>Comparez 3 devis</strong> — Ne signez jamais le premier. <Link href="/devis/" style={{ color: 'var(--primary)', fontWeight: 600 }}>Demandez vos devis gratuits</Link></li>
            </ol>

            <p>Guides détaillés : <Link href="/peinture-interieure/" style={{ color: 'var(--primary)', fontWeight: 600 }}>peinture intérieure</Link> | <Link href="/peinture-exterieure/" style={{ color: 'var(--primary)', fontWeight: 600 }}>peinture extérieure</Link> | <Link href="/guides/prix-peintre-belgique/" style={{ color: 'var(--primary)', fontWeight: 600 }}>guide prix complet</Link></p>

            <h2>Prix par ville</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '0.5rem', margin: '1rem 0' }}>
              <Link href="/peintre/bruxelles-1000/" className="related-guide-card"><div className="rg-title">Bruxelles</div><div className="rg-desc">30-40€/h</div></Link>
              <Link href="/peintre/liege-4000/" className="related-guide-card"><div className="rg-title">Liège</div><div className="rg-desc">27-38€/h</div></Link>
              <Link href="/peintre/namur-5000/" className="related-guide-card"><div className="rg-title">Namur</div><div className="rg-desc">27-38€/h</div></Link>
              <Link href="/peintre/charleroi-6000/" className="related-guide-card"><div className="rg-title">Charleroi</div><div className="rg-desc">25-35€/h</div></Link>
              <Link href="/peintre/mons-7000/" className="related-guide-card"><div className="rg-title">Mons</div><div className="rg-desc">25-35€/h</div></Link>
              <Link href="/peintre/arlon-6700/" className="related-guide-card"><div className="rg-title">Arlon</div><div className="rg-desc">25-35€/h</div></Link>
            </div>
            <p><Link href="/peintre/" style={{ color: 'var(--primary)', fontWeight: 600 }}>→ Voir les 556 communes</Link></p>
          </div>
        </div>
      </section>

      <div className="brush-separator" />
      <section className="section-alt"><div className="container" style={{ maxWidth: '800px' }}><h2 className="section-title">Questions fréquentes — Tarifs</h2><FAQ items={faq} /></div></section>
      <div className="brush-separator" />
      <section className="section"><div className="container" style={{ maxWidth: '720px' }}><h2 className="section-title">💰 Comparez les Tarifs — Devis Gratuit</h2><LeadForm variant="compact" /></div></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faq.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }} />
    </>
  );
}
