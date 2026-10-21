import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { translations, type Language } from '../translations';

interface PromoBannersProps {
  lang: Language;
  onOpenPromo: () => void;
}

export const PromoBanners: React.FC<PromoBannersProps> = ({ lang, onOpenPromo }) => {
  const t = translations[lang].promo;

  const memberWspUrl = lang === 'es'
    ? 'https://api.whatsapp.com/send?phone=51907030003&text=Hola%20Verdant%20Hills,%20deseo%20conocer%20los%20beneficios%20del%20Club%20Exclusivo.'
    : 'https://api.whatsapp.com/send?phone=51907030003&text=Hello%20Verdant%20Hills,%20I%20would%20like%20to%20learn%20more%20about%20the%20Exclusive%20Club%20benefits.';

  return (
    <section className="promo-banners-section">
      <div className="promo-banners-grid">
        {/* Left Banner: Exclusive Club Member Benefits */}
        <motion.div 
          className="promo-banner-card promo-banner-member"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div 
            className="promo-banner-bg" 
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80')` }}
          />
          <div className="promo-banner-overlay" />

          <div className="promo-banner-content">
            <h3 className="member-title-large">{t.memberLarge}</h3>
            <h4 className="member-subtitle">{t.memberSub}</h4>

            <div className="member-actions-row">
              <a 
                href={memberWspUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="member-wsp-link-btn"
              >
                <FaWhatsapp size={16} />
                <span>{t.memberAction}</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Banner: Promotion Packages */}
        <motion.div 
          className="promo-banner-card promo-banner-packages"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div 
            className="promo-banner-bg" 
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=1200&q=80')` }}
          />
          <div className="promo-banner-overlay" />

          <div className="promo-banner-content">
            <h3 className="packages-title">{t.packagesTitle}</h3>
            
            <button 
              type="button" 
              className="view-package-btn"
              onClick={onOpenPromo}
            >
              {t.viewPackage}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
