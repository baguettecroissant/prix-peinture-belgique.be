'use client';

import { useState } from 'react';
import { travauxOptions, etatOptions, surfaceOptions, batimentOptions, delaiOptions } from '../data/prices';

interface LeadFormProps {
  variant?: 'full' | 'compact';
  defaultCodePostal?: string;
  defaultCommune?: string;
  language?: 'fr' | 'nl';
}

export default function LeadForm({ variant = 'full', defaultCodePostal = '', defaultCommune = '', language = 'fr' }: LeadFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    travaux: '',
    etat: '',
    surface: '',
    batiment: '',
    delai: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    adresse: '',
    code_postal: defaultCodePostal,
    commune: defaultCommune,
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleOptionClick = (field: string, value: string) => {
    updateField(field, value);
    setTimeout(() => {
      setStep(prev => prev + 1);
    }, 250);
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          postcode: formData.code_postal,
          city: formData.commune,
          address: formData.adresse,
          language,
          remarks: `Travaux: ${formData.travaux}, État murs: ${formData.etat}, Surface: ${formData.surface}, Bâtiment: ${formData.batiment}, Délai: ${formData.delai}`,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Erreur inconnue');
      }
      setSubmitted(true);
    } catch {
      setError(language === 'nl'
        ? 'Er is een fout opgetreden. Probeer het opnieuw.'
        : 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.');
    }
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="lead-form-section">
        <div style={{ textAlign: 'center', padding: '2rem 0' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
          <h2 style={{ color: 'white' }}>
            {language === 'nl' ? 'Aanvraag verzonden!' : 'Demande envoyée !'}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '400px', margin: '0.75rem auto 0' }}>
            {language === 'nl'
              ? 'U ontvangt tot 3 gratis offertes van professionele schilders binnen 48 uur.'
              : 'Vous recevrez jusqu\u0027à 3 devis gratuits de peintres professionnels sous 48h.'}
          </p>
        </div>
      </div>
    );
  }

  const totalSteps = 6;
  const progressBars = Array.from({ length: totalSteps }, (_, i) => i + 1).map(num => (
    <div key={num} className={`form-step ${step >= num ? 'active' : ''} ${step > num ? 'done' : ''}`} />
  ));

  const labels = {
    fr: {
      mainTitle: variant === 'compact' ? '🎨 Devis Peinture Gratuit' : '🎨 Comparez les Prix — Devis Gratuit',
      mainSubtitle: 'Recevez jusqu\u0027à 3 devis de peintres professionnels en 1 minute.',
      step1: 'Quel type de travaux de peinture ?',
      step2: 'Quel est l\'état actuel de vos murs ?',
      step3: 'Quelle est la surface estimée ?',
      step4: 'Quel est votre type de bâtiment ?',
      step5: 'Quel est votre délai ?',
      step6: 'Dernière étape : Vos coordonnées',
      back: '← Retour',
      submit: '🎨 Recevoir mes Devis Gratuits',
      submitting: 'Envoi en cours...',
      codePostal: 'Code Postal',
      commune: 'Commune',
      prenom: 'Prénom',
      nom: 'Nom',
      emailLabel: 'Email',
      telephone: 'Téléphone',
      adresse: 'Adresse (Rue et numéro)',
      trust: ['Service 100% gratuit', 'Données sécurisées', 'Réponse sous 48h', 'Peintres certifiés'],
    },
    nl: {
      mainTitle: variant === 'compact' ? '🎨 Gratis Schilderofferte' : '🎨 Vergelijk Prijzen — Gratis Offerte',
      mainSubtitle: 'Ontvang tot 3 offertes van professionele schilders in 1 minuut.',
      step1: 'Welk type schilderwerk?',
      step2: 'Wat is de huidige staat van uw muren?',
      step3: 'Wat is het geschatte oppervlak?',
      step4: 'Wat is uw type gebouw?',
      step5: 'Wat is uw timing?',
      step6: 'Laatste stap: Uw gegevens',
      back: '← Terug',
      submit: '🎨 Mijn Gratis Offertes Ontvangen',
      submitting: 'Verzenden...',
      codePostal: 'Postcode',
      commune: 'Gemeente',
      prenom: 'Voornaam',
      nom: 'Achternaam',
      emailLabel: 'E-mail',
      telephone: 'Telefoon',
      adresse: 'Adres (Straat en nummer)',
      trust: ['100% gratis service', 'Veilige gegevens', 'Antwoord binnen 48u', 'Gecertificeerde schilders'],
    },
  };

  const t = labels[language];

  return (
    <div className="lead-form-section" id="devis-form">
      <div className="form-steps">
        {progressBars}
      </div>

      <h2 style={{ marginTop: 0 }}>{t.mainTitle}</h2>
      <p style={{ marginBottom: '2rem' }}>{t.mainSubtitle}</p>

      {step === 1 && (
        <div style={{ animation: 'fadeIn 0.3s ease' }}>
          <h3 style={{ color: 'white', marginBottom: '1rem', marginTop: '0' }}>{t.step1}</h3>
          <div className="radio-card-grid">
            {travauxOptions.map(opt => (
              <div
                key={opt.value}
                className={`radio-card ${formData.travaux === opt.value ? 'selected' : ''}`}
                onClick={() => handleOptionClick('travaux', opt.value)}
              >
                <span className="card-title">{opt.emoji} {opt.title}</span>
                <span className="card-subtitle">{opt.subtitle}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div style={{ animation: 'fadeIn 0.3s ease' }}>
          <h3 style={{ color: 'white', marginBottom: '1rem', marginTop: '0' }}>{t.step2}</h3>
          <div className="radio-card-grid">
            {etatOptions.map(opt => (
              <div
                key={opt.value}
                className={`radio-card ${formData.etat === opt.value ? 'selected' : ''}`}
                onClick={() => handleOptionClick('etat', opt.value)}
              >
                <span className="card-title">{opt.emoji} {opt.title}</span>
                <span className="card-subtitle">{opt.subtitle}</span>
              </div>
            ))}
          </div>
          <button className="btn btn-outline" style={{ marginTop: '1.5rem', borderColor: 'rgba(255,255,255,0.3)', color: 'white' }} onClick={() => setStep(1)}>{t.back}</button>
        </div>
      )}

      {step === 3 && (
        <div style={{ animation: 'fadeIn 0.3s ease' }}>
          <h3 style={{ color: 'white', marginBottom: '1rem', marginTop: '0' }}>{t.step3}</h3>
          <div className="radio-card-grid">
            {surfaceOptions.map(opt => (
              <div
                key={opt.value}
                className={`radio-card ${formData.surface === opt.value ? 'selected' : ''}`}
                onClick={() => handleOptionClick('surface', opt.value)}
              >
                <span className="card-title">{opt.title}</span>
                <span className="card-subtitle">{opt.subtitle}</span>
              </div>
            ))}
          </div>
          <button className="btn btn-outline" style={{ marginTop: '1.5rem', borderColor: 'rgba(255,255,255,0.3)', color: 'white' }} onClick={() => setStep(2)}>{t.back}</button>
        </div>
      )}

      {step === 4 && (
        <div style={{ animation: 'fadeIn 0.3s ease' }}>
          <h3 style={{ color: 'white', marginBottom: '1rem', marginTop: '0' }}>{t.step4}</h3>
          <div className="radio-card-grid">
            {batimentOptions.map(opt => (
              <div
                key={opt.value}
                className={`radio-card ${formData.batiment === opt.value ? 'selected' : ''}`}
                onClick={() => handleOptionClick('batiment', opt.value)}
              >
                <span className="card-title">{opt.emoji} {opt.title}</span>
                <span className="card-subtitle">{opt.subtitle}</span>
              </div>
            ))}
          </div>
          <button className="btn btn-outline" style={{ marginTop: '1.5rem', borderColor: 'rgba(255,255,255,0.3)', color: 'white' }} onClick={() => setStep(3)}>{t.back}</button>
        </div>
      )}

      {step === 5 && (
        <div style={{ animation: 'fadeIn 0.3s ease' }}>
          <h3 style={{ color: 'white', marginBottom: '1rem', marginTop: '0' }}>{t.step5}</h3>
          <div className="radio-card-grid">
            {delaiOptions.map(opt => (
              <div
                key={opt.value}
                className={`radio-card ${formData.delai === opt.value ? 'selected' : ''}`}
                onClick={() => handleOptionClick('delai', opt.value)}
              >
                <span className="card-title">{opt.emoji ? `${opt.emoji} ` : ''}{opt.title}</span>
                <span className="card-subtitle">{opt.subtitle}</span>
              </div>
            ))}
          </div>
          <button className="btn btn-outline" style={{ marginTop: '1.5rem', borderColor: 'rgba(255,255,255,0.3)', color: 'white' }} onClick={() => setStep(4)}>{t.back}</button>
        </div>
      )}

      {step === 6 && (
        <form onSubmit={handleSubmit} style={{ animation: 'fadeIn 0.3s ease' }}>
          <h3 style={{ color: 'white', marginBottom: '1.5rem', marginTop: '0' }}>{t.step6}</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>{t.codePostal}</label>
              <input type="text" placeholder="Ex: 1000" value={formData.code_postal} onChange={e => updateField('code_postal', e.target.value)} maxLength={4} required />
            </div>
            <div className="form-group">
              <label>{t.commune}</label>
              <input type="text" placeholder={language === 'nl' ? 'Vb: Antwerpen' : 'Ex: Bruxelles'} value={formData.commune} onChange={e => updateField('commune', e.target.value)} required />
            </div>
            <div className="form-group">
              <label>{t.prenom}</label>
              <input type="text" placeholder={language === 'nl' ? 'Uw voornaam' : 'Votre prénom'} value={formData.firstName} onChange={e => updateField('firstName', e.target.value)} required />
            </div>
            <div className="form-group">
              <label>{t.nom}</label>
              <input type="text" placeholder={language === 'nl' ? 'Uw achternaam' : 'Votre nom'} value={formData.lastName} onChange={e => updateField('lastName', e.target.value)} required />
            </div>
            <div className="form-group">
              <label>{t.emailLabel}</label>
              <input type="email" placeholder={language === 'nl' ? 'uw@email.be' : 'votre@email.be'} value={formData.email} onChange={e => updateField('email', e.target.value)} required />
            </div>
            <div className="form-group">
              <label>{t.telephone}</label>
              <input type="tel" placeholder="0470 12 34 56" value={formData.phone} onChange={e => updateField('phone', e.target.value)} required />
            </div>
            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
              <label>{t.adresse}</label>
              <input type="text" placeholder={language === 'nl' ? 'Vb: Kerkstraat 12' : 'Ex: Rue de Bruxelles 12'} value={formData.adresse} onChange={e => updateField('adresse', e.target.value)} required />
            </div>
          </div>
          <div className="form-actions" style={{ justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', marginTop: '2rem' }}>
            <button type="button" className="btn btn-outline" onClick={() => setStep(5)} style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
              {t.back}
            </button>
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              disabled={submitting}
              style={{ background: 'white', color: 'var(--primary)', fontWeight: 700, boxShadow: '0 4px 14px rgba(0,0,0,0.15)' }}
            >
              {submitting ? t.submitting : t.submit}
            </button>
            {error && (
              <p style={{ color: '#ff6b6b', marginTop: '1rem', textAlign: 'center', fontSize: '0.95rem', width: '100%' }}>
                ⚠️ {error}
              </p>
            )}
          </div>
          <div className="form-trust" style={{ marginTop: '2rem', justifyContent: 'center' }}>
            <div className="form-trust-item"><span>✅</span> {t.trust[0]}</div>
            <div className="form-trust-item"><span>🔒</span> {t.trust[1]}</div>
            <div className="form-trust-item"><span>⚡</span> {t.trust[2]}</div>
            <div className="form-trust-item"><span>🎨</span> {t.trust[3]}</div>
          </div>
        </form>
      )}
    </div>
  );
}
