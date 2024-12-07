import React, { useRef } from 'react';
import './Main3.scss';
import { useTranslation } from 'react-i18next';
import main3i1 from '../../assets/main3-1.png';
import main3i2 from '../../assets/main3-2.png';
import main3i3 from '../../assets/main3-3.jpg';
import main3i4 from '../../assets/main3-4.png';
import { motion, useInView } from 'framer-motion';

const Main3 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, rootMargin: '-100px 0px' });
  const { t } = useTranslation();

  const isMobile = window.innerWidth <= 480; // Проверка на мобильный экран

  // Варианты анимации для мобильных устройств
  const mobileCardVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  // Варианты анимации для ПК (карточки падают сверху вниз)
  const desktopCardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Задержка для каждой карточки
        duration: 0.6, // Длительность анимации
      },
    }),
  };

  const Card = ({ index, imgSrc, altText, title, description }) => {
    const cardRef = useRef(null);
    const cardInView = useInView(cardRef, { once: true, rootMargin: '-50px 0px' });

    return (
      <motion.div
        className="card"
        ref={cardRef}
        initial="hidden"
        custom={index} // Передаём индекс для анимации
        animate={cardInView ? 'visible' : 'hidden'}
        variants={isMobile ? mobileCardVariants : desktopCardVariants}
      >
        <img src={imgSrc} alt={altText} />
        <h4>{title}</h4>
        <p>{description}</p>
      </motion.div>
    );
  };

  return (
    <motion.div
      className="main3"
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className="container">
        <div className="main3_content">
          <h1>{t('main3.title')}</h1>
          <div className="cards">
            <Card
              index={0}
              imgSrc={main3i1}
              altText="Catering"
              title={t('main3.card1.title')}
              description={t('main3.card1.description')}
            />
            <Card
              index={1}
              imgSrc={main3i2}
              altText="Birthdays"
              title={t('main3.card2.title')}
              description={t('main3.card2.description')}
            />
            <Card
              index={2}
              imgSrc={main3i3}
              altText="Romantic Dinners"
              title={t('main3.card3.title')}
              description={t('main3.card3.description')}
            />
            <Card
              index={3}
              imgSrc={main3i4}
              altText="Events"
              title={t('main3.card4.title')}
              description={t('main3.card4.description')}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Main3;
