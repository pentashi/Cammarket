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
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
    setShowDropdown(false); // Close the dropdown after selecting a language
  };

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState); // Toggle dropdown visibility
  };

  return (
    <div>
      <div className="language-dropdown-container">

{//this is the change of button
}
        {/* <button className="language-dropdown-toggle" onClick={toggleDropdown}>
          {language.toUpperCase()}
        </button> */}
        {/* {showDropdown && (
          <div className="language-dropdown-content">
            <button onClick={() => handleLanguageChange('en')}>English</button>
            <button onClick={() => handleLanguageChange('fr')}>French</button>
          </div>
        )} */}
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
