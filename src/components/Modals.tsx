import React, { useState } from 'react';
import {
  X,
  Calendar,
  Users,
  CheckCircle,
  BedDouble,
  ExternalLink,
  Wifi,
  Droplet,
  Tv,
  Wind,
  Coffee,
  Sparkles,
  Bed,
  Bath,
  Eye
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { type RoomData, ROOMS } from './RoomSection';
import { type ActivityItem } from './ActivitiesSection';

// --- RESERVATION MODAL ---
interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRoom?: RoomData | null;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose, preselectedRoom }) => {
  const [selectedRoomId, setSelectedRoomId] = useState(preselectedRoom?.id || 'deluxe');
  const [checkIn, setCheckIn] = useState('2026-10-25');
  const [checkOut, setCheckOut] = useState('2026-10-28');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [includeGolf, setIncludeGolf] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const currentRoom = ROOMS.find(r => r.id === selectedRoomId) || ROOMS[0];

  const handleWhatsAppBooking = () => {
    const text = `👋 *¡Hola Recepción Verdant Hills!*\n` +
      `Deseo confirmar una reserva directa desde la web:\n` +
      `📅 Fechas: ${checkIn} al ${checkOut}\n` +
      `🛏️ Habitación: ${currentRoom.name} ($${currentRoom.directPrice} USD/noche)\n` +
      `👥 Huéspedes: ${adults} Adultos${children > 0 ? `, ${children} Niños` : ''}\n` +
      `⛳ Pase Golf: ${includeGolf ? 'Sí, incluir 18 hoyos' : 'No'}\n` +
      `¿Me confirman disponibilidad y datos de pago?`;
    window.open(`https://api.whatsapp.com/send?phone=51907030003&text=${encodeURIComponent(text)}`, '_blank');
    setIsSuccess(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleWhatsAppBooking();
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={22} />
        </button>

        {isSuccess ? (
          <div className="modal-success-view">
            <CheckCircle size={64} className="success-icon" />
            <h3 className="success-title">¡Solicitud de Reserva Lista!</h3>
            <p className="success-text">
              Tu cotización ha sido generada con la <strong>Tarifa Oficial Garantizada</strong>. La recepción de Verdant Hills te asistirá de inmediato.
            </p>
            <div className="booking-summary-box">
              <p><strong>Habitación:</strong> {currentRoom.name}</p>
              <p><strong>Fechas:</strong> {checkIn} al {checkOut}</p>
              <p><strong>Huéspedes:</strong> {adults} Adultos, {children} Niños</p>
              <p><strong>Tarifa Oficial:</strong> ${currentRoom.directPrice} USD / noche <span style={{ color: '#678432', fontWeight: 'bold' }}>(Tarifa Oficial Web)</span></p>
            </div>
            <button type="button" className="btn-modal-action" onClick={handleReset}>
              Entendido
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="modal-form">
            <div className="modal-header">
              <span className="modal-tag">Tarifa Directa Web Oficial</span>
              <h2 className="modal-title">Motor de Reserva Directa</h2>
              <p className="modal-sub">Garantizamos el mejor precio al reservar directo con recepción</p>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">
                  <Calendar size={15} /> Fecha de Llegada
                </label>
                <input
                  type="date"
                  className="form-input"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Calendar size={15} /> Fecha de Salida
                </label>
                <input
                  type="date"
                  className="form-input"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <BedDouble size={15} /> Tipo de Habitación
                </label>
                <select
                  className="form-input"
                  value={selectedRoomId}
                  onChange={(e) => setSelectedRoomId(e.target.value)}
                >
                  {ROOMS.map(r => (
                    <option key={r.id} value={r.id}>
                      {r.name} (${r.directPrice} USD/noche)
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Users size={15} /> Huéspedes
                </label>
                <div className="guest-counters-row">
                  <div className="counter-item">
                    <span>Adultos</span>
                    <div className="counter-controls">
                      <button type="button" onClick={() => setAdults(Math.max(1, adults - 1))}>-</button>
                      <span>{adults}</span>
                      <button type="button" onClick={() => setAdults(adults + 1)}>+</button>
                    </div>
                  </div>
                  <div className="counter-item">
                    <span>Niños</span>
                    <div className="counter-controls">
                      <button type="button" onClick={() => setChildren(Math.max(0, children - 1))}>-</button>
                      <span>{children}</span>
                      <button type="button" onClick={() => setChildren(children + 1)}>+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={includeGolf}
                  onChange={(e) => setIncludeGolf(e.target.checked)}
                />
                <span>Incluir Green Fee preferencial para Campo de Golf de 18 hoyos</span>
              </label>
            </div>

            {/* Direct WhatsApp Quick Submit */}
            <button
              type="button"
              className="btn-modal-whatsapp"
              onClick={handleWhatsAppBooking}
            >
              <FaWhatsapp size={20} />
              <span>Enviar Cotización a WhatsApp Recepción</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

// --- IMMERSIVE ROOM DETAIL MODAL ---
interface RoomDetailModalProps {
  room: RoomData | null;
  onClose: () => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({ room, onClose }) => {
  const [photoAngle, setPhotoAngle] = useState<'bed' | 'bath' | 'view'>('bed');

  if (!room) return null;

  const currentPhoto = room.gallery[photoAngle];

  const handleWhatsAppRoom = () => {
    const text = `👋 ¡Hola Verdant Hills! Deseo reservar la *${room.name}* (${room.size}) a Tarifa Directa de $${room.directPrice} USD/noche. ¿Tienen disponibilidad?`;
    window.open(`https://api.whatsapp.com/send?phone=51907030003&text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card modal-card-wide" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={22} />
        </button>

        <div className="room-detail-modal-grid">
          {/* Left: Inmersive Photo Gallery with Angle Switcher */}
          <div className="room-detail-img-side">
            <img src={currentPhoto} alt={`${room.name} - ${photoAngle}`} className="modal-gallery-main-img" />

            {/* Interactive Angle Switcher Tabs */}
            <div className="modal-photo-tabs">
              <button
                type="button"
                className={`modal-photo-tab ${photoAngle === 'bed' ? 'active' : ''}`}
                onClick={() => setPhotoAngle('bed')}
              >
                <Bed size={14} /> Dormitorio
              </button>
              <button
                type="button"
                className={`modal-photo-tab ${photoAngle === 'bath' ? 'active' : ''}`}
                onClick={() => setPhotoAngle('bath')}
              >
                <Bath size={14} /> Baño de Lujo
              </button>
              <button
                type="button"
                className={`modal-photo-tab ${photoAngle === 'view' ? 'active' : ''}`}
                onClick={() => setPhotoAngle('view')}
              >
                <Eye size={14} /> Vista Balcón
              </button>
            </div>

            <div className="room-detail-price-badge">
              <strong>${room.directPrice} USD</strong> / noche <small>(Tarifa Oficial)</small>
            </div>
          </div>

          {/* Right: Room Information & Minimalist Amenities */}
          <div className="room-detail-info-side">
            <span className="modal-tag">Categoría Exclusiva</span>
            <h2 className="room-modal-title">{room.name}</h2>
            <p className="room-modal-specs">
              <strong>Superficie:</strong> {room.size} &bull; <strong>Capacidad:</strong> {room.capacity} &bull; <strong>Cama:</strong> {room.bedType}
            </p>
            <p className="room-modal-desc">{room.description}</p>

            <h4 className="room-features-heading">Servicios Incluidos en esta Suite</h4>
            <div className="modal-amenities-grid">
              <div className="modal-amenity-card">
                <Wifi size={16} /> <span>Wi-Fi 500 Mbps</span>
              </div>
              <div className="modal-amenity-card">
                <Droplet size={16} /> <span>Agua Caliente / Ducha Lluvia</span>
              </div>
              <div className="modal-amenity-card">
                <Tv size={16} /> <span>Smart TV 55" con Streaming</span>
              </div>
              <div className="modal-amenity-card">
                <Wind size={16} /> <span>A/C Silencioso</span>
              </div>
              <div className="modal-amenity-card">
                <Coffee size={16} /> <span>Desayuno Buffet Incluido</span>
              </div>
              <div className="modal-amenity-card">
                <Sparkles size={16} /> <span>Minibar Gourmet</span>
              </div>
            </div>

            <div className="room-modal-actions">
              <button
                type="button"
                className="btn-modal-whatsapp"
                onClick={handleWhatsAppRoom}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <FaWhatsapp size={19} />
                <span>Cotizar esta Suite por WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- PROMOTION MODAL ---
interface PromoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPackage: () => void;
}

export const PromoModal: React.FC<PromoModalProps> = ({ isOpen, onClose, onSelectPackage }) => {
  if (!isOpen) return null;

  const packages = [
    {
      title: 'Escapada de Golf & Fin de Semana',
      price: '$190 USD / 2 Personas',
      highlight: 'Más Popular',
      desc: '1 Noche en Deluxe Suite + Green Fee de 18 hoyos + Desayuno Buffet + Carrito de Golf.'
    },
    {
      title: 'Retiro Romántico en las Colinas',
      price: '$210 USD / Pareja',
      highlight: 'Especial Parejas',
      desc: '2 Noches en Superior Room con terraza panorámica + Té de la tarde & postres + Sesión de Spa de cortesía.'
    },
    {
      title: 'Seminario Ejecutivo & Walk Rally',
      price: '$45 USD / Persona',
      highlight: 'Empresas',
      desc: 'Alquiler de salón de convenciones + 2 Coffee Breaks + Almuerzo buffet campestre + Actividad de integración.'
    }
  ];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card modal-card-wide" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={22} />
        </button>

        <div className="modal-header">
          <span className="modal-tag">Promociones Directas</span>
          <h2 className="modal-title">Paquetes Especiales</h2>
          <p className="modal-sub">Aprovecha tarifas directas con experiencias completas de alojamiento y gastronomía</p>
        </div>

        <div className="promo-packages-grid">
          {packages.map((pkg, i) => (
            <div key={i} className="promo-pkg-card">
              <span className="pkg-badge">{pkg.highlight}</span>
              <h3 className="pkg-title">{pkg.title}</h3>
              <p className="pkg-price">{pkg.price}</p>
              <p className="pkg-desc">{pkg.desc}</p>
              <button
                type="button"
                className="pkg-book-btn"
                onClick={() => {
                  onClose();
                  onSelectPackage();
                }}
              >
                Solicitar por WhatsApp
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- ACTIVITY MODAL ---
interface ActivityModalProps {
  activity: ActivityItem | null;
  onClose: () => void;
}

export const ActivityModal: React.FC<ActivityModalProps> = ({ activity, onClose }) => {
  if (!activity) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={22} />
        </button>

        <div className="activity-modal-content">
          <img src={activity.image} alt={activity.title} className="activity-modal-banner" />
          <div className="activity-modal-info">
            <span className="modal-tag">Actividad Exclusiva</span>
            <h2 className="activity-modal-title">{activity.title}</h2>
            <p className="activity-modal-details">{activity.fullDetails}</p>
            <button type="button" className="btn-modal-action" onClick={onClose}>
              Cerrar y Explorar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAP MODAL ---
interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MapModal: React.FC<MapModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={22} />
        </button>

        <div className="map-modal-content">
          <div className="modal-header">
            <span className="modal-tag">Ubicación Estratégica</span>
            <h2 className="modal-title">Cómo Llegar al Hotel</h2>
            <p className="modal-sub">128 Valley Vista Parkway, Highland Foothills Reserve</p>
          </div>

          <div className="map-embed-box">
            <iframe
              title="Verdant Hills Country Resort Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123894.4075591395!2d101.3060265!3d14.1687665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311c479bf79a957b%3A0xe5495579930f360c!2sVerdant%20Hills!5e0!3m2!1sen!2sth!4v1700000000000!5m2!1sen!2sth"
              width="100%"
              height="280"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen={false}
              loading="lazy"
            />
          </div>

          <div className="map-info-footer">
            <p><strong>Tiempos clave de llegada:</strong> 15 min desde el Aeropuerto Internacional &bull; 8 min de la Plaza Central &bull; 5 min del Parque Nacional.</p>
            <div className="map-actions-group">
              <a
                href="https://maps.google.com/?q=Verdant+Hills+Country+Resort"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-modal-submit"
                style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                <ExternalLink size={16} /> Abrir en Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
