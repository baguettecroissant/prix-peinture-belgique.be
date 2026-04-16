import type { Metadata } from 'next';
import Link from 'next/link';
import LeadForm from '../components/LeadForm';
import FAQ from '../components/FAQ';

export const metadata: Metadata = {
  title: 'Devis Peinture Gratuit — Comparez 3 Peintres Belges 2026',
  description: 'Recevez jusqu\'à 3 devis gratuits de peintres professionnels en Belgique. Intérieur, extérieur, plafonds, boiseries, papier peint. Comparaison transparente, sans engagement.',
  alternates: { canonical: 'https://prix-peinture-belgique.be/devis/' },
};

const devisFAQ = [
  { question: 'Le service de devis est-il vraiment gratuit ?', answer: 'Oui, à 100%. Vous recevez jusqu\'à 3 devis de peintres certifiés sans aucun frais ni engagement. Vous êtes libre de comparer les offres et de choisir celle qui vous convient le mieux, ou de ne retenir aucune offre.' },
  { question: 'Combien de devis vais-je recevoir ?', answer: 'Vous recevez jusqu\'à 3 devis de peintres différents, actifs dans votre zone géographique. Le nombre exact dépend de la disponibilité des artisans dans votre commune. En moyenne, vous recevez 2 à 3 propositions sous 48h.' },
  { question: 'Les peintres sont-ils vérifiés ?', answer: 'Oui. Tous les peintres partenaires sont enregistrés à la Banque Carrefour des Entreprises (BCE), disposent d\'une assurance responsabilité civile professionnelle, et ont fait l\'objet d\'une vérification.' },
  { question: 'Combien de temps pour recevoir les devis ?', answer: 'En général, vous êtes contacté dans les 24 à 48h ouvrables après votre demande. Les peintres vous proposent un rendez-vous pour visiter votre chantier et établir un devis précis.' },
  { question: 'Quels types de travaux sont couverts ?', answer: 'Tous les travaux de peinture : intérieur (murs, plafonds), extérieur (façade, volets), laquage boiseries (portes, châssis), papier peint (pose et dépose), préparation des murs (enduit, ponçage) et rénovation complète.' },
];

export default function DevisPage() {
  return (
    <>
      <section className="commune-header">
        <div className="container">
          <div className="commune-breadcrumb">
            <Link href="/">Accueil</Link><span>›</span>
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>Devis gratuit</span>
          </div>
          <span className="badge badge-lavande" style={{ marginBottom: '1rem' }}>✅ Service 100% gratuit et sans engagement</span>
          <h1>Devis Peinture — Comparez 3 Peintres Belges</h1>
          <p>
            Recevez jusqu&apos;à 3 devis gratuits de peintres professionnels dans votre région. Intérieur, extérieur, plafonds, boiseries, papier peint — réponse sous 48h.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Comment ça fonctionne ?</h2>
          <div className="card-grid-3">
            <div className="card" style={{ textAlign: 'center' }}>
              <span className="card-icon" style={{ fontSize: '2.5rem' }}>📝</span>
              <div className="card-title">1. Décrivez votre projet</div>
              <div className="card-subtitle">Remplissez le formulaire en 2 minutes : type de travaux, surface, commune.</div>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <span className="card-icon" style={{ fontSize: '2.5rem' }}>🔍</span>
              <div className="card-title">2. Nous trouvons vos peintres</div>
              <div className="card-subtitle">Nous sélectionnons jusqu&apos;à 3 peintres certifiés, actifs dans votre commune.</div>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <span className="card-icon" style={{ fontSize: '2.5rem' }}>✅</span>
              <div className="card-title">3. Comparez et choisissez</div>
              <div className="card-subtitle">Recevez vos devis sous 48h. Comparez prix, matériaux et délais. Sans engagement.</div>
            </div>
          </div>
        </div>
      </section>

      <div className="brush-separator" />

      <section className="section-alt" id="formulaire">
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 className="section-title">Votre demande de devis</h2>
          <LeadForm variant="full" />
        </div>
      </section>

      <div className="brush-separator" />

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title">Questions fréquentes — Votre devis peinture</h2>
          <FAQ items={devisFAQ} />
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": devisFAQ.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })),
      }) }} />
    </>
  );
}
