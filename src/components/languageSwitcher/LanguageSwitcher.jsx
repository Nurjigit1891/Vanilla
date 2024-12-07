import React, { useState } from 'react';
import { Select, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import ruFlag from '../../assets/russiaFlag.png'; // Импорт PNG
import enFlag from '../../assets/englishFlag.png';
import chFlag from '../../assets/chinaFlag.png';
import inFlag from '../../assets/indiaFlag.png';
import krFlag from '../../assets/koreanFlag.png';
import jpFlag from '../../assets/japanFlag.png';
import grFlag from '../../assets/germanFlag.png';
import './LanguageSwitcher.scss';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation(); // Доступ к i18next
    const [language, setLanguage] = useState(i18n.language); // Устанавливаем начальный язык из i18next
  
  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage); // Обновляем состояние
    i18n.changeLanguage(selectedLanguage); // Смена языка через i18next
  };
  return (
    <Select
      value={language}
      onChange={handleChange}
      variant="outlined"
      size="small"
      className="languageSelect"
      MenuProps={{
        PaperProps: {
          style: {
            maxHeight: 300, // Ограничение высоты списка
            width: 150,
          },
        },
      }}
    >
      <MenuItem value="en" className="languageMenuItem">
        <div className="menuItemContent">
          <img src={enFlag} alt="English" className="flagIcon" />
          <span className="menuText">EN</span>
        </div>
      </MenuItem>
      <MenuItem value="ru" className="languageMenuItem">
        <div className="menuItemContent">
          <img src={ruFlag} alt="Russian" className="flagIcon" />
          <span className="menuText">RU</span>
        </div>
      </MenuItem>
      <MenuItem value="ch" className="languageMenuItem">
        <div className="menuItemContent">
          <img src={chFlag} alt="Chinese" className="flagIcon" />
          <span className="menuText">CH</span>
        </div>
      </MenuItem>
      <MenuItem value="in" className="languageMenuItem">
        <div className="menuItemContent">
          <img src={inFlag} alt="Indian" className="flagIcon" />
          <span className="menuText">IN</span>
        </div>
      </MenuItem>
      <MenuItem value="kr" className="languageMenuItem">
        <div className="menuItemContent">
          <img src={krFlag} alt="Korean" className="flagIcon" />
          <span className="menuText">KR</span>
        </div>
      </MenuItem>
      <MenuItem value="jp" className="languageMenuItem">
        <div className="menuItemContent">
          <img src={jpFlag} alt="Japanese" className="flagIcon" />
          <span className="menuText">JP</span>
        </div>
      </MenuItem>
      <MenuItem value="gr" className="languageMenuItem">
        <div className="menuItemContent">
          <img src={grFlag} alt="German" className="flagIcon" />
          <span className="menuText">GR</span>
        </div>
      </MenuItem>
    </Select>
  );
};

export default LanguageSwitcher;
