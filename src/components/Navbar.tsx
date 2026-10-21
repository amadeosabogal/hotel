import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Globe } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Logo } from './Logo';
import { translations, type Language } from '../translations';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  lang, 
  onToggleLang, 
  onOpenReservation 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { key: 'home', name: t.home, href: '#home' },
    { key: 'rooms', name: t.rooms, href: '#rooms' },
    { key: 'location', name: t.location, href: '#location' },
    { key: 'activities', name: t.activities, href: '#activities' },
    { key: 'offers', name: t.offers, href: '#special-offer' },
    { key: 'golf', name: t.golf, href: '#about' },
    { key: 'contact', name: t.contact, href: '#contact' }
  ];

  const handleNavClick = (key: string, href: string) => {
    setActiveLink(key);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const text = lang === 'es'
      ? '¡Hola Verdant Hills! Deseo cotizar mi estadía con la Mejor Tarifa Directa.'
      : 'Hello Verdant Hills! I would like to check your Best Direct Rates.';
    window.open(`https://api.whatsapp.com/send?phone=51907030003&text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Left: Brand Logo */}
        <div className="navbar-logo-area" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Logo variant="dark" />
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  className={`nav-link ${activeLink === item.key ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.key, item.href);
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Language Switcher, WhatsApp Direct & Reservation CTA */}
        <div className="navbar-actions">
          {/* Quick Language Toggle Button [ES | EN] */}
          <button 
            type="button" 
            className="quick-lang-toggle-btn"
            onClick={onToggleLang}
            title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            <Globe size={15} className="lang-globe-icon" />
            <span className={`lang-chip ${lang === 'es' ? 'active' : ''}`}>ES</span>
            <span className="lang-divider">/</span>
            <span className={`lang-chip ${lang === 'en' ? 'active' : ''}`}>EN</span>
          </button>

          {/* Quick Direct WhatsApp Button */}
          <button 
            type="button" 
            className="navbar-wsp-btn"
            onClick={openWhatsApp}
            title="Chat directo por WhatsApp"
          >
            <FaWhatsapp size={17} />
            <span className="wsp-btn-label">WhatsApp</span>
          </button>

          {/* Angled RESERVATION Button */}
          <button 
            type="button" 
            className="reservation-cta-btn"
            onClick={onOpenReservation}
          >
            <Calendar size={16} className="res-icon" />
            <span>{t.reservation}</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button 
            type="button" 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-header">
            <Logo variant="dark" size="sm" />
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button 
                type="button" 
                className="quick-lang-toggle-btn"
                onClick={onToggleLang}
              >
                <Globe size={14} />
                <span>{lang.toUpperCase()}</span>
              </button>
              <button 
                type="button" 
                className="mobile-close-btn" 
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
          </div>

          <ul className="mobile-nav-list">
            {navLinks.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  className={`mobile-nav-link ${activeLink === item.key ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.key, item.href);
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-footer">
            <button 
              type="button" 
              className="mobile-wsp-action-btn"
              onClick={openWhatsApp}
            >
              <FaWhatsapp size={18} />
              <span>{t.whatsappDirect} (+51 907 030 003)</span>
            </button>

            <button 
              type="button" 
              className="mobile-reserve-btn"
              onClick={() => { setMobileMenuOpen(false); onOpenReservation(); }}
            >
              {t.reservation}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
