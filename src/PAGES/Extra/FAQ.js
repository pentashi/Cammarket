import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner';
import Footer1 from '../../COMPONENTS/Footer/Footer1';
import Footer2 from '../../COMPONENTS/Footer/Footer2';
import Navbar from '../../COMPONENTS/Navbar/Navbar';

const FAQ = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activesection, setactivesection] = useState(0);

  const faq = [
    {
      id: 1,
      question: t('What is CamMarket?'),
      answer: t('CamMarket is an online platform that connects local vendors and supermarkets with shoppers in Cameroon. It offers a wide range of products including fresh produce, groceries, household essentials, and specialty items, allowing users to conveniently browse and purchase items from the comfort of their homes.')
    },
    {
      id: 2,
      question: t('Why choose CamMarket?'),
      answer: t('CamMarket offers several benefits including a diverse selection of products sourced directly from local vendors and supermarkets, reliable delivery services with orders delivered to your doorstep, and exceptional customer service to assist you with any inquiries or concerns. Additionally, CamMarket is committed to promoting sustainability and environmental stewardship.')
    },
    {
      id: 3,
      question: t('How does CamMarket work?'),
      answer: t('CamMarket provides users with an intuitive online platform where they can browse products, add items to their cart, and proceed to checkout. Once the order is placed, CamMarket processes the order and arranges for delivery to the customer\'s preferred location. Users can track their orders and communicate with customer support if needed.')
    },
    {
      id: 4,
      question: t('Is CamMarket available nationwide?'),
      answer: t('Currently, CamMarket operates in select cities and regions in Cameroon. However, we are continuously expanding our services to reach more customers across the country. Stay tuned for updates on our expansion plans!')
    },
    {
      id: 5,
      question: t('How can I contact CamMarket?'),
      answer: t('For any inquiries, feedback, or assistance, you can reach out to CamMarket customer support through our contact page on the website. Our dedicated team is available to assist you and ensure your shopping experience is seamless and enjoyable.')
    }
  ];

  return (
    <div className='extrapage'>
      <Navbar />
      <SingleBanner
        heading={t('FAQs')}
        bannerimage='https://images.unsplash.com/photo-1665789318391-6057c533005e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
      />

      <div className='faqcontainer'>
        {faq.map((item, index) => (
          activesection === item.id ? (
            <div className='faq' key={item.id}>
              <div className='faqhead'>
                <h1>{item.question}</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={() => setactivesection(0)}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div className='faqbody'>
                <p>{item.answer}</p>
              </div>
            </div>
          ) : (
            <div className='faq' key={item.id}>
              <div className='faqhead'>
                <h1>{item.question}</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={() => setactivesection(item.id)}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>
          )
        ))}
      </div>

      <Footer1 />
      <Footer2 />
    </div>
  );
}

export default FAQ;
