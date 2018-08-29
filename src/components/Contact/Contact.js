import React from 'react';
import { Helmet } from 'react-helmet';

import './Contact.css';

const Contact = () => (
  <div className="container">
    <Helmet>
      <title>Contact</title>
      <meta name="description" content="contact"></meta>
      <link rel="canonical" href="https://www.regionalkinetics.com/contact" />
    </Helmet>
    <h1>Contact</h1>
    <p>Email: info@regionalkinetics.org</p>
    <a href="mailto:info@regionalkinetics.org" target="_top">Send Mail</a>
  </div>
);

export default Contact;
