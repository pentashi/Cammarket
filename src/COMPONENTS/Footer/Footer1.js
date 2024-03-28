import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the translation function
import veges from '../../ASSETS/veges.png';
import './Footer1.css';

const Footer1 = () => {
    const { t } = useTranslation(); // Initialize the translation function

    return (
        <div className='footer1'>
            <div className='left'>
                <img src={veges} alt='veges' />
            </div>
            <div className='right'>
                <h1>{t('Fresh Vegetables & Fruits at your doorstep')}</h1>
                <p>
                    {t('We deliver fresh vegetables & fruits at your doorstep. We deliver fresh vegetables & fruits at your doorstep.')}
                </p>
            </div>
        </div>
    );
};

export default Footer1;
