'use client';

export default function MobileStickyBar() {
  const handleClick = () => {
    const formSection = document.getElementById('devis-form') || document.getElementById('formulaire');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.href = '/devis/#formulaire';
    }
  };

  return (
    <div className="mobile-sticky-bar">
      <button className="btn btn-primary btn-lg" onClick={handleClick}>
        🎨 Comparez les Prix — Devis Gratuit
      </button>
    </div>
  );
}
