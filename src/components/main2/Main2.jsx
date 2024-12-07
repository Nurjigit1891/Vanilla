import React, { useRef } from 'react';
import './Main2.scss';
import main2Image from '../../assets/main2Image.png';
import { useTranslation } from 'react-i18next';
import CallIcon from '@mui/icons-material/Call';
import InstagramIcon from '@mui/icons-material/Instagram';
import PlaceIcon from '@mui/icons-material/Place';
import { motion, useInView } from 'framer-motion';

const Main2 = () => {
  const { t } = useTranslation();

  // Создаём реф для наблюдения за элементом
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true, // Анимация запускается только один раз
    rootMargin: '0px 0px -80%', // Срабатывает, когда нижние 20% блока видны
    threshold: 0.9, // 50% элемента должно быть видимо
  });
  // Варианты анимации
  const blockVariants = {
    hidden: { opacity: 0, y: 50 }, // Скрытое состояние
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3, // Задержка появления для каждого блока
        duration: 0.5, // Длительность анимации
      },
    }),
  };

  return (
    <div className="main2" ref={ref}>
      <div className="container">
        <motion.div
          className="main2_content"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'} // Анимация запускается только при видимости
        >
          {/* Левый блок */}
          <motion.div
            className="left"
            variants={blockVariants}
            custom={0} // Индекс для поочередной анимации
          >
            <img src={main2Image} alt="Картинка еды" />
          </motion.div>

          {/* Правый блок */}
          <motion.div
            className="right"
            variants={blockVariants}
            custom={1} // Индекс для поочередной анимации
          >
            <h2>{t("main2.title")}</h2>
            <p className="description1">{t("main2.description1")}</p>
            <p className="description2">{t("main2.description2")}</p>
            <p className="btn">{t("main2.button")}</p>
          </motion.div>

          {/* Динамический блок */}
          <motion.div
            className="dynamic"
            variants={blockVariants}
            custom={2} // Индекс для поочередной анимации
          >
            <p className="dynamicTitle">{t("main2.dynamicTitle")}</p>
            <div className="contacts">
              <div className="contactDivs phoneNumber">
                <CallIcon />
                <p>+996 502 155 775</p>
              </div>
              <div className="contactDivs instagram">
                <InstagramIcon />
                <p>
                  <a
                    href="https://www.instagram.com/vanillacoffee.kg?igsh=N3Y1YXFjMmlwM3Bu"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    @Vanilla_sky
                  </a>
                </p>
              </div>
              <div className="contactDivs address">
                <PlaceIcon />
                <p>г. Бишкек, ул. Исанова 147</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Main2;
