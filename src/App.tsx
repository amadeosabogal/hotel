import { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DirectBookingBar } from './components/DirectBookingBar';
import { AboutSection } from './components/AboutSection';
import { RoomSection, type RoomData } from './components/RoomSection';
import { StrategicLocation } from './components/StrategicLocation';
import { PromoBanners } from './components/PromoBanners';
import { ActivitiesSection, type ActivityItem } from './components/ActivitiesSection';
import { Footer } from './components/Footer';
import {
  ReservationModal,
  RoomDetailModal,
  PromoModal,
  ActivityModal,
  MapModal
} from './components/Modals';
import { type Language } from './translations';
import { FaWhatsapp } from 'react-icons/fa';

export default function App() {
  // Global Language state (Default: Spanish, toggleable to English)
  const [lang, setLang] = useState<Language>('es');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  // Modal states
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<RoomData | null>(null);
  const [isPromoOpen, setIsPromoOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<ActivityItem | null>(null);
  const [isMapOpen, setIsMapOpen] = useState(false);

  // Handlers
  const handleOpenReservation = (room?: RoomData) => {
    if (room) {
      setSelectedRoom(room);
    }
    setIsReservationOpen(true);
  };

  const handleFloatingWhatsApp = () => {
    const text = lang === 'es'
      ? '¡Hola Recepción Verdant Hills! Deseo cotizar mi estadía directamente con la Mejor Tarifa.'
      : 'Hello Verdant Hills! I would like to quote my stay with your Best Direct Rate.';
    window.open(`https://api.whatsapp.com/send?phone=51907030003&text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="app-wrapper">
      {/* 1. Top Navbar with Quick Language Toggle & Direct Booking CTA */}
      <Navbar 
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenReservation={() => handleOpenReservation()}
      />

      {/* 2. Hero Section */}
      <Hero 
        lang={lang}
        onOpenReservation={() => handleOpenReservation()}
      />

      {/* 3. Cotizador Directo a WhatsApp / Motor de Reservas Web Oficial */}
      <DirectBookingBar 
        lang={lang} 
      />

      {/* 4. About Section */}
      <AboutSection 
        lang={lang} 
      />

      {/* 5. Room Showcase Carousel with Inmersive Photo Gallery (Cama, Baño, Vista) & Minimalist Icons */}
      <RoomSection 
        lang={lang}
        onSelectRoom={(room) => setSelectedRoom(room)}
      />

      {/* 6. Bloque de Ubicación Estratégica (Minutos al aeropuerto, plaza, atractivos) */}
      <StrategicLocation 
        lang={lang} 
      />

      {/* 7. Split Promotion Banners */}
      <PromoBanners 
        lang={lang}
        onOpenPromo={() => setIsPromoOpen(true)}
      />

      {/* 8. Resort Activities */}
      <ActivitiesSection 
        lang={lang}
        onSelectActivity={(act) => setSelectedActivity(act)}
      />

      {/* 9. Panoramic Sunset Footer */}
      <Footer 
        lang={lang}
        onOpenMap={() => setIsMapOpen(true)}
      />

      {/* Floating Direct WhatsApp Button */}
      <button 
        type="button" 
        className="floating-wsp-button"
        onClick={handleFloatingWhatsApp}
        title="Reservar directo por WhatsApp (Tarifa Oficial)"
      >
        <FaWhatsapp size={28} />
        <span className="floating-wsp-tooltip">
          {lang === 'es' ? '¡Cotiza Directo en WhatsApp!' : 'Quote Direct on WhatsApp!'}
        </span>
      </button>

      {/* Interactive Modals */}
      <ReservationModal 
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        preselectedRoom={selectedRoom}
      />

      <RoomDetailModal 
        room={selectedRoom}
        onClose={() => setSelectedRoom(null)}
      />

      <PromoModal 
        isOpen={isPromoOpen}
        onClose={() => setIsPromoOpen(false)}
        onSelectPackage={() => handleOpenReservation()}
      />

      <ActivityModal 
        activity={selectedActivity}
        onClose={() => setSelectedActivity(null)}
      />

      <MapModal 
        isOpen={isMapOpen}
        onClose={() => setIsMapOpen(false)}
      />
    </div>
  );
}
