import type { Metadata } from 'next';
import Link from 'next/link';
import LeadForm from '../../components/LeadForm';

export const metadata: Metadata = {
  title: 'Gratis Schilderofferte — Vergelijk 3 Schilders België 2026',
  description: 'Ontvang tot 3 gratis offertes van professionele schilders in België. Interieur, exterieur, plafonds, houtwerk. Vergelijk en bespaar.',
  alternates: { canonical: 'https://prix-peinture-belgique.be/nl/offerte/' },
};

export default function NLOffertePage() {
  return (
    <>
      <section className="commune-header">
        <div className="container">
          <div className="commune-breadcrumb">
            <Link href="/nl/">Home</Link><span>›</span>
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>Offerte</span>
          </div>
          <span className="badge badge-lavande" style={{ marginBottom: '1rem' }}>✅ 100% gratis en vrijblijvend</span>
          <h1>Gratis Schilderofferte — Vergelijk 3 Schilders</h1>
          <p>Ontvang tot 3 gratis offertes van gecertificeerde schilders in uw regio. Interieur, exterieur, plafonds, houtwerk — antwoord binnen 48 uur.</p>
        </div>
      </section>

      <section className="section" id="formulaire">
        <div className="container" style={{ maxWidth: '720px' }}>
          <LeadForm variant="full" language="nl" />
        </div>
      </section>
    </>
  );
}
