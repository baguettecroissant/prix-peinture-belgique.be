import communesRaw from './communes-be-complet.json';

export interface Commune {
  name: string;
  slug: string;
  zip: string;
  province_name: string;
  province_code: string;
  region: string;
  coordinates: { lat: number; lng: number };
  population: number;
  name_nl?: string;
}

export const communes: Commune[] = communesRaw as Commune[];

export const communesFR = communes.filter(
  c => c.region === 'Wallonie' || c.region === 'Bruxelles-Capitale'
);

export const communesNL = communes.filter(
  c => c.region === 'Flandre' || c.region === 'Bruxelles-Capitale'
);

export function getCommuneBySlug(slug: string): Commune | undefined {
  return communes.find(c => c.slug === slug);
}

export function getCommunesByProvince(province: string): Commune[] {
  return communes.filter(c => c.province_name === province);
}

export function getCommunesByRegion(region: string): Commune[] {
  return communes.filter(c => c.region === region);
}

// NL slug for commune pages
export function getNLSlug(commune: Commune): string {
  if (commune.name_nl) {
    return `${commune.name_nl.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')}-${commune.zip}`;
  }
  return commune.slug;
}

// ============================================
// HASH — Deterministic content selection
// ============================================
function hashCode(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = Math.imul(31, h) + s.charCodeAt(i) | 0;
  }
  return Math.abs(h);
}

function pick<T>(arr: T[], seed: string, offset: number = 0): T {
  return arr[(hashCode(seed) + offset) % arr.length];
}

// ============================================
// COMMUNE CATEGORIES
// ============================================
export type CommuneCategory = 'grande_ville' | 'ville_moyenne' | 'petite_ville' | 'bourg' | 'rural';

export function getCommuneCategory(population: number): CommuneCategory {
  if (population >= 80000) return 'grande_ville';
  if (population >= 30000) return 'ville_moyenne';
  if (population >= 10000) return 'petite_ville';
  if (population >= 3000) return 'bourg';
  return 'rural';
}

export function getCategoryLabel(cat: CommuneCategory): string {
  switch (cat) {
    case 'grande_ville': return 'grande ville';
    case 'ville_moyenne': return 'ville moyenne';
    case 'petite_ville': return 'petite ville';
    case 'bourg': return 'bourg résidentiel';
    case 'rural': return 'commune rurale';
  }
}

// ============================================
// CLIMATIC ZONES
// ============================================
export type ClimaticZone = 'cotiere' | 'ardennes' | 'plaine_humide' | 'urbain_dense';

export function getClimaticZone(commune: Commune): ClimaticZone {
  if (commune.province_name === 'Flandre-Occidentale' && commune.coordinates.lng < 3.2 && commune.coordinates.lat > 51.05) {
    return 'cotiere';
  }
  if (commune.coordinates.lat < 50.15 && (commune.province_name === 'Luxembourg' || commune.province_name === 'Liège' || commune.province_name === 'Namur')) {
    return 'ardennes';
  }
  if (commune.region === 'Bruxelles-Capitale' || commune.population >= 100000) {
    return 'urbain_dense';
  }
  return 'plaine_humide';
}

// ============================================
// 1. PRICE RANGE — Localized per region+province
// ============================================
export function getPriceRange(region: string): { min: number; max: number } {
  switch (region) {
    case 'Bruxelles-Capitale': return { min: 20, max: 40 };
    case 'Wallonie': return { min: 15, max: 30 };
    case 'Flandre': return { min: 18, max: 35 };
    default: return { min: 15, max: 35 };
  }
}

// Province-specific price adjustment
export function getProvincePriceMultiplier(province: string): number {
  const multipliers: Record<string, number> = {
    'Bruxelles-Capitale': 1.15,
    'Brabant wallon': 1.10,
    'Brabant flamand': 1.10,
    'Anvers': 1.05,
    'Flandre-Occidentale': 1.00,
    'Flandre-Orientale': 1.00,
    'Hainaut': 0.90,
    'Liège': 0.95,
    'Luxembourg': 0.90,
    'Namur': 0.95,
    'Limbourg': 0.90,
  };
  return multipliers[province] || 1.0;
}

// ============================================
// 2. LOCAL PRICE TABLE — Per commune
// ============================================
export interface LocalPriceRow {
  type: string;
  icon: string;
  prixMin: number;
  prixMax: number;
  unite: string;
  dureeVie: string;
}

export function getLocalPriceTable(commune: Commune): LocalPriceRow[] {
  const m = getProvincePriceMultiplier(commune.province_name);
  return [
    { type: 'Peinture murs intérieur (mat/satin)', icon: '🎨', prixMin: Math.round(15 * m), prixMax: Math.round(25 * m), unite: '€/m²', dureeVie: '8-10 ans' },
    { type: 'Peinture murs intérieur (premium)', icon: '✨', prixMin: Math.round(25 * m), prixMax: Math.round(40 * m), unite: '€/m²', dureeVie: '10-12 ans' },
    { type: 'Peinture plafonds', icon: '⬜', prixMin: Math.round(20 * m), prixMax: Math.round(35 * m), unite: '€/m²', dureeVie: '10-15 ans' },
    { type: 'Peinture extérieure / façade', icon: '🏠', prixMin: Math.round(15 * m), prixMax: Math.round(40 * m), unite: '€/m²', dureeVie: '8-12 ans' },
    { type: 'Laquage portes intérieures', icon: '🚪', prixMin: Math.round(30 * m), prixMax: Math.round(55 * m), unite: '€/porte', dureeVie: '10-15 ans' },
    { type: 'Laquage châssis fenêtres', icon: '🪟', prixMin: Math.round(15 * m), prixMax: Math.round(30 * m), unite: '€/ml', dureeVie: '8-12 ans' },
    { type: 'Papier peint (pose)', icon: '🖼️', prixMin: Math.round(20 * m), prixMax: Math.round(45 * m), unite: '€/m²', dureeVie: '10-15 ans' },
    { type: 'Dépose papier peint + peinture', icon: '🔧', prixMin: Math.round(25 * m), prixMax: Math.round(50 * m), unite: '€/m²', dureeVie: '—' },
    { type: 'Préparation murs (enduit, ponçage)', icon: '🪣', prixMin: Math.round(8 * m), prixMax: Math.round(20 * m), unite: '€/m²', dureeVie: '—' },
    { type: 'Traitement anti-humidité + peinture', icon: '💧', prixMin: Math.round(25 * m), prixMax: Math.round(45 * m), unite: '€/m²', dureeVie: '—' },
  ];
}

// ============================================
// 3. BUDGET ESTIMATOR — Per commune
// ============================================
export interface BudgetEstimate {
  label: string;
  surfaceM2: string;
  budgetMin: number;
  budgetMax: number;
  duree: string;
  icon: string;
}

export function getBudgetEstimates(commune: Commune): BudgetEstimate[] {
  const m = getProvincePriceMultiplier(commune.province_name);
  return [
    { label: 'Salle de bain (murs + plafond)', surfaceM2: '15-25 m²', budgetMin: Math.round(450 * m), budgetMax: Math.round(900 * m), duree: '1-2 jours', icon: '🚿' },
    { label: 'Chambre standard (murs + plafond)', surfaceM2: '30-45 m²', budgetMin: Math.round(600 * m), budgetMax: Math.round(1200 * m), duree: '1-2 jours', icon: '🛏️' },
    { label: 'Séjour / salon (murs + plafond)', surfaceM2: '50-80 m²', budgetMin: Math.round(1000 * m), budgetMax: Math.round(2200 * m), duree: '2-3 jours', icon: '🛋️' },
    { label: 'Appartement complet (80 m² au sol)', surfaceM2: '150-220 m²', budgetMin: Math.round(2500 * m), budgetMax: Math.round(5000 * m), duree: '5-7 jours', icon: '🏢' },
    { label: 'Maison complète (150 m² au sol)', surfaceM2: '350-500 m²', budgetMin: Math.round(5000 * m), budgetMax: Math.round(12000 * m), duree: '10-15 jours', icon: '🏠' },
    { label: 'Laquage 6 portes intérieures', surfaceM2: '6 portes', budgetMin: Math.round(180 * m), budgetMax: Math.round(330 * m), duree: '2-3 jours', icon: '🚪' },
  ];
}

// ============================================
// 4. REGION INTRO — Rich localized introduction
// ============================================
export function getRegionIntro(region: string, ville: string): string {
  switch (region) {
    case 'Wallonie':
      return `Les maisons wallonnes en pierre ou briques enduites nécessitent souvent une préparation minutieuse des supports avant peinture. Le climat humide à ${ville} favorise les traces de moisissures et le décollement des anciennes couches de peinture.`;
    case 'Bruxelles-Capitale':
      return `Les appartements bruxellois et maisons de maître à ${ville} présentent souvent des hauts plafonds, des moulures et des surfaces complexes qui demandent un savoir-faire spécifique — et un budget adapté.`;
    case 'Flandre':
      return `Vlaamse woningen in ${ville} met hun typische hoge plafonds en strak afgewerkte muren vereisen vakkundig schilderwerk. Het vochtige klimaat maakt een goede voorbereiding essentieel.`;
    default:
      return `Les intérieurs à ${ville} méritent un peintre expérimenté qui maîtrise les techniques de préparation et de finition adaptées au bâti local.`;
  }
}

// ============================================
// 5. ARCHITECTURAL CONTEXT — Deep dive per province+category
// ============================================
export function getArchitecturalContext(commune: Commune): { title: string; content: string; surfaceType: string; yearRange: string } {
  const cat = getCommuneCategory(commune.population);
  const prov = commune.province_name;

  const provinceContext: Record<string, { surfaces: string; surfaceType: string; detail: string; yearRange: string }> = {
    'Bruxelles-Capitale': {
      surfaces: 'moulures en plâtre, hauts plafonds (3-4m), cimaises, corniches décoratives, murs en lattis ou Gyproc',
      surfaceType: 'Plâtre ancien + moulures',
      yearRange: '1850-1930 (Art Nouveau/Art Déco)',
      detail: 'Les intérieurs bruxellois typiques (maisons de maître, appartements Art Nouveau) présentent des défis spécifiques pour le peintre : moulures complexes à peindre au pinceau, plâtre ancien qui absorbe différemment, hauteurs de plafond nécessitant des échafaudages intérieurs. Les fissures de retrait dans les plafonds en plâtre sont fréquentes et nécessitent un traitement (calicot + enduit) avant mise en peinture. Le patrimoine Art Nouveau classé (Horta, Hankar) impose parfois des couleurs et techniques historiques.',
    },
    'Hainaut': {
      surfaces: 'murs en briques enduites, plafonnage traditionnel, papier peint à décoller, enduits ciment anciens',
      surfaceType: 'Enduit ciment + plafonnage',
      yearRange: '1920-1970 (maisons ouvrières)',
      detail: 'Les maisons hennuyères (corons, maisons ouvrières, maisons de maître) présentent souvent des murs en enduit ciment ou plafonnage au plâtre. Le papier peint multicouche des années 1970-90 est très courant et nécessite une dépose soignée avant peinture. L\'humidité ascensionnelle dans les rez-de-chaussée peut provoquer des cloques et du décollement — un traitement préalable est indispensable. Les anciennes demeures de maîtres de forges du Hainaut industriel ont des intérieurs souvent riches en moulures et corniches.',
    },
    'Liège': {
      surfaces: 'pierres calcaires apparentes, plafonnage traditionnel, colombages en Hesbaye, enduits anciens',
      surfaceType: 'Plafonnage + pierre calcaire',
      yearRange: '1800-1950 (bâti mosan)',
      detail: 'La province de Liège offre une diversité de supports intérieurs remarquable. Les maisons en pierre calcaire de la vallée mosane conservent parfois des murs en pierre apparente qu\'il ne faut pas peindre (badigeon à la chaux uniquement). Les plafonnages traditionnels sont souvent de bonne qualité mais nécessitent un ponçage et une sous-couche fixante avant mise en peinture. Les maisons de la vallée de la Meuse et de l\'Ourthe souffrent d\'humidité récurrente. Les maisons à colombages de Hesbaye liégeoise demandent un traitement spécifique des boiseries extérieures.',
    },
    'Luxembourg': {
      surfaces: 'murs épais en moellons enduits, plafonds en bois ou plâtre, enduits à la chaux, poutres apparentes',
      surfaceType: 'Enduit chaux + bois',
      yearRange: '1750-1900 (fermes ardennaises)',
      detail: 'Les fermes ardennaises et maisons anciennes du Luxembourg présentent des murs massifs (50-60 cm) avec des enduits à la chaux intérieurs. La peinture doit être respirante (peinture minérale ou silicate) pour ne pas emprisonner l\'humidité. Les poutres apparentes et boiseries sont fréquentes et nécessitent un laquage ou une lasure adaptée. Le chauffage intermittent de certaines résidences secondaires favorise la condensation. Les granges rénovées en habitation offrent de vastes volumes à peindre avec des plafonds cathédrale.',
    },
    'Namur': {
      surfaces: 'plafonnage traditionnel, enduits au plâtre, murs en pierre de Meuse enduits, Gyproc récent',
      surfaceType: 'Plafonnage + Gyproc',
      yearRange: '1900-1980 (mixte)',
      detail: 'Le Namurois combine bâti ancien (centres historiques de Namur, Dinant, Rochefort) et lotissements plus récents. Les maisons anciennes en pierre de Meuse ont des murs intérieurs en enduit au plâtre qui peuvent être très irréguliers — un ratissage complet est parfois nécessaire. Les constructions des années 1980-2000 utilisent massivement le Gyproc, un support idéal pour la peinture mais sensible aux fissures aux jonctions des plaques. La citadelle de Namur et le patrimoine mosan influencent les coloris traditionnels (ocre, pierre, vert ardoise).',
    },
    'Brabant wallon': {
      surfaces: 'cloisons Gyproc, plafonnage lissé, enduits projetés des années 1980-2000, murs en blocs',
      surfaceType: 'Gyproc + enduit projeté',
      yearRange: '1960-2010 (résidentiel)',
      detail: 'Le Brabant wallon est une province résidentielle avec un bâti majoritairement récent (après 1960). Les intérieurs sont souvent en plaques de plâtre (Gyproc) ou en enduit projeté. La préparation est généralement moins lourde que dans le bâti ancien, mais les fissures aux jonctions des plaques Gyproc et les traces d\'humidité dans les salles de bain sont les problèmes les plus courants. Les villas 4 façades de Waterloo, Lasne et La Hulpe offrent de grandes surfaces à peindre. Les prix immobiliers élevés justifient un investissement en peinture de qualité.',
    },
    'Anvers': {
      surfaces: 'gepleisterde muren, oude behangresten, Gyproc, hoge plafonds in herenhuizen',
      surfaceType: 'Pleisterwerk + Gyproc',
      yearRange: '1880-1940 (herenhuizen)',
      detail: 'Antwerpse woningen combineren oud en nieuw: herenhuizen met hoge plafonds en sierlijsten, rijwoningen met verouderd pleisterwerk, en moderne appartementen met Gyproc. Vochtproblemen (oprijzend vocht) in oudere rijwoningen veroorzaken afbladderende verf en schimmelvorming. Een vochtbehandeling vóór het schilderen is dan essentieel. De typische Zurenborg-woningen vereisen vakkundig schilderwerk voor hun Art Nouveau- en Art Deco-details. De havenwijk en het Eilandje bieden lofts met industrieel karakter.',
    },
    'Brabant flamand': {
      surfaces: 'Gyproc-wanden, geprojecteerd pleisterwerk, gladde afwerking, moderne interieurs',
      surfaceType: 'Gyproc + glad pleisterwerk',
      yearRange: '1960-2010 (villabouw)',
      detail: 'Vlaams-Brabant combineert traditionele Brabantse hoeves met moderne villabouw. Veel woningen uit de jaren 1960-1990 hebben interieurs met geprojecteerd pleisterwerk dat toe is aan een opfrissing. De nabijheid van Brussel en de hoge vastgoedprijzen maken dat eigenaars investeren in kwaliteitsschilderwerk om de waarde van hun woning te behouden. In Leuven bieden de historische panden rond het stadscentrum unieke uitdagingen.',
    },
    'Flandre-Occidentale': {
      surfaces: 'kalkpleisterwerk, vochtige muren door zeeklimaat, witgekalkte muren, houtwerk',
      surfaceType: 'Kalkpleisterwerk + hout',
      yearRange: '1900-1960 (kustarchitectuur)',
      detail: 'West-Vlaamse woningen hebben specifieke uitdagingen voor schilders: het maritieme klimaat (hoge luchtvochtigheid, zilt) veroorzaakt snellere afbraak van verflagen, vooral op houtwerk (ramen, deuren, luiken). Minerale verf en silicaatverf presteren beter dan standaard latexverf in dit klimaat. Kustwoningen vereisen hoogwaardige buitenverf met UV-bescherming. De historische panden in Brugge, Ieper en Kortrijk vragen om gespecialiseerde restauratietechnieken.',
    },
    'Flandre-Orientale': {
      surfaces: 'oud pleisterwerk, behangresten, Gyproc-renovatie, industriële lofts',
      surfaceType: 'Pleisterwerk + renovatie',
      yearRange: '1850-1950 (textielpanden)',
      detail: 'Oost-Vlaanderen biedt een mix van historische panden (Gent, Dendermonde, Aalst) en moderne renovaties. De trend van industriële lofts en open ruimtes in gerenoveerde textielfabrieken vereist grote oppervlakten schilderwerk met hoogwaardige afwerking. Oudere rijwoningen hebben vaak meerdere lagen oud behang dat vakkundig verwijderd moet worden. De Gentse studentenhuizen vormen een specifiek marktsegment met regelmatige opfrissbeurten.',
    },
    'Limbourg': {
      surfaces: 'mijnwerkerswoningen met eenvoudig pleisterwerk, moderne Gyproc-interieurs, tuinwijkarchitectuur',
      surfaceType: 'Eenvoudig pleisterwerk',
      yearRange: '1930-1970 (mijnwerkerswoningen)',
      detail: 'Limburgse woningen, vooral de cité-woningen en tuinwijken rond de voormalige mijnzetels (Genk, Beringen, Maasmechelen), hebben relatief eenvoudige interieurs die zich uitstekend lenen voor een complete opfrissing. De relatief lage vastgoedprijzen maken dat een volledige schilderbeurt een uitstekende investering is. De Japanse Tuin in Hasselt en het mijnerfgoed beïnvloeden de lokale kleurkeuzes.',
    },
  };

  const ctx = provinceContext[prov] || provinceContext['Brabant wallon'];

  const catDescriptions: Record<CommuneCategory, string> = {
    grande_ville: `En tant que grande ville de ${commune.population.toLocaleString('fr-BE')} habitants, ${commune.name} présente une grande diversité architecturale : appartements avec hauts plafonds et moulures Art Nouveau, lofts industriels reconvertis, maisons de maître XIXe siècle et constructions contemporaines. Cette diversité exige que le peintre adapte ses techniques, ses produits et sa préparation à chaque type de support. Les immeubles à appartements représentent le plus gros volume de travaux de peinture.`,
    ville_moyenne: `Ville de ${commune.population.toLocaleString('fr-BE')} habitants, ${commune.name} combine un centre historique avec du bâti ancien (murs en plafonnage, papier peint multicouche, moulures) et des extensions résidentielles plus récentes en périphérie (Gyproc, enduit projeté). Les projets de peinture sont variés : du simple rafraîchissement au projet de rénovation complète. Le marché local compte plusieurs entreprises de peinture établies.`,
    petite_ville: `Commune de ${commune.population.toLocaleString('fr-BE')} habitants, ${commune.name} est caractérisée par un mélange de maisons traditionnelles en centre-bourg et de lotissements résidentiels des années 1970-2000 en périphérie. Les murs intérieurs sont souvent en bon état structurel mais nécessitent un rafraîchissement esthétique après 10-15 ans. Les travaux de peinture les plus demandés sont le rafraîchissement complet (murs + plafonds) et le laquage des boiseries.`,
    bourg: `Bourg résidentiel de ${commune.population.toLocaleString('fr-BE')} habitants, ${commune.name} est composé essentiellement de maisons individuelles (4 façades ou mitoyennes) construites entre 1960 et 2000. Les intérieurs standards, souvent en Gyproc ou enduit projeté, se prêtent bien à un rafraîchissement complet. Le rapport qualité/prix des peintres locaux est généralement avantageux, les frais de déplacement étant limités.`,
    rural: `Commune rurale de ${commune.population.toLocaleString('fr-BE')} habitants, ${commune.name} possède un patrimoine bâti souvent ancien : fermes rénovées, maisons de campagne, petits ensembles villageois datant du XIXe siècle. Les murs peuvent présenter des irrégularités (enduits à la chaux, moellons enduits) qui nécessitent une préparation soignée et des peintures adaptées. Les fermes réhabilitées en habitation offrent souvent de vastes volumes avec poutres apparentes à traiter.`,
  };

  return {
    title: `Architecture et intérieurs typiques à ${commune.name}`,
    content: `${catDescriptions[cat]}\n\nEn ${prov}, les surfaces intérieures sont dominées par le ${ctx.surfaces}. ${ctx.detail}`,
    surfaceType: ctx.surfaceType,
    yearRange: ctx.yearRange,
  };
}

// ============================================
// 6. CLIMATIC INFO — 4 zones
// ============================================
export function getClimaticInfo(commune: Commune): { title: string; content: string; tip: string; season: string; pluviometrie: string; humidity: string } {
  const zone = getClimaticZone(commune);

  switch (zone) {
    case 'cotiere':
      return {
        title: `Climat côtier et impact sur la peinture à ${commune.name}`,
        content: `${commune.name} subit l'influence du climat maritime de la mer du Nord. L'humidité relative élevée (75-85% en moyenne annuelle) ralentit le séchage des peintures et favorise la condensation sur les murs froids. Les boiseries extérieures (châssis, volets, portes d'entrée) se dégradent plus rapidement à cause de l'air salin et des vents chargés d'embruns. En intérieur, l'humidité chronique favorise les moisissures dans les pièces mal ventilées (salle de bain, cuisine, buanderie), nécessitant une peinture anti-moisissure et une ventilation mécanique contrôlée (VMC). Les façades exposées aux vents dominants (ouest, sud-ouest) nécessitent une peinture siloxane haute performance.`,
        tip: `En zone côtière comme ${commune.name}, utilisez des peintures anti-humidité certifiées (type Sigma Façade Siloxane ou Sikkens Alpha) en salle de bain et cuisine. Pour les boiseries extérieures, choisissez une laque alkyde de haute qualité (Sikkens Rubbol BL Satin, Sigma S2U Satin) résistante aux UV et à la salinité. Le surcoût de 20-30% pour une peinture premium est largement compensé par une durée de vie doublée (12 ans vs 6 ans). Aérez bien les pièces pendant et après les travaux pour un séchage optimal — mais jamais par vent de mer direct sur la peinture fraîche.`,
        season: `La meilleure période pour peindre à ${commune.name} est de mai à septembre, quand l'humidité relative descend sous 80%. Évitez les jours de brouillard marin fréquents au printemps (mars-avril). Pour la peinture extérieure, planifiez exclusivement entre juin et août, en dehors des périodes de vent fort (> 30 km/h). En intérieur, les mois d'automne (octobre-novembre) sont acceptables si le chauffage est en marche.`,
        pluviometrie: '700-800 mm/an',
        humidity: '75-85%',
      };
    case 'ardennes':
      return {
        title: `Climat ardennais et impact sur la peinture à ${commune.name}`,
        content: `${commune.name} est située en zone ardennaise, caractérisée par des hivers rigoureux (gel fréquent de novembre à mars), une pluviométrie importante (1 000-1 400 mm/an) et d'importants écarts de température entre saisons. Les murs des maisons anciennes en moellons de grès ou de schiste conservent l'humidité, ce qui provoque des remontées capillaires et des efflorescences de salpêtre. La condensation hivernale (différence de 15-20°C entre intérieur chauffé et murs froids) favorise les moisissures noires, surtout dans les chambres orientées au nord et les salles de bain. Les boiseries extérieures subissent les cycles gel-dégel qui font craquer, écailler et décoller la peinture en quelques années seulement. Les enduits extérieurs à la chaux peuvent geler et s'effriter si appliqués trop tardivement en saison.`,
        tip: `En Ardenne, optez pour des peintures respirantes (silicate de potassium type Keim, ou chaux naturelle) sur les murs en pierre enduite — les peintures acryliques standard emprisonnent l'humidité et provoquent des dégâts. Traitez systématiquement les taches de moisissure avec un fongicide professionnel (type Rubbol BL Anti-Schimmel) avant de repeindre, sinon elles réapparaîtront sous la nouvelle couche. Pour les boiseries extérieures à ${commune.name}, une laque microporeuse (Sikkens Cetol, Sigma Woodprotect) qui laisse respirer le bois est préférable à une laque brillante classique qui craquelle au gel.`,
        season: `À ${commune.name}, la saison de peinture extérieure est courte : de mi-mai à mi-septembre uniquement. Les températures nocturnes doivent rester au-dessus de 5°C pour un séchage correct. Pour l'intérieur, évitez l'hiver (condensation excessive sur les murs froids) et privilégiez le printemps (avril-juin) ou l'automne (septembre-octobre), quand vous pouvez aérer sans surchauffer. Le chauffage doit être en marche 48h avant les travaux pour déshumidifier les murs.`,
        pluviometrie: '1000-1400 mm/an',
        humidity: '80-90%',
      };
    case 'urbain_dense':
      return {
        title: `Environnement urbain et peinture à ${commune.name}`,
        content: `En zone urbaine dense comme ${commune.name}, la peinture intérieure est le projet de rénovation le plus fréquent et l'un des plus rentables en termes de valorisation immobilière. Les appartements et maisons de ville se repeignent en moyenne tous les 5-7 ans (plus souvent que les maisons rurales en raison de l'usure quotidienne plus intense). Les contraintes urbaines spécifiques incluent : bruit des travaux (ponçage, décapage — horaires réglementés par la commune), poussière de ponçage à contenir (bâchage des communs, protection des voisins), accès limité pour les échafaudages extérieurs (permis de voirie obligatoire), coordination avec les copropriétaires pour les parties communes (cage d'escalier, hall d'entrée), et stationnement du véhicule du peintre. En copropriété, les travaux de peinture des parties communes nécessitent un vote en assemblée générale.`,
        tip: `En milieu urbain à ${commune.name}, préférez les peintures à faible émission de COV (Composés Organiques Volatils, norme A+) pour le confort des voisins et votre santé. Les peintures acryliques (latex) de qualité professionnelle (Levis Ambiance Extra Mat, Sikkens Alpha BL Mat, Sigma S2U Nova) sèchent en 1-2h et ont une odeur quasi nulle — idéal en appartement. Pour les pièces de vie, un mat velouté masque mieux les imperfections des murs. Pour les pièces d'eau, un satin lavable est indispensable. Demandez au peintre un planning précis des travaux bruyants pour prévenir les voisins.`,
        season: `Les travaux de peinture à ${commune.name} peuvent être réalisés toute l'année en intérieur, mais les mois de mars-juin et septembre-novembre sont idéaux : températures modérées (15-22°C) permettant d'aérer sans surchauffer le chauffage. Évitez les vacances d'été si vous restez dans le logement (chaleur + odeurs), sauf si vous pouvez vous absenter pendant les travaux. Pour la peinture extérieure (façade, balcons), une autorisation de la commune est souvent nécessaire pour l'installation d'un échafaudage sur le trottoir.`,
        pluviometrie: '800-850 mm/an',
        humidity: '70-80%',
      };
    default:
      return {
        title: `Climat et conditions de peinture à ${commune.name}`,
        content: `${commune.name} bénéficie d'un climat océanique tempéré typique de la plaine belge, avec une humidité régulière (70-80% en moyenne) et des précipitations réparties sur toute l'année (800-900 mm/an). Ce climat favorise les moisissures dans les pièces humides (salle de bain, cuisine, buanderie) et peut ralentir significativement le séchage des peintures en automne et en hiver. Les murs exposés au nord restent plus froids et sont plus susceptibles de développer de la condensation, qui se traduit par des taches noires dans les angles du plafond. Les boiseries extérieures (portes d'entrée, châssis de fenêtres, volets) se dégradent en 8-12 ans sous l'effet combiné de l'humidité, des UV et des variations de température, et doivent être repeintes régulièrement pour préserver l'étanchéité et l'isolation du bois.`,
        tip: `À ${commune.name}, assurez-vous que le taux d'humidité des murs est inférieur à 5% avant de peindre (mesure avec un humidimètre, que tout bon peintre possède). Utilisez une sous-couche fixante (type Levis Primer, Trimetal Magnafix, Sigma Primaire) sur les anciennes peintures mates qui farinent. Pour les plafonds de salle de bain, une peinture acrylique satinée anti-moisissure est indispensable — elle coûte 10-15€ de plus par pot mais dure 2 fois plus longtemps. La ventilation est aussi importante que la peinture elle-même : un extracteur dans la salle de bain réduit de 80% le risque de moisissures.`,
        season: `La meilleure période pour peindre à ${commune.name} est d'avril à octobre. Maintenez une température de 15-25°C dans la pièce pendant l'application et le séchage (minimum 24h). Aérez bien (ouvrez 2 fenêtres pour créer un courant d'air doux) mais évitez les courants d'air directs et violents sur la peinture fraîche — ils provoquent un séchage inégal et des traces. En hiver (novembre-mars), c'est possible en intérieur si le chauffage est en marche, la température stable et la ventilation suffisante. La peinture extérieure est déconseillée en dessous de 10°C.`,
        pluviometrie: '800-900 mm/an',
        humidity: '70-80%',
      };
  }
}

// ============================================
// 7. LOCAL PAINTING PROBLEMS — Per province (3 problems)
// ============================================
export function getLocalPaintingProblems(commune: Commune): { problems: Array<{ icon: string; title: string; desc: string }> } {
  const prov = commune.province_name;
  const cat = getCommuneCategory(commune.population);

  const provinceProblems: Record<string, Array<{ icon: string; title: string; desc: string }>> = {
    'Bruxelles-Capitale': [
      { icon: '🔨', title: 'Fissures dans les plafonds en plâtre', desc: 'Les maisons de maître bruxelloises (1880-1930) ont des plafonds en plâtre sur lattis qui se fissurent avec le temps et les vibrations du trafic. Traitement : calicot armé + enduit de lissage. Budget : 15-25€/m² en supplément.' },
      { icon: '💧', title: 'Humidité ascensionnelle en rez-de-chaussée', desc: 'Les rez-de-chaussée bruxellois sans membrane d\'étanchéité (avant 1960) souffrent de remontées capillaires. La peinture cloque et se décolle sur les 30-50 cm inférieurs du mur. Traitement : injection hydrofuge + enduit de cuvelage avant peinture.' },
      { icon: '🎨', title: 'Moulures et corniches encrassées (100+ ans de couches)', desc: 'Après un siècle et des dizaines de couches de peinture, les moulures et rosettes au plafond perdent leur relief et leurs détails. Solution : décapage chimique (non toxique) ou thermique pour restaurer les profils, puis laquage en 3 couches.' },
    ],
    'Hainaut': [
      { icon: '📜', title: 'Papier peint multicouche (3 à 5 épaisseurs)', desc: 'Les maisons hennuyères des années 1970-90 ont souvent 3 à 5 couches de papier peint superposées, parfois sur du vinyle. La dépose est longue (1-2 jours par pièce) et nécessite une décolleuse vapeur professionnelle. Budget dépose : 8-15€/m² en supplément.' },
      { icon: '💧', title: 'Salpêtre et humidité dans les corons', desc: 'Les maisons ouvrières du Borinage et du sillon Sambre-et-Meuse souffrent fréquemment d\'humidité ascensionnelle. Le salpêtre (efflorescences blanches cristallines) repousse la peinture. Traitement : brossage + anti-salpêtre + sous-couche d\'accrochage.' },
      { icon: '🔧', title: 'Enduits ciment pulvérulents (farineux)', desc: 'Les enduits ciment des années 1950-70, très courants en Hainaut, deviennent pulvérulents avec le temps (ils farinent au toucher). Une sous-couche fixante pénétrante (Levis Akzent, Trimetal Magnafix) est indispensable pour consolider le support.' },
    ],
    'Liège': [
      { icon: '🪨', title: 'Murs en pierre calcaire — peinture respirante obligatoire', desc: 'Les murs intérieurs en pierre bleue, calcaire ou grès de la vallée mosane doivent impérativement respirer. Seule une peinture minérale (silicate de potassium) ou un badigeon à la chaux convient. La peinture acrylique classique emprisonne l\'humidité → cloques, moisissures, dégradation de la pierre.' },
      { icon: '💨', title: 'Condensation dans les vallées (Meuse, Ourthe, Vesdre)', desc: 'Les communes le long des cours d\'eau liégeois (Meuse, Ourthe, Amblève, Vesdre) subissent des brouillards matinaux 100-150 jours/an. La condensation sur les murs froids (surtout façade nord) provoque des taches de moisissure noire persistantes.' },
      { icon: '🔨', title: 'Plafonnage traditionnel fissuré', desc: 'Les plafonnages traditionnels liégeois (plâtre gâché sur brique) sont souvent de qualité mais présentent des fissures de retrait (réseaux de micro-fissures) après 50+ ans. Un ratissage partiel à l\'enduit de lissage (Toupret, Gyproc) peut être nécessaire : 10-18€/m².' },
    ],
    'Luxembourg': [
      { icon: '❄️', title: 'Condensation hivernale intense (ponts thermiques)', desc: 'Les murs épais (50-60 cm) des maisons ardennaises sont froids en hiver malgré le chauffage. La différence de température intérieur/extérieur (jusqu\'à 25°C) provoque une condensation massive, visible sous forme de buée sur les vitres et de taches noires dans les angles mur-plafond.' },
      { icon: '🏚️', title: 'Surfaces très irrégulières (moellons enduits)', desc: 'Les murs anciens en moellons de grès ou de schiste ardennais, même enduits, présentent des surfaces très irrégulières avec des creux de 5-15 mm. Un enduit de ratissage complet (2-3 passes) est souvent nécessaire avant peinture. Budget : 15-25€/m² en supplément.' },
      { icon: '🪵', title: 'Poutres, colombages et boiseries à traiter', desc: 'Les fermes ardennaises rénovées ont de nombreuses poutres apparentes en chêne ou sapin, des colombages et des boiseries intérieures (escaliers, garde-corps). Le laquage ou la lasure de ces éléments représente 30-40% du budget total de peinture.' },
    ],
    'Namur': [
      { icon: '💧', title: 'Humidité en zones fluviales (Meuse, Sambre)', desc: 'Les communes le long de la Meuse (Namur, Dinant, Andenne) et de la Sambre ont un taux d\'humidité ambiant supérieur de 10-15% à la moyenne belge. La peinture sèche plus lentement (2-3h vs 1h en conditions normales) et les moisissures sont 2 fois plus fréquentes.' },
      { icon: '🔧', title: 'Plafonnage vieillissant des années 1960-80', desc: 'Le plafonnage au plâtre des maisons namuroises d\'après-guerre (1960-80) peut présenter des micro-fissures en toile d\'araignée et un aspect farineux. Un traitement à la sous-couche fixante pénétrante (Levis Primer, Trimetal Magnafix, Sigma Primaire) est essentiel avant toute mise en peinture.' },
      { icon: '🎨', title: 'Enduits décoratifs "gouttelette" difficiles à repeindre', desc: 'Les enduits décoratifs projetés (crépis intérieurs "gouttelette") datant des années 1980-90 sont très courants dans les maisons namuroises. Leur texture rugueuse accumule la poussière, est difficile à nettoyer et consomme 30-50% plus de peinture. Options : ponçage + lissage ou peinture au rouleau à poils longs.' },
    ],
    'Brabant wallon': [
      { icon: '📐', title: 'Fissures aux jonctions des plaques Gyproc', desc: 'Les cloisons en plaques de plâtre (Gyproc) des lotissements du Brabant wallon (1980-2000) présentent des fissures aux jonctions des plaques, surtout après les travaux de terrassement voisins ou le tassement du terrain. Traitement : bande calicot armée + enduit, 8-12€/m² en supplément.' },
      { icon: '🏠', title: 'Grandes surfaces à peindre (villas 4 façades)', desc: 'Les villas 4 façades de Waterloo, Braine-l\'Alleud, Lasne, Rixensart ont des surfaces intérieures importantes (300-500 m² de murs + 100-200 m² de plafonds). Le budget est conséquent (6 000-15 000€) mais le rafraîchissement augmente significativement la valeur de revente (+3-5%).' },
      { icon: '🔧', title: 'Enduits projetés "gouttelette" des années 80-90', desc: 'Les enduits projetés (type "gouttelette", "crépis tyrolien") sont omniprésents dans les lotissements du BW. Solution moderne : ratissage complet à l\'enduit de lissage (Gyproc, Toupret) pour obtenir un mur parfaitement lisse, puis peinture mate. Coût : 18-25€/m² tout compris.' },
    ],
    'Anvers': [
      { icon: '🏙️', title: 'Afbladderende verf door vochtproblemen', desc: 'Veel oudere rijwoningen in Antwerpen (Borgerhout, Berchem, Deurne) hebben oprijzend vocht dat verf doet afbladderen in de onderste 40-60 cm van de muur. Een professionele vochtbehandeling (injectie, waterdichte pleister) kost €50-80/m maar is essentieel vóór het schilderen.' },
      { icon: '🎨', title: 'Art Nouveau/Deco sierlijsten nauwkeurig schilderen', desc: 'De typische Zurenborg-woningen, Cogels-Osylei panden en andere Art Nouveau/Art Deco gebouwen vereisen vakkundig handwerk: sierlijsten, rozetten, profielen en friezen moeten nauwkeurig worden geschilderd met penseel en kleine roller. Reken op 30-50% meerkosten t.o.v. standaard schilderwerk.' },
      { icon: '📜', title: 'Meerdere lagen oud behang (vinyl, papier)', desc: 'De meeste Antwerpse woningen gebouwd vóór 1990 hebben 2-4 lagen oud behang, soms vinyl over papier. Professionele verwijdering met stoomapparaat is tijdrovend (1-2 dagen per kamer) maar essentieel voor een duurzaam resultaat. Kost: €8-15/m² extra.' },
    ],
    'Brabant flamand': [
      { icon: '📐', title: 'Gyproc-scheuren door verzakking', desc: 'Woningen met Gyproc-wanden in verkavelingen (Zaventem, Tervuren, Overijse) vertonen regelmatig scheuren op de naden, vaak veroorzaakt door zetting van het gebouw of trillingen van nabijgelegen bouwwerken. Behandeling: wapenweefsels + gladplamuur, €8-12/m² extra.' },
      { icon: '🏠', title: 'Opfrissing voor verkoop (ROI-gedreven)', desc: 'De hoge vastgoedprijzen in Vlaams-Brabant (gemiddeld €350.000-500.000 voor een woning) maken dat eigenaars investeren in professioneel schilderwerk vóór de verkoop. Een investering van €4.000-8.000 in fris schilderwerk kan de verkoopprijs met €15.000-25.000 verhogen.' },
      { icon: '🔧', title: 'Verouderd spuitpleisterwerk gladmaken', desc: 'De "druppeltjes"-textuur (spuitpleisterwerk) in woningen uit 1980-95 is moeilijk schoon te houden en ziet er gedateerd uit. Moderne oplossing: glad plamuren in 2-3 lagen (Gyproc, Toupret) + 2 lagen matte latex = strakke, hedendaagse look. Kost: €20-28/m².' },
    ],
    'Flandre-Occidentale': [
      { icon: '🌊', title: 'Zilte lucht tast houtwerk versneld aan', desc: 'Aan de kust en binnen 15 km van de zee tast de zilte, vochtige lucht houtwerk (ramen, deuren, luiken, dakgoten) 2-3x sneller aan dan in het binnenland. Kwalitatieve alkydlak (Sikkens Rubbol BL) of hoogwaardige acryllak met UV-filter is essentieel. Budget buitenhoutwerk: €15-30/ml.' },
      { icon: '💧', title: 'Chronische schimmelvorming (hoge luchtvochtigheid)', desc: 'De constante hoge luchtvochtigheid (75-85%) in West-Vlaanderen bevordert hardnekkige schimmelvorming in badkamers, keukens en onverwarmde kamers. Behandeling: schimmelbestrijding (bleekwater of professioneel fongicide) + anti-schimmelverf (Sigma AMF, Levis Anti-Schimmel). Jaarlijks preventief: goede ventilatie.' },
      { icon: '🎨', title: 'Snelle verkleuring buitenverf door UV (kustlicht)', desc: 'Het intense kustlicht (meer zonuren, reflectie van zee en zand) veroorzaakt 30-40% snellere verkleuring van gekleurd buitenschilderwerk. Kies UV-bestendige verf met hoge pigmentconcentratie. Licht getinte kleuren (wit, crème, lichtgrijs) verkleuren minder snel.' },
    ],
    'Flandre-Orientale': [
      { icon: '🏚️', title: 'Oprijzend vocht in rijwoningen', desc: 'Veel rijwoningen in Gent, Aalst en Dendermonde (gebouwd 1880-1940) hebben oprijzend vocht in de gelijkvloerse verdieping door gebrek aan een vochtscherm. De verf bladdert af, er verschijnt witte uitbloei (zouten) en zwarte schimmel. Vochtbehandeling (injectie + cementpleister) is stap 1 vóór elk schilderwerk.' },
      { icon: '🏗️', title: 'Industriële lofts: grote oppervlakten, hoge plafonds', desc: 'De trend van industriële lofts in gerenoveerde textielfabrieken en pakhuizen (vooral in Gent, langs de Coupure en in het Rabot) vereist schilderwerk op grote schaal: 200-500 m² muren, plafonds op 4-6m hoogte (stelling nodig), balken en metalen structuren. Budget: €8.000-20.000.' },
      { icon: '📜', title: 'Historische panden: kalkverf verplicht', desc: 'Gent (Patershol, Graslei) en Dendermonde hebben veel geklasseerde panden waar het gebruik van moderne latexverf verboden is. Minerale verf (silicaatverf Keim) of kalkverf is verplicht. Een gespecialiseerde monumentenschilder rekent 40-60% meer dan een standaard schilder.' },
    ],
    'Limbourg': [
      { icon: '🏘️', title: 'Tuinwijken en cité-woningen: volledige opfrissing', desc: 'De mijnwerkerswoningen en tuinwijken (Winterslag, Waterschei, Zwartberg in Genk, Be-Mine in Beringen) bieden compacte, eenvoudige interieurs (60-90 m²) die zich perfect lenen voor een totale opfrissing. Budget: €2.000-4.500 voor een volledige woning. De investering verhoogt de huurwaarde met 15-20%.' },
      { icon: '🌡️', title: 'Grote temperatuurschommelingen (condensatierisico)', desc: 'Limburg kent het meest continentale klimaat van België: koude winters (-10°C mogelijk) en warme zomers (35°C+). De grote temperatuurverschillen veroorzaken meer condensatie op binnenmuren in de winter, vooral in onvoldoende geïsoleerde woningen. Schimmelpreventie: ventilatie + verwarming + anti-condensverf.' },
      { icon: '🎨', title: 'Strakke, moderne afwerking (gladplamuur + mat latex)', desc: 'De Limburgse trend is een strakke, hedendaagse look: glad geplamuurd (alle oneffenheden weg), 2-3 lagen matte latex in neutrale tinten (wit, greige, zacht grijs). Dit vereist een perfecte voorbereiding — elke oneffenheid is zichtbaar onder mat licht. Prijs: €22-30/m² all-in.' },
    ],
  };

  // Select problems. For small communes, add a 4th rural-specific tip
  const baseProbProbs = provinceProblems[prov] || provinceProblems['Brabant wallon'];
  const problems = [...baseProbProbs];

  if (cat === 'rural' || cat === 'bourg') {
    problems.push({
      icon: '🚗',
      title: 'Frais de déplacement en zone rurale',
      desc: `En zone rurale comme ${commune.name}, les peintres facturent parfois un supplément de déplacement (20-50€ par jour) si la distance depuis leur atelier dépasse 25 km. Pour compenser, regroupez murs + plafonds + boiseries en un seul chantier — le peintre économise en déplacements et vous bénéficiez d'un meilleur tarif global.`,
    });
  }

  return { problems };
}

// ============================================
// 8. "LE SAVIEZ-VOUS?" — 25 rotating facts
// ============================================
export function getDidYouKnow(commune: Commune): string {
  const m = getProvincePriceMultiplier(commune.province_name);
  const facts = [
    `Un bon peintre, c'est 80% de préparation et 20% de peinture. À ${commune.name}, les peintres professionnels consacrent en moyenne 2 jours de préparation (ponçage, enduit, sous-couche) pour 1 jour de peinture de finition.`,
    `En Belgique, la TVA sur les travaux de peinture passe de 21% à 6% pour les habitations de plus de 10 ans. Sur un chantier de 5 000€ à ${commune.name}, c'est une économie immédiate de 750€ — soit l'équivalent d'une chambre supplémentaire.`,
    `Un litre de peinture de qualité (Levis Ambiance, Sikkens Alpha, Sigma S2U) couvre en moyenne 10-12 m² en 2 couches. Pour peindre une pièce standard de 15 m² au sol (soit ~50 m² de murs + plafond), il faut environ 5 litres, soit 25-40€ de peinture.`,
    `La peinture acrylique (latex) sèche en 1-2 heures et peut recevoir une 2e couche après 6h, contre 12-24 heures pour la peinture alkyde. En ${commune.province_name}, le latex représente aujourd'hui 92% des ventes pour l'intérieur (source : Fédération des entrepreneurs de peinture belges).`,
    `Le blanc représente 58% des peintures murales vendues en Belgique, suivi du gris clair (16%), du beige/greige (11%) et des couleurs profondes (15% — bleu nuit, vert sauge, terracotta). Les couleurs tendance 2026 en ${commune.province_name} : Sage Green, Warm Cognac, et Dusty Blue.`,
    `Les peintres en ${commune.province_name} sont souvent réservés 3 à 6 semaines à l'avance pendant la haute saison (mars-juin). Pour obtenir les meilleurs prix à ${commune.name}, demandez des devis en basse saison (novembre-février) — les tarifs peuvent être 10-15% inférieurs.`,
    `Une rénovation par la peinture est l'investissement le plus rentable en immobilier : un rafraîchissement intérieur complet (budget moyen ${Math.round(5000 * m)}€) peut augmenter la valeur de revente d'une maison à ${commune.name} de ${Math.round(15000 * m)}€ à ${Math.round(25000 * m)}€, soit un retour de 3 à 5x.`,
    `La sous-couche (primer) est l'investissement le plus rentable en peinture. Elle assure l'adhérence, bloque les taches et réduit la consommation de peinture de finition de 25 à 30%. Sur un chantier moyen, elle coûte 100-200€ de plus mais économise 300-400€ de peinture de finition.`,
    `En ${commune.region}, la finition mat velouté est la plus populaire pour les murs de séjour (62% des projets) car elle masque les imperfections. Le satin est privilégié pour les cuisines et salles de bain (lavable, résistant à l'humidité), et le brillant (laque) exclusivement pour les boiseries, portes et plinthes.`,
    `Un peintre professionnel à ${commune.name} peint en moyenne 25-35 m² de murs par jour (2 couches, préparation comprise). Pour une maison complète de 200 m² au sol (~500 m² de surfaces), comptez 12-18 jours ouvrables de travail.`,
    `Les peintures écologiques (écolabel européen, norme A+) ne coûtent que 5-10% de plus que les peintures conventionnelles mais émettent 10x moins de COV (Composés Organiques Volatils). En ${commune.province_name}, les marques Levis (Ambiance), Sikkens (Alpha) et Sigma (S2U) proposent toutes des gammes éco-labellisées.`,
    `La température idéale pour peindre est entre 15°C et 22°C, avec une humidité relative inférieure à 70%. En dessous de 10°C, la peinture sèche mal ; au-dessus de 30°C, elle sèche trop vite et laisse des traces. À ${commune.name}, les mois de mai, juin et septembre offrent les meilleures conditions.`,
    `Le coût de la main-d'œuvre représente 60 à 70% du budget total d'un chantier de peinture. La peinture elle-même ne représente que 15-20%, et la préparation (enduit, sous-couche, bâchage) 10-15%. Choisir une peinture plus chère (+50€) n'augmente le budget total que de 1-2%.`,
    `85% des sinistres de peinture (écaillage, cloques, décollement) sont dus à un défaut de préparation du support, et non à la qualité de la peinture elle-même. À ${commune.name}, exigez que votre peintre réalise un test d'adhérence (scotch-test) sur l'ancien revêtement avant de commencer.`,
    `Les peintres belges sont tenus légalement de fournir une garantie décennale sur leurs travaux (responsabilité civile professionnelle). Assurez-vous que le peintre choisi à ${commune.name} dispose bien d'une assurance RC Pro et d'une inscription active à la BCE (Banque Carrefour des Entreprises).`,
    `Le rendement d'un rouleau de peinture dépend de la longueur des poils : poils courts (4-6 mm) pour les surfaces lisses (Gyproc), poils moyens (8-12 mm) pour les surfaces légèrement texturées, poils longs (15-20 mm) pour les enduits projetés et crépis. Le mauvais choix de rouleau = 30% de peinture gaspillée.`,
    `En Belgique, il est interdit de réaliser des travaux de peinture bruyants (ponçage mécanique, décapage thermique, sablage) le dimanche et les jours fériés. En semaine, les horaires sont généralement limités à 7h-19h. Certaines communes de ${commune.province_name} ont des règlements plus stricts.`,
    `Les peintures mates ne sont PAS lavables — un frottement humide laissera une trace brillante permanente. En cuisine et salle de bain à ${commune.name}, choisissez impérativement un satin (lavable au chiffon humide) ou un satin mat (compromis entre esthétique mate et résistance). Les marques Levis, Sikkens et Sigma proposent des "mat lavables".`,
    `Peindre par-dessus du papier peint est déconseillé : la peinture mouille le papier qui peut se décoller, créant des bulles. Si vous devez le faire en urgence, utilisez une sous-couche acrylique épaisse (Levis, Trimetal) qui crée une barrière imperméable. Mais la vraie solution est de décoller le papier puis peindre.`,
    `Le prix d'un pot de peinture professionnelle (10 litres) varie de 35€ (entrée de gamme, Levis Latex) à 120€ (premium, Sikkens Alpha BL Mat). La différence ? Pouvoir couvrant (combien de m²), opacité (nombre de couches nécessaires), résistance au lavage, et durée dans le temps. Sur un projet moyen, le surcoût en peinture premium représente 200-400€ pour un résultat qui dure 2 fois plus longtemps.`,
    `La peinture au plafond est plus chère que les murs (+25-40%) car le peintre travaille en position inconfortable (bras tendus vers le haut), le risque de coulures est plus élevé, et la technique de croisement des passes est cruciale pour éviter les traces. À ${commune.name}, comptez 20-35€/m² pour les plafonds vs 15-25€/m² pour les murs.`,
    `50% des peintres en ${commune.province_name} sont des indépendants (souvent d'anciens ouvriers qualifiés), 40% sont des PME (2-5 employés) et 10% sont des grandes entreprises (10+ employés). Les indépendants offrent généralement le meilleur rapport qualité/prix pour les petits chantiers (1-3 pièces), tandis que les PME sont plus compétitives pour les projets complets.`,
    `La durée de vie d'une peinture intérieure de qualité est de 8-12 ans en pièce sèche (salon, chambre) et de 5-7 ans en pièce humide (cuisine, salle de bain). En extérieur, comptez 6-10 ans pour une façade peinte et 4-6 ans pour les boiseries. À ${commune.name}, le climat de ${commune.province_name} peut réduire ces durées de 10-20%.`,
    `Vous pouvez déduire fiscalement certains travaux de peinture réalisés par un professionnel enregistré. En Belgique, les chèques-service ne couvrent pas la peinture, mais la TVA réduite (6% vs 21%) pour les logements de 10+ ans représente une économie significative. Pour un chantier de ${Math.round(8000 * m)}€ à ${commune.name}, l'économie TVA est de ${Math.round(1200 * m)}€.`,
    `Le temps de séchage "au toucher" (1-2h pour l'acrylique) ne signifie pas que la peinture est durcie. Le séchage complet (durcissement) prend 2-4 semaines. Pendant cette période, évitez de frotter les murs, d'accrocher des tableaux ou de coller du ruban adhésif. La peinture à ${commune.name} durcit plus lentement en hiver (forte humidité) qu'en été.`,
  ];

  return facts[hashCode(commune.name + commune.zip) % facts.length];
}

// ============================================
// 9. NEARBY COMMUNES — Haversine
// ============================================
export function getNearbyCommunes(commune: Commune, limit: number = 8): Commune[] {
  const toRad = (d: number) => d * Math.PI / 180;
  const haversine = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
    return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  };

  const sameLanguageCommunes = commune.region === 'Flandre'
    ? communes.filter(c => c.region === 'Flandre' || c.region === 'Bruxelles-Capitale')
    : communes.filter(c => c.region === 'Wallonie' || c.region === 'Bruxelles-Capitale');

  return sameLanguageCommunes
    .filter(c => c.slug !== commune.slug)
    .map(c => ({ commune: c, distance: haversine(commune.coordinates.lat, commune.coordinates.lng, c.coordinates.lat, c.coordinates.lng) }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, limit)
    .map(c => c.commune);
}

// ============================================
// 10. LOCAL PRACTICAL TIP — Per province + category
// ============================================
export function getLocalTip(commune: Commune): string {
  const cat = getCommuneCategory(commune.population);
  const prov = commune.province_name;

  const provinceTips: Record<string, string> = {
    'Bruxelles-Capitale': `À ${commune.name}, les travaux de peinture dans les copropriétés nécessitent l'accord de l'assemblée générale pour les parties communes (cage d'escalier, hall d'entrée, façade). Pour votre appartement, vérifiez que le peintre utilise des peintures à faible odeur (acrylique/latex, norme A+) — les règlements de copropriété interdisent souvent les solvants puissants. Demandez au syndic les horaires autorisés pour les travaux bruyants (ponçage, décapage).`,
    'Hainaut': `Les maisons en briques rouges typiques du Hainaut ont souvent des murs intérieurs recouverts de multiples couches de papier peint (parfois 4-5 épaisseurs datant des années 70 à 2000). Demandez au peintre un devis séparé pour la dépose du papier peint : comptez 8-15€/m² en supplément. À ${commune.name}, un bon peintre commencera toujours par un test de dépose sur un petit pan de mur (30x30 cm) pour évaluer la difficulté et ajuster son devis — méfiez-vous des forfaits "surprise".`,
    'Liège': `En province de Liège, les murs en pierre calcaire ou en grès des maisons anciennes (avant 1930) ne doivent jamais recevoir de peinture acrylique imperméable — elle emprisonne l'humidité naturelle du mur et provoque des dégâts structurels. Privilégiez une peinture minérale au silicate de potassium (Keim Biosil, Beeck) ou un badigeon traditionnel à la chaux. Les peintres spécialisés en patrimoine à ${commune.name} et en ${commune.province_name} connaissent ces contraintes. Demandez explicitement "Quelle peinture utilisez-vous sur mur en pierre ?".`,
    'Luxembourg': `En Ardenne, les fermes et maisons anciennes à ${commune.name} ont des murs épais (50-60 cm de moellons enduits) qui "respirent" — c'est-à-dire qu'ils régulent naturellement l'humidité entre l'intérieur et l'extérieur. Utilisez exclusivement des peintures perméables à la vapeur d'eau : peinture au silicate (Keim), à la chaux naturelle (Ressource, Argilus), ou acrylique microporée. Le chauffage doit être en marche 48h avant ET après les travaux pour un séchage correct des murs.`,
    'Namur': `Pour les maisons anciennes du Namurois (pierre de Meuse, moellons calcaires), demandez au peintre de réaliser un diagnostic d'humidité avec un humidimètre avant d'établir son devis — c'est gratuit et ça évite les mauvaises surprises. Un mur humide (>5% d'humidité résiduelle) ne retiendra pas la peinture. À ${commune.name}, les problèmes d'humidité sont particulièrement fréquents dans les rez-de-chaussée des maisons en bord de Meuse et de Sambre, ainsi que dans les caves aménagées.`,
    'Brabant wallon': `Les villas 4 façades du Brabant wallon offrent de très grandes surfaces intérieures (300-500 m² de murs + plafonds). À ${commune.name}, négociez un prix au m² dégressif : au-delà de 200 m², les peintres sérieux appliquent une remise de 10-15% car le chantier est plus rentable (moins de déplacements, moins de protection à installer). Regroupez murs + plafonds + portes en un seul lot pour maximiser la remise. Demandez un planning précis pièce par pièce.`,
    'Anvers': `In ${commune.name} is het bij vochtproblemen essentieel om eerst een gespecialiseerde vochtexpert (niet de schilder zelf) te raadplegen. Een professionele vochtmeting en diagnose kost €100-200 maar bespaart u duizenden euro's aan mislukt schilderwerk. Schilderen over een vochtig oppervlak is letterlijk weggegooid geld — de verf zal binnen 3-6 maanden afbladderen, schimmelen en loskomen. Vraag de vochtexpert om een schriftelijk rapport met aanbevelingen.`,
    'Brabant flamand': `In ${commune.name} laten veel eigenaars hun woning professioneel schilderen vóór de verkoop — en terecht. Tip: kies neutrale, tijdloze kleuren (RAL 9010 wit, lichtgrijs NCS S 1002-Y, greige NCS S 1505-Y20R) die het breedste koperspubliek aanspreken. Vermijd persoonlijke kleurkeuzes (donkerrood, felblauw) die potentiële kopers afschrikken. Een professionele verfbeurt van €4.000-7.000 kan de verkoopprijs verhogen met €15.000-25.000 — dat is een ROI van 3-5x.`,
    'Flandre-Occidentale': `Aan de kust en in West-Vlaanderen is de keuze van buitenverf letterlijk beslissend voor de levensduur. In ${commune.name} raden ervaren schilders UV-bestendige alkydlak aan voor houtwerk (Sikkens Rubbol BL, Sigma S2U Satin) en siloxane-verf voor buitenmuren (Sigma Façade Siloxane, Sikkens Alpha Façade). De meerkosten van 20-30% voor kwaliteitsverf betalen zich dubbel en dik terug: levensduur van 12 jaar vs 5-6 jaar voor goedkope verf. Bespaar nooit op verf aan de kust.`,
    'Flandre-Orientale': `In ${commune.name} is het bij oudere panden (vóór 1990) essentieel om ALLE lagen oud behang volledig te verwijderen voordat u laat schilderen. Overschilderen van behang (zelfs met speciale behangverf) is een noodoplossing die na 1-3 jaar problemen veroorzaakt: bubbels, scheuren langs de naden, vergeeld papier dat door de verf schijnt. Investeer in een professionele behangverwijdering (€8-15/m²) voor een resultaat dat 10+ jaar meegaat.`,
    'Limbourg': `De tuinwijken en cité-woningen rond de voormalige mijnzetels in ${commune.name} zijn ideaal voor een volledige opfrissing — de compacte, rechte ruimtes (weinig hoeken, standaard plafonds) zijn efficiënt te schilderen. Tip: combineer muren, plafonds EN houtwerk (deuren, plinten, raamkozijnen) in één offerte — de meeste schilders geven 10-20% pakketkorting omdat ze efficiënter kunnen werken (één keer installeren, één keer opruimen).`,
  };

  let tip = provinceTips[prov] || provinceTips['Brabant wallon'];

  if (cat === 'grande_ville' || cat === 'ville_moyenne') {
    tip += ` En ville à ${commune.name}, vérifiez la réglementation communale sur les horaires de travaux bruyants (ponçage, décapage) — généralement limités à 7h-19h en semaine et 8h-12h le samedi. Informez vos voisins avant le début des travaux.`;
  }

  return tip;
}

// ============================================
// 11. EXTERNAL LINKS — Mairie + province
// ============================================
export function getExternalLinks(commune: Commune): Array<{ label: string; url: string; icon: string }> {
  const links: Array<{ label: string; url: string; icon: string }> = [];

  // Mairie link
  const mairieSlug = commune.name.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
  links.push({
    label: `Commune de ${commune.name} — Site officiel`,
    url: `https://www.${mairieSlug}.be`,
    icon: '🏛️',
  });

  // Province link
  const provinceLinks: Record<string, { label: string; url: string }> = {
    'Bruxelles-Capitale': { label: 'Région de Bruxelles-Capitale', url: 'https://www.bruxelles.be' },
    'Hainaut': { label: 'Province de Hainaut', url: 'https://www.hainaut.be' },
    'Liège': { label: 'Province de Liège', url: 'https://www.provincedeliege.be' },
    'Luxembourg': { label: 'Province de Luxembourg', url: 'https://www.province.luxembourg.be' },
    'Namur': { label: 'Province de Namur', url: 'https://www.province.namur.be' },
    'Brabant wallon': { label: 'Province du Brabant wallon', url: 'https://www.brabantwallon.be' },
    'Anvers': { label: 'Provincie Antwerpen', url: 'https://www.provincieantwerpen.be' },
    'Brabant flamand': { label: 'Provincie Vlaams-Brabant', url: 'https://www.vlaamsbrabant.be' },
    'Flandre-Occidentale': { label: 'Provincie West-Vlaanderen', url: 'https://www.west-vlaanderen.be' },
    'Flandre-Orientale': { label: 'Provincie Oost-Vlaanderen', url: 'https://www.oost-vlaanderen.be' },
    'Limbourg': { label: 'Provincie Limburg', url: 'https://www.limburg.be' },
  };
  const provLink = provinceLinks[commune.province_name];
  if (provLink) links.push({ ...provLink, icon: '📍' });

  return links;
}

// ============================================
// 12. BRAND RECOMMENDATIONS — Per project type seeded by commune
// ============================================
export function getBrandRecommendations(commune: Commune): Array<{ project: string; brand: string; product: string; price: string; tip: string }> {
  const brands = [
    { project: 'Murs séjour/chambre (mat)', brand: 'Levis', product: 'Ambiance Mur Extra Mat', price: '45-55€/10L', tip: 'Velouté, haute opacité, masque les imperfections. Idéal pour les pièces de vie. Séchage 2h.' },
    { project: 'Murs séjour/chambre (mat)', brand: 'Sikkens', product: 'Alpha BL Mat', price: '50-65€/10L', tip: 'Finition mate profonde, excellente couvrance. Disponible en 1 500 teintes NCS. Qualité supérieure.' },
    { project: 'Cuisine/salle de bain (satin)', brand: 'Sigma', product: 'S2U Nova Satin', price: '55-70€/10L', tip: 'Satin lavable, résistant à l\'humidité et aux taches de graisse. Anti-moisissure intégré.' },
    { project: 'Cuisine/salle de bain (satin)', brand: 'Levis', product: 'Expert Satin', price: '50-60€/10L', tip: 'Satin haut rendement, lavable 10 000+ cycles. Résistant aux produits ménagers courants.' },
    { project: 'Plafonds (mat ultra)', brand: 'Levis', product: 'Plafond Extra Mat', price: '40-50€/10L', tip: 'Spécial plafond : séchage rapide, anti-traces, mat absolu. Application en passes croisées.' },
    { project: 'Portes/boiseries (laque)', brand: 'Sikkens', product: 'Rubbol BL Satin', price: '35-45€/2.5L', tip: 'Laque à l\'eau, satin brillant, ultra-résistante. Idéale pour portes, plinthes, châssis.' },
    { project: 'Portes/boiseries (laque)', brand: 'Trimetal', product: 'Permalux NT Satin', price: '30-40€/2.5L', tip: 'Laque alkyde modifiée, durcit très dur. Excellente résistance aux chocs et aux rayures.' },
    { project: 'Sous-couche (primer)', brand: 'Trimetal', product: 'Magnafix', price: '30-40€/10L', tip: 'Sous-couche fixante universelle. Consolide les supports farineux, bloque les taches, améliore l\'adhérence.' },
    { project: 'Façade extérieure', brand: 'Sigma', product: 'Façade Siloxane', price: '55-70€/10L', tip: 'Peinture siloxane hydrophobe + perméable à la vapeur. Idéale pour le climat belge. 12-15 ans.' },
    { project: 'Anti-moisissure', brand: 'Sigma', product: 'AMF (Anti-Moisissure Fongicide)', price: '45-55€/5L', tip: 'Peinture fongicide active 5 ans. Indispensable en salle de bain, cuisine, cave habitable.' },
  ];

  // Pick 4-5 brands based on commune hash
  const h = hashCode(commune.name + commune.zip);
  const selected: typeof brands = [];
  const indices = new Set<number>();
  for (let i = 0; i < 5; i++) {
    const idx = (h + i * 7) % brands.length;
    if (!indices.has(idx)) {
      indices.add(idx);
      selected.push(brands[idx]);
    }
  }
  return selected;
}

// ============================================
// 13. PROJECT EXAMPLES — Localized scenarios
// ============================================
export function getProjectExamples(commune: Commune): Array<{ title: string; desc: string; budget: string; duree: string; icon: string }> {
  const cat = getCommuneCategory(commune.population);
  const m = getProvincePriceMultiplier(commune.province_name);

  const allExamples = [
    { title: 'Rafraîchissement chambre 12 m²', desc: `Ponçage léger, 2 couches mat blanc (Levis Ambiance) sur murs et plafond. Incluant protection des sols et meubles.`, budget: `${Math.round(350 * m)}€ – ${Math.round(650 * m)}€`, duree: '1 jour', icon: '🛏️' },
    { title: 'Cuisine complète (murs + plafond satin)', desc: `Dégraissage, sous-couche, 2 couches satin lavable (Sigma S2U Nova) sur murs + 2 couches mat au plafond. Anti-moisissure derrière l'évier et les plaques.`, budget: `${Math.round(800 * m)}€ – ${Math.round(1500 * m)}€`, duree: '2-3 jours', icon: '🍳' },
    { title: 'Séjour ouvert 35 m² au sol', desc: `Préparation (rebouchage fissures, ponçage), sous-couche + 2 couches mat velouté (Sikkens Alpha) sur murs. Plafond 2 couches extra mat. Moulures à la laque si présentes.`, budget: `${Math.round(1500 * m)}€ – ${Math.round(3000 * m)}€`, duree: '3-4 jours', icon: '🛋️' },
    { title: 'Appartement complet 80 m²', desc: `Toutes les pièces : séjour, 2 chambres, cuisine, salle de bain, couloir. Murs + plafonds en 2 couches. Laquage 4 portes intérieures + plinthes.`, budget: `${Math.round(3500 * m)}€ – ${Math.round(6500 * m)}€`, duree: '6-8 jours', icon: '🏢' },
    { title: 'Maison 4 façades — rénovation complète', desc: `Préparation complète (enduit, sous-couche), 2 couches sur tous les murs et plafonds. Laquage 8 portes, plinthes, escalier. Protection et nettoyage.`, budget: `${Math.round(7000 * m)}€ – ${Math.round(15000 * m)}€`, duree: '12-18 jours', icon: '🏠' },
    { title: 'Laquage cage d\'escalier complète', desc: `Ponçage, sous-couche, 2-3 couches laque satin (Sikkens Rubbol) sur main courante, barreaux, limon, plinthes. Murs de la cage d'escalier : 2 couches satin lavable.`, budget: `${Math.round(1200 * m)}€ – ${Math.round(2500 * m)}€`, duree: '3-5 jours', icon: '🪜' },
  ];

  // Pick 4 examples based on commune category
  if (cat === 'grande_ville' || cat === 'ville_moyenne') {
    return [allExamples[3], allExamples[2], allExamples[1], allExamples[5]];
  } else if (cat === 'petite_ville') {
    return [allExamples[4], allExamples[2], allExamples[0], allExamples[1]];
  } else {
    return [allExamples[4], allExamples[0], allExamples[1], allExamples[5]];
  }
}

// ============================================
// 14. PREPARATION CHECKLIST — Localized
// ============================================
export function getPreparationChecklist(commune: Commune): Array<{ step: string; detail: string; cost: string }> {
  const zone = getClimaticZone(commune);
  const checklist = [
    { step: 'Diagnostic d\'humidité', detail: 'Mesurer le taux d\'humidité résiduelle des murs avec un humidimètre numérique. Seuil max : 5%.', cost: 'Inclus dans le devis' },
    { step: 'Rebouchage des fissures et trous', detail: 'Enduit de rebouchage (Polyfilla, Toupret) pour les fissures < 2mm et les trous de cheville.', cost: '5-10€/m²' },
    { step: 'Ponçage des murs', detail: 'Papier abrasif grain 120-150 sur toutes les surfaces. Dépoussiérage soigneux après ponçage.', cost: 'Inclus' },
    { step: 'Application sous-couche (primer)', detail: 'Sous-couche fixante sur les murs farineux, tachés ou neufs. Améliore l\'adhérence de 50%.', cost: '4-8€/m²' },
    { step: 'Protection sols et meubles', detail: 'Bâches plastique sur les sols, film de protection sur les meubles restants. Ruban de masquage.', cost: 'Inclus' },
  ];

  if (zone === 'ardennes' || zone === 'cotiere') {
    checklist.splice(1, 0, {
      step: 'Traitement anti-moisissure',
      detail: 'Application de fongicide professionnel sur les zones noires (angles, salle de bain). Temps de séchage : 24h.',
      cost: '8-15€/m²',
    });
  }

  return checklist;
}

// ============================================
// 15. ENHANCED FAQ — 8-10 questions per commune
// ============================================
export function getEnhancedFAQ(commune: Commune): Array<{ question: string; answer: string }> {
  const priceRange = getPriceRange(commune.region);
  const m = getProvincePriceMultiplier(commune.province_name);
  const arch = getArchitecturalContext(commune);
  const climate = getClimaticInfo(commune);
  const cat = getCommuneCategory(commune.population);

  const faq: Array<{ question: string; answer: string }> = [
    {
      question: `Combien coûte un peintre à ${commune.name} (${commune.zip}) en 2026 ?`,
      answer: `À ${commune.name}, les peintres en ${commune.province_name} facturent entre ${priceRange.min}€ et ${priceRange.max}€/m² pour une peinture intérieure (2 couches sur murs préparés). Pour les plafonds, comptez 20 à 35€/m². Pour le laquage de portes, 30 à 55€/porte. Le tarif horaire moyen d'un peintre indépendant en ${commune.province_name} est de ${Math.round(30 * m)}€ à ${Math.round(42 * m)}€/h (HTVA). Budget total : appartement 80 m² = ${Math.round(2500 * m)}€ à ${Math.round(5000 * m)}€ | maison 150 m² = ${Math.round(5000 * m)}€ à ${Math.round(12000 * m)}€. TVA : 6% pour les maisons de 10+ ans, 21% pour le neuf.`,
    },
    {
      question: `Quelle peinture choisir pour les murs à ${commune.name} ?`,
      answer: `Pour les intérieurs à ${commune.name}, les marques de référence en ${commune.province_name} sont : Levis (Ambiance Mur Extra Mat pour les séjours, Expert Satin pour les pièces d'eau), Sikkens (Alpha BL Mat — qualité supérieure, 1 500 teintes NCS), Sigma (S2U Nova Satin — excellent rapport qualité/prix) et Trimetal (Magnacryl — entrée de gamme professionnelle). Choix de finition : MAT pour séjours et chambres (masque les défauts), SATIN pour cuisines et salles de bain (lavable), LAQUE pour portes et boiseries. Budget peinture seule : 3,50€ à 7€/m² (qualité pro).`,
    },
    {
      question: `Quels types de murs sont les plus courants à ${commune.name} ?`,
      answer: `À ${commune.name} (${commune.province_name}), les surfaces intérieures typiques sont : ${arch.surfaceType.toLowerCase()}. La période de construction dominante est ${arch.yearRange}. Le type de préparation dépend de l'état : un simple ponçage + sous-couche suffit sur un mur en bon état (5-10€/m²), tandis qu'un ratissage complet est nécessaire sur un mur très abîmé (15-25€/m²). Demandez à votre peintre un diagnostic gratuit avant devis.`,
    },
    {
      question: `Combien de temps durent les travaux de peinture pour une maison à ${commune.name} ?`,
      answer: `Délais moyens à ${commune.name} : salle de bain (1-2 jours), chambre (1-2 jours), séjour (2-3 jours), appartement complet 80 m² (5-8 jours ouvrables), maison complète 150 m² (10-18 jours). Ces durées incluent la préparation (ponçage, enduit, sous-couche) et 2 couches de finition. Facteurs qui allongent : dépose de papier peint (+1-2 jours), traitement humidité (+2-3 jours), ratissage complet (+3-5 jours). En haute saison (mars-juin), les peintres en ${commune.province_name} sont généralement disponibles sous 3-6 semaines.`,
    },
    {
      question: `Comment trouver un bon peintre à ${commune.name} et ${commune.province_name} ?`,
      answer: `Méthode en 4 étapes : 1) Demandez minimum 3 devis détaillés (via notre formulaire gratuit). 2) Vérifiez l'inscription active à la BCE (Banque Carrefour des Entreprises) et l'assurance RC professionnelle — demandez le numéro de police. 3) Exigez un devis détaillé : m² par pièce, nombre de couches, marque de peinture, préparation incluse, délais précis. 4) Demandez des photos de chantiers récents et des contacts de clients. Un bon peintre à ${commune.name} visite TOUJOURS le chantier avant de devisier — méfiez-vous des devis par téléphone ou par email sans visite.`,
    },
    {
      question: `Quelle est la meilleure saison pour faire peindre à ${commune.name} ?`,
      answer: climate.season + ` Les peintres en ${commune.province_name} sont moins demandés en hiver (novembre-février) : c'est le moment de négocier les meilleurs prix, avec des réductions de 10-15% possibles sur la main-d'œuvre.`,
    },
    {
      question: `Faut-il vider complètement les pièces avant les travaux de peinture ?`,
      answer: `Idéalement, videz au maximum (la pièce sera peinte plus rapidement et le résultat sera meilleur). Si impossible, regroupez les meubles au centre et couvrez-les d'une bâche plastique. Le peintre protégera les sols avec des bâches et les prises/interrupteurs avec du ruban de masquage. À ${commune.name}, la plupart des peintres professionnels incluent la protection du mobilier et des sols dans leur devis (vérifiez). Prévoyez de ne pas utiliser la pièce pendant 24-48h (séchage complet entre les couches).`,
    },
    {
      question: `Mat, satin ou brillant — quelle finition pour quelle pièce à ${commune.name} ?`,
      answer: `Guide des finitions pour votre maison à ${commune.name} : MAT VELOUTÉ (Levis Ambiance Extra Mat, Sikkens Alpha BL Mat) → séjour, salon, chambres — masque les imperfections, ambiance chaleureuse. NON lavable, réservé aux pièces sèches. SATIN (Levis Expert Satin, Sigma S2U Nova Satin) → cuisine, salle de bain, couloir, chambre d'enfants — lavable au chiffon humide, résiste aux éclaboussures. BRILLANT / LAQUE (Sikkens Rubbol BL, Trimetal Permalux) → portes, plinthes, châssis, escalier uniquement — ultra-résistant aux chocs et au lavage. Tendance 2026 en ${commune.province_name} : le mat velouté à toucher soyeux.`,
    },
  ];

  // Add a commune-specific question
  if (cat === 'grande_ville' || cat === 'ville_moyenne') {
    faq.push({
      question: `Y a-t-il des peintres spécialisés en copropriété à ${commune.name} ?`,
      answer: `Oui, à ${commune.name} plusieurs entreprises de peinture sont spécialisées dans les travaux en copropriété (halls d'entrée, cages d'escalier, façades d'immeubles). Pour les parties communes, un vote de l'assemblée générale des copropriétaires est nécessaire. Le syndic peut demander des devis pour les comparer. Les travaux de peinture des parties communes bénéficient aussi de la TVA à 6% si l'immeuble a plus de 10 ans.`,
    });
  } else {
    faq.push({
      question: `Les peintres se déplacent-ils dans les petites communes comme ${commune.name} ?`,
      answer: `Oui, les peintres de ${commune.province_name} couvrent l'ensemble de la province, y compris les communes rurales comme ${commune.name}. Certains peintres indépendants facturent un forfait de déplacement de 20-50€ si la distance dépasse 25 km, mais ce coût reste marginal sur un chantier moyen. Pour optimiser, regroupez vos travaux (murs + plafonds + portes) en un seul chantier — le peintre sera plus enclin à se déplacer et vous proposera un meilleur tarif global.`,
    });
  }

  faq.push({
    question: `Quel est le taux de TVA pour les travaux de peinture à ${commune.name} ?`,
    answer: `En Belgique, deux taux s'appliquent : TVA 6% si votre habitation à ${commune.name} a plus de 10 ans (calculé à partir du certificat de première occupation). Ce taux réduit s'applique à la main-d'œuvre ET aux matériaux fournis par le peintre (peinture, enduit, etc.). TVA 21% pour les constructions neuves (moins de 10 ans) ou si vous fournissez vous-même la peinture. Sur un chantier de ${Math.round(5000 * m)}€ à ${commune.name}, la différence est de ${Math.round(750 * m)}€ — soit le prix d'une chambre supplémentaire ! Conseil : demandez toujours au peintre de fournir la peinture pour bénéficier du taux réduit sur l'ensemble.`,
  });

  return faq;
}

// ============================================
// 16. REGION CONTEXT — Richer regional paragraphs
// ============================================
export function getRegionContext(commune: Commune): { title: string; content: string } {
  const regionContexts: Record<string, { title: string; content: string }> = {
    'Bruxelles-Capitale': {
      title: 'Le marché de la peinture en Région bruxelloise',
      content: `La Région de Bruxelles-Capitale concentre 1,2 million d'habitants sur 161 km², ce qui en fait la zone la plus dense de Belgique pour les travaux de peinture intérieure. Le parc immobilier est dominé par les immeubles de rapport (appartements), les maisons de maître converties et les constructions Art Nouveau/Art Déco (1890-1940). Les hauts plafonds (3-4 mètres), les moulures ornementales et les cages d'escalier monumentales sont des éléments architecturaux caractéristiques qui augmentent le coût des travaux de peinture de 15-25% par rapport à la moyenne nationale. Bruxelles est aussi la capitale des copropriétés : 65% des logements sont en copropriété, ce qui implique des procédures spécifiques (vote AG, cahier des charges, coordination avec le syndic) pour les travaux de peinture des parties communes. Le marché bruxellois compte plus de 800 entreprises de peinture enregistrées, avec une forte concurrence qui maintient des tarifs compétitifs malgré le coût de la vie élevé.`,
    },
    'Wallonie': {
      title: `Le marché de la peinture en ${commune.province_name}`,
      content: `La ${commune.province_name} est une province wallonne avec un parc immobilier varié, des centres historiques aux lotissements résidentiels. Le bâti ancien (avant 1945) représente environ 35-40% du parc et nécessite une préparation plus lourde (traitement humidité, enduit de ratissage, dépose de papier peint multicouche). Les constructions des années 1960-1990 (Gyproc, enduit projeté) sont les plus courantes et se prêtent bien à un rafraîchissement régulier. Le marché wallon de la peinture est caractérisé par un mix d'indépendants (60%), de PME familiales (30%) et de grandes entreprises (10%). Les tarifs en Wallonie sont en moyenne 10-15% inférieurs à Bruxelles, avec un excellent rapport qualité/prix. La TVA à 6% s'applique à la grande majorité des logements (80% du parc a plus de 10 ans).`,
    },
    'Flandre': {
      title: `De schildersmarkt in ${commune.province_name}`,
      content: `${commune.province_name} is een Vlaamse provincie met een uitgebreid aanbod aan schildersbedrijven en zelfstandige schilders. Het vastgoedbestand combineert historische panden, rijwoningen uit de 19e en 20e eeuw, en moderne verkavelingen. De Vlaamse schilder blinkt uit in vakmanschap en afwerking — de eisen liggen traditioneel hoog in Vlaanderen. De markt is goed georganiseerd: de meeste schilders zijn aangesloten bij een beroepsfederatie (Bouwunie, Confederatie Bouw) en beschikken over de nodige verzekeringen en erkenningen. De prijzen in Vlaanderen liggen gemiddeld 5-10% hoger dan in Wallonië, deels door hogere loonkosten en strengere kwaliteitseisen. Het BTW-tarief van 6% voor woningen ouder dan 10 jaar maakt professioneel schilderwerk voor de meeste eigenaars betaalbaar.`,
    },
  };

  return regionContexts[commune.region] || regionContexts['Wallonie'];
}

// ============================================
// 17. SEASONAL CALENDAR
// ============================================
export function getSeasonalCalendar(commune: Commune): Array<{ months: string; interieur: string; exterieur: string; tip: string }> {
  const zone = getClimaticZone(commune);
  const calendar = [
    { months: 'Janvier — Février', interieur: '✅ Possible (chauffage + ventilation)', exterieur: '❌ Déconseillé (gel, humidité)', tip: 'Meilleur moment pour demander des devis et négocier les prix (basse saison, -10-15%)' },
    { months: 'Mars — Avril', interieur: '✅ Idéal (températures douces)', exterieur: '⚠️ Possible à partir de mi-avril', tip: 'Haute saison : réservez votre peintre 4-6 semaines à l\'avance' },
    { months: 'Mai — Juin', interieur: '✅ Idéal', exterieur: '✅ Idéal', tip: 'Période la plus demandée — tarifs au maximum, disponibilité limitée' },
    { months: 'Juillet — Août', interieur: '⚠️ Chaleur + odeurs si présent', exterieur: '✅ Idéal', tip: 'Profitez des vacances pour faire peindre — pas de gêne quotidienne' },
    { months: 'Septembre — Octobre', interieur: '✅ Idéal', exterieur: '✅ Bon (septembre surtout)', tip: 'Excellent compromis prix/disponibilité. Préparez les pièces de vie pour l\'hiver' },
    { months: 'Novembre — Décembre', interieur: '✅ Possible (chauffage en marche)', exterieur: '❌ Déconseillé', tip: 'Basse saison : possibilité de négocier. Idéal pour planifier et frais de déplacement offerts' },
  ];

  if (zone === 'ardennes') {
    calendar[1].exterieur = '❌ Risque de gel nocturne';
    calendar[4].exterieur = '⚠️ Possible en septembre uniquement';
  }

  return calendar;
}

// ============================================
// 18. MAILLAGE EXTERNE — Cross-site links
// ============================================
export function getCrossSiteLinks(commune: Commune): Array<{ label: string; url: string; icon: string; desc: string }> {
  return [
    { label: 'Peinture façade', url: `https://prix-facade.be/facade/${commune.slug}/`, icon: '🧱', desc: 'Crépi, peinture façade extérieure' },
    { label: 'Traitement humidité', url: `https://traitement-humidite-belgique.be/`, icon: '💧', desc: 'Avant de peindre : traiter l\'humidité' },
    { label: 'Châssis & fenêtres', url: `https://prix-chassis-belgique.be/`, icon: '🪟', desc: 'Remplacer vos châssis + peinture' },
    { label: 'Isolation toiture', url: `https://prix-isolation-toiture.be/`, icon: '🏠', desc: 'Isolation + finition intérieure' },
  ];
}

// ============================================
// TVA info
// ============================================
export function getTVAInfo(): string {
  return 'TVA 6% pour les logements de 10+ ans (main-d\'œuvre + matériaux fournis par le peintre). TVA 21% pour le neuf ou si vous fournissez la peinture.';
}
