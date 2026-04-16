import type { Metadata } from 'next';
import FAQ from '../components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ Peinture Belgique — Questions Fréquentes',
  description: 'Toutes les réponses à vos questions sur les travaux de peinture en Belgique. Prix, finitions, préparation, TVA, délais.',
  alternates: { canonical: 'https://prix-peinture-belgique.be/faq/' },
};

const faqItems = [
  { question: 'Combien coûte un peintre en Belgique ?', answer: 'Le tarif moyen d\'un peintre est de 15 à 40€/m² pour l\'intérieur (2 couches) et 25 à 45€/h. Le prix varie selon la région, l\'état des murs et le type de finition.' },
  { question: 'Quelle est la TVA sur les travaux de peinture ?', answer: 'TVA 6% pour les habitations de plus de 10 ans (main-d\'œuvre + peinture fournie par le peintre). TVA 21% pour le neuf ou si vous fournissez la peinture.' },
  { question: 'Quelle peinture choisir pour l\'intérieur ?', answer: 'Acrylique (latex) mat pour les séjours et chambres, satin pour cuisines et salles de bain. Marques recommandées : Levis, Sikkens, Sigma, Trimetal.' },
  { question: 'Combien de temps pour peindre une maison ?', answer: '10 à 15 jours pour une maison complète (150 m²), incluant préparation et 2 couches. Un appartement de 80 m² prend 5-7 jours.' },
  { question: 'Faut-il une sous-couche ?', answer: 'Recommandée sur mur neuf, changement radical de couleur, ancien mur farineux, taches traitées ou bois neuf. Elle améliore l\'adhérence et réduit la consommation de peinture.' },
  { question: 'Mat, satin ou brillant ?', answer: 'Mat pour séjours/chambres (masque les imperfections), satin pour pièces humides (lavable), brillant (laque) pour boiseries et portes uniquement.' },
  { question: 'Quelle est la meilleure saison pour peindre ?', answer: 'Avril à octobre pour l\'extérieur. L\'intérieur peut se faire toute l\'année si la température est entre 15 et 25°C et la ventilation suffisante.' },
  { question: 'Comment trouver un bon peintre ?', answer: 'Demandez minimum 3 devis, vérifiez l\'inscription BCE, l\'assurance RC pro, et demandez des photos de chantiers récents. Un bon peintre visite toujours avant de devisier.' },
];

export default function FAQPage() {
  return (
    <>
      <section className="commune-header">
        <div className="container">
          <h1>Questions fréquentes — Peinture en Belgique</h1>
          <p>Tout ce que vous devez savoir sur les travaux de peinture.</p>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <FAQ items={faqItems} />
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": faqItems.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })),
      }) }} />
    </>
  );
}
