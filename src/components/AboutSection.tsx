import React from 'react';
import { motion } from 'framer-motion';
import { Award, Compass, Trees, Flag } from 'lucide-react';
import { translations, type Language } from '../translations';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const t = translations[lang].about;

  return (
    <section id="about" className="about-section">
      {/* Decorative Geometric Background Lines */}
      <div className="about-geom-bg" aria-hidden="true">
        <svg viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="about-bg-svg">
          <path d="M-100 120L350 480L800 120" stroke="rgba(103, 132, 50, 0.08)" strokeWidth="60" />
          <path d="M120 60L520 400L920 60" stroke="rgba(181, 141, 62, 0.06)" strokeWidth="40" />
          <path d="M1100 100L1350 300L1600 100" stroke="rgba(103, 132, 50, 0.05)" strokeWidth="30" />
        </svg>
      </div>

      <div className="about-container">
        {/* Left: Diamond Geometric Frame with Resort Photo */}
        <motion.div 
          className="about-diamond-wrapper"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Angled Chevron Decorative Wings */}
          <div className="diamond-backdrop-chevron" />
          <div className="diamond-border-outer" />
          <div className="diamond-border-inner" />

          {/* Main Diamond Image Mask */}
          <div className="diamond-mask">
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80" 
              alt="Verdant Hills Resort at Twilight" 
              className="diamond-img"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Right: Text Information */}
        <motion.div 
          className="about-text-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="about-heading-group">
            <h2 className="about-title-primary">{t.titlePrimary}</h2>
            <h3 className="about-title-secondary">{t.titleSecondary}</h3>
          </div>

          <p className="about-description">
            {t.description}
          </p>

          {/* Key Highlights */}
          <div className="about-highlights-grid">
            <div className="about-highlight-item">
              <div className="highlight-icon-box">
                <Flag size={20} />
              </div>
              <div>
                <strong>{t.highlights.h1Title}</strong>
                <span>{t.highlights.h1Desc}</span>
              </div>
            </div>

            <div className="about-highlight-item">
              <div className="highlight-icon-box">
                <Trees size={20} />
              </div>
              <div>
                <strong>{t.highlights.h2Title}</strong>
                <span>{t.highlights.h2Desc}</span>
              </div>
            </div>

            <div className="about-highlight-item">
              <div className="highlight-icon-box">
                <Award size={20} />
              </div>
              <div>
                <strong>{t.highlights.h3Title}</strong>
                <span>{t.highlights.h3Desc}</span>
              </div>
            </div>

            <div className="about-highlight-item">
              <div className="highlight-icon-box">
                <Compass size={20} />
              </div>
              <div>
                <strong>{t.highlights.h4Title}</strong>
                <span>{t.highlights.h4Desc}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
