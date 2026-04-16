import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import LeadForm from '../components/LeadForm';
import FAQ from '../components/FAQ';
import GuideLinks from '../components/GuideLinks';

export const metadata: Metadata = {
  title: 'Prix Peinture Extérieure & Façade Belgique 2026 — Devis Gratuit',
  description: 'Prix peinture extérieure en Belgique : 15 à 40€/m². Siloxane, pliolite, acrylique. Budget façade complète : 3 000 à 8 000€. Devis gratuit de peintres.',
  alternates: { canonical: 'https://prix-peinture-belgique.be/peinture-exterieure/' },
};

const faq = [
  { question: 'Quel est le prix d\'une peinture de façade en Belgique ?', answer: 'Le prix varie de 15 à 40€/m² posé, soit un budget de 3 000 à 8 000€ pour une maison complète. Ce prix inclut le nettoyage haute pression, la préparation, l\'échafaudage et 2 couches de peinture (généralement siloxane en Belgique).' },
  { question: 'Quelle peinture extérieure choisir pour le climat belge ?', answer: 'La peinture siloxane est le meilleur choix pour le climat belge (800-1 400 mm de pluie/an). Elle est hydrophobe (repousse l\'eau), respirante (laisse passer la vapeur d\'eau) et dure 12-15 ans. Alternative : la silicate de potassium pour les murs en pierre (15-20 ans).' },
  { question: 'Quand peindre sa façade en Belgique ?', answer: 'La fenêtre idéale est de mai à septembre. Conditions requises : température entre 10°C et 30°C, humidité < 80%, pas de pluie dans les 24h, pas de gel nocturne. Les peintres sont moins chers en basse saison (octobre-mars) mais les conditions sont rarement idéales.' },
  { question: 'Faut-il un permis pour peindre sa façade ?', answer: 'En règle générale, non — sauf si votre maison est classée ou en zone protégée. Certaines communes exigent cependant une déclaration urbanistique si vous changez radicalement la couleur. Vérifiez auprès du service urbanisme de votre commune.' },
];

export default function PeintureExterieurePage() {
  return (
    <>
      <GuideLinks currentPath="/peinture-exterieure" variant="bar" />
      <section className="commune-header">
        <div className="container">
          <h1>🏠 Peinture extérieure &amp; façade — Prix et devis Belgique 2026</h1>
          <p>Guide complet de la peinture de façade en Belgique. Types de peinture (siloxane, pliolite, acrylique), prix au m², budget par type de maison et conditions climatiques.</p>
        </div>
      </section>

      <section style={{ position: 'relative', width: '100%', height: '320px', overflow: 'hidden' }}>
        <Image src="/images/hero-peinture-exterieure.png" alt="Peintre sur échafaudage peignant une façade belge traditionnelle" fill style={{ objectFit: 'cover', objectPosition: 'center 40%' }} priority sizes="100vw" />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(to top, var(--bg-primary), transparent)' }} />
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="article-prose">
            <p>La <strong>peinture de façade</strong> protège votre maison des intempéries belges et valorise votre bien immobilier. Avec 800 à 1 400 mm de pluie par an, le choix d&apos;une peinture extérieure haute performance est crucial. Ce guide couvre tout : types de peinture, préparation, prix et calendrier idéal.</p>

            <div className="article-callout callout-tip">
              <div className="article-callout-icon">💡</div>
              <div className="article-callout-content">
                <strong>En résumé</strong>
                <p>Façade : <strong>15-40€/m²</strong> posé | Budget maison : <strong>3 000-8 000€</strong> | Meilleure peinture : <strong>siloxane</strong> (12-15 ans) | Saison : <strong>mai à septembre</strong></p>
              </div>
            </div>

            <h2>Types de peinture extérieure — Comparatif</h2>
          </div>

          <table className="comparison-table">
            <thead><tr><th>Type</th><th>Durée de vie</th><th>Idéal pour</th><th>Prix /L</th></tr></thead>
            <tbody>
              <tr><td><strong>Siloxane</strong> ⭐</td><td>12-15 ans</td><td>Briques, enduits — Le meilleur pour la Belgique</td><td>3-6€</td></tr>
              <tr><td><strong>Acrylique épaisse</strong></td><td>8-10 ans</td><td>Enduits lisses, béton — Bon rapport qualité/prix</td><td>2-4€</td></tr>
              <tr><td><strong>Pliolite</strong></td><td>8-10 ans</td><td>Façades poudreuses, anciens crépis</td><td>3-5€</td></tr>
              <tr><td><strong>Silicate de potassium</strong></td><td>15-20 ans</td><td>Patrimoine, murs en pierre — La plus durable</td><td>5-8€</td></tr>
              <tr><td><strong>Chaux</strong></td><td>5-8 ans</td><td>Bâtiments classés, murs anciens</td><td>3-5€</td></tr>
            </tbody>
          </table>

          <div className="article-prose" style={{ marginTop: '2rem' }}>
            <h2>Budget peinture façade par type de maison</h2>
          </div>

          <table className="comparison-table">
            <thead><tr><th>Type de maison</th><th>Surface façade</th><th>Budget tout compris</th></tr></thead>
            <tbody>
              <tr><td><strong>Maison mitoyenne</strong></td><td>60-100 m²</td><td>2 000€ – 4 500€</td></tr>
              <tr><td><strong>Maison 3 façades</strong></td><td>100-150 m²</td><td>3 500€ – 6 500€</td></tr>
              <tr><td><strong>Maison 4 façades</strong></td><td>150-250 m²</td><td>5 000€ – 10 000€</td></tr>
              <tr><td><strong>Villa</strong></td><td>250-400 m²</td><td>8 000€ – 16 000€</td></tr>
            </tbody>
          </table>

          <div className="article-prose" style={{ marginTop: '2rem' }}>
            <p>Ces budgets incluent : échafaudage (15-25% du total), nettoyage haute pression, préparation, 2 couches de peinture et nettoyage du chantier.</p>

            <h2>Les 6 étapes d&apos;une peinture façade pro</h2>
            <ol>
              <li><strong>Diagnostic + devis</strong> — Inspection de la façade, identification des fissures, mousse, humidité</li>
              <li><strong>Nettoyage haute pression</strong> — Karcher 150-200 bars + séchage 48h minimum</li>
              <li><strong>Réparations</strong> — Rebouchage fissures, joints dégradés, <Link href="/preparation-murs/" style={{ color: 'var(--primary)', fontWeight: 600 }}>enduit de façade</Link></li>
              <li><strong>Traitement fongicide</strong> — Anti-mousse professionnel, temps d&apos;action 24-48h</li>
              <li><strong>Sous-couche fixatrice</strong> — Primaire d&apos;accrochage adapté au support</li>
              <li><strong>2 couches de finition</strong> — Rouleau façade ou airless pour grandes surfaces</li>
            </ol>

            <div className="article-callout callout-warning">
              <div className="article-callout-icon">🌡️</div>
              <div className="article-callout-content">
                <strong>Conditions météo obligatoires</strong>
                <p>Température 10-30°C, pas de pluie dans les 24h, humidité &lt; 80%, pas de vent fort. En Belgique : <strong>mai à septembre uniquement</strong>.</p>
              </div>
            </div>

            <p>Pour la rénovation complète de façade, consultez aussi notre partenaire <a href="https://prix-facade.be/" target="_blank" rel="noopener noreferrer">Prix Facade Belgique</a>. Pour le guide détaillé, lisez notre <Link href="/guides/peinture-exterieure-facade-guide/" style={{ color: 'var(--primary)', fontWeight: 600 }}>guide expert peinture façade</Link>.</p>
          </div>
        </div>
      </section>

      <div className="brush-separator" />
      <section className="section-alt">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title">Questions fréquentes — Peinture façade</h2>
          <FAQ items={faq} />
        </div>
      </section>
      <div className="brush-separator" />
      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 className="section-title">🏠 Devis Peinture Façade — Gratuit</h2>
          <LeadForm variant="compact" />
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": faq.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })),
      }) }} />
    </>
  );
}
