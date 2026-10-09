import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Plus,
  Minus,
  Menu
} from 'lucide-react';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { es } from 'date-fns/locale';
import { motion } from 'framer-motion';

registerLocale('es', es);
import './App.css';

function App() {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    new Date(),
    new Date(new Date().setDate(new Date().getDate() + 1))
  ]);
  const [startDate, endDate] = dateRange;

  const handleReservation = () => {
    if (!startDate || !endDate) {
      alert('Por favor selecciona las fechas de llegada y salida.');
      return;
    }
    alert(`Buscando disponibilidad para:\nLlegada: ${startDate.toLocaleDateString()}\nSalida: ${endDate.toLocaleDateString()}\nAdultos: ${adults}\nNiños: ${children}`);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="app-container">
      {/* Top Bar */}
      <motion.div
        className="top-bar"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="top-bar-left">
          <div className="top-contact">
            <MapPin size={14} />
            <span>742 Evergreen Terrace, Brooklyn, NY 11201</span>
          </div>
          <div className="top-contact">
            <Phone size={14} />
            <span>+922 333 9296</span>
          </div>
          <div className="top-contact">
            <Mail size={14} />
            <span>contacto@almaris.com</span>
          </div>
        </div>
        <div className="top-bar-right social-icons">
          <FaFacebook size={16} />
          <FaTwitter size={16} />
          <FaYoutube size={16} />
          <FaInstagram size={16} />
        </div>
      </motion.div>

      {/* Navbar */}
      <motion.nav
        className="navbar"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="nav-menu-btn">
          <Menu size={28} style={{ cursor: 'pointer' }} />
        </div>

        <div className="logo">
          <h1>ALMARIS</h1>
          <span>HOTEL</span>
        </div>

        <div className="nav-actions">
          <button className="btn-primary">Reservar</button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: `url('/pexels-mikhail-nilov-8332804.jpg')` }}
      >
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <h1>EL ARTE<br />DE VIVIR<br />EL LUJO</h1>
          <p>Sumérgete en un oasis de tranquilidad diseñado exclusivamente para ti. Descubre tu refugio perfecto.</p>
        </motion.div>


        <motion.div
          className="booking-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <div className="booking-bar">
            <h3>Reserva</h3>

            <div className="booking-fields">
              <div className="booking-field">
                <label>Llegada - Salida</label>
                <DatePicker
                  selectsRange={true}
                  startDate={startDate}
                  endDate={endDate}
                  onChange={(update: [Date | null, Date | null]) => {
                    setDateRange(update);
                  }}
                  locale="es"
                  dateFormat="dd MMM"
                  className="date-picker-custom"
                  placeholderText="Seleccionar Fechas"
                  withPortal
                />
              </div>

              <div className="booking-field">
                <label>Adultos</label>
                <div className="counter-group">
                  <button className="counter-btn" onClick={() => setAdults(Math.max(1, adults - 1))}><Minus size={14} /></button>
                  <span>{adults}</span>
                  <button className="counter-btn" onClick={() => setAdults(adults + 1)}><Plus size={14} /></button>
                </div>
              </div>

              <div className="booking-field">
                <label>Niños</label>
                <div className="counter-group">
                  <button className="counter-btn" onClick={() => setChildren(Math.max(0, children - 1))}><Minus size={14} /></button>
                  <span>{children}</span>
                  <button className="counter-btn" onClick={() => setChildren(children + 1)}><Plus size={14} /></button>
                </div>
              </div>
            </div>

            <button className="btn-check" onClick={handleReservation}>Consultar Disponibilidad</button>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <motion.section
        className="features"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="feature-box" variants={fadeInUp}>
          <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800" alt="Estancia" />
          <h3>Estancia</h3>
        </motion.div>
        <motion.div className="feature-box" variants={fadeInUp}>
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800" alt="Cena" />
          <h3>Cena</h3>
        </motion.div>
        <motion.div className="feature-box" variants={fadeInUp}>
          <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800" alt="Ofertas" />
          <h3>Ofertas</h3>
        </motion.div>
      </motion.section>

      {/* Testimonial Section */}
      <section
        className="testimonial"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?auto=format&fit=crop&q=80&w=2000')` }}
      >
        <motion.div
          className="testimonial-content"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="stars">
            ★ ★ ★ ★ ★
          </div>
          <h2>Experimente un lujo inigualable y un servicio personalizado en el Hotel Almaris, donde cada estancia es un viaje hacia la sofisticación, el confort y recuerdos inolvidables.</h2>
          <p>Donetta Penders</p>

          <div className="dots">
            <div className="dot active"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </motion.div>
      </section>

      {/* Accommodation Section */}
      <section id="accommodation" className="accommodations">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Nuestras Habitaciones</span>
          <h2 className="section-title">Alojamiento</h2>
        </motion.div>

        <motion.div
          className="room-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {[
            { name: "Habitación Estándar", img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800", guests: 2, size: "30 m²" },
            { name: "Habitación Deluxe", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800", guests: 2, size: "35 m²" },
            { name: "Habitación Premier", img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800", guests: 2, size: "35 m²" },
            { name: "Suite Familiar", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800", guests: 4, size: "60 m²" },
            { name: "Suite de Lujo", img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800", guests: 4, size: "60 m²" },
            { name: "Suite Presidencial", img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=800", guests: 4, size: "80 m²" }
          ].map((room, index) => (
            <motion.div className="room-card" key={index} variants={fadeInUp}>
              <img src={room.img} alt={room.name} />
              <div className="room-info">
                <h3>{room.name}</h3>
                <div className="room-details">
                  <span>{room.guests} Huéspedes</span>
                  <span>{room.size}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Instagram Section */}
      <section className="instagram">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Nuestro Instagram</span>
          <h2 className="section-title instagram-title">@almaris_hotel</h2>
        </motion.div>

        <motion.div
          className="ig-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?auto=format&fit=crop&q=80&w=400"
          ].map((img, idx) => (
            <motion.div className="ig-item" key={idx} variants={fadeInUp}>
              <img src={img} alt={`Instagram ${idx}`} />
              <div className="ig-overlay">
                <FaInstagram size={32} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="footer-col">
            <h4>Dirección</h4>
            <p>742 Evergreen Terrace</p>
            <p>Brooklyn, NY 11201</p>
          </div>

          <div className="footer-col center footer-logo">
            <h2>ALMARIS</h2>
            <span>HOTEL</span>
            <div className="footer-social">
              <FaFacebook size={18} />
              <FaInstagram size={18} />
              <FaTwitter size={18} />
              <FaYoutube size={18} />
            </div>
          </div>

          <div className="footer-col right">
            <h4>Contáctenos</h4>
            <p>T. +929 333 9296</p>
            <p>M. contacto@almaris.com</p>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <p>Copyright 2024 - Almaris by Designesia. Recreado por IA.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
