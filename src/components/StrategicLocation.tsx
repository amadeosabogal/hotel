import React, { useState } from 'react';
import { Plane, Landmark, Trees, Flag, Navigation, ExternalLink, Clock, Car } from 'lucide-react';
import { translations, type Language } from '../translations';

interface StrategicLocationProps {
  lang: Language;
}

export const StrategicLocation: React.FC<StrategicLocationProps> = ({ lang }) => {
  const t = translations[lang].strategicLocation;
  const [selectedPlaceId, setSelectedPlaceId] = useState('airport');

  const getIcon = (id: string) => {
    switch (id) {
      case 'airport':
        return <Plane size={24} />;
      case 'plaza':
        return <Landmark size={24} />;
      case 'park':
        return <Trees size={24} />;
      case 'golf':
        return <Flag size={24} />;
      default:
        return <Navigation size={24} />;
    }
  };

  return (
    <section id="location" className="strategic-location-section">
      <div className="strategic-location-container">
        {/* Header Block */}
        <div className="location-header-text">
          <span className="location-badge">{t.badge}</span>
          <h2 className="location-title">{t.title}</h2>
          <p className="location-subtitle">{t.subtitle}</p>
        </div>

        {/* 4 Strategic Time Cards Grid */}
        <div className="proximity-cards-grid">
          {t.times.map((item) => (
            <div 
              key={item.id}
              className={`proximity-card ${selectedPlaceId === item.id ? 'active' : ''}`}
              onClick={() => setSelectedPlaceId(item.id)}
              role="button"
              tabIndex={0}
            >
              <div className="proximity-card-top">
                <div className="proximity-icon-bubble">
                  {getIcon(item.id)}
                </div>
                <div className="proximity-time-pill">
                  <Clock size={14} />
                  <span>{item.time}</span>
                </div>
              </div>

              <h3 className="proximity-place-name">{item.place}</h3>
              <p className="proximity-place-desc">{item.desc}</p>

              <div className="proximity-transport-tag">
                <Car size={13} />
                <span>Acceso directo por vía rápida</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Map & Route Action Block */}
        <div className="location-map-interactive-card">
          <div className="map-iframe-wrapper">
            <iframe
              title="Verdant Hills Strategic Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123894.4075591395!2d101.3060265!3d14.1687665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311c479bf79a957b%3A0xe5495579930f360c!2sVerdant%20Hills!5e0!3m2!1sen!2sth!4v1700000000000!5m2!1sen!2sth"
              width="100%"
              height="360"
              style={{ border: 0, display: 'block' }}
              allowFullScreen={false}
              loading="lazy"
            />
          </div>

          <div className="map-card-info-pane">
            <div className="address-highlight-box">
              <span className="hotel-title-tag">Verdant Hills Country Resort</span>
              <p className="address-full">128 Valley Vista Parkway, Highland Foothills Reserve</p>
              <div className="gps-row">
                <span>GPS: 14.1687° N, 101.3060° E</span>
                <span>&bull;</span>
                <span className="text-free-parking">Estacionamiento privado gratuito</span>
              </div>
            </div>

            <div className="map-action-buttons">
              <a
                href="https://maps.google.com/?q=Verdant+Hills+Country+Resort"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-open-google-maps"
              >
                <ExternalLink size={16} />
                <span>{t.googleMapBtn}</span>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=51907030003&text=Hola%20Verdant%20Hills,%20deseo%20coordinar%20mi%20traslado%20desde%20el%20aeropuerto."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-request-transfer"
              >
                <Car size={16} />
                <span>Solicitar Transfer Privado</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
