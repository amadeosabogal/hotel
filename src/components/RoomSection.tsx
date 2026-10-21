import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Wifi, 
  Tv, 
  Wind, 
  Coffee, 
  Droplet,
  Sparkles,
  Eye,
  Bed,
  Bath
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { translations, type Language } from '../translations';

export interface RoomGallery {
  bed: string;
  bath: string;
  view: string;
}

export interface RoomData {
  id: string;
  name: string;
  size: string;
  directPrice: number;
  capacity: string;
  bedType: string;
  gallery: RoomGallery;
  features: string[];
  description: string;
}

export const ROOMS: RoomData[] = [
  {
    id: 'deluxe',
    name: 'Deluxe Suite con Terraza',
    size: '42 m²',
    directPrice: 95,
    capacity: '2 Adultos',
    bedType: '1 King Bed o 2 Twin Beds',
    gallery: {
      bed: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=80',
      bath: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=80',
      view: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80'
    },
    features: ['Wi-Fi 500 Mbps', 'Ducha Lluvia con Agua Caliente', 'Smart TV 55"', 'Aire Acondicionado Silencioso', 'Balcón Privado'],
    description: 'Nuestra suite insigne combina maderas nobles, ropa de cama de algodón egipcio de 400 hilos, baño de mármol con ducha de lluvia y ventanales corredizos hacia la reserva natural.'
  },
  {
    id: 'superior',
    name: 'Superior King Room',
    size: '36 m²',
    directPrice: 75,
    capacity: '2 Adultos',
    bedType: '1 Queen Bed',
    gallery: {
      bed: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80',
      bath: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1400&q=80',
      view: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1400&q=80'
    },
    features: ['Wi-Fi 500 Mbps', 'Agua Caliente Constante', 'Smart TV 50"', 'Climatizador Inteligente', 'Desayuno Incluido'],
    description: 'Diseñada para el máximo descanso y confort, ofrece iluminación cálida graduable, escritorio de trabajo, baño en suite contemporáneo y vistas a los jardines interiores.'
  },
  {
    id: 'suite',
    name: 'Executive Family Suite',
    size: '68 m²',
    directPrice: 150,
    capacity: '4 Huéspedes',
    bedType: '1 King + 2 Twin Beds',
    gallery: {
      bed: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1400&q=80',
      bath: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=80',
      view: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1400&q=80'
    },
    features: ['Sala de Estar Independiente', 'Bañera de Hidromasaje', '2 Smart TVs 55"', 'Terraza Panorámica Solárium', 'Minibar Gourmet'],
    description: 'La máxima expresión del lujo campestre: doble estancia, tina de hidromasaje con vista al valle, dos ambientes separados y una terraza privada con tumbonas.'
  }
];

interface RoomSectionProps {
  lang: Language;
  onSelectRoom: (room: RoomData) => void;
}

export const RoomSection: React.FC<RoomSectionProps> = ({ lang, onSelectRoom }) => {
  const t = translations[lang].rooms;
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'bed' | 'bath' | 'view'>('bed');

  const prevRoom = () => {
    setActiveIndex((prev) => (prev === 0 ? ROOMS.length - 1 : prev - 1));
    setActiveTab('bed');
  };

  const nextRoom = () => {
    setActiveIndex((prev) => (prev === ROOMS.length - 1 ? 0 : prev + 1));
    setActiveTab('bed');
  };

  const currentRoom = ROOMS[activeIndex];
  const prevIndex = activeIndex === 0 ? ROOMS.length - 1 : activeIndex - 1;
  const nextIdx = activeIndex === ROOMS.length - 1 ? 0 : activeIndex + 1;

  const currentImage = currentRoom.gallery[activeTab];

  const handleQuickWhatsAppBook = (room: RoomData) => {
    const isEs = lang === 'es';
    const text = isEs
      ? `👋 ¡Hola Verdant Hills! Deseo reservar la *${room.name}* (${room.size}) con la Tarifa Directa de $${room.directPrice} USD/noche. ¿Tienen disponibilidad?`
      : `👋 Hello Verdant Hills! I'd like to book the *${room.name}* (${room.size}) at your Direct Rate of $${room.directPrice} USD/night. Could you check availability?`;
    window.open(`https://api.whatsapp.com/send?phone=51907030003&text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="rooms" className="room-section">
      {/* Background with Dark Night Facade Overlay */}
      <div 
        className="room-bg-image"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=80')` }}
      >
        <div className="room-bg-overlay" />
      </div>

      <div className="room-content-wrapper">
        {/* Section Header */}
        <div className="room-header-block">
          <motion.h2 
            className="room-section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t.title}
          </motion.h2>
          <p className="room-section-subtitle">{t.subtitle}</p>
        </div>

        {/* 3-Card Carousel Container with Inmersive Gallery */}
        <div className="room-carousel-container">
          {/* Left Preview Card */}
          <div 
            className="room-card-preview room-card-left"
            onClick={prevRoom}
            role="button"
            tabIndex={0}
            title={`View ${ROOMS[prevIndex].name}`}
          >
            <img 
              src={ROOMS[prevIndex].gallery.bed} 
              alt={ROOMS[prevIndex].name} 
              className="preview-img"
            />
            <div className="preview-overlay">
              <span className="preview-title">{ROOMS[prevIndex].name}</span>
            </div>
          </div>

          {/* Active Center Card with Interactive Inmersive Photo Gallery */}
          <div className="room-card-center-wrapper">
            <div className="room-card-active">
              {/* Dynamic Image with Smooth Transition */}
              <AnimatePresence mode="wait">
                <motion.img 
                  key={`${currentRoom.id}-${activeTab}`}
                  src={currentImage} 
                  alt={`${currentRoom.name} - ${activeTab}`} 
                  className="active-room-img"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                />
              </AnimatePresence>

              {/* Official Rate Tag */}
              <div className="room-direct-rate-badge">
                <div className="badge-direct-val">${currentRoom.directPrice} USD <small>/ noche</small></div>
                <div className="badge-official-tag">Tarifa Oficial</div>
              </div>

              {/* Inmersive Perspective Switcher Tabs (Cama / Baño / Vistas) */}
              <div className="gallery-perspective-tabs">
                <button 
                  type="button" 
                  className={`perspective-tab ${activeTab === 'bed' ? 'active' : ''}`}
                  onClick={() => setActiveTab('bed')}
                >
                  <Bed size={14} />
                  <span>{t.tabBed}</span>
                </button>
                <button 
                  type="button" 
                  className={`perspective-tab ${activeTab === 'bath' ? 'active' : ''}`}
                  onClick={() => setActiveTab('bath')}
                >
                  <Bath size={14} />
                  <span>{t.tabBath}</span>
                </button>
                <button 
                  type="button" 
                  className={`perspective-tab ${activeTab === 'view' ? 'active' : ''}`}
                  onClick={() => setActiveTab('view')}
                >
                  <Eye size={14} />
                  <span>{t.tabView}</span>
                </button>
              </div>

              {/* Left Carousel Arrow */}
              <button 
                type="button" 
                className="room-nav-arrow room-nav-left"
                onClick={prevRoom}
                aria-label="Previous room"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Right Carousel Arrow */}
              <button 
                type="button" 
                className="room-nav-arrow room-nav-right"
                onClick={nextRoom}
                aria-label="Next room"
              >
                <ChevronRight size={24} />
              </button>

              {/* Bottom Room Info Overlay */}
              <div className="room-info-overlay">
                <div className="room-info-left" onClick={() => onSelectRoom(currentRoom)}>
                  <h3 className="room-name">{currentRoom.name}</h3>
                  <div className="room-specs-row">
                    <span>{t.roomSize}: <strong>{currentRoom.size}</strong></span>
                    <span>&bull;</span>
                    <span>{currentRoom.bedType}</span>
                    <span>&bull;</span>
                    <span>{currentRoom.capacity}</span>
                  </div>
                </div>

                <div className="room-actions-right">
                  <button 
                    type="button" 
                    className="room-btn-view-gallery"
                    onClick={() => onSelectRoom(currentRoom)}
                  >
                    {t.viewDetails}
                  </button>
                  <button 
                    type="button" 
                    className="room-btn-wsp"
                    onClick={() => handleQuickWhatsAppBook(currentRoom)}
                    title="Reservar directo por WhatsApp"
                  >
                    <FaWhatsapp size={16} />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Minimalist Amenities Row right below Active Card */}
            <div className="minimalist-amenities-bar">
              <div className="amenity-mini-item" title={t.amenities.wifi}>
                <Wifi size={17} className="amenity-icon" />
                <span>Wi-Fi 500M</span>
              </div>
              <div className="amenity-mini-item" title={t.amenities.hotWater}>
                <Droplet size={17} className="amenity-icon" />
                <span>Agua Caliente</span>
              </div>
              <div className="amenity-mini-item" title={t.amenities.tv}>
                <Tv size={17} className="amenity-icon" />
                <span>Smart TV 55"</span>
              </div>
              <div className="amenity-mini-item" title={t.amenities.ac}>
                <Wind size={17} className="amenity-icon" />
                <span>A/C Silencioso</span>
              </div>
              <div className="amenity-mini-item" title={t.amenities.breakfast}>
                <Coffee size={17} className="amenity-icon" />
                <span>Desayuno Buffet</span>
              </div>
              <div className="amenity-mini-item" title={t.amenities.minibar}>
                <Sparkles size={17} className="amenity-icon" />
                <span>Minibar Gourmet</span>
              </div>
            </div>
          </div>

          {/* Right Preview Card */}
          <div 
            className="room-card-preview room-card-right"
            onClick={nextRoom}
            role="button"
            tabIndex={0}
            title={`View ${ROOMS[nextIdx].name}`}
          >
            <img 
              src={ROOMS[nextIdx].gallery.bed} 
              alt={ROOMS[nextIdx].name} 
              className="preview-img"
            />
            <div className="preview-overlay">
              <span className="preview-title">{ROOMS[nextIdx].name}</span>
            </div>
          </div>
        </div>

        {/* Mobile Room Selectors */}
        <div className="room-mobile-indicators">
          {ROOMS.map((r, idx) => (
            <button
              key={r.id}
              type="button"
              className={`room-indicator-pill ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => {
                setActiveIndex(idx);
                setActiveTab('bed');
              }}
            >
              {r.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
