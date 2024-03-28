import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import BannerSlider from '../../COMPONENTS/Banners/BannerSlider';
import HomeCategories from '../../COMPONENTS/Category/HomeCategories';
import Footer1 from '../../COMPONENTS/Footer/Footer1';
import Footer2 from '../../COMPONENTS/Footer/Footer2';
import Navbar from '../../COMPONENTS/Navbar/Navbar';
import './Home.css'; // Import CSS file for additional styling

const Home = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  const buttonStyle = {
    padding: '10px 20px',
    margin: '5px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    backgroundColor: '#f0f0f0',
    color: '#333',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)',
  };

  const activeButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#007bff',
    color: '#fff',
  };

  return (
    <div>
      <div className="language-buttons-container">
        <button
          style={language === 'en' ? activeButtonStyle : buttonStyle}
          onClick={() => handleLanguageChange('en')}
        >
          English
        </button>
        <button
          style={language === 'fr' ? activeButtonStyle : buttonStyle}
          onClick={() => handleLanguageChange('fr')}
        >
          French
        </button>
      </div>

      <Navbar reloadnavbar={false} />
      <BannerSlider />
      <HomeCategories />
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default Home;
