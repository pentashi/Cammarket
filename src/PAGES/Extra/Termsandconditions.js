import React, { useEffect } from 'react'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'

const Termsandconditions = () => {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='extrapage'>
      <Navbar />
      <SingleBanner
        bannerimage='https://images.unsplash.com/photo-1448697138198-9aa6d0d84bf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
        heading="Terms & Conditions"
      />

<div className='pgcont1'>
        <h2>Terms and Conditions</h2>
        <h3>1. Introduction</h3>
        <p>These terms and conditions govern your use of CamMarket's website; by using CamMarket, you accept these terms and conditions in full. If you disagree with these terms and conditions or any part of these terms and conditions, you must not use CamMarket.</p>
        
        <h3>2. Intellectual Property Rights</h3>
        <p>Unless otherwise stated, CamMarket and/or its licensors own the intellectual property rights in the website and material on the website. Subject to the license below, all these intellectual property rights are reserved.</p>
        
        <h3>3. License to Use Website</h3>
        <p>You may view, download for caching purposes only, and print pages from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.</p>
        
        <h3>4. Acceptable Use</h3>
        <p>You must not use CamMarket in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity.</p>
        
        <h3>5. Restricted Access</h3>
        <p>Access to certain areas of CamMarket is restricted. CamMarket reserves the right to restrict access to other areas of this website, or indeed this entire website, at CamMarket's discretion.</p>
        
        <h3>6. Variation</h3>
        <p>CamMarket may revise these terms and conditions from time-to-time. Revised terms and conditions will apply to the use of this website from the date of the publication of the revised terms and conditions on this website. Please check this page regularly to ensure you are familiar with the current version.</p>
        
        <h3>7. Entire Agreement</h3>
        <p>These terms and conditions constitute the entire agreement between you and CamMarket in relation to your use of this website and supersede all previous agreements in respect of your use of this website.</p>
        
        <h3>8. Law and Jurisdiction</h3>
        <p>These terms and conditions will be governed by and construed in accordance with the laws of Cameroon, and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of Cameroon.</p>
      </div>
      <Footer1 />
      <Footer2 />
    </div>
  )
}

export default Termsandconditions