export type Language = 'es' | 'en';

export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      rooms: 'Habitaciones',
      location: 'Ubicación Estratégica',
      activities: 'Actividades',
      offers: 'Ofertas Especiales',
      golf: 'Golf & Spa',
      contact: 'Contacto',
      help: 'Ayuda',
      reservation: 'RESERVA DIRECTA',
      whatsappDirect: 'WhatsApp Directo'
    },
    hero: {
      subtitle: 'Bienvenido a',
      title: 'VerdantHillsResort',
      tagline: 'Country Resort  |  Reserva Natural  |  Golf & Spa',
      bookBtn: 'Cotizar',
      exploreBtn: 'Explorar Hotel',
      weatherCondition: 'Soleado , 12:29 pm',
      weatherLocation: 'Valle de las Colinas'
    },
    directBooking: {
      badge: 'Garantía Reserva Directa',
      title: 'Cotizador Directo a WhatsApp',
      subtitle: 'Tarifa oficial garantizada y atención personalizada al reservar directamente a través de nuestra web',
      rateTag: 'Tarifa Oficial Garantizada',
      checkIn: 'Llegada',
      checkOut: 'Salida',
      roomType: 'Habitación',
      adults: 'Adultos',
      children: 'Niños',
      totalEstimated: 'Total Estimado',
      perNight: 'por noche',
      nights: 'noches',
      whatsappBtn: 'Reservar por WhatsApp',
      directPerks: ['Mejor tarifa garantizada', 'Check-in prioritario', 'Bebida de bienvenida gratis', 'Cancelación flexible']
    },
    about: {
      titlePrimary: 'Verdant Hills',
      titleSecondary: 'Country Resort & Golf',
      description: 'Ubicado en un santuario exclusivo en las faldas de reservas naturales protegidas, Verdant Hills Country Resort ofrece una obra arquitectónica que fusiona hotelería boutique, terrazas panorámicas y fairways desafiantes para una experiencia inolvidable.',
      highlights: {
        h1Title: 'Golf de Campeonato',
        h1Desc: 'Campo escénico de 18 hoyos',
        h2Title: 'Reserva Ecológica',
        h2Desc: 'Flora y fauna protegida',
        h3Title: 'Eventos & Convenciones',
        h3Desc: 'Salones para 500 personas',
        h4Title: 'Acceso Rápido',
        h4Desc: 'A 15 min del aeropuerto'
      }
    },
    rooms: {
      title: 'Habitaciones & Suites',
      subtitle: 'Cada suite está diseñada con vistas inmersivas, iluminación cálida y acabados naturales.',
      tabBed: 'Dormitorio',
      tabBath: 'Baño de Lujo',
      tabView: 'Vista & Balcón',
      amenitiesTitle: 'Servicios & Comodidades',
      amenities: {
        wifi: 'Wi-Fi 500 Mbps',
        hotWater: 'Agua Caliente / Ducha Lluvia',
        tv: 'Smart TV 55" con Streaming',
        ac: 'Aire Acondicionado Silencioso',
        minibar: 'Minibar & Cafetera Gourmet',
        breakfast: 'Desayuno Buffet Incluido'
      },
      roomSize: 'Tamaño',
      capacity: 'Capacidad',
      bedType: 'Cama',
      bookThisRoom: 'Cotizar esta Habitación',
      viewDetails: 'Ver Galería y Detalles'
    },
    strategicLocation: {
      badge: 'Conectividad & Accesibilidad',
      title: 'Ubicación Estratégica',
      subtitle: 'Cerca de todo lo que necesitas, con el silencio y la paz que buscas',
      googleMapBtn: 'Abrir Ruta en Google Maps',
      getDirections: 'Cómo llegar',
      times: [
        {
          id: 'airport',
          time: '15 min',
          place: 'Aeropuerto Internacional',
          desc: 'Conexión directa por autopista sin peajes demorados. Servicio de transfer privado disponible.'
        },
        {
          id: 'plaza',
          time: '8 min',
          place: 'Plaza Central & Distrito Gastronómico',
          desc: 'Los mejores restaurantes de autor, galerías de arte y vida nocturna de la región.'
        },
        {
          id: 'park',
          time: '5 min',
          place: 'Parque Nacional & Senderos Ecológicos',
          desc: 'Rutas de trekking, cascadas cristalinas y miradores paisajísticos protegidos.'
        },
        {
          id: 'golf',
          time: '2 min',
          place: 'Club de Golf & Canchas de Tenis',
          desc: 'Acceso directo con carrito de golf desde el lobby del resort.'
        }
      ]
    },
    promo: {
      memberLarge: 'Club Exclusivo',
      memberSub: 'Beneficios Exclusivos para Miembros',
      memberAction: 'Consultar Beneficios por WhatsApp',
      packagesTitle: 'Paquetes Especiales',
      viewPackage: 'Ver Paquetes'
    },
    activities: {
      title: 'Actividades del Resort',
      readMore: 'Conoce más',
      card1: 'Villa de Golf',
      card1Desc: 'Campo de golf profesional con green fees preferenciales y alquiler de equipo pro.',
      card2: 'Atractivos Cercanos',
      card2Desc: 'Tours ecológicos, viñedos boutique y cascadas naturales en los alrededores.',
      card3: 'Seminarios & Eventos',
      card3Desc: 'Espacios corporativos con tecnología de vanguardia y servicio de banquetería.'
    },
    footer: {
      title: 'Verdant Hills Country Resort & Golf',
      address: '128 Valley Vista Parkway, Highland Foothills Reserve',
      phone: 'Tel: +1 (800) 458-7290 | WhatsApp: +51 907 030 003',
      email: 'reservations@verdanthillsresort.com',
      googleMap: 'Google Maps'
    }
  },
  en: {
    nav: {
      home: 'Home',
      rooms: 'Rooms',
      location: 'Strategic Location',
      activities: 'Activities',
      offers: 'Special Offers',
      golf: 'Golf & Spa',
      contact: 'Contact',
      help: 'Help',
      reservation: 'DIRECT RESERVATION',
      whatsappDirect: 'WhatsApp Direct'
    },
    hero: {
      subtitle: 'Welcome to',
      title: 'VerdantHillsResort',
      tagline: 'Country Resort  |  Nature Sanctuary  |  Golf & Spa',
      bookBtn: 'Check Best Direct Rate',
      exploreBtn: 'Discover Hotel',
      weatherCondition: 'Sunny , 12:29 pm',
      weatherLocation: 'Highland Foothills'
    },
    directBooking: {
      badge: 'Official Web Guarantee',
      title: 'Direct WhatsApp Quotation Engine',
      subtitle: 'Guaranteed official rates and personalized concierge when reserving through our official website',
      rateTag: 'Guaranteed Official Rate',
      checkIn: 'Check-In',
      checkOut: 'Check-Out',
      roomType: 'Room Category',
      adults: 'Adults',
      children: 'Children',
      totalEstimated: 'Estimated Total',
      perNight: 'per night',
      nights: 'nights',
      whatsappBtn: 'Book via WhatsApp',
      directPerks: ['Guaranteed best rate', 'Priority check-in', 'Complimentary welcome drink', 'Flexible cancellation']
    },
    about: {
      titlePrimary: 'Verdant Hills',
      titleSecondary: 'Country Resort & Golf',
      description: 'Located in an exclusive sanctuary at the foothills of protected natural reserves, Verdant Hills Country Resort offers an architectural masterpiece blending boutique hospitality, panoramic mountain horizons, and challenging championship golf fairways for an unforgettable stay.',
      highlights: {
        h1Title: 'Championship Golf',
        h1Desc: 'Scenic 18-hole standard course',
        h2Title: 'Nature Sanctuary',
        h2Desc: 'Pristine flora & wildlife fauna',
        h3Title: 'Conferences & Events',
        h3Desc: 'Grand ballrooms up to 500 guests',
        h4Title: 'Swift Proximity',
        h4Desc: 'Only 15 min from Airport'
      }
    },
    rooms: {
      title: 'Rooms & Suites',
      subtitle: 'Each suite is thoughtfully designed with immersive views, warm ambient lighting, and organic materials.',
      tabBed: 'Master Bedroom',
      tabBath: 'Luxury Bath',
      tabView: 'Scenic Balcony',
      amenitiesTitle: 'Amenities & Inclusions',
      amenities: {
        wifi: 'High-speed Wi-Fi 500 Mbps',
        hotWater: 'Hot Water & Rain Shower',
        tv: '55" Smart TV with Streaming',
        ac: 'Whisper-quiet Air Conditioning',
        minibar: 'Gourmet Coffee & Mini Bar',
        breakfast: 'Complimentary Buffet Breakfast'
      },
      roomSize: 'Size',
      capacity: 'Capacity',
      bedType: 'Bedding',
      bookThisRoom: 'Book This Room',
      viewDetails: 'View Gallery & Details'
    },
    strategicLocation: {
      badge: 'Accessibility & Distances',
      title: 'Strategic Location',
      subtitle: 'Minutes away from prime attractions, while immersed in peaceful mountain silence',
      googleMapBtn: 'Open Route in Google Maps',
      getDirections: 'Get Directions',
      times: [
        {
          id: 'airport',
          time: '15 min',
          place: 'International Airport',
          desc: 'Direct highway corridor without toll delays. Private airport transfer service available.'
        },
        {
          id: 'plaza',
          time: '8 min',
          place: 'Main Plaza & Culinary District',
          desc: 'Top signature restaurants, local artisan galleries, and cultural town heritage.'
        },
        {
          id: 'park',
          time: '5 min',
          place: 'National Park & Nature Trails',
          desc: 'Protected trekking routes, natural waterfalls, and breathtaking highland lookouts.'
        },
        {
          id: 'golf',
          time: '2 min',
          place: '18-Hole Championship Golf Course',
          desc: 'Direct golf cart fairway access from the resort grand portico.'
        }
      ]
    },
    promo: {
      memberLarge: 'Exclusive Club',
      memberSub: 'Exclusive Member Privileges',
      memberAction: 'Inquire Privileges via WhatsApp',
      packagesTitle: 'Special Packages',
      viewPackage: 'View Packages'
    },
    activities: {
      title: 'Resort Activities',
      readMore: 'Learn More',
      card1: 'Golf Village',
      card1Desc: 'Championship standard golf courses with preferential green fees and pro equipment rental.',
      card2: 'Nearby Attractions',
      card2Desc: 'Eco tours, boutique organic vineyards, and nature reserves in the surrounding valley.',
      card3: 'Seminars & Events',
      card3Desc: 'Cutting-edge corporate meeting facilities with bespoke banqueting service.'
    },
    footer: {
      title: 'Verdant Hills Country Resort & Golf',
      address: '128 Valley Vista Parkway, Highland Foothills Reserve',
      phone: 'Tel: +1 (800) 458-7290 | WhatsApp: +51 907 030 003',
      email: 'reservations@verdanthillsresort.com',
      googleMap: 'Google Maps'
    }
  }
};
