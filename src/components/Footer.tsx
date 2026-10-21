import React from 'react';
import { FaFacebookF, FaYoutube, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Logo } from './Logo';
import { translations, type Language } from '../translations';

interface FooterProps {
  lang: Language;
  onOpenMap: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenMap }) => {
  const t = translations[lang].footer;

  return (
    <footer id="contact" className="site-footer">
      {/* Background Panoramic Mountains Sunset */}
      <div 
        className="footer-bg-image" 
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80')` }}
      >
        <div className="footer-overlay" />
      </div>

      <div className="footer-inner-container">
        {/* Left Column: Logo & Socials */}
        <div className="footer-col-left">
          <div className="footer-logo-wrapper" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Logo variant="light" />
          </div>

          <div className="footer-social-icons">
            <a 
              href="https://api.whatsapp.com/send?phone=51907030003" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-btn wsp" 
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={16} />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-btn" 
              aria-label="Facebook"
            >
              <FaFacebookF size={15} />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-btn" 
              aria-label="YouTube"
            >
              <FaYoutube size={15} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-btn" 
              aria-label="Twitter"
            >
              <FaTwitter size={15} />
            </a>
          </div>
        </div>

        {/* Center Column: Contact Information */}
        <div className="footer-col-center">
          <h4 className="footer-resort-title">{t.title}</h4>
          <p className="footer-address">{t.address}</p>
          <p className="footer-contact-row">{t.phone}</p>
          <p className="footer-email-row">E-mail: {t.email}</p>
        </div>

        {/* Right Column: Actions, Map & Decorative Diamond */}
        <div className="footer-col-right">
          <div className="footer-btn-row">
            <button 
              type="button" 
              className="footer-btn-googlemap"
              onClick={onOpenMap}
            >
              {t.googleMap}
            </button>
          </div>

          <p className="footer-disclaimer">
            Garantía de Mejor Tarifa al reservar directamente con nuestro equipo de recepción sin intermediarios.
          </p>

          {/* Decorative Diamond / Rhombus */}
          <div className="footer-diamond-accent" aria-hidden="true">
            <div className="footer-diamond-inner" />
          </div>
        </div>
      </div>
    </footer>
  );
};
