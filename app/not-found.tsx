import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: 'center', minHeight: '50vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎨</div>
        <h1>Page non trouvée</h1>
        <p className="text-muted" style={{ marginBottom: '2rem' }}>
          Cette page n&apos;existe pas ou a été déplacée.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn-primary">Retour à l&apos;accueil</Link>
          <Link href="/devis/" className="btn btn-outline">Demander un devis</Link>
          <Link href="/peintre/" className="btn btn-outline">Voir les communes</Link>
        </div>
      </div>
    </section>
  );
}
