import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CloudSun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { translations, type Language } from '../translations';

interface HeroProps {
  lang: Language;
  onOpenReservation: () => void;
}

const HERO_SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=80',
    temp: '28°'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2000&q=80',
    temp: '26°'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=2000&q=80',
    temp: '24°'
  }
];

export const Hero: React.FC<HeroProps> = ({ lang, onOpenReservation }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = translations[lang].hero;

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section id="home" className="hero-section">
      {/* Background Hotel Image Carousel with Fade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          className="hero-background"
          style={{ backgroundImage: `url(${slide.image})` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <div className="hero-overlay" />
        </motion.div>
      </AnimatePresence>

      {/* Carousel Navigation Arrows */}
      <button 
        type="button" 
        className="hero-arrow hero-arrow-left" 
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>

      <button 
        type="button" 
        className="hero-arrow hero-arrow-right" 
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Centered Hero Content */}
      <div className="hero-content-wrapper">
        <motion.div 
          key={`content-${slide.id}-${lang}`}
          className="hero-text-block"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="hero-subtitle">{t.subtitle}</p>
          <h1 className="hero-main-title">{t.title}</h1>
          <p className="hero-tagline">{t.tagline}</p>
          
          <div className="hero-cta-group">
            <button 
              type="button" 
              className="hero-book-btn"
              onClick={onOpenReservation}
            >
              {t.bookBtn}
            </button>
            <a href="#about" className="hero-explore-btn">
              {t.exploreBtn}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Weather Widget (Bottom Left) */}
      <motion.div 
        className="hero-weather-widget"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="weather-top-row">
          <div className="weather-icon-wrapper">
            <CloudSun size={28} className="weather-sun-icon" />
          </div>
          <span className="weather-temp">{slide.temp}</span>
        </div>
        <div className="weather-details">
          <p className="weather-condition">{t.weatherCondition}</p>
          <p className="weather-location">{t.weatherLocation}</p>
        </div>
      </motion.div>

      {/* Slide Indicators / Dots */}
      <div className="hero-dots">
        {HERO_SLIDES.map((s, idx) => (
          <button
            key={s.id}
            type="button"
            className={`hero-dot ${idx === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
