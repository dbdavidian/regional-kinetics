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
    <p>Email: regionalkinetics@gmail.com</p>
    <a href="mailto:regionalkinetics@gmail.com" target="_top">Send Mail</a>
  </div>
);

export default Contact;
