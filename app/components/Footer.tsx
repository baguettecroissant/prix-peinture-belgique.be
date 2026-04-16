import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              🎨 Prix<span className="logo-accent">Peinture</span>.be
            </div>
            <p className="footer-desc">
              Comparez les prix de peinture en Belgique. Intérieur, extérieur, plafonds, boiseries, papier peint. Devis gratuits de peintres professionnels certifiés.
            </p>
          </div>

          <div>
            <h4>Travaux</h4>
            <ul className="footer-links">
              <li><Link href="/peinture-interieure/">Peinture intérieure</Link></li>
              <li><Link href="/peinture-exterieure/">Peinture extérieure</Link></li>
              <li><Link href="/peinture-plafond/">Peinture plafonds</Link></li>
              <li><Link href="/boiseries-portes/">Laquage boiseries</Link></li>
              <li><Link href="/papier-peint/">Papier peint</Link></li>
              <li><Link href="/preparation-murs/">Préparation murs</Link></li>
              <li><Link href="/tarif-peintre/">Tarif peintre</Link></li>
            </ul>
          </div>

          <div>
            <h4>Wallonie &amp; Bruxelles</h4>
            <ul className="footer-links">
              <li><Link href="/peintre/bruxelles-1000/">Bruxelles</Link></li>
              <li><Link href="/peintre/liege-4000/">Liège</Link></li>
              <li><Link href="/peintre/namur-5000/">Namur</Link></li>
              <li><Link href="/peintre/charleroi-6000/">Charleroi</Link></li>
              <li><Link href="/peintre/mons-7000/">Mons</Link></li>
              <li><Link href="/peintre/tournai-7500/">Tournai</Link></li>
              <li><Link href="/peintre/wavre-1300/">Wavre</Link></li>
              <li><Link href="/peintre/arlon-6700/">Arlon</Link></li>
              <li><Link href="/peintre/">📍 Toutes les communes →</Link></li>
            </ul>
          </div>

          <div>
            <h4>Vlaanderen</h4>
            <ul className="footer-links">
              <li><Link href="/nl/schilder/antwerpen-2000/">Antwerpen</Link></li>
              <li><Link href="/nl/schilder/gent-9000/">Gent</Link></li>
              <li><Link href="/nl/schilder/brugge-8000/">Brugge</Link></li>
              <li><Link href="/nl/schilder/leuven-3000/">Leuven</Link></li>
              <li><Link href="/nl/schilder/mechelen-2800/">Mechelen</Link></li>
              <li><Link href="/nl/schilder/hasselt-3500/">Hasselt</Link></li>
              <li><Link href="/nl/">Vlaanderen (NL) →</Link></li>
            </ul>
          </div>

          <div>
            <h4>Infos &amp; Guides</h4>
            <ul className="footer-links">
              <li><Link href="/guides/prix-peintre-belgique/">Prix peintre 2026</Link></li>
              <li><Link href="/guides/peinture-interieure-guide/">Guide intérieur</Link></li>
              <li><Link href="/guides/preparation-murs-guide/">Préparation murs</Link></li>
              <li><Link href="/guides/">Tous les guides</Link></li>
              <li><Link href="/faq/">FAQ</Link></li>
              <li><Link href="/devis/">Devis gratuit</Link></li>
              <li><Link href="/mentions-legales/">Mentions légales</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} prix-peinture-belgique.be — Tous droits réservés</span>
          <span>Un service gratuit et sans engagement</span>
        </div>
      </div>
    </footer>
  );
}
