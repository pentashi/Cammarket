import React from 'react';
import { useTranslation } from 'react-i18next'; // Importing useTranslation hook
import payimg from '../../ASSETS/pay.png';
import './Footer2.css';
import { Link } from 'react-router-dom';

const Footer2 = () => {
    const { t } = useTranslation(); // Using useTranslation hook to get the t function

    return (
        <div className='footerin2'>
            <h3>{t('© Copyright 2024 CamMarket, Inc.  All rights reserved')}</h3>
            <img src={payimg} alt='payimg' />
        </div>
    );
}

export default Footer2;
