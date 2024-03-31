import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner';
import Footer1 from '../../COMPONENTS/Footer/Footer1';
import Footer2 from '../../COMPONENTS/Footer/Footer2';
import Navbar from '../../COMPONENTS/Navbar/Navbar';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='extrapage'>
      <Navbar />
      <SingleBanner
        bannerimage='https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80'
        heading={t('Privacy Policy')}
      />
      <div className='pgcont1'>
        <h2>{t('Privacy Policy')}</h2>
        <p>{t("Your privacy is important to CamMarket. This privacy statement provides information about the personal information that CamMarket collects and the ways in which CamMarket uses that personal information.")}</p>

        <h3>{t('Personal Information Collection')}</h3>
        <p>{t('CamMarket may collect and use the following kinds of personal information:')}</p>
        <ul>
          <li>{t('Information about your use of this website;')}</li>
          <li>{t('Information that you provide using for the purpose of registering with the website;')}</li>
          <li>{t('Information about transactions carried out over this website;')}</li>
          <li>{t('Information that you provide for the purpose of subscribing to the website services; and')}</li>
          <li>{t('Any other information that you send to CamMarket.')}</li>
        </ul>

        <h3>{t('Using Personal Information')}</h3>
        <p>{t('CamMarket may use your personal information to:')}</p>
        <ul>
          <li>{t('Administer this website;')}</li>
          <li>{t('Personalize the website for you;')}</li>
          <li>{t('Enable your access to and use of the website services;')}</li>
          <li>{t('Publish information about you on the website;')}</li>
          <li>{t('Send to you products that you purchase;')}</li>
          <li>{t('Supply to you services that you purchase;')}</li>
          <li>{t('Send you statements and invoices;')}</li>
          <li>{t('Collect payments from you; and')}</li>
          <li>{t('Send you marketing communications.')}</li>
        </ul>

        <h3>{t('Securing Your Data')}</h3>
        <p>{t('CamMarket will take reasonable technical and organizational precautions to prevent the loss, misuse, or alteration of your personal information.')}</p>

        <h3>{t('Updating This Statement')}</h3>
        <p>{t('CamMarket may update this privacy policy by posting a new version on this website. You should check this page occasionally to ensure you are familiar with any changes.')}</p>

        <p><em>{t('This privacy policy was last updated on January 1, 2024.')}</em></p>
      </div>

      <Footer1 />
      <Footer2 />
    </div>
  );
}

export default PrivacyPolicy;
