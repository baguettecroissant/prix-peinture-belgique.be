import type { Metadata } from 'next';
import Link from 'next/link';
import { guides, getGuideBySlug } from '../../data/guides';
import GuideLinks from '../../components/GuideLinks';

export async function generateStaticParams() {
  return guides.map(g => ({ slug: g.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return { title: 'Guide non trouvé' };

  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `https://prix-peinture-belgique.be/guides/${slug}/` },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return <div className="container section"><h1>Guide non trouvé</h1></div>;

  return (
    <>
      <section className="commune-header">
        <div className="container">
          <div className="commune-breadcrumb">
            <Link href="/">Accueil</Link><span>›</span>
            <Link href="/guides/">Guides</Link><span>›</span>
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>{guide.icon} {guide.category}</span>
          </div>
          <h1>{guide.title}</h1>
          <p>{guide.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="article-prose">
            <div className="article-callout callout-info">
              <div className="article-callout-icon">📝</div>
              <div className="article-callout-content">
                <strong>Guide en cours de rédaction</strong>
                <p>Ce guide expert est en cours de finalisation par notre équipe. En attendant, recevez des devis gratuits de peintres professionnels dans votre commune.</p>
              </div>
            </div>

            <h2>Demandez vos devis gratuits</h2>
            <p>
              En attendant la publication complète de ce guide, vous pouvez d&apos;ores et déjà comparer les prix de peintres dans votre commune et recevoir jusqu&apos;à 3 devis gratuits.
            </p>
            <Link href="/devis/" className="btn btn-primary btn-lg">🎨 Recevoir mes Devis Gratuits</Link>
          </div>

          <GuideLinks currentPath={`/guides/${slug}`} title="Autres guides peinture" />
        </div>
      </section>
    </>
  );
}
