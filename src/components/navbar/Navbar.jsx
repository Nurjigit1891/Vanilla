import React, { useState } from 'react';
import './Navbar.scss';
import vIconCofee from '../../assets/vIconCofee.png';
import { NavLink } from 'react-router-dom';
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../languageSwitcher/LanguageSwitcher';



const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false); // Управление Drawer
  
  const { t } = useTranslation(); 
  const { i18n } = useTranslation();


  // Функция для переключения Drawer
  const handleDrawerToggle = () => {
    setOpenDrawer((prevState) => !prevState);
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar_content">
          {/* Логотип */}
          <div className="icon">
            <img src={vIconCofee} alt="иконка" />
            <p>Vanilla Sky</p>
          </div>

          {/* Навигация для больших экранов */}
          <div className="navs">
            <nav className="navbar">
              <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                {t('navbar.home')}
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                {t('navbar.about')}
              </NavLink>
              <NavLink to="/menu" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                {t('navbar.menu')}
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                {t('navbar.contact')}
              </NavLink>
            </nav>
          </div>

          {/* Кнопка "Book a Table" */}
          <div className="languageSwitch">
            <LanguageSwitcher />
          </div>
          <div className="book">
            <p>{t('navbar.book')}</p>
          </div>

          {/* Бургер-меню для мобильных устройств */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            className="burger-menu"
            sx={{ display: { sm: 'block', md: 'none' } }} // Показать только на мобильных
          >
            <MenuIcon />
          </IconButton>

          {/* Drawer (выдвижное меню) */}
          <Drawer
            anchor="right"
            open={openDrawer}
            onClose={handleDrawerToggle}
            className='moveMenu'
            sx={{
              '& .MuiDrawer-paper': {
                width: '240px',
                padding: '20px',
              },
            }}
          >
            <List>
              <ListItem sx={{textDecoration: 'none'}} button onClick={handleDrawerToggle}>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                  <ListItemText primary={t('navbar.home')} />
                </NavLink>
              </ListItem>
              <ListItem button onClick={handleDrawerToggle}>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                  <ListItemText primary={t('navbar.about')} />
                </NavLink>
              </ListItem>
              <ListItem button onClick={handleDrawerToggle}>
                <NavLink to="/menu" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                  <ListItemText primary={t('navbar.menu')} />
                </NavLink>
              </ListItem>
              <ListItem button onClick={handleDrawerToggle}>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                  <ListItemText primary={t('navbar.contact')} />
                </NavLink>
              </ListItem>
            </List>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
