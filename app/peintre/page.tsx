import type { Metadata } from 'next';
import Link from 'next/link';
import { communes } from '../data/communes';

export const metadata: Metadata = {
  title: 'Peintres en Belgique — Toutes les communes',
  description: 'Trouvez un peintre professionnel dans votre commune en Belgique. 556 communes couvertes : Wallonie, Bruxelles et Flandre. Devis gratuit.',
  alternates: { canonical: 'https://prix-peinture-belgique.be/peintre/' },
};

export default function PeintreIndexPage() {
  const provinces = [...new Set(communes.map(c => c.province_name))].sort();

  return (
    <>
      <section className="commune-header">
        <div className="container">
          <div className="commune-breadcrumb">
            <Link href="/">Accueil</Link><span>›</span>
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>Toutes les communes</span>
          </div>
          <h1>Peintre professionnel en Belgique — 556 communes</h1>
          <p>
            Trouvez un peintre certifié dans votre commune. Comparez les prix et recevez jusqu&apos;à 3 devis gratuits pour vos travaux de peinture.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {provinces.map(prov => {
            const provCommunes = communes.filter(c => c.province_name === prov);
            const isFR = provCommunes[0]?.region === 'Wallonie' || provCommunes[0]?.region === 'Bruxelles-Capitale';
            const basePath = isFR ? '/peintre' : '/nl/schilder';

            return (
              <div key={prov} style={{ marginBottom: '3rem' }}>
                <h2 style={{ borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                  {prov} ({provCommunes.length} communes)
                </h2>
                <div className="internal-links-grid">
                  {provCommunes.map(c => {
                    const displayName = !isFR && c.name_nl ? c.name_nl : c.name;
                    const slug = !isFR && c.name_nl
                      ? `${c.name_nl.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')}-${c.zip}`
                      : c.slug;
                    return (
                      <Link key={c.slug} href={`${basePath}/${slug}/`}>
                        {displayName} ({c.zip})
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
