import Link from 'next/link';

// ============================================
// GUIDE CONTENT SYSTEM
// Each guide exports a full JSX article body
// ============================================

export interface GuideContent {
  heroImage: string;
  heroAlt: string;
  updatedDate: string;
  readTime: string;
  body: React.ReactNode;
}

const CTA = ({ text }: { text?: string }) => (
  <div style={{ textAlign: 'center', margin: '2.5rem 0' }}>
    <Link href="/devis/" className="btn btn-primary btn-lg">🎨 {text || 'Comparez les Prix — Devis Gratuit'}</Link>
  </div>
);

const InternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}>{children}</Link>
);

// ============================================
// 1. PRIX PEINTRE BELGIQUE
// ============================================
const prixPeintreBelgique: GuideContent = {
  heroImage: '/images/hero-peinture-interieure.png',
  heroAlt: 'Peintre professionnelle appliquant de la peinture vert sauge sur un mur intérieur dans un appartement belge',
  updatedDate: '2026-04-15',
  readTime: '12 min',
  body: (
    <>
      <p><strong>Combien coûte un peintre en Belgique en 2026 ?</strong> C&apos;est la question #1 de tout propriétaire qui envisage des travaux de peinture. Le prix dépend de nombreux facteurs : type de travaux, état des murs, région, et qualité des finitions souhaitées. Ce guide complet vous donne tous les tarifs actuels — au m², à l&apos;heure, et par projet — pour chaque région de Belgique.</p>

      <div className="article-callout callout-tip">
        <div className="article-callout-icon">💡</div>
        <div className="article-callout-content">
          <strong>En résumé</strong>
          <p>Peinture intérieure : <strong>15 à 40€/m²</strong> | Plafonds : <strong>20 à 35€/m²</strong> | Laquage portes : <strong>30 à 55€/porte</strong> | Façade : <strong>15 à 40€/m²</strong>. TVA 6% pour les logements de 10+ ans.</p>
        </div>
      </div>

      <h2>Prix peinture intérieure au m² — Belgique 2026</h2>
      <p>Le prix de la <InternalLink href="/peinture-interieure/">peinture intérieure</InternalLink> en Belgique varie de <strong>15€ à 40€/m²</strong> (posé, 2 couches, préparation standard incluse). Ce tarif comprend la main-d&apos;œuvre, la peinture de qualité professionnelle (Levis, Sikkens, Sigma), la sous-couche si nécessaire, et la protection des sols/meubles.</p>

      <table className="comparison-table">
        <thead><tr><th>Type de peinture intérieure</th><th>Prix posé (m²)</th><th>Finition</th><th>Durée de vie</th></tr></thead>
        <tbody>
          <tr><td><strong>🎨 Murs — peinture standard (mat/satin)</strong></td><td>15€ – 25€</td><td>Mat velouté ou satin</td><td>8-10 ans</td></tr>
          <tr><td><strong>✨ Murs — peinture premium</strong></td><td>25€ – 40€</td><td>Mat profond, couleurs intenses</td><td>10-12 ans</td></tr>
          <tr><td><strong>⬜ Plafonds (blanc mat)</strong></td><td>20€ – 35€</td><td>Extra mat, anti-traces</td><td>10-15 ans</td></tr>
          <tr><td><strong>🚿 Pièces d&apos;eau (satin lavable)</strong></td><td>20€ – 35€</td><td>Satin, anti-moisissure</td><td>5-7 ans</td></tr>
          <tr><td><strong>🚪 Laquage portes intérieures</strong></td><td>30€ – 55€/porte</td><td>Satin ou brillant</td><td>10-15 ans</td></tr>
          <tr><td><strong>🪟 Laquage châssis fenêtres</strong></td><td>15€ – 30€/ml</td><td>Satin alkyde</td><td>8-12 ans</td></tr>
          <tr><td><strong>🖼️ Papier peint (pose)</strong></td><td>20€ – 45€</td><td>Intissé ou vinyle</td><td>10-15 ans</td></tr>
          <tr><td><strong>🔧 Dépose papier peint + peinture</strong></td><td>25€ – 50€</td><td>—</td><td>—</td></tr>
          <tr><td><strong>🪣 Préparation murs (enduit, ponçage)</strong></td><td>8€ – 20€</td><td>—</td><td>—</td></tr>
          <tr><td><strong>💧 Traitement anti-humidité + peinture</strong></td><td>25€ – 45€</td><td>Fongicide + satin</td><td>5-10 ans</td></tr>
        </tbody>
      </table>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>* Prix TTC indicatifs, hors TVA réduite 6% applicable pour les habitations de 10+ ans. Tarif final sur devis après visite du peintre.</p>

      <h2>Tarif horaire d&apos;un peintre en Belgique</h2>
      <p>Certains peintres facturent à l&apos;heure plutôt qu&apos;au m². Le tarif horaire varie selon la région, l&apos;expérience du peintre et le type d&apos;entreprise :</p>
      <table className="comparison-table">
        <thead><tr><th>Profil</th><th>Tarif horaire (HTVA)</th><th>Zone</th></tr></thead>
        <tbody>
          <tr><td><strong>Peintre indépendant</strong></td><td>25€ – 35€/h</td><td>Wallonie</td></tr>
          <tr><td><strong>Peintre indépendant</strong></td><td>30€ – 40€/h</td><td>Bruxelles</td></tr>
          <tr><td><strong>Peintre indépendant</strong></td><td>30€ – 45€/h</td><td>Flandre</td></tr>
          <tr><td><strong>Entreprise de peinture (PME)</strong></td><td>35€ – 50€/h</td><td>Belgique</td></tr>
        </tbody>
      </table>

      <div className="article-callout callout-warning">
        <div className="article-callout-icon">⚠️</div>
        <div className="article-callout-content">
          <strong>Attention aux devis au forfait sans détail</strong>
          <p>Un devis sérieux détaille : le nombre de m² par pièce, le nombre de couches, la marque de peinture, la préparation incluse, et les délais. Fuyez les devis &quot;forfait global&quot; sans détail — ils cachent souvent des économies sur la préparation ou la qualité de la peinture.</p>
        </div>
      </div>

      <h2>Budget peinture par type de projet</h2>
      <p>Pour vous aider à estimer le budget total de votre projet, voici les fourchettes de prix constatées en Belgique pour les projets les plus courants :</p>
      <table className="comparison-table">
        <thead><tr><th>Projet</th><th>Budget TTC</th><th>Durée</th></tr></thead>
        <tbody>
          <tr><td><strong>🛏️ 1 chambre (12-15 m²)</strong></td><td>350€ – 700€</td><td>1-2 jours</td></tr>
          <tr><td><strong>🍳 Cuisine complète</strong></td><td>800€ – 1 500€</td><td>2-3 jours</td></tr>
          <tr><td><strong>🛋️ Séjour 30-40 m²</strong></td><td>1 200€ – 2 500€</td><td>3-4 jours</td></tr>
          <tr><td><strong>🏢 Appartement 80 m²</strong></td><td>2 500€ – 5 500€</td><td>5-8 jours</td></tr>
          <tr><td><strong>🏠 Maison complète 150 m²</strong></td><td>5 000€ – 12 000€</td><td>10-18 jours</td></tr>
          <tr><td><strong>🪜 Cage d&apos;escalier + mains courantes</strong></td><td>1 200€ – 2 500€</td><td>3-5 jours</td></tr>
        </tbody>
      </table>

      <CTA text="Estimez votre projet — Devis gratuit en 1 minute" />

      <h2>Prix par région : Wallonie, Bruxelles, Flandre</h2>
      <p>Les tarifs de peinture varient sensiblement d&apos;une région à l&apos;autre en Belgique. Bruxelles est la zone la plus chère (coût de la vie, stationnement, copropriétés), tandis que la Wallonie offre les meilleurs rapports qualité/prix :</p>
      <table className="comparison-table">
        <thead><tr><th>Région</th><th>Murs intérieur (m²)</th><th>Plafonds (m²)</th><th>Portes (unité)</th></tr></thead>
        <tbody>
          <tr><td><strong>🏛️ Bruxelles-Capitale</strong></td><td>20€ – 40€</td><td>25€ – 40€</td><td>35€ – 65€</td></tr>
          <tr><td><strong>🏔️ Wallonie</strong></td><td>15€ – 30€</td><td>18€ – 32€</td><td>28€ – 50€</td></tr>
          <tr><td><strong>🌊 Flandre</strong></td><td>18€ – 35€</td><td>22€ – 38€</td><td>32€ – 58€</td></tr>
        </tbody>
      </table>
      <p>Pour connaître les prix exacts dans votre commune, consultez nos <InternalLink href="/peintre/">pages locales par commune</InternalLink>. Chaque page affiche les tarifs ajustés selon votre province.</p>

      <h2>Facteurs qui influencent le prix</h2>
      <p>Le prix final dépend de 6 facteurs principaux :</p>
      <ul>
        <li><strong>État des murs</strong> — Un mur en bon état (simple rafraîchissement) coûte 15-20€/m². Un mur abîmé nécessitant un <InternalLink href="/preparation-murs/">ratissage complet</InternalLink> peut atteindre 35-45€/m².</li>
        <li><strong>Hauteur de plafond</strong> — Les hauts plafonds bruxellois (3-4m) nécessitent un échafaudage intérieur (+20-30% sur le prix).</li>
        <li><strong>Qualité de la peinture</strong> — La peinture représente 15-20% du budget. Un pot de Levis Ambiance (premium) coûte 50-60€/10L vs 30-35€ pour une entrée de gamme.</li>
        <li><strong>Nombre de couches</strong> — 2 couches sont le standard. Un changement de couleur radical (foncé → clair) peut nécessiter 3 couches (+30% de peinture et de temps).</li>
        <li><strong>Accessibilité</strong> — Cage d&apos;escalier, combles, mezzanine : tout travail en hauteur ou en position inconfortable augmente le tarif.</li>
        <li><strong>Saison</strong> — En basse saison (novembre-février), négociez une remise de 10-15% sur la main-d&apos;œuvre.</li>
      </ul>

      <h2>TVA 6% vs 21% — Comment économiser 750€</h2>
      <p>En Belgique, la TVA sur les travaux de peinture est de <strong>6%</strong> si votre habitation a plus de 10 ans (calculé à partir du certificat de première occupation). Le taux réduit s&apos;applique à la main-d&apos;œuvre ET aux matériaux fournis par le peintre.</p>
      <div className="article-callout callout-tip">
        <div className="article-callout-icon">💰</div>
        <div className="article-callout-content">
          <strong>Astuce : demandez toujours au peintre de fournir la peinture</strong>
          <p>Si vous achetez la peinture vous-même (en grande surface), vous payez 21% de TVA dessus ET perdez le taux réduit. Si le peintre la fournit, toute la facture (main-d&apos;œuvre + peinture) bénéficie du 6%. Sur un chantier de 5 000€, la différence est de <strong>750€</strong>.</p>
        </div>
      </div>

      <h2>Comment choisir un bon peintre en Belgique</h2>
      <p>La méthode en 4 étapes pour trouver un peintre fiable :</p>
      <ol>
        <li><strong>Demandez 3 devis minimum</strong> — Ne signez jamais le premier devis. Comparez au moins 3 offres détaillées pour le même cahier des charges.</li>
        <li><strong>Vérifiez les papiers</strong> — Inscription active à la BCE (Banque Carrefour des Entreprises), assurance RC professionnelle, garantie décennale.</li>
        <li><strong>Exigez un devis détaillé</strong> — m² par pièce, nombre de couches, marque de peinture, préparation incluse, délais précis, conditions de paiement.</li>
        <li><strong>Demandez des références</strong> — Photos de chantiers récents, contacts de clients. Un bon peintre visite TOUJOURS le chantier avant de devisier.</li>
      </ol>

      <CTA text="Recevez 3 devis gratuits — Peintres certifiés" />

      <h2>Les meilleures marques de peinture en Belgique</h2>
      <p>Les peintres professionnels belges utilisent principalement 4 marques :</p>
      <table className="comparison-table">
        <thead><tr><th>Marque</th><th>Gamme phare</th><th>Prix /10L</th><th>Point fort</th></tr></thead>
        <tbody>
          <tr><td><strong>Levis</strong> (AkzoNobel)</td><td>Ambiance Mur Extra Mat</td><td>45-55€</td><td>Velouté, haute opacité, N°1 en Belgique</td></tr>
          <tr><td><strong>Sikkens</strong> (AkzoNobel)</td><td>Alpha BL Mat</td><td>50-65€</td><td>Qualité supérieure, 1 500 teintes NCS</td></tr>
          <tr><td><strong>Sigma</strong> (PPG)</td><td>S2U Nova Satin</td><td>55-70€</td><td>Satin ultra-résistant, excellent en pièces d&apos;eau</td></tr>
          <tr><td><strong>Trimetal</strong> (AkzoNobel)</td><td>Magnacryl Prestige</td><td>40-50€</td><td>Bon rapport qualité/prix professionnel</td></tr>
        </tbody>
      </table>

      <h2>Peinture intérieure vs extérieure : quelle différence de prix ?</h2>
      <p>La <InternalLink href="/peinture-exterieure/">peinture extérieure</InternalLink> (façade) coûte en moyenne le même prix au m² que l&apos;intérieur (15-40€/m²), mais les projets sont souvent plus chers car ils nécessitent un échafaudage (500-1 500€ de location), un nettoyage haute pression préalable, et une peinture spécifique (siloxane, pliolite) plus coûteuse. Budget moyen pour une façade complète : <strong>3 000€ à 8 000€</strong>.</p>

      <h2>Quand peindre ? Le calendrier idéal</h2>
      <p><strong>Intérieur</strong> : toute l&apos;année, mais idéalement d&apos;avril à octobre (aération facile). <strong>Extérieur</strong> : mai à septembre uniquement (température &gt; 10°C, pas de pluie). <strong>Meilleur moment pour les prix</strong> : novembre à février (basse saison, -10-15% sur la main-d&apos;œuvre).</p>

      <p>Pour obtenir des prix précis pour votre projet, <InternalLink href="/devis/">demandez vos devis gratuits</InternalLink> en précisant le type de travaux, la surface et l&apos;état de vos murs. Vous recevrez jusqu&apos;à 3 offres de peintres professionnels dans votre commune sous 48h.</p>
    </>
  ),
};

// ============================================
// 2. PEINTURE INTÉRIEURE GUIDE
// ============================================
const peintureInterieureGuide: GuideContent = {
  heroImage: '/images/hero-peinture-interieure.png',
  heroAlt: 'Peintre appliquant de la peinture vert sauge sur un mur de séjour dans un intérieur belge avec moulures',
  updatedDate: '2026-04-15',
  readTime: '15 min',
  body: (
    <>
      <p>La <strong>peinture intérieure</strong> est le projet de rénovation le plus courant et le plus rentable en Belgique. Un rafraîchissement complet peut transformer votre intérieur pour un budget modéré — et augmenter la valeur de votre bien de 3 à 5%. Ce guide expert couvre tout : choix des couleurs, types de finitions, marques professionnelles, techniques de pro, et prix détaillés au m².</p>

      <div className="article-callout callout-info">
        <div className="article-callout-icon">📊</div>
        <div className="article-callout-content">
          <strong>Chiffres clés 2026</strong>
          <p>Prix moyen : <strong>15-25€/m²</strong> (standard) | <strong>25-40€/m²</strong> (premium) | Durée de vie : 8-12 ans | TVA : 6% (logements 10+ ans)</p>
        </div>
      </div>

      <h2>Quelle finition choisir ? Mat, satin ou brillant</h2>
      <p>Le choix de la finition est la décision la plus importante pour le résultat esthétique et la durabilité de votre peinture. Voici le guide complet :</p>

      <h3>Mat velouté — Séjour, salon, chambres</h3>
      <p>La finition la plus populaire en Belgique (62% des projets). Le mat velouté absorbe la lumière et crée une ambiance chaleureuse et sophistiquée. Il masque remarquablement les imperfections du mur (micro-fissures, irrégularités). <strong>Inconvénient</strong> : il n&apos;est PAS lavable — un frottement laisse une marque brillante. Réservé aux pièces sèches, à faible passage.</p>
      <p><strong>Produits recommandés</strong> : Levis Ambiance Mur Extra Mat, Sikkens Alpha BL Mat, Sigma Superlatex Mat.</p>

      <h3>Satin — Cuisine, salle de bain, couloir</h3>
      <p>Le satin offre un léger reflet lustré et une excellente résistance au lavage (10 000+ cycles). Idéal pour les pièces à fort passage (couloir, entrée), les pièces humides (cuisine, salle de bain), et les chambres d&apos;enfants. Lavable au chiffon humide avec un produit ménager doux.</p>
      <p><strong>Produits recommandés</strong> : Levis Expert Satin, Sigma S2U Nova Satin, Sikkens Alpha BL Satin.</p>

      <h3>Brillant (laque) — Portes, plinthes, châssis</h3>
      <p>Le brillant est exclusivement utilisé pour les <InternalLink href="/boiseries-portes/">boiseries, portes et plinthes</InternalLink>. Ultra-résistant aux chocs, aux rayures et au lavage. La laque à l&apos;eau (acrylique/alkyde) a remplacé la laque au solvant : même dureté, séchage rapide, quasi sans odeur.</p>
      <p><strong>Produits recommandés</strong> : Sikkens Rubbol BL Satin, Trimetal Permalux NT Satin, Sigma S2U Satin.</p>

      <CTA text="Devis peinture intérieure — Gratuit et sans engagement" />

      <h2>Couleurs tendance 2026 en Belgique</h2>
      <p>Les couleurs les plus demandées par les Belges en 2026 :</p>
      <ul>
        <li><strong>Blanc chaud (RAL 9010, NCS S 0502-Y)</strong> — Indémodable, lumineux, agrandit l&apos;espace. 58% des projets.</li>
        <li><strong>Vert sauge (Sage Green)</strong> — La star 2026. Naturel, apaisant, élégant. Parfait en mur d&apos;accent dans un séjour ou une chambre.</li>
        <li><strong>Greige (gris + beige)</strong> — Neutre et chaud, remplace le gris froid des années précédentes. Idéal pour les pièces à vivre.</li>
        <li><strong>Terracotta / Warm Cognac</strong> — Couleurs chaudes et enveloppantes pour créer un effet cocooning. En mur d&apos;accent ou dans une chambre.</li>
        <li><strong>Bleu nuit (Deep Navy)</strong> — Dramatique et sophistiqué. Un seul mur dans un séjour avec un éclairage travaillé.</li>
      </ul>

      <div className="article-callout callout-tip">
        <div className="article-callout-icon">🎨</div>
        <div className="article-callout-content">
          <strong>Conseil couleur de pro</strong>
          <p>Testez TOUJOURS la couleur en conditions réelles : achetez un échantillon (testeur 0,5L, ~5€) et peignez un carré d&apos;1 m² sur le mur. Observez-le à différentes heures (matin, midi, soir avec lumière artificielle). Une couleur peut paraître radicalement différente selon l&apos;éclairage.</p>
        </div>
      </div>

      <h2>Préparation des murs — 80% du résultat</h2>
      <p>Un bon peintre consacre 2 jours de <InternalLink href="/preparation-murs/">préparation</InternalLink> pour 1 jour de finition. La préparation comprend :</p>
      <ol>
        <li><strong>Diagnostic</strong> — Mesure d&apos;humidité, test d&apos;adhérence sur l&apos;ancienne peinture, identification des fissures et défauts.</li>
        <li><strong>Dépose</strong> — Retrait du <InternalLink href="/papier-peint/">papier peint</InternalLink> si présent (décolleuse vapeur). Coût : 8-15€/m² en supplément.</li>
        <li><strong>Rebouchage</strong> — Enduit de rebouchage pour fissures et trous. Enduit de lissage pour les murs très irréguliers.</li>
        <li><strong>Ponçage</strong> — Papier abrasif grain 120-150 sur toute la surface. Dépoussiérage soigneux.</li>
        <li><strong>Sous-couche</strong> — Primer fixant sur les murs neufs, farineux ou tachés. Améliore l&apos;adhérence de 50%.</li>
      </ol>

      <h2>Peinture acrylique vs alkyde — Laquelle choisir ?</h2>
      <table className="comparison-table">
        <thead><tr><th>Critère</th><th>Acrylique (latex)</th><th>Alkyde (laque à l&apos;eau)</th></tr></thead>
        <tbody>
          <tr><td><strong>Utilisation</strong></td><td>Murs et plafonds</td><td>Portes, plinthes, châssis</td></tr>
          <tr><td><strong>Séchage</strong></td><td>1-2 heures</td><td>4-6 heures</td></tr>
          <tr><td><strong>Odeur</strong></td><td>Quasi nulle</td><td>Légère</td></tr>
          <tr><td><strong>Nettoyage outils</strong></td><td>À l&apos;eau</td><td>À l&apos;eau</td></tr>
          <tr><td><strong>Résistance</strong></td><td>Bonne (satin) à faible (mat)</td><td>Excellente</td></tr>
          <tr><td><strong>Part de marché en BE</strong></td><td>92%</td><td>8%</td></tr>
        </tbody>
      </table>

      <h2>Combien de peinture faut-il acheter ?</h2>
      <p>Calcul simple pour estimer la quantité de peinture :</p>
      <ul>
        <li><strong>Rendement moyen</strong> : 1 litre couvre 10-12 m² en 1 couche (sur mur préparé).</li>
        <li><strong>Formule</strong> : (Surface en m² × 2 couches) ÷ 10 = litres nécessaires.</li>
        <li><strong>Exemple</strong> : Chambre de 12 m² au sol → ~40 m² de murs + 12 m² de plafond = 52 m² → 52 × 2 ÷ 10 = <strong>10,4 litres</strong> = 1 pot de 10L + 1 testeur.</li>
      </ul>
      <p><strong>Ajoutez toujours 10-15% de marge</strong> pour les pertes, les retouches et les angles.</p>

      <CTA />

      <h2>Prix peinture intérieure par province</h2>
      <p>Consultez les prix détaillés dans votre ville :</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.5rem', margin: '1rem 0' }}>
        <Link href="/peintre/bruxelles-1000/" className="related-guide-card" style={{ borderLeftColor: 'var(--primary)' }}><div className="rg-title">Bruxelles (1000)</div><div className="rg-desc">20-40€/m²</div></Link>
        <Link href="/peintre/liege-4000/" className="related-guide-card" style={{ borderLeftColor: 'var(--primary)' }}><div className="rg-title">Liège (4000)</div><div className="rg-desc">15-30€/m²</div></Link>
        <Link href="/peintre/namur-5000/" className="related-guide-card" style={{ borderLeftColor: 'var(--primary)' }}><div className="rg-title">Namur (5000)</div><div className="rg-desc">15-30€/m²</div></Link>
        <Link href="/peintre/charleroi-6000/" className="related-guide-card" style={{ borderLeftColor: 'var(--primary)' }}><div className="rg-title">Charleroi (6000)</div><div className="rg-desc">14-27€/m²</div></Link>
        <Link href="/peintre/mons-7000/" className="related-guide-card" style={{ borderLeftColor: 'var(--primary)' }}><div className="rg-title">Mons (7000)</div><div className="rg-desc">14-27€/m²</div></Link>
        <Link href="/peintre/wavre-1300/" className="related-guide-card" style={{ borderLeftColor: 'var(--primary)' }}><div className="rg-title">Wavre (1300)</div><div className="rg-desc">17-33€/m²</div></Link>
      </div>
      <p><InternalLink href="/peintre/">→ Voir toutes les 556 communes</InternalLink></p>
    </>
  ),
};

// ============================================
// 3. PEINTURE EXTÉRIEURE FACADE GUIDE
// ============================================
const peintureExterieureFacadeGuide: GuideContent = {
  heroImage: '/images/hero-peinture-exterieure.png',
  heroAlt: 'Peintre sur échafaudage peignant la façade d\'une maison de maître belge traditionnelle',
  updatedDate: '2026-04-15',
  readTime: '14 min',
  body: (
    <>
      <p>La <strong>peinture de façade</strong> protège votre maison des intempéries et valorise votre bien immobilier. En Belgique, le climat humide (800-1 400 mm de pluie/an) impose des peintures extérieures haute performance. Ce guide couvre tout : types de peinture, préparation de la façade, prix au m², et conseils saisonniers.</p>

      <div className="article-callout callout-tip">
        <div className="article-callout-icon">💡</div>
        <div className="article-callout-content">
          <strong>En résumé</strong>
          <p>Peinture façade : <strong>15 à 40€/m² posé</strong> | Budget maison complète : <strong>3 000 à 8 000€</strong> | Durée de vie : 8-15 ans selon le type | Meilleure période : mai à septembre</p>
        </div>
      </div>

      <h2>Types de peinture extérieure — Comparatif</h2>
      <table className="comparison-table">
        <thead><tr><th>Type</th><th>Prix /m²</th><th>Durée de vie</th><th>Idéal pour</th></tr></thead>
        <tbody>
          <tr><td><strong>Siloxane</strong></td><td>3-6€/L</td><td>12-15 ans</td><td>Briques, enduits. La meilleure pour le climat belge. Hydrophobe + respirante.</td></tr>
          <tr><td><strong>Acrylique épaisse</strong></td><td>2-4€/L</td><td>8-10 ans</td><td>Enduits lisses, béton. Bon rapport qualité/prix. Masque les micro-fissures.</td></tr>
          <tr><td><strong>Pliolite</strong></td><td>3-5€/L</td><td>8-10 ans</td><td>Façades poudreuses, anciens crépis. Excellente pénétration.</td></tr>
          <tr><td><strong>Silicate de potassium</strong></td><td>5-8€/L</td><td>15-20 ans</td><td>Patrimoine, murs en pierre. Minérale, respirante. La plus durable.</td></tr>
          <tr><td><strong>Chaux</strong></td><td>3-5€/L</td><td>5-8 ans</td><td>Patrimoine classé, murs anciens. Traditionnelle, respirante.</td></tr>
        </tbody>
      </table>

      <h2>Quand repeindre sa façade ? Les 5 signes</h2>
      <ol>
        <li><strong>Farinage</strong> — En passant la main sur le mur, une poudre blanche reste sur les doigts. La peinture se dégrade.</li>
        <li><strong>Micro-fissures</strong> — Réseau de petites fissures en surface. L&apos;eau s&apos;infiltre et les dégâts s&apos;aggravent chaque hiver.</li>
        <li><strong>Décollement</strong> — La peinture cloque et se décolle par plaques. Problème d&apos;humidité ou de mauvaise adhérence.</li>
        <li><strong>Mousse et algues</strong> — Traces verdâtres, surtout sur les façades nord. Nettoyage haute pression + traitement fongicide nécessaires.</li>
        <li><strong>Couleur passée</strong> — La façade a perdu son éclat, les couleurs sont ternes. L&apos;UV dégrade la peinture en 8-12 ans.</li>
      </ol>

      <h2>Étapes d&apos;une peinture de façade professionnelle</h2>
      <ol>
        <li><strong>Diagnostic et devis</strong> — Le peintre examine la façade, identifie les problèmes (fissures, humidité, mousse) et établit un devis détaillé.</li>
        <li><strong>Nettoyage haute pression</strong> — Karcher professionnel (150-200 bars) pour retirer mousse, poussière et ancienne peinture friable. Séchage 48h minimum.</li>
        <li><strong>Réparation</strong> — Rebouchage des fissures au mastic acrylique ou à l&apos;enduit de façade. Remplacement des joints dégradés.</li>
        <li><strong>Traitement fongicide</strong> — Application d&apos;un anti-mousse professionnel. Temps d&apos;action : 24-48h.</li>
        <li><strong>Sous-couche / fixateur</strong> — Primaire d&apos;accrochage adapté au support (fixateur pour façade poudreuse, primaire pour béton lisse).</li>
        <li><strong>2 couches de finition</strong> — Application au rouleau façade (poils longs 18-25 mm) ou à l&apos;airless (pistolet à peinture) pour les grandes surfaces.</li>
      </ol>

      <div className="article-callout callout-warning">
        <div className="article-callout-icon">🌡️</div>
        <div className="article-callout-content">
          <strong>Conditions météo obligatoires</strong>
          <p>Température entre 10°C et 30°C, humidité relative &lt; 80%, pas de pluie prévue dans les 24h, pas de vent fort (&gt; 30 km/h), pas de gel nocturne. En Belgique, la fenêtre idéale est <strong>mai à septembre</strong>.</p>
        </div>
      </div>

      <CTA text="Devis peinture façade — Comparez 3 peintres" />

      <h2>Budget peinture façade en Belgique</h2>
      <table className="comparison-table">
        <thead><tr><th>Type de maison</th><th>Surface façade</th><th>Budget tout compris</th></tr></thead>
        <tbody>
          <tr><td><strong>Maison mitoyenne (2 façades)</strong></td><td>60-100 m²</td><td>2 000€ – 4 500€</td></tr>
          <tr><td><strong>Maison 3 façades</strong></td><td>100-150 m²</td><td>3 500€ – 6 500€</td></tr>
          <tr><td><strong>Maison 4 façades</strong></td><td>150-250 m²</td><td>5 000€ – 10 000€</td></tr>
          <tr><td><strong>Villa</strong></td><td>250-400 m²</td><td>8 000€ – 16 000€</td></tr>
        </tbody>
      </table>
      <p>Ces budgets incluent : échafaudage, nettoyage, préparation, 2 couches de peinture siloxane, et nettoyage du chantier. L&apos;échafaudage représente 15-25% du budget total.</p>

      <p>Pour la rénovation complète de votre façade (crépi, enduit, peinture), consultez aussi notre partenaire <a href="https://prix-facade.be/" target="_blank" rel="noopener noreferrer">Prix Facade Belgique</a>.</p>

      <CTA />
    </>
  ),
};

// ============================================
// 4. PEINTURE PLAFOND GUIDE
// ============================================
const peinturePlafondGuide: GuideContent = {
  heroImage: '/images/hero-peinture-plafond.png',
  heroAlt: 'Peintre professionnel peignant un plafond blanc avec un rouleau à manche télescopique',
  updatedDate: '2026-04-15',
  readTime: '10 min',
  body: (
    <>
      <p>Peindre un <strong>plafond</strong> est l&apos;un des travaux de peinture les plus techniques : position inconfortable, risque de coulures, lumière rasante impitoyable qui révèle le moindre défaut. C&apos;est pourquoi faire appel à un peintre professionnel est souvent le meilleur choix. Ce guide vous explique tout sur les techniques, les produits adaptés et les prix.</p>

      <div className="article-callout callout-info">
        <div className="article-callout-icon">📊</div>
        <div className="article-callout-content">
          <strong>Prix plafond 2026</strong>
          <p>Peinture plafond blanc mat : <strong>20 à 35€/m²</strong> posé | Plafond avec moulures : <strong>30 à 50€/m²</strong> | Durée de vie : 10-15 ans</p>
        </div>
      </div>

      <h2>Pourquoi le plafond coûte plus cher que les murs ?</h2>
      <p>Les peintres facturent 25-40% de plus pour les <InternalLink href="/peinture-plafond/">plafonds</InternalLink> que pour les murs, et ce pour de bonnes raisons :</p>
      <ul>
        <li><strong>Posture de travail</strong> — Travailler bras tendus au-dessus de la tête est épuisant. La productivité baisse de 30-40%.</li>
        <li><strong>Risque de coulures</strong> — La gravité travaille contre le peintre. Chaque passe doit être parfaitement dosée.</li>
        <li><strong>Technique de croisement</strong> — Les passes doivent être croisées (d&apos;abord dans un sens, puis perpendiculairement) pour éviter les traces visibles.</li>
        <li><strong>Lumière rasante</strong> — La lumière du jour révèle impitoyablement les défauts. La moindre trace, la moindre surcharge est visible.</li>
        <li><strong>Protection</strong> — Le bâchage des sols et meubles est plus critique (les projections tombent par gravité).</li>
      </ul>

      <h2>Quelle peinture pour les plafonds ?</h2>
      <p>Utilisez exclusivement une peinture &quot;spécial plafond&quot; — elle est formulée pour :</p>
      <ul>
        <li><strong>Mat absolu</strong> — Finition extra mate qui masque les imperfections et ne reflète pas la lumière.</li>
        <li><strong>Anti-projections</strong> — Texture plus épaisse qui ne coule pas et ne projette pas au rouleau.</li>
        <li><strong>Séchage rapide</strong> — 1h au lieu de 2h pour une peinture murale standard.</li>
        <li><strong>Haute opacité</strong> — Couvre en 2 couches, même sur un ancien plafond jauni.</li>
      </ul>
      <p><strong>Produits recommandés</strong> : Levis Plafond Extra Mat (le N°1 en Belgique), Sigma Façade Superlatex Mat, Trimetal Magnacryl Plafond.</p>

      <h2>Technique professionnelle — Étape par étape</h2>
      <ol>
        <li><strong>Protection</strong> — Bâchage intégral des sols et meubles. Ruban de masquage sur les murs (5 cm du plafond).</li>
        <li><strong>Ponçage léger</strong> — Papier abrasif grain 120 sur l&apos;ancien plafond. Dépoussiérage.</li>
        <li><strong>Sous-couche</strong> — Si le plafond est taché (nicotine, eau) : sous-couche isolante (Levis Primer, Trimetal Permacryl Fix).</li>
        <li><strong>Première couche</strong> — Au rouleau anti-traces (poils courts 5-6 mm) avec manche télescopique. Passes croisées : d&apos;abord parallèles à la fenêtre, puis perpendiculaires.</li>
        <li><strong>Séchage</strong> — Minimum 4h entre les couches (6h si humidité &gt; 70%).</li>
        <li><strong>Deuxième couche</strong> — Même technique, en finissant TOUJOURS dans le sens de la lumière (perpendiculaire à la fenêtre principale).</li>
      </ol>

      <CTA text="Devis plafond — Comparez les prix" />

      <h2>Cas particuliers</h2>
      <h3>Plafond avec moulures (maisons bruxelloises)</h3>
      <p>Les moulures, corniches et rosettes se peignent au pinceau (spalter plat 5 cm) AVANT les grandes surfaces au rouleau. Comptez +30-50% sur le prix pour les plafonds avec moulures. Si les moulures sont encrassées par des dizaines de couches de peinture, un décapage chimique peut restaurer les détails.</p>

      <h3>Plafond en bois (fermettes, chalets)</h3>
      <p>Les plafonds en lambris ou poutres apparentes se traitent avec une lasure ou un vernis mat, pas une peinture ordinaire. Les <InternalLink href="/boiseries-portes/">boiseries de plafond</InternalLink> nécessitent un ponçage grain 80-120 et une sous-couche spéciale bois.</p>

      <h3>Plafond de salle de bain</h3>
      <p>Utilisez impérativement une peinture satin anti-moisissure (Sigma AMF, Levis Anti-Schimmel). Le mat absorbe l&apos;humidité et favorise les moisissures. Complétez par un extracteur d&apos;air pour une protection optimale.</p>
    </>
  ),
};

// ============================================
// 5. LAQUAGE BOISERIES GUIDE
// ============================================
const laquageBoiseries: GuideContent = {
  heroImage: '/images/hero-laquage-boiseries.png',
  heroAlt: 'Artisan laquant une porte intérieure en blanc satin avec précision',
  updatedDate: '2026-04-15',
  readTime: '11 min',
  body: (
    <>
      <p>Le <strong>laquage de boiseries</strong> — portes, plinthes, châssis, escalier — est le travail de peinture le plus exigeant en termes de savoir-faire. Un laquage professionnel donne un aspect neuf et lisse à vos menuiseries pour 10-15 ans. Ce guide détaille les techniques, produits et prix.</p>

      <div className="article-callout callout-info">
        <div className="article-callout-icon">📊</div>
        <div className="article-callout-content">
          <strong>Prix laquage 2026</strong>
          <p>Porte intérieure : <strong>30 à 55€/porte</strong> | Plinthes : <strong>5 à 10€/ml</strong> | Châssis fenêtre : <strong>15 à 30€/ml</strong> | Escalier complet : <strong>800 à 2 500€</strong></p>
        </div>
      </div>

      <h2>Prix laquage détaillé par élément</h2>
      <table className="comparison-table">
        <thead><tr><th>Élément</th><th>Prix posé</th><th>Couches</th><th>Durée de vie</th></tr></thead>
        <tbody>
          <tr><td><strong>🚪 Porte intérieure (2 faces)</strong></td><td>30€ – 55€</td><td>2-3 couches</td><td>10-15 ans</td></tr>
          <tr><td><strong>📐 Plinthes</strong></td><td>5€ – 10€/ml</td><td>2 couches</td><td>8-12 ans</td></tr>
          <tr><td><strong>🪟 Châssis fenêtre (intérieur)</strong></td><td>15€ – 30€/ml</td><td>2-3 couches</td><td>8-12 ans</td></tr>
          <tr><td><strong>🪜 Escalier complet (main courante + barreaux)</strong></td><td>800€ – 2 500€</td><td>3 couches</td><td>8-10 ans</td></tr>
          <tr><td><strong>🪵 Garde-corps et balustrade</strong></td><td>25€ – 50€/ml</td><td>2-3 couches</td><td>8-12 ans</td></tr>
        </tbody>
      </table>

      <h2>Pourquoi le laquage coûte plus cher que la peinture murale ?</h2>
      <p>Le laquage de boiseries est 2 à 3 fois plus cher au m² que la peinture murale, car :</p>
      <ul>
        <li><strong>Préparation intensive</strong> — Ponçage grain 120, puis 180, puis 220. Chaque couche est poncée avant la suivante.</li>
        <li><strong>3 couches minimum</strong> — Sous-couche + 2 couches de finition (vs 2 couches pour les murs).</li>
        <li><strong>Application au pinceau</strong> — Les moulures, profils et angles se peignent au pinceau (spalter), pas au rouleau. C&apos;est 3x plus lent.</li>
        <li><strong>Exigence de finition</strong> — La laque brillante ou satinée révèle le moindre défaut (coulure, inclusion, trace de pinceau). La tolérance d&apos;erreur est quasi nulle.</li>
      </ul>

      <CTA text="Devis laquage boiseries — Gratuit" />

      <h2>Quelle laque choisir ?</h2>
      <h3>Laque à l&apos;eau (acrylique-alkyde) — Le standard moderne</h3>
      <p>Quasi sans odeur, séchage en 4-6h, nettoyage à l&apos;eau. Durcit complètement en 2-4 semaines. Représente 90% du marché professionnel en 2026.</p>
      <p><strong>Top produits</strong> : Sikkens Rubbol BL Satin (le préféré des pros), Trimetal Permalux NT Satin, Sigma S2U Satin, Levis Expert Lak Satin.</p>

      <h3>Laque au solvant (glycéro) — En voie de disparition</h3>
      <p>Forte odeur, séchage 12-24h, nettoyage au white spirit. Encore utilisée pour les boiseries extérieures très exposées. Sera interdite pour l&apos;intérieur à terme (normes COV européennes).</p>

      <h2>Satin ou brillant ?</h2>
      <p><strong>Satin (semi-mat)</strong> : Le choix moderne et élégant. Masque mieux les petits défauts. 85% des projets de laquage en Belgique.</p>
      <p><strong>Brillant (hoog glans)</strong> : Effet miroir ultra-lisse. Plus difficile à appliquer (chaque défaut est visible). Réservé aux portes d&apos;entrée et aux éléments de prestige. 15% des projets.</p>

      <p>Pour la <InternalLink href="/preparation-murs/">préparation</InternalLink> des boiseries avant laquage, un ponçage soigneux est indispensable. Consultez aussi nos <InternalLink href="/tarif-peintre/">tarifs détaillés par région</InternalLink>.</p>
    </>
  ),
};

// ============================================
// 6. PAPIER PEINT GUIDE
// ============================================
const papierPeintGuide: GuideContent = {
  heroImage: '/images/hero-papier-peint.png',
  heroAlt: 'Décoratrice posant du papier peint géométrique vert et doré dans une chambre belge moderne',
  updatedDate: '2026-04-15',
  readTime: '10 min',
  body: (
    <>
      <p>Le <strong>papier peint</strong> fait un retour spectaculaire en décoration intérieure en 2026. Motifs géométriques, effet tropical, textures lin... les possibilités sont infinies. Ce guide couvre tout : types de papier peint, coût de la pose et de la dépose, et tendances déco actuelles.</p>

      <div className="article-callout callout-info">
        <div className="article-callout-icon">📊</div>
        <div className="article-callout-content">
          <strong>Prix papier peint 2026</strong>
          <p>Pose intissé : <strong>20 à 45€/m²</strong> (fourni posé) | Dépose ancien : <strong>8 à 15€/m²</strong> | Dépose + <InternalLink href="/peinture-interieure/">peinture</InternalLink> : <strong>25 à 50€/m²</strong></p>
        </div>
      </div>

      <h2>Types de papier peint — Comparatif</h2>
      <table className="comparison-table">
        <thead><tr><th>Type</th><th>Prix /rouleau (10 m²)</th><th>Pose</th><th>Durée de vie</th><th>Idéal pour</th></tr></thead>
        <tbody>
          <tr><td><strong>Intissé</strong></td><td>25€ – 80€</td><td>Facile (colle au mur)</td><td>15-20 ans</td><td>Le standard actuel. Robuste, se décolle entier.</td></tr>
          <tr><td><strong>Vinyle sur intissé</strong></td><td>30€ – 100€</td><td>Facile</td><td>15-20 ans</td><td>Pièces humides (cuisine, SDB). Lavable.</td></tr>
          <tr><td><strong>Papier peint classique</strong></td><td>10€ – 40€</td><td>Difficile (trempage)</td><td>8-12 ans</td><td>Budgets serrés. Plus fragile.</td></tr>
          <tr><td><strong>Papier peint panoramique</strong></td><td>100€ – 500€/mur</td><td>Pro recommandé</td><td>15+ ans</td><td>Mur d&apos;accent spectaculaire.</td></tr>
          <tr><td><strong>Papier peint naturel (lin, bambou)</strong></td><td>50€ – 150€</td><td>Pro requis</td><td>10-15 ans</td><td>Décoration haut de gamme.</td></tr>
        </tbody>
      </table>

      <h2>Dépose de l&apos;ancien papier peint — Guide complet</h2>
      <p>Les maisons belges (surtout en Hainaut, Liège et Flandre) ont souvent 3 à 5 couches de papier peint superposées. La dépose est indispensable avant de <InternalLink href="/peinture-interieure/">peindre</InternalLink> ou de reposer un nouveau papier peint.</p>
      <ol>
        <li><strong>Test</strong> — Essayez de décoller un coin. L&apos;intissé moderne se décolle en bandes entières (facile). Le papier ancien et le vinyle résistent.</li>
        <li><strong>Perforation</strong> — Perforez le papier avec un outil à pointes (Tiger/Piranha) pour permettre à l&apos;eau de pénétrer.</li>
        <li><strong>Trempage ou vapeur</strong> — Imbibez à l&apos;eau chaude (éponge ou pulvérisateur) ou utilisez une décolleuse vapeur professionnelle. Temps de trempage : 10-15 min.</li>
        <li><strong>Grattage</strong> — Retirez le papier avec un couteau de peintre large (10-15 cm). Travaillez par sections.</li>
        <li><strong>Nettoyage</strong> — Lavez le mur à l&apos;eau et laissez sécher 24h.</li>
        <li><strong>Réparation</strong> — <InternalLink href="/preparation-murs/">Enduit de lissage</InternalLink> sur les arrachements et les trous. Ponçage fin.</li>
      </ol>

      <CTA text="Devis papier peint — Pose ou dépose" />

      <h2>Tendances papier peint 2026 en Belgique</h2>
      <ul>
        <li><strong>Géométrique minimaliste</strong> — Motifs épurés (lignes, hexagones, arcs) en couleurs douces (vert sauge, rose poudré, bleu gris).</li>
        <li><strong>Tropical / botanique</strong> — Feuilles de palmier, monstera, motifs jungle. En mur d&apos;accent dans un séjour ou une chambre.</li>
        <li><strong>Effet matière (lin, béton, pierre)</strong> — Faux effets de matières naturelles en intissé. Très réaliste et élégant.</li>
        <li><strong>Panoramique</strong> — Image grand format sur un mur entier. Paysage, forêt, ville. Spectaculaire mais requiert un pro.</li>
        <li><strong>Papier peint au plafond</strong> — La grande tendance 2026 : un papier peint à motifs au <InternalLink href="/peinture-plafond/">plafond</InternalLink> pour un effet &quot;5e mur&quot; inattendu.</li>
      </ul>
    </>
  ),
};

// ============================================
// 7. PRÉPARATION MURS GUIDE
// ============================================
const preparationMursGuide: GuideContent = {
  heroImage: '/images/hero-preparation-murs.png',
  heroAlt: 'Artisan ponçant un mur enduit avec une ponceuse orbitale, montrant la préparation professionnelle avant peinture',
  updatedDate: '2026-04-15',
  readTime: '12 min',
  body: (
    <>
      <p><strong>&quot;Un bon peintre, c&apos;est 80% de préparation et 20% de peinture.&quot;</strong> Cette règle d&apos;or est la clé d&apos;un résultat durable et impeccable. La préparation des murs est l&apos;étape la plus importante — et la plus souvent bâclée par les peintres non qualifiés. Ce guide détaille toutes les techniques de préparation professionnelle.</p>

      <div className="article-callout callout-info">
        <div className="article-callout-icon">📊</div>
        <div className="article-callout-content">
          <strong>Prix préparation 2026</strong>
          <p>Ponçage simple : <strong>3 à 5€/m²</strong> | Rebouchage fissures : <strong>5 à 10€/m²</strong> | Ratissage complet : <strong>15 à 25€/m²</strong> | Sous-couche : <strong>4 à 8€/m²</strong></p>
        </div>
      </div>

      <h2>Les 6 étapes de la préparation professionnelle</h2>

      <h3>1. Diagnostic du support</h3>
      <p>Avant tout travail, le peintre professionnel réalise un diagnostic complet :</p>
      <ul>
        <li><strong>Test d&apos;humidité</strong> — À l&apos;humidimètre numérique. Seuil : 5% maximum. Au-delà, traitement anti-humidité obligatoire.</li>
        <li><strong>Test d&apos;adhérence</strong> — Scotch-test : on colle un ruban adhésif sur l&apos;ancienne peinture, on arrache d&apos;un coup sec. Si la peinture vient, le support ne tient pas.</li>
        <li><strong>Test de farinage</strong> — On passe la main sur le mur. Si une poudre blanche reste, le support farine et nécessite un fixateur.</li>
      </ul>

      <h3>2. Protection du chantier</h3>
      <p>Bâche plastique sur les sols (fixée au ruban adhésif), film de protection sur les meubles restants, ruban de masquage sur les prises/interrupteurs, les châssis et les plinthes.</p>

      <h3>3. Dépose de l&apos;ancien revêtement</h3>
      <p>Si <InternalLink href="/papier-peint/">papier peint</InternalLink> : dépose à la vapeur (8-15€/m²). Si peinture cloquée/écaillée : grattage, puis ponçage.</p>

      <h3>4. Rebouchage et enduit</h3>
      <p>Trois niveaux de préparation selon l&apos;état du mur :</p>
      <table className="comparison-table">
        <thead><tr><th>État du mur</th><th>Traitement</th><th>Produit</th><th>Coût</th></tr></thead>
        <tbody>
          <tr><td><strong>Bon état (petit trous, chevilles)</strong></td><td>Rebouchage ponctuel</td><td>Polyfilla, Toupret Express</td><td>3-5€/m²</td></tr>
          <tr><td><strong>Défauts moyens (fissures, irrégularités)</strong></td><td>Enduit de lissage (1 passe)</td><td>Toupret TX110, Gyproc Finish</td><td>8-12€/m²</td></tr>
          <tr><td><strong>Mur très abîmé</strong></td><td>Ratissage complet (2-3 passes)</td><td>Toupret TX110, Gyproc Premium</td><td>15-25€/m²</td></tr>
        </tbody>
      </table>

      <h3>5. Ponçage</h3>
      <p>Ponçage de toute la surface avec du papier abrasif :</p>
      <ul>
        <li><strong>Grain 80-100</strong> : dégrossissage (enduit épais, murs très irréguliers)</li>
        <li><strong>Grain 120-150</strong> : finition standard (la majorité des murs)</li>
        <li><strong>Grain 180-220</strong> : finition fine (avant laque, pour les <InternalLink href="/boiseries-portes/">boiseries</InternalLink>)</li>
      </ul>
      <p>Dépoussiérage obligatoire après ponçage (aspirateur + chiffon humide).</p>

      <h3>6. Sous-couche (primer)</h3>
      <p>La sous-couche est l&apos;investissement le plus rentable en peinture. Elle :</p>
      <ul>
        <li>Consolide les supports farineux (fixation)</li>
        <li>Bloque les taches (nicotine, eau, tanin du bois)</li>
        <li>Améliore l&apos;adhérence de la peinture de finition de 50%</li>
        <li>Réduit la consommation de peinture de finition de 25-30%</li>
        <li>Uniformise l&apos;absorption du support (évite les zones mates et brillantes)</li>
      </ul>
      <p><strong>Produits recommandés</strong> : Trimetal Magnafix (le N°1), Levis Primer Mur, Sigma Primaire, Sikkens Alpha Fix.</p>

      <CTA text="Devis préparation + peinture — Gratuit" />

      <h2>Cas particuliers en Belgique</h2>
      <h3>Murs en plâtre ancien (maisons bruxelloises, liégeoises)</h3>
      <p>Le plâtre ancien (lattis, plafonnage traditionnel) est souvent de bonne qualité mais peut présenter des fissures de retrait. Traitement : bande calicot armée + enduit de lissage. Ne jamais utiliser d&apos;enduit ciment sur du plâtre ancien.</p>

      <h3>Murs en pierre enduite (Ardenne, vallée de la Meuse)</h3>
      <p>Les enduits sur pierre doivent impérativement rester respirants. Utilisez un enduit à la chaux, jamais du ciment. La <InternalLink href="/peinture-interieure/">peinture de finition</InternalLink> doit aussi être respirante (silicate, chaux) — pas d&apos;acrylique imperméable.</p>

      <h3>Plaques de plâtre Gyproc (constructions récentes)</h3>
      <p>Les fissures aux jonctions des plaques sont le problème N°1. Traitement : bande armée + enduit. Sous-couche spéciale Gyproc obligatoire sur les plaques neuves (sinon absorption inégale → traces).</p>

      <p>85% des sinistres de peinture (écaillage, cloques, décollement) sont dus à un défaut de préparation, et non à la qualité de la peinture. Exigez une préparation soignée dans votre devis.</p>
    </>
  ),
};

// ============================================
// EXPORT MAP
// ============================================
export const guidesContent: Record<string, GuideContent> = {
  'prix-peintre-belgique': prixPeintreBelgique,
  'peinture-interieure-guide': peintureInterieureGuide,
  'peinture-exterieure-facade-guide': peintureExterieureFacadeGuide,
  'peinture-plafond-guide': peinturePlafondGuide,
  'laquage-boiseries-portes-guide': laquageBoiseries,
  'papier-peint-tapissage-guide': papierPeintGuide,
  'preparation-murs-guide': preparationMursGuide,
};
