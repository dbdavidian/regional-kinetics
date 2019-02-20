import React from "react";
import { Helmet } from "react-helmet";

import "./Contact.css";
import facebookLogo from "./facebook.png";
import twitterLogo from "./twitter.png";

const Contact = () => (
  <div className="container">
    <Helmet>
      <title>Contact</title>
      <meta name="description" content="contact" />
      <link rel="canonical" href="https://www.regionalkinetics.com/contact" />
    </Helmet>
    <h1>Contact</h1>
    <p>Email: regionalkinetics@gmail.com</p>
    <a href="mailto:regionalkinetics@gmail.com" target="_top">
      Send Mail
    </a>
    <div id="mc_embed_signup">
      <form
        action="https://regionalkinetics.us20.list-manage.com/subscribe/post?u=cd6af7cb0d72bd1758415260b&amp;id=ce4d6834b6"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
      >
        <div id="mc_embed_signup_scroll">
          <h2>Subscribe to our mailing list</h2>
          <div class="mc-field-group">
            <label for="mce-EMAIL">Email Address </label>
            <input
              type="email"
              name="EMAIL"
              class="required email"
              id="mce-EMAIL"
            />
          </div>
          <div id="mce-responses" class="clear" />
          <div
            class="response"
            id="mce-error-response"
            style={{ display: "none" }}
          />
          <div
            class="response"
            id="mce-success-response"
            style={{ display: "none" }}
          />
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_cd6af7cb0d72bd1758415260b_ce4d6834b6"
              tabindex="-1"
              value=""
            />
          </div>
          <div class="clear">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              class="button"
            />
          </div>
        </div>
      </form>
    </div>
    <div class='icon-container'>
      <a href="https://www.facebook.com/regionalkinetics/" target="_blank" rel="noopener noreferrer">
        <img class="icon" src={facebookLogo} alt="facebook logo" />
      </a>
      <a href="https://twitter.com/R_Kinetics" target="_blank" rel="noopener noreferrer">
        <img class="icon" src={twitterLogo} alt="twitter logo" />
      </a>
    </div>
  </div>
);

export default Contact;
