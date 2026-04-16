import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales et politique de confidentialité de prix-peinture-belgique.be.',
  alternates: { canonical: 'https://prix-peinture-belgique.be/mentions-legales/' },
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1>Mentions légales</h1>
        <div className="article-prose">
          <h2>Éditeur du site</h2>
          <p>Le site prix-peinture-belgique.be est un comparateur de devis pour travaux de peinture en Belgique. Il met en relation les particuliers avec des peintres professionnels via un partenaire spécialisé.</p>

          <h2>Hébergement</h2>
          <p>Ce site est hébergé par Cloudflare, Inc. — 101 Townsend St, San Francisco, CA 94107, USA.</p>

          <h2>Données personnelles</h2>
          <p>Les données collectées via le formulaire de devis (nom, prénom, email, téléphone, adresse, code postal) sont transmises à notre partenaire Bobex pour la mise en relation avec des peintres professionnels. Ces données ne sont pas conservées sur nos serveurs.</p>
          <p>Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données. Contactez-nous pour exercer ces droits.</p>

          <h2>Cookies</h2>
          <p>Ce site n&apos;utilise pas de cookies de tracking. Seuls des cookies techniques nécessaires au fonctionnement du site sont utilisés.</p>

          <h2>Responsabilité</h2>
          <p>Les prix indiqués sur ce site sont des estimations basées sur les tarifs moyens constatés en Belgique. Ils sont fournis à titre indicatif et ne constituent pas un devis. Seul un devis établi par un peintre professionnel après visite sur place fait foi.</p>
        </div>
      </div>
    </section>
  );
}
