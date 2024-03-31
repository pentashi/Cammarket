import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import { useTranslation } from 'react-i18next'; // Import useTranslation
import './AuthPage.css'

const Login = () => {
    const { t } = useTranslation(); // Initialize useTranslation hook

    return (
        <div className='authpage'>
            <Navbar reloadnavbar={false}/>

            <div className='authcont'>
                <img src='https://images.unsplash.com/photo-1495480137269-ff29bd0a695c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
                    alt='login' />

                <form className='authform'>
                    <h1>{t('Login')}</h1>
                    <div className='formgroup'>
                        <label htmlFor='email'>{t('Email')}</label>
                        <input type='email' id='email' />
                    </div>

                    <div className='formgroup'>
                        <label htmlFor='password'>{t('Password')}</label>
                        <input type='password' id='password' />
                    </div>

                    <Link to='/forgotpassword'
                        className='stylenone'
                    >
                        <p>{t('Forgot password?')}</p>
                    </Link>
                    <Link to='/MaketPage.js'
                        className='stylenone'
                    >
                        <button className='btn'>{t('Login')}</button>
                    </Link>
                    <h2 className='or'>OR</h2>
                    <Link to='/signup'
                        className='stylenone'
                    >
                        <button className='btn'>{t('Signup')}</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login;
