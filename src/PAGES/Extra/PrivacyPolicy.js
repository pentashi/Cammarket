import React, { useEffect } from 'react'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='extrapage'>
      <Navbar />
      <SingleBanner
        bannerimage='https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80'
        heading="Privacy Policy"
      />
      <div className='pgcont1'>
  <h2>Privacy Policy</h2>
  <p>Your privacy is important to CamMarket. This privacy statement provides information about the personal information that CamMarket collects and the ways in which CamMarket uses that personal information.</p>

  <h3>Personal Information Collection</h3>
  <p>CamMarket may collect and use the following kinds of personal information:</p>
  <ul>
    <li>Information about your use of this website;</li>
    <li>Information that you provide using for the purpose of registering with the website;</li>
    <li>Information about transactions carried out over this website;</li>
    <li>Information that you provide for the purpose of subscribing to the website services; and</li>
    <li>Any other information that you send to CamMarket.</li>
  </ul>

  <h3>Using Personal Information</h3>
  <p>CamMarket may use your personal information to:</p>
  <ul>
    <li>Administer this website;</li>
    <li>Personalize the website for you;</li>
    <li>Enable your access to and use of the website services;</li>
    <li>Publish information about you on the website;</li>
    <li>Send to you products that you purchase;</li>
    <li>Supply to you services that you purchase;</li>
    <li>Send you statements and invoices;</li>
    <li>Collect payments from you; and</li>
    <li>Send you marketing communications.</li>
  </ul>

  <h3>Securing Your Data</h3>
  <p>CamMarket will take reasonable technical and organizational precautions to prevent the loss, misuse, or alteration of your personal information.</p>

  <h3>Updating This Statement</h3>
  <p>CamMarket may update this privacy policy by posting a new version on this website. You should check this page occasionally to ensure you are familiar with any changes.</p>

  <p><em>This privacy policy was last updated on January 1, 2024.</em></p>
</div>

<Footer1 />
<Footer2 />
</div>
  )
}

export default PrivacyPolicy