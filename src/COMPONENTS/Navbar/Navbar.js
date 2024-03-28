import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../ASSETS/logo.png';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = ({ reloadnavbar }) => {
    const { t } = useTranslation();

    const [cartquantity, setcartquantity] = useState(0);

    const getcarttotalitems = () => {
        let cart = JSON.parse(localStorage.getItem('cart'));
        if (cart) {
            let total = 0;
            cart.forEach(item => {
                total += item.quantity;
            });
            setcartquantity(total);
        } else {
            setcartquantity(0);
        }
    };

    useEffect(() => {
        getcarttotalitems();
    }, [reloadnavbar]);

    const [shows3, setshows3] = useState(false);

    return (
        <nav>
            <div className='s1'>
                <img src={logo} alt='logo' className='logo' />
                {/* Right section */}
            </div>

            <div className='s2'>
                <Link to='/'>
                    <a>{t('Home')}</a>
                </Link>
                <Link to='/about'>
                    <a>{t('About Us')}</a>
                </Link>
                <Link to='/contact'>
                    <a>{t('Contact Us')}</a>
                </Link>
                <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                        {t('More')}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="/FAQ">{t('FAQ')}</Dropdown.Item>
                        <Dropdown.Item href="/privacypolicy">{t('Privacy Policy')}</Dropdown.Item>
                        <Dropdown.Item href="/termsandconditions">{t('Terms & Conditions')}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            {/* Optional: Handle s3 div */}
        </nav>
    );
};

export default Navbar;
