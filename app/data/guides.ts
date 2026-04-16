export interface Guide {
  slug: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  relatedPages: string[];
}

export const guides: Guide[] = [
  {
    slug: 'prix-peintre-belgique',
    title: 'Prix peintre en Belgique 2026 : tarifs au m² et à l\'heure',
    description: 'Tous les tarifs de peinture en Belgique : prix au m² par type de travaux, tarif horaire par région, et budget type pour une maison complète.',
    icon: '💰',
    category: 'prix',
    relatedPages: ['/peinture-interieure/', '/peinture-exterieure/', '/tarif-peintre/'],
  },
  {
    slug: 'peinture-interieure-guide',
    title: 'Peinture intérieure : murs, couleurs tendance et finitions 2026',
    description: 'Guide complet de la peinture intérieure. Choix des couleurs, finitions mat/satin/brillant, marques (Levis, Sikkens, Sigma) et prix au m².',
    icon: '🎨',
    category: 'interieur',
    relatedPages: ['/peinture-interieure/', '/preparation-murs/', '/papier-peint/'],
  },
  {
    slug: 'peinture-exterieure-facade-guide',
    title: 'Peinture extérieure & façade : types de peinture et prix',
    description: 'Peinture de façade en Belgique. Siloxane, pliolite, acrylique : quel type choisir ? Prix au m², durée de vie et traitement préalable.',
    icon: '🏠',
    category: 'exterieur',
    relatedPages: ['/peinture-exterieure/', '/preparation-murs/'],
  },
  {
    slug: 'peinture-plafond-guide',
    title: 'Peinture plafonds : techniques, difficulté et prix au m²',
    description: 'Peindre un plafond : techniques de pro, rouleaux adaptés, peinture anti-traces. Prix au m² et conseils pour un résultat impeccable.',
    icon: '⬜',
    category: 'plafond',
    relatedPages: ['/peinture-plafond/', '/peinture-interieure/'],
  },
  {
    slug: 'laquage-boiseries-portes-guide',
    title: 'Laquage boiseries & portes : laque satin, ponçage et prix',
    description: 'Guide du laquage de boiseries, portes et châssis. Choix de la laque (satin, brillant), préparation du bois, ponçage et prix par élément.',
    icon: '🚪',
    category: 'boiseries',
    relatedPages: ['/boiseries-portes/', '/preparation-murs/'],
  },
  {
    slug: 'papier-peint-tapissage-guide',
    title: 'Papier peint & tapissage : intissé, vinyle, pose et prix',
    description: 'Tout sur le papier peint en Belgique. Types (intissé, vinyle, expansé), pose et dépose, prix au m² et tendances décoration 2026.',
    icon: '🖼️',
    category: 'papier-peint',
    relatedPages: ['/papier-peint/', '/peinture-interieure/'],
  },
  {
    slug: 'preparation-murs-guide',
    title: 'Préparation des murs : enduit, rebouchage, ponçage — l\'étape clé',
    description: 'La préparation des murs est 80% du résultat. Enduit de rebouchage, sous-couche fixante, ponçage : techniques de pro et prix au m².',
    icon: '🪣',
    category: 'preparation',
    relatedPages: ['/preparation-murs/', '/peinture-interieure/', '/papier-peint/'],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(g => g.slug === slug);
}
