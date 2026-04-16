import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { guides, getGuideBySlug } from '../../data/guides';
import { guidesContent } from '../../data/guides-content';
import GuideLinks from '../../components/GuideLinks';
import LeadForm from '../../components/LeadForm';

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
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: 'article',
      url: `https://prix-peinture-belgique.be/guides/${slug}/`,
    },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return <div className="container section"><h1>Guide non trouvé</h1></div>;

  const content = guidesContent[slug];

  return (
    <>
      {/* Breadcrumb + Header */}
      <section className="commune-header">
        <div className="container">
          <div className="commune-breadcrumb">
            <Link href="/">Accueil</Link><span>›</span>
            <Link href="/guides/">Guides</Link><span>›</span>
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>{guide.icon} {guide.title.split(':')[0]}</span>
          </div>
          <h1>{guide.title}</h1>
          <p>{guide.description}</p>
          {content && (
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
              <span>📅 Mis à jour : {content.updatedDate}</span>
              <span>⏱️ Lecture : {content.readTime}</span>
            </div>
          )}
        </div>
      </section>

      {/* Hero Image */}
      {content && (
        <section style={{ position: 'relative', width: '100%', height: '340px', overflow: 'hidden' }}>
          <Image
            src={content.heroImage}
            alt={content.heroAlt}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
            priority
            sizes="100vw"
          />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px',
            background: 'linear-gradient(to top, var(--bg-primary), transparent)',
          }} />
        </section>
      )}

      {/* Article Body */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="article-prose">
            {content ? (
              content.body
            ) : (
              <>
                <div className="article-callout callout-info">
                  <div className="article-callout-icon">📝</div>
                  <div className="article-callout-content">
                    <strong>Guide en cours de rédaction</strong>
                    <p>Ce guide expert est en cours de finalisation. En attendant, recevez des devis gratuits de peintres professionnels.</p>
                  </div>
                </div>
                <Link href="/devis/" className="btn btn-primary btn-lg">🎨 Recevoir mes Devis Gratuits</Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <div className="brush-separator" />
      <section className="section-alt">
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 className="section-title">🎨 Devis Peinture Gratuit</h2>
          <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-muted)' }}>
            Recevez jusqu&apos;à 3 devis de peintres professionnels en 1 minute. Service 100% gratuit, sans engagement.
          </p>
          <LeadForm variant="compact" />
        </div>
      </section>

      {/* Related Guides */}
      <div className="brush-separator" />
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <GuideLinks currentPath={`/guides/${slug}`} title="Autres guides peinture" />
        </div>
      </section>

      {/* Schema.org */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": guide.title,
        "description": guide.description,
        "dateModified": content?.updatedDate || "2026-04-15",
        "author": { "@type": "Organization", "name": "Prix Peinture Belgique" },
        "publisher": { "@type": "Organization", "name": "Prix Peinture Belgique", "url": "https://prix-peinture-belgique.be" },
        "mainEntityOfPage": `https://prix-peinture-belgique.be/guides/${slug}/`,
        "image": content ? `https://prix-peinture-belgique.be${content.heroImage}` : undefined,
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://prix-peinture-belgique.be/" },
          { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://prix-peinture-belgique.be/guides/" },
          { "@type": "ListItem", "position": 3, "name": guide.title.split(':')[0].trim() },
        ],
      }) }} />
    </>
  );
}
