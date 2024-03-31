import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner';
import Footer1 from '../../COMPONENTS/Footer/Footer1';
import Footer2 from '../../COMPONENTS/Footer/Footer2';
import Navbar from '../../COMPONENTS/Navbar/Navbar';
import './Extrapages.css'
const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='extrapage'>
      <Navbar reloadnavbar={false} />
      <SingleBanner
        heading={t('About Us')}
        bannerimage='https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
      />
      <div className='pgleft pgcommon'>
        <img src='https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFib3V0fGVufDB8fHx8MTcxMTUwNjU3NHww&ixlib=rb-4.0.3&w=1400' alt='noimg' />
        <div>
          <h1>{t('About Us')}</h1>
          <div>
            <p>{t('Welcome to CamMarket, your ultimate online destination for convenient and hassle-free shopping in Cameroon.')}</p>
            <p>{t('We are committed to revolutionizing the way you shop for everyday essentials and specialty items, bringing the local market and supermarket experience directly to your fingertips.')}</p>
            <h2>{t('Our Mission at CamMarket')}</h2>
            <p>
              <ul>
                <li>{t('Our mission is to provide a seamless and enjoyable shopping experience for every customer,')}</li>
                <li>{t('offering a diverse selection of products,')}</li>
                <li>{t('exceptional service, and unmatched convenience.')}</li>
                <li>{t('We strive to connect local vendors and supermarkets with shoppers, creating a vibrant marketplace that empowers communities and fosters economic growth.')}</li>
              </ul>
            </p>
            <h2>{t('Our Vision')}</h2>
            <div>
              <p>{t('We envision a future where shopping is effortless, accessible, and enjoyable for everyone. By leveraging technology and innovation, we aim to transform traditional shopping practices and empower individuals to meet their needs conveniently, securely, and sustainably.')}</p>
            </div>
            <h2>{t('Why Choose CamMarket?')}</h2>
            <div>
              <p>{t('Wide Selection: Explore a vast array of products ranging from fresh produce and groceries to household essentials and specialty items, all in one place.')}</p>
            </div>
            <h2>{t('Convenience')}</h2>
            <div>
              <p>{t('Shop anytime, anywhere, with the flexibility to browse, select, and order products from the comfort of your home or on the go.')}</p>
            </div>
            <h2>{t('Quality Assurance')}</h2>
            <div>
              <p>{t('Rest assured that all products available on CamMarket meet the highest standards of quality and freshness, sourced directly from trusted local vendors and supermarkets.')}</p>
            </div>
            <h2>{t('Reliable Delivery')}</h2>
            <div>
              <p>{t('Enjoy prompt and reliable delivery services, with orders delivered directly to your doorstep at your preferred time for maximum convenience.')}</p>
            </div>
            <h2>{t('Exceptional Service')}</h2>
            <div>
              <p>{t('Our dedicated customer support team is here to assist you every step of the way, ensuring a seamless shopping experience and addressing any inquiries or concerns promptly.')}</p>
            </div>
            <h2>{t('Our Commitment to Sustainability')}</h2>
            <div>
              <p>{t('At CamMarket, we are committed to promoting sustainability and environmental stewardship in everything we do. From reducing plastic waste to supporting local farmers and producers, we actively seek ways to minimize our ecological footprint and contribute positively to the communities we serve.')}</p>
            </div>
            <h2>{t('Get Started with CamMarket Today!')}</h2>
            <div>
              <p>{t('Join thousands of satisfied customers who have made CamMarket their go-to destination for all their shopping needs. Experience the convenience, reliability, and quality of CamMarket today and discover a new way to shop that\'s designed with you in mind.')}</p>
            </div>
            <pre>{t('Thank you for choosing CamMarket. We look forward to serving you! Shop Now')}</pre>
          </div>
        </div>
      </div>
      <div className='pgright pgcommon'>
        {/* You can add translation for the content in the right section if needed */}
      </div>
      <Footer1 />
      <Footer2 />
    </div>
  );
}

export default About;
