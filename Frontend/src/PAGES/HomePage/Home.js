import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import BannerSlider from '../../COMPONENTS/Banners/BannerSlider';
import HomeCategories from '../../COMPONENTS/Category/HomeCategories';
import Footer1 from '../../COMPONENTS/Footer/Footer1';
import Footer2 from '../../COMPONENTS/Footer/Footer2';
import Navbar from '../../COMPONENTS/Navbar/Navbar';
// import './Home.css'; // Assuming you have a CSS file for styling

const Home = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div>
      <Navbar reloadnavbar={false} />
      <BannerSlider />
      <HomeCategories />
      <Footer1 />
      <Footer2 />
      <div className="language-toggle-container">
        <button className="language-toggle-button" onClick={() => handleLanguageChange(language === 'en' ? 'fr' : 'en')}>
          {language === 'en' ? 'Français' : 'English'}
        </button>
      </div>
    </div>
  );
};

export default Home;
