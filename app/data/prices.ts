// Price comparison data for homepage
export interface PaintingPrice {
  type: string;
  prixMin: number;
  prixMax: number;
  unite: string;
  dureeVie: string;
  couches: string;
  badge: string;
  badgeColor: string;
  icon: string;
}

export const paintingPrices: PaintingPrice[] = [
  {
    type: 'Peinture murs intérieur (standard)',
    prixMin: 15,
    prixMax: 25,
    unite: '€/m²',
    dureeVie: '8-10 ans',
    couches: '2 couches',
    badge: 'Intérieur',
    badgeColor: 'lavande',
    icon: '🎨',
  },
  {
    type: 'Peinture murs intérieur (premium)',
    prixMin: 25,
    prixMax: 40,
    unite: '€/m²',
    dureeVie: '10-12 ans',
    couches: '2-3 couches',
    badge: 'Intérieur',
    badgeColor: 'lavande',
    icon: '✨',
  },
  {
    type: 'Peinture plafonds',
    prixMin: 20,
    prixMax: 35,
    unite: '€/m²',
    dureeVie: '10-15 ans',
    couches: '2 couches',
    badge: 'Plafond',
    badgeColor: 'gray',
    icon: '⬜',
  },
  {
    type: 'Peinture extérieure / façade',
    prixMin: 15,
    prixMax: 40,
    unite: '€/m²',
    dureeVie: '8-12 ans',
    couches: '2 couches',
    badge: 'Extérieur',
    badgeColor: 'green',
    icon: '🏠',
  },
  {
    type: 'Laquage boiseries / portes',
    prixMin: 30,
    prixMax: 55,
    unite: '€/porte',
    dureeVie: '10-15 ans',
    couches: '3 couches',
    badge: 'Boiseries',
    badgeColor: 'taupe',
    icon: '🚪',
  },
  {
    type: 'Papier peint (pose)',
    prixMin: 20,
    prixMax: 45,
    unite: '€/m²',
    dureeVie: '10-15 ans',
    couches: '—',
    badge: 'Décoration',
    badgeColor: 'rose',
    icon: '🖼️',
  },
  {
    type: 'Papier peint (dépose + peinture)',
    prixMin: 25,
    prixMax: 50,
    unite: '€/m²',
    dureeVie: '—',
    couches: '—',
    badge: 'Décoration',
    badgeColor: 'rose',
    icon: '🔧',
  },
  {
    type: 'Préparation murs (enduit, ponçage)',
    prixMin: 8,
    prixMax: 20,
    unite: '€/m²',
    dureeVie: '—',
    couches: '—',
    badge: 'Préparation',
    badgeColor: 'orange',
    icon: '🪣',
  },
];

export interface HourlyRate {
  profil: string;
  tarifMin: number;
  tarifMax: number;
  zone: string;
}

export const hourlyRates: HourlyRate[] = [
  { profil: 'Peintre indépendant', tarifMin: 25, tarifMax: 35, zone: 'Wallonie' },
  { profil: 'Peintre indépendant', tarifMin: 30, tarifMax: 40, zone: 'Bruxelles' },
  { profil: 'Peintre indépendant', tarifMin: 30, tarifMax: 45, zone: 'Flandre' },
  { profil: 'Entreprise de peinture', tarifMin: 35, tarifMax: 50, zone: 'Belgique' },
];

// Form step options
export interface FormOption {
  value: string;
  title: string;
  subtitle: string;
  emoji?: string;
}

export const travauxOptions: FormOption[] = [
  { value: 'peinture-interieure', title: 'Peinture intérieure (murs)', subtitle: 'Murs, couloirs, chambres, salon', emoji: '🎨' },
  { value: 'peinture-plafonds', title: 'Peinture plafonds', subtitle: 'Plafonds blancs ou couleur', emoji: '⬜' },
  { value: 'peinture-exterieure', title: 'Peinture extérieure / façade', subtitle: 'Façade, murs extérieurs', emoji: '🏠' },
  { value: 'laquage-boiseries', title: 'Laquage boiseries / portes', subtitle: 'Portes, châssis, escalier', emoji: '🚪' },
  { value: 'papier-peint', title: 'Papier peint / tapissage', subtitle: 'Pose ou dépose papier peint', emoji: '🖼️' },
  { value: 'renovation-complete', title: 'Rénovation complète (tout)', subtitle: 'Murs + plafonds + boiseries', emoji: '🔧' },
];

export const etatOptions: FormOption[] = [
  { value: 'bon', title: 'Bon état', subtitle: 'Léger rafraîchissement, repeindre sur existant', emoji: '✅' },
  { value: 'defauts', title: 'Quelques défauts', subtitle: 'Petites fissures, trous de cheville, peinture terne', emoji: '🟡' },
  { value: 'abime', title: 'Murs abîmés', subtitle: 'Enduit fissuré, papier peint à enlever, préparation nécessaire', emoji: '🟠' },
  { value: 'moisissures', title: 'Moisissures / humidité', subtitle: 'Traces noires, cloques, traitement anti-humidité requis', emoji: '🔴' },
];

export const surfaceOptions: FormOption[] = [
  { value: '1-2-pieces', title: '1-2 pièces (< 40 m²)', subtitle: 'Chambre, bureau, salle de bain' },
  { value: '3-5-pieces', title: '3-5 pièces (40-100 m²)', subtitle: 'Appartement ou étage complet' },
  { value: 'maison', title: 'Maison complète (100-250 m²)', subtitle: 'Tous les murs et plafonds' },
  { value: 'grand', title: 'Plus de 250 m²', subtitle: 'Villa, immeuble, commerce' },
];

export const batimentOptions: FormOption[] = [
  { value: '4-facades', title: 'Maison 4 façades', subtitle: 'Maison individuelle', emoji: '🏠' },
  { value: 'mitoyenne', title: 'Mitoyenne', subtitle: '2 ou 3 façades', emoji: '🏘️' },
  { value: 'appartement', title: 'Appartement', subtitle: 'En copropriété', emoji: '🏢' },
  { value: 'commerce', title: 'Commerce', subtitle: 'Bureau, magasin, horeca', emoji: '🏛️' },
  { value: 'autre', title: 'Autre', subtitle: 'Villa, ferme, etc.', emoji: '🔧' },
];

export const delaiOptions: FormOption[] = [
  { value: 'planifie', title: 'Planifié (3-6 mois)', subtitle: 'Je prends mon temps' },
  { value: 'assez-urgent', title: 'Assez urgent (1-3 mois)', subtitle: 'Je veux avancer' },
  { value: 'urgent', title: 'Urgent', subtitle: 'Intervention rapide nécessaire', emoji: '🔴' },
  { value: 'compare', title: 'Je compare', subtitle: 'Juste m\'informer pour l\'instant' },
];
