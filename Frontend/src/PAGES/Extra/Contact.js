import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner';
import Footer1 from '../../COMPONENTS/Footer/Footer1';
import Footer2 from '../../COMPONENTS/Footer/Footer2';
import Navbar from '../../COMPONENTS/Navbar/Navbar';
import './Extrapages.css';

const Contact = () => {
  const { t } = useTranslation();

  const [rating, setRating] = React.useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='extrapage'>
      <Navbar reloadnavbar={false} />
      <SingleBanner
        bannerimage='https://images.unsplash.com/photo-1495480137269-ff29bd0a695c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
        heading={t('Contact Us')}
      />
      <div className='pgleft pgcommon'>
        <img src='https://images.unsplash.com/photo-1587560699334-bea93391dcef?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGNhbGx8ZW58MHx8fHwxNzEwOTg2NTYyfDA&ixlib=rb-4.0.3&w=1400' alt='noimg' />
        <div>
          <h1>{t('Our Story')}</h1>
          <p>{t('Contact UsThank you for your interest in CamMarket! We\'re here to assist you in any way we can.')}</p>
          <div>
            {t('Please feel free to reach out to us using the contact information provided below:')}
            <div>
              {t('Address')}: kotto mauryvanas<br />
              {t('Phone')}: +237678947982<br />
              {t('Email')}: achaipentashi@gmail.com
            </div>
          </div>
          <pre>
            {t('Social Media')}: {t('Connect with us on social media for updates, promotions, and more:')}<br />
            {t('Feedback')}: {t('We look forward to hearing from you!')}
          </pre>
        </div>
      </div>
      <div className='pgright pgcommon'>
        {/* 
        <img src='https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt='noimg' />
        <div>
          <h1>{t('Who are we')}</h1>
          <p>{t('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')}</p>
        </div>
        */}
      </div>
      <form className='extrapageform'>
        <h1 className='formheading'>{t('Get in Touch')}</h1>
        <div className='fromgroup'>
          <label htmlFor=''>{t('Name')}</label>
          <input type='text' />
        </div>
        <div className='fromgroup'>
          <label htmlFor=''>{t('Email')}</label>
          <input type='email' />
        </div>
        <div className='fromgroup'>
          <label htmlFor=''>{t('Message')}</label>
          <textarea name='' id='' cols='30' rows='10'></textarea>
        </div>
        <div className='fromgroup'>
          <label htmlFor=''>{t('Rating')}</label>
          <div className='rating'>
            {[1, 2, 3, 4, 5].map((star) => (
              <div
                className='star'
                key={star}
                onClick={() => {
                  setRating(star);
                }}
              >
                {rating >= star ? (
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6 staractive'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z' />
                  </svg>
                ) : (
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6 starinactive'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z' />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
        <button>{t('Submit')}</button>
      </form>
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default Contact;