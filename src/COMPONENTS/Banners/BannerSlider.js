import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import Slider from 'react-slick';
import './BannerSlider.css';

const BannerSlider = () => {
    const { t } = useTranslation(); // Use useTranslation hook to access t function

    const data = [
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1495480137269-ff29bd0a695c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
            titleKey: 'Welcome to CamMarket',
            descriptionKey: 'We deliver Fresh Vegetables & Fruits at your doorstep',
            // button: 'htttps://www.google.com'
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='bannerslider'>
            <Slider className='bannerslider' {...settings}>
                {data.map(item => (
                    <div className='imagecont' key={item.id}>
                        <img src={item.image} alt='noimg' />
                        <div className='content'>
                            <h1>{t(item.titleKey)}</h1>
                            <span>{t(item.descriptionKey)}</span>
                            {/* <button>Shop More</button> */}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BannerSlider;
