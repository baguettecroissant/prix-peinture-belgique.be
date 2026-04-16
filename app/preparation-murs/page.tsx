import type { Metadata } from 'next';
import Link from 'next/link';
import LeadForm from '../components/LeadForm';
import GuideLinks from '../components/GuideLinks';

export const metadata: Metadata = {
  title: 'Préparation des Murs Belgique 2026 — Enduit, Ponçage, Prix',
  description: 'Prix préparation des murs en Belgique : 8 à 20€/m². Enduit de rebouchage, ponçage, sous-couche. Guide et devis gratuits.',
  alternates: { canonical: 'https://prix-peinture-belgique.be/preparation-murs/' },
};

export default function PreparationMursPage() {
  return (
    <>
      <GuideLinks currentPath="/preparation-murs" variant="bar" />
      <section className="commune-header">
        <div className="container">
          <h1>🪣 Préparation des murs — L&apos;étape clé avant peinture</h1>
          <p>Enduit de rebouchage, sous-couche fixante, ponçage : techniques de pro et prix au m². La préparation est 80% du résultat.</p>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="article-prose">
            <h2>Prix préparation des murs au m²</h2>
            <p>La préparation des murs coûte entre <strong>8€ et 20€/m²</strong> en supplément de la peinture. C&apos;est l&apos;étape la plus importante : un bon peintre consacre autant de temps à la préparation qu&apos;à la peinture elle-même.</p>
            <p>Les étapes : rebouchage des trous et fissures (enduit), ponçage, dépoussiérage, application d&apos;une sous-couche fixante. Sur un mur très abîmé, un ratissage complet (enduit de lissage) peut être nécessaire.</p>
            <div className="mt-4"><Link href="/devis/" className="btn btn-primary btn-lg">🎨 Comparez les Prix — Devis Gratuit</Link></div>
          </div>
        </div>
      </section>
      <div className="brush-separator" />
      <section className="section-alt"><div className="container" style={{ maxWidth: '720px' }}><LeadForm variant="compact" /></div></section>
    </>
  );
}
