import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importing useTranslation hook
import Navbar from '../../COMPONENTS/Navbar/Navbar';
import './AuthPage.css';

const Signup = () => {
    const { t } = useTranslation(); // Destructuring t function from useTranslation hook

    return (
        <div className='authpage'>
            <Navbar reloadnavbar={false}/>

            <div className='authcont'>
                <img src='https://images.unsplash.com/photo-1495480137269-ff29bd0a695c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
                    alt='signup' />

                <form className='authform'>
                    <h1>{t('Signup')}</h1>
                    <div className='form-group-row'>
                        <div className='formgroup'>
                            <label htmlFor='fname'>{t('First Name')}</label>
                            <input type='text' id='fname' />
                        </div>
                        <div className='formgroup'>
                            <label htmlFor='lname'>{t('Last Name')}</label>
                            <input type='text' id='lname' />
                        </div>
                    </div>
                    <div className='formgroup'>
                        <label htmlFor='email'>{t('Email')}</label>
                        <input type='email' id='email' />
                    </div>

                    <div className='form-group-row'>
                        <div className='formgroup'>
                            <label htmlFor='password'>{t('Password')}</label>
                            <input type='password' id='password' />
                        </div>
                        <div className='formgroup'>
                            <label htmlFor='cpassword'>{t('Confirm Password')}</label>
                            <input type='password' id='cpassword' />
                        </div>
                    </div>

                    <Link to='/login' className='stylenone'>
                        <p>{t('Already have an account?')}</p>
                    </Link>
                    <Link to='/signup' className='stylenone'>
                        <button className='btn'>{t('Signup')}</button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Signup;
