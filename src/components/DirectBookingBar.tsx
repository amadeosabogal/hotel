import React, { useState } from 'react';
import { Calendar, Users, BedDouble, ShieldCheck, Tag, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { translations, type Language } from '../translations';

interface DirectBookingBarProps {
  lang: Language;
}

interface RoomOption {
  id: string;
  name: string;
  directPrice: number; // in USD
}

const ROOM_OPTIONS: RoomOption[] = [
  { id: 'deluxe', name: 'Deluxe Suite con Terraza', directPrice: 95 },
  { id: 'superior', name: 'Superior King Room', directPrice: 75 },
  { id: 'suite', name: 'Executive Family Suite', directPrice: 150 }
];

export const DirectBookingBar: React.FC<DirectBookingBarProps> = ({ lang }) => {
  const t = translations[lang].directBooking;
  
  // Default dates: tomorrow and +2 days
  const today = new Date();
  const defaultCheckIn = new Date(today);
  defaultCheckIn.setDate(today.getDate() + 1);
  const defaultCheckOut = new Date(today);
  defaultCheckOut.setDate(today.getDate() + 3);

  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(formatDate(defaultCheckIn));
  const [checkOut, setCheckOut] = useState(formatDate(defaultCheckOut));
  const [selectedRoomId, setSelectedRoomId] = useState('deluxe');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  // Calculate nights
  const date1 = new Date(checkIn);
  const date2 = new Date(checkOut);
  const diffTime = date2.getTime() - date1.getTime();
  const calculatedNights = Math.max(1, Math.round(diffTime / (1000 * 60 * 60 * 24)));

  const room = ROOM_OPTIONS.find((r) => r.id === selectedRoomId) || ROOM_OPTIONS[0];
  const totalDirect = room.directPrice * calculatedNights;

  const handleSendWhatsApp = () => {
    const isEs = lang === 'es';
    const message = isEs
      ? `👋 *¡Hola Recepción de Verdant Hills!*\n` +
        `Deseo cotizar y reservar *directamente* a través de su web oficial:\n\n` +
        `📅 *Llegada (Check-in):* ${checkIn}\n` +
        `📅 *Salida (Check-out):* ${checkOut} (${calculatedNights} ${calculatedNights === 1 ? 'noche' : 'noches'})\n` +
        `🛏️ *Habitación:* ${room.name}\n` +
        `👥 *Huéspedes:* ${adults} Adultos${children > 0 ? `, ${children} Niños` : ''}\n` +
        `💰 *Cotización Estimada:* $${totalDirect} USD *(Tarifa Oficial Web)*\n\n` +
        `¿Tienen disponibilidad para confirmar mi reserva? ¡Muchas gracias!`
      : `👋 *Hello Verdant Hills Front Desk!*\n` +
        `I would like to book *directly* through your official website:\n\n` +
        `📅 *Check-in:* ${checkIn}\n` +
        `📅 *Check-out:* ${checkOut} (${calculatedNights} ${calculatedNights === 1 ? 'night' : 'nights'})\n` +
        `🛏️ *Room:* ${room.name}\n` +
        `👥 *Guests:* ${adults} Adults${children > 0 ? `, ${children} Children` : ''}\n` +
        `💰 *Estimated Total:* $${totalDirect} USD *(Official Web Rate)*\n\n` +
        `Could you please confirm availability for these dates? Thank you!`;

    // Reception WhatsApp number: +51 907 030 003
    const phone = '51907030003';
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="direct-booking-wrapper">
      <div className="direct-booking-container">
        {/* Top Direct Value Pitch */}
        <div className="direct-pitch-header">
          <div className="direct-badge-box">
            <Tag size={15} className="tag-icon" />
            <span>{t.badge}</span>
          </div>
          <div className="direct-pitch-titles">
            <h2 className="direct-engine-title">{t.title}</h2>
            <p className="direct-engine-subtitle">{t.subtitle}</p>
          </div>
          <div className="direct-saving-callout">
            <span className="saving-pill">{t.rateTag}</span>
          </div>
        </div>

        {/* Engine Fields Bar */}
        <div className="engine-fields-grid">
          {/* Check-In */}
          <div className="engine-field-box">
            <label className="engine-label">
              <Calendar size={14} />
              <span>{t.checkIn}</span>
            </label>
            <input 
              type="date" 
              className="engine-input" 
              value={checkIn}
              min={formatDate(today)}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>

          {/* Check-Out */}
          <div className="engine-field-box">
            <label className="engine-label">
              <Calendar size={14} />
              <span>{t.checkOut}</span>
            </label>
            <input 
              type="date" 
              className="engine-input" 
              value={checkOut}
              min={checkIn}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>

          {/* Room Category */}
          <div className="engine-field-box">
            <label className="engine-label">
              <BedDouble size={14} />
              <span>{t.roomType}</span>
            </label>
            <select 
              className="engine-select"
              value={selectedRoomId}
              onChange={(e) => setSelectedRoomId(e.target.value)}
            >
              {ROOM_OPTIONS.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.name} (${opt.directPrice} USD/noche)
                </option>
              ))}
            </select>
          </div>

          {/* Guests */}
          <div className="engine-field-box">
            <label className="engine-label">
              <Users size={14} />
              <span>{t.adults} & {t.children}</span>
            </label>
            <div className="guest-mini-counter">
              <div className="mini-guest-control">
                <span>{adults} Ad.</span>
                <div className="btn-counter-group">
                  <button type="button" onClick={() => setAdults(Math.max(1, adults - 1))}>-</button>
                  <button type="button" onClick={() => setAdults(adults + 1)}>+</button>
                </div>
              </div>
              <div className="mini-guest-control">
                <span>{children} Niñ.</span>
                <div className="btn-counter-group">
                  <button type="button" onClick={() => setChildren(Math.max(0, children - 1))}>-</button>
                  <button type="button" onClick={() => setChildren(children + 1)}>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Calculation & WhatsApp Direct CTA */}
        <div className="engine-action-bar">
          <div className="calculation-summary">
            <div className="calc-price-row">
              <span className="calc-label">{t.totalEstimated} ({calculatedNights} {t.nights}):</span>
              <span className="calc-amount-direct">${totalDirect} USD</span>
            </div>
            <div className="calc-saved-text">
              ✨ <strong>Mejor Tarifa Disponible</strong> &bull; Confirmación inmediata con recepción
            </div>
          </div>

          <button 
            type="button" 
            className="whatsapp-direct-btn"
            onClick={handleSendWhatsApp}
          >
            <FaWhatsapp size={22} className="wsp-icon" />
            <span>{t.whatsappBtn}</span>
            <ArrowRight size={18} className="wsp-arrow" />
          </button>
        </div>

        {/* Direct Perks Guarantee List */}
        <div className="direct-perks-row">
          {t.directPerks.map((perk, idx) => (
            <div key={idx} className="direct-perk-item">
              <ShieldCheck size={16} className="perk-check-icon" />
              <span>{perk}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
