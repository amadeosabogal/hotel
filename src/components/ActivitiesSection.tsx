import React from 'react';
import { motion } from 'framer-motion';
import { translations, type Language } from '../translations';

export interface ActivityItem {
  id: string;
  title: string;
  image: string;
  description: string;
  fullDetails: string;
}

interface ActivitiesSectionProps {
  lang: Language;
  onSelectActivity: (activity: ActivityItem) => void;
}

export const ActivitiesSection: React.FC<ActivitiesSectionProps> = ({ lang, onSelectActivity }) => {
  const t = translations[lang].activities;

  const activities: ActivityItem[] = [
    {
      id: 'golf-village',
      title: t.card1,
      image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80',
      description: t.card1Desc,
      fullDetails: 'The Verdant Hills Golf Village offers an 18-hole championship standard course nestled against the foothills. Featuring undulating fairways, strategic sand bunkers, pristine water hazards, and pro-shop equipment rental, it delivers an exhilarating test of golf in an unhurried natural environment.'
    },
    {
      id: 'nearby-attractions',
      title: t.card2,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      description: t.card2Desc,
      fullDetails: 'Explore protected national parks, scenic waterfalls, boutique organic vineyards, and historic cultural villages in the surrounding valley just minutes away from the resort grounds.'
    },
    {
      id: 'resort-seminar',
      title: t.card3,
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
      description: t.card3Desc,
      fullDetails: 'Equipped with cutting-edge audiovisual systems, flexible banquet setups, and grand chandeliers, our meeting facilities host corporate seminars, team-building retreats, and executive gala dinners up to 500 guests.'
    }
  ];

  return (
    <section id="activities" className="activities-section">
      <div className="activities-container">
        {/* Title */}
        <motion.h2 
          className="activities-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t.title}
        </motion.h2>

        {/* 3-Cards Grid */}
        <div className="activities-grid">
          {activities.map((item, idx) => (
            <motion.article 
              key={item.id} 
              className="activity-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div className="activity-img-wrapper">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="activity-img" 
                  loading="lazy"
                />
              </div>

              <div className="activity-body">
                <h3 className="activity-name">{item.title}</h3>
                <p className="activity-desc">{item.description}</p>

                <button 
                  type="button" 
                  className="activity-readmore-btn"
                  onClick={() => onSelectActivity(item)}
                >
                  {t.readMore}
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
