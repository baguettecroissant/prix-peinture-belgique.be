import type { Metadata } from 'next';
import Link from 'next/link';
import {
  communes, getCommuneBySlug, getCommuneCategory, getCategoryLabel,
  getPriceRange, getProvincePriceMultiplier, getRegionIntro,
  getArchitecturalContext, getClimaticInfo, getLocalPaintingProblems,
  getDidYouKnow, getNearbyCommunes, getLocalTip, getEnhancedFAQ,
  getLocalPriceTable, getBudgetEstimates, getBrandRecommendations,
  getProjectExamples, getPreparationChecklist, getExternalLinks,
  getRegionContext, getSeasonalCalendar, getCrossSiteLinks,
} from '../../data/communes';
import LeadForm from '../../components/LeadForm';
import FAQ from '../../components/FAQ';
import GuideLinks from '../../components/GuideLinks';

export async function generateStaticParams() {
  const frCommunes = communes.filter(c => c.region === 'Wallonie' || c.region === 'Bruxelles-Capitale');
  return frCommunes.map(c => ({ slug: c.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const commune = getCommuneBySlug(slug);
  if (!commune) return { title: 'Commune non trouvée' };

  const priceRange = getPriceRange(commune.region);
  return {
    title: `Prix peintre à ${commune.name} (${commune.zip}) — Devis peinture 2026 | ${commune.province_name}`,
    description: `Comparez les prix de peinture à ${commune.name} (${commune.zip}). Intérieur dès ${priceRange.min}€/m², plafonds, boiseries, façade. Devis gratuit de peintres professionnels en ${commune.province_name}. TVA 6%.`,
    alternates: { canonical: `https://prix-peinture-belgique.be/peintre/${slug}/` },
  };
}

export default async function CommunePage({ params }: PageProps) {
  const { slug } = await params;
  const commune = getCommuneBySlug(slug);
  if (!commune) {
    return <div className="container section"><h1>Commune non trouvée</h1></div>;
  }

  const priceRange = getPriceRange(commune.region);
  const cat = getCommuneCategory(commune.population);
  const catLabel = getCategoryLabel(cat);
  const intro = getRegionIntro(commune.region, commune.name);
  const arch = getArchitecturalContext(commune);
  const climate = getClimaticInfo(commune);
  const problems = getLocalPaintingProblems(commune);
  const didYouKnow = getDidYouKnow(commune);
  const nearby = getNearbyCommunes(commune, 8);
  const localTip = getLocalTip(commune);
  const localFAQ = getEnhancedFAQ(commune);
  const localPrices = getLocalPriceTable(commune);
  const budgets = getBudgetEstimates(commune);
  const brands = getBrandRecommendations(commune);
  const projects = getProjectExamples(commune);
  const prepChecklist = getPreparationChecklist(commune);
  const externalLinks = getExternalLinks(commune);
  const regionCtx = getRegionContext(commune);
  const seasonCalendar = getSeasonalCalendar(commune);
  const crossLinks = getCrossSiteLinks(commune);

  return (
    <>
      <GuideLinks currentPath={`/peintre/${slug}`} variant="bar" />

      {/* ====== HERO ====== */}
      <section className="commune-header">
        <div className="container">
          <div className="commune-breadcrumb">
            <Link href="/">Accueil</Link>
            <span>›</span>
            <Link href="/peintre/">Peintre</Link>
            <span>›</span>
            <Link href="/peintre/">{commune.province_name}</Link>
            <span>›</span>
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>{commune.name}</span>
          </div>
          <h1>Prix peintre à {commune.name} ({commune.zip}) — Devis peinture intérieur &amp; extérieur 2026</h1>
          <p>
            Comparez les prix de peinture à {commune.name} ({commune.zip}), {catLabel} de {commune.population.toLocaleString('fr-BE')} habitants en {commune.province_name}. {intro} Les peintres de la région facturent entre <strong>{priceRange.min}€ et {priceRange.max}€/m²</strong> pour des travaux de peinture intérieure (murs et plafonds, 2 couches).
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            <Link href="/devis/" className="btn btn-primary btn-lg">🎨 Devis Gratuit à {commune.name}</Link>
            {externalLinks.map((link, i) => (
              <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
                {link.icon} {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ====== LOCAL PRICE TABLE ====== */}
      <section className="section">
        <div className="container">
          <h2>Prix des travaux de peinture à {commune.name} ({commune.zip}) — Tarifs 2026</h2>
          <p className="text-muted mb-3">
            Tarifs indicatifs des peintres en {commune.province_name} — TVA 6% pour les maisons de plus de 10 ans. Les prix à {commune.name} sont {getProvincePriceMultiplier(commune.province_name) > 1.05 ? 'légèrement supérieurs' : getProvincePriceMultiplier(commune.province_name) < 0.95 ? 'légèrement inférieurs' : 'dans'} la moyenne nationale{getProvincePriceMultiplier(commune.province_name) > 1.05 ? ' en raison du coût de la vie local' : getProvincePriceMultiplier(commune.province_name) < 0.95 ? ', ce qui en fait une région compétitive' : ''}.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Type de travaux</th>
                  <th>Prix (posé)</th>
                  <th>Durée de vie</th>
                </tr>
              </thead>
              <tbody>
                {localPrices.map(row => (
                  <tr key={row.type}>
                    <td><strong>{row.icon} {row.type}</strong></td>
                    <td><span className="price-highlight">{row.prixMin}€ – {row.prixMax}€ {row.unite}</span></td>
                    <td>{row.dureeVie}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
            * Prix TTC indicatifs pour {commune.name} ({commune.province_name}). Tarif final sur devis après visite du peintre. TVA 6% pour les habitations de 10+ ans.
          </p>
        </div>
      </section>

      <div className="brush-separator" />

      {/* ====== BUDGET ESTIMATOR ====== */}
      <section className="section-alt">
        <div className="container">
          <h2>Budget peinture à {commune.name} — Estimations par projet</h2>
          <p className="text-muted mb-3">
            Combien coûte votre projet de peinture à {commune.name} ? Voici les budgets moyens constatés en {commune.province_name} pour les projets les plus courants :
          </p>
          <div className="card-grid-3">
            {budgets.map((b, i) => (
              <div className="card" key={i}>
                <span className="card-icon">{b.icon}</span>
                <div className="card-title">{b.label}</div>
                <div className="card-subtitle" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Surface : {b.surfaceM2}</div>
                <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--primary)', fontFamily: 'var(--font-mono)', margin: '0.5rem 0' }}>
                  {b.budgetMin}€ – {b.budgetMax}€
                </div>
                <div className="card-subtitle">⏱️ Durée : {b.duree}</div>
              </div>
            ))}
          </div>
          <div className="article-callout callout-tip" style={{ marginTop: '1.5rem' }}>
            <div className="article-callout-icon">💡</div>
            <div className="article-callout-content">
              <strong>Le saviez-vous ?</strong>
              <p>{didYouKnow}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="brush-separator" />

      {/* ====== ARCHITECTURAL CONTEXT ====== */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="article-prose">
            <h2>{arch.title}</h2>
            {arch.content.split('\n\n').map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="article-callout callout-info">
              <div className="article-callout-icon">🏗️</div>
              <div className="article-callout-content">
                <strong>Type de surface dominant à {commune.name} : {arch.surfaceType}</strong>
                <p>Période de construction typique : {arch.yearRange}. Ce type de support nécessite des techniques de préparation et de peinture spécifiques. Demandez à votre peintre de vérifier l&apos;état du support (test d&apos;adhérence, mesure d&apos;humidité) avant d&apos;établir son devis final.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="brush-separator" />

      {/* ====== LOCAL PROBLEMS ====== */}
      <section className="section-alt">
        <div className="container">
          <h2>Problèmes de peinture courants à {commune.name} ({commune.province_name})</h2>
          <p className="text-muted mb-3">Les problématiques les plus fréquentes rencontrées par les peintres en {commune.province_name} :</p>
          <div className="card-grid-3">
            {problems.problems.map((problem, i) => (
              <div className="card" key={i}>
                <span className="card-icon">{problem.icon}</span>
                <div className="card-title">{problem.title}</div>
                <div className="card-subtitle">{problem.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="brush-separator" />

      {/* ====== CHECKLIST - 5 SIGNES ====== */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2>5 signes qu&apos;il est temps de repeindre à {commune.name}</h2>
          <ul className="checklist">
            <li><span className="checklist-icon">1</span><span><strong>Peinture écaillée ou cloquée</strong> — la peinture craquelle, forme des bulles ou se décolle en plaques sur les murs ou plafonds. Cause probable : humidité, mauvaise adhérence de l&apos;ancienne couche.</span></li>
            <li><span className="checklist-icon">2</span><span><strong>Couleur jaunie ou ternie</strong> — les murs blancs virent au jaunâtre (surtout au-dessus des radiateurs et en cuisine), les couleurs perdent leur éclat après 8-10 ans.</span></li>
            <li><span className="checklist-icon">3</span><span><strong>Moisissures et taches noires</strong> — dans les angles mur-plafond, en salle de bain, en cuisine — signe d&apos;humidité et de mauvaise ventilation. Traitement fongicide nécessaire avant peinture.</span></li>
            <li><span className="checklist-icon">4</span><span><strong>Traces indélébiles et impacts</strong> — marques de doigts, de meubles, éraflures, taches de gras qui ne partent plus au nettoyage. Un simple rafraîchissement fait toute la différence.</span></li>
            <li><span className="checklist-icon">5</span><span><strong>Fissures dans l&apos;enduit</strong> — micro-fissures en toile d&apos;araignée, fissures aux jonctions Gyproc, enduit qui s&apos;effrite. À traiter avant que les dégâts ne s&apos;aggravent.</span></li>
          </ul>
          <div className="mt-4">
            <Link href="/devis/" className="btn btn-urgence">🔴 Problème de peinture à {commune.name} ? Devis urgent</Link>
          </div>
        </div>
      </section>

      <div className="brush-separator" />

      {/* ====== PREPARATION CHECKLIST ====== */}
      <section className="section-alt">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="article-prose">
            <h2>Préparation avant peinture — Les étapes essentielles à {commune.name}</h2>
            <p>La préparation représente 80% du résultat final. Voici les étapes qu&apos;un peintre professionnel doit réaliser à {commune.name} :</p>
            <div style={{ overflowX: 'auto' }}>
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Étape</th>
                    <th>Détail</th>
                    <th>Coût indicatif</th>
                  </tr>
                </thead>
                <tbody>
                  {prepChecklist.map((step, i) => (
                    <tr key={i}>
                      <td><strong>{i + 1}. {step.step}</strong></td>
                      <td>{step.detail}</td>
                      <td>{step.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <div className="brush-separator" />

      {/* ====== PROJECT EXAMPLES ====== */}
      <section className="section">
        <div className="container">
          <h2>Exemples de projets de peinture à {commune.name}</h2>
          <p className="text-muted mb-3">Budget réaliste pour les projets les plus fréquents en {commune.province_name} :</p>
          <div className="card-grid-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
            {projects.map((proj, i) => (
              <div className="card" key={i}>
                <span className="card-icon">{proj.icon}</span>
                <div className="card-title">{proj.title}</div>
                <div className="card-subtitle">{proj.desc}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--primary)' }}>{proj.budget}</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>⏱ {proj.duree}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="brush-separator" />

      {/* ====== BRAND RECOMMENDATIONS ====== */}
      <section className="section-alt">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="article-prose">
            <h2>Peintures recommandées par les peintres à {commune.name}</h2>
            <p>Les marques et produits les plus utilisés par les peintres professionnels en {commune.province_name} :</p>
            <div style={{ overflowX: 'auto' }}>
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Pour</th>
                    <th>Marque &amp; produit</th>
                    <th>Prix</th>
                    <th>Notre avis</th>
                  </tr>
                </thead>
                <tbody>
                  {brands.map((b, i) => (
                    <tr key={i}>
                      <td><strong>{b.project}</strong></td>
                      <td>{b.brand} — {b.product}</td>
                      <td><span className="price-highlight">{b.price}</span></td>
                      <td style={{ fontSize: '0.85rem' }}>{b.tip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <div className="brush-separator" />

      {/* ====== CLIMATE SECTION ====== */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="article-prose">
            <h2>{climate.title}</h2>
            <p>{climate.content}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', margin: '1.5rem 0' }}>
              <div className="card" style={{ textAlign: 'center' }}>
                <span className="card-icon">🌧️</span>
                <div className="card-title">Pluviométrie</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary)' }}>{climate.pluviometrie}</div>
              </div>
              <div className="card" style={{ textAlign: 'center' }}>
                <span className="card-icon">💧</span>
                <div className="card-title">Humidité relative</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary)' }}>{climate.humidity}</div>
              </div>
            </div>
            <div className="article-callout callout-warning">
              <div className="article-callout-icon">⚠️</div>
              <div className="article-callout-content">
                <strong>Conseil saisonnier pour {commune.name}</strong>
                <p>{climate.season}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="brush-separator" />

      {/* ====== SEASONAL CALENDAR ====== */}
      <section className="section-alt">
        <div className="container">
          <h2>📅 Calendrier de peinture à {commune.name} — Quand peindre ?</h2>
          <div style={{ overflowX: 'auto' }}>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Période</th>
                  <th>Intérieur</th>
                  <th>Extérieur</th>
                  <th>💡 Conseil</th>
                </tr>
              </thead>
              <tbody>
                {seasonCalendar.map((row, i) => (
                  <tr key={i}>
                    <td><strong>{row.months}</strong></td>
                    <td>{row.interieur}</td>
                    <td>{row.exterieur}</td>
                    <td style={{ fontSize: '0.85rem' }}>{row.tip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="brush-separator" />

      {/* ====== LOCAL TIP ====== */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="article-prose">
            <h2>💡 Conseil pratique pour votre peinture à {commune.name}</h2>
            <p>{localTip}</p>
            <p>{climate.tip}</p>
          </div>
        </div>
      </section>

      <div className="brush-separator" />

      {/* ====== REGION CONTEXT ====== */}
      <section className="section-alt">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="article-prose">
            <h2>{regionCtx.title}</h2>
            <p>{regionCtx.content}</p>
          </div>
        </div>
      </section>

      <div className="brush-separator" />

      {/* ====== LEAD FORM ====== */}
      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 className="section-title">Devis gratuit — Peintres à {commune.name} ({commune.zip})</h2>
          <p className="text-muted" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            Comparez les prix de <strong>3 peintres professionnels en {commune.province_name}</strong>. Service 100% gratuit, sans engagement. Réponse sous 48h.
          </p>
          <LeadForm variant="compact" defaultCodePostal={commune.zip} defaultCommune={commune.name} />
        </div>
      </section>

      <div className="brush-separator" />

      {/* ====== FAQ ====== */}
      <section className="section-alt">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title">Questions fréquentes — Peinture à {commune.name} ({commune.zip})</h2>
          <FAQ items={localFAQ} />
        </div>
      </section>

      <div className="brush-separator" />

      {/* ====== NEARBY COMMUNES ====== */}
      <section className="section">
        <div className="container">
          <h2>Peintres près de {commune.name}</h2>
          <p className="text-muted mb-3">Trouvez un peintre dans les communes voisines de {commune.name} :</p>
          <div className="card-grid-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
            {nearby.map(n => (
              <Link key={n.slug} href={`/peintre/${n.slug}/`} className="related-guide-card" style={{ borderLeftColor: 'var(--primary-dark)' }}>
                <div className="rg-title">{n.name}</div>
                <div className="rg-desc">{n.zip} — {n.province_name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CROSS-SITE LINKS ====== */}
      <section className="section-alt">
        <div className="container">
          <h2>Autres travaux à {commune.name}</h2>
          <p className="text-muted mb-3">Comparez aussi les prix pour d&apos;autres travaux de rénovation :</p>
          <div className="card-grid-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
            {crossLinks.map((link, i) => (
              <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="related-guide-card" style={{ borderLeftColor: 'var(--secondary)' }}>
                <div className="rg-title">{link.icon} {link.label}</div>
                <div className="rg-desc">{link.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ====== GUIDE LINKS ====== */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <GuideLinks currentPath={`/peintre/${slug}`} title="Nos guides complets — Peinture en Belgique" />
        </div>
      </section>

      {/* ====== SCHEMA.ORG ====== */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": localFAQ.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })),
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        "name": `Peintre à ${commune.name}`,
        "description": `Service de peinture intérieure et extérieure à ${commune.name} (${commune.zip}), ${commune.province_name}. Peinture murs, plafonds, boiseries, façade. Devis gratuit.`,
        "areaServed": { "@type": "City", "name": commune.name, "postalCode": commune.zip, "addressRegion": commune.province_name, "addressCountry": "BE" },
        "provider": { "@type": "Organization", "name": "Prix Peinture Belgique", "url": "https://prix-peinture-belgique.be" },
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": priceRange.min,
          "highPrice": priceRange.max,
          "priceCurrency": "EUR",
          "unitText": "per m²",
        },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://prix-peinture-belgique.be/" },
          { "@type": "ListItem", "position": 2, "name": "Peintres par commune", "item": "https://prix-peinture-belgique.be/peintre/" },
          { "@type": "ListItem", "position": 3, "name": `Peintre à ${commune.name} (${commune.zip})`, "item": `https://prix-peinture-belgique.be/peintre/${slug}/` },
        ],
      }) }} />
    </>
  );
}
