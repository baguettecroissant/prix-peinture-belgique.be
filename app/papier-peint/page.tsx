import type { Metadata } from 'next';
import Link from 'next/link';
import LeadForm from '../components/LeadForm';
import GuideLinks from '../components/GuideLinks';

export const metadata: Metadata = {
  title: 'Papier Peint Belgique 2026 — Pose, Dépose, Prix au m²',
  description: 'Prix papier peint en Belgique : 20 à 45€/m² posé. Intissé, vinyle, expansé. Pose et dépose. Devis gratuits.',
  alternates: { canonical: 'https://prix-peinture-belgique.be/papier-peint/' },
};

export default function PapierPeintPage() {
  return (
    <>
      <GuideLinks currentPath="/papier-peint" variant="bar" />
      <section className="commune-header">
        <div className="container">
          <h1>🖼️ Papier peint — Pose, dépose et prix Belgique 2026</h1>
          <p>Types de papier peint (intissé, vinyle, expansé), pose et dépose, prix au m² et tendances décoration 2026.</p>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="article-prose">
            <h2>Prix papier peint au m² — pose par un professionnel</h2>
            <p>La pose de papier peint par un professionnel coûte entre <strong>20€ et 45€/m²</strong> en Belgique (papier + pose). Le papier intissé est le plus facile à poser et le plus populaire. La dépose d&apos;ancien papier peint coûte 8 à 15€/m² en supplément.</p>
            <div className="mt-4"><Link href="/devis/" className="btn btn-primary btn-lg">🎨 Comparez les Prix — Devis Gratuit</Link></div>
          </div>
        </div>
      </section>
      <div className="brush-separator" />
      <section className="section-alt"><div className="container" style={{ maxWidth: '720px' }}><LeadForm variant="compact" /></div></section>
    </>
  );
}
