import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './PAGES/HomePage/Home';
import ProductPage from './PAGES/Product/ProductPage';
import About from './PAGES/Extra/About';
import Contact from './PAGES/Extra/Contact';
import Login from './PAGES/Auth/Login';
import Signup from './PAGES/Auth/Signup';
import ForgotPassword from './PAGES/Auth/ForgotPassword';
import Cart from './PAGES/Cart/Cart';
import UserProfile from './PAGES/User/UserProfile';
import FAQ from './PAGES/Extra/FAQ';
import Termsandconditions from './PAGES/Extra/Termsandconditions';
import PrivacyPolicy from './PAGES/Extra/PrivacyPolicy';
import ProductEntryForm from './COMPONENTS/ProductEntryForm/ProductEntryForm';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Import your i18n configuration

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product/:prodid" element={<ProductPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/product-entry-form" element={<ProductEntryForm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/user/:activepage' element={<UserProfile />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/termsandconditions" element={<Termsandconditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route
            path="*"
            element={
              <div>
                <h1>404 NOT FOUND</h1>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  );
};

export default App;
