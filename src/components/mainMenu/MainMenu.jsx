import React, { useRef } from 'react';
import './MainMenu.scss';
import CoffeeIcon from '@mui/icons-material/Coffee';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import CookieIcon from '@mui/icons-material/Cookie';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const MainMenu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, rootMargin: '-100px 0px' });
  const { t } = useTranslation();

  const isMobile = window.innerWidth <= 480; // Проверка на мобильный экран

  // Варианты анимации для мобильных устройств
  const mobileCardVariants = {
    hidden: { opacity: 0, x: -100 },
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

  const Card = ({ index, icon: Icon, title, description }) => {
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
        <div className="cardIcon">
          <Icon className="cardIcon_icon" />
          
        </div>
        <div className="cardTitle">
          <h4>{title}</h4>
        </div>
        <div className="cardDescription">
          <p>{description}</p>
        </div>
        <div className="cardBtn">
          <p>{t("mainMenu.card1.btn")}</p>
        </div>
      </motion.div>
    );
  };

  return (
    <motion.div
      className="mainMenu"
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className="container">
        <div className="mainMenu_content">
          <h2>{t("mainMenu.title")}</h2>
          <div className="cards">
            <Card
              index={0}
              icon={CoffeeIcon}
              title={t("mainMenu.card1.title")}
              description={t("mainMenu.card1.description")}
            />
            <Card
              index={1}
              icon={RestaurantIcon}
              title={t("mainMenu.card2.title")}
              description={t("mainMenu.card2.description")}
            />
            <Card
              index={2}
              icon={LocalDrinkIcon}
              title={t("mainMenu.card3.title")}
              description={t("mainMenu.card3.description")}
            />
            <Card
              index={3}
              icon={CookieIcon}
              title={t("mainMenu.card4.title")}
              description={t("mainMenu.card4.description")}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MainMenu;
