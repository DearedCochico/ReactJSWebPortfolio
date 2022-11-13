import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FaEnvelope, FaPhone } from 'react-icons/fa';


const TITLE = "Contact";
const DESC = "Create a React App from an HTML Website.";
const CANONICAL = Config.SITE_DOMAIN + "/";

class Contact extends React.Component {
  render() {
    return (
      <main>
        <Helmet>
          <title>{TITLE}</title>
          <link rel="cannonical" href="{CANNONICAL}" />
          <meta name="description" content={DESC} />
          <meta name="theme-color" content={Config.THEME_COLOR} />
        </Helmet>

        <div id="background-wrap">
          <div className="x1">
            <div className="cloud"></div>
          </div>

          <div className="x2">
            <div className="cloud"></div>
          </div>

          <div className="x3">
            <div className="cloud"></div>
          </div>

          <div className="x4">
            <div className="cloud"></div>
          </div>

          <div className="x5">
            <div className="cloud"></div>
          </div>
        </div>

        <div className="wrapper">
          <div className="contact_form">
            <div className="title">CONNECT</div>
            <a
              className={"faGoogle"}
              href="mailto:jrdcchco17@gmail.com"
            >
              <FaEnvelope size={40} /></a>
            
    
            <div>
            <a className={"faPhone"} 
            href="tel:+63 (0992) 335 2170">
               <FaPhone size={40} /></a>
            </div>
            <a
              className={"faLinkedin"}
              href="https://www.linkedin.com/in/deared-cochico-9a7a4422a/"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            
            
          </div>
        </div>

        <div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>
</div>

<div className="image">
<img src={require('./peaceti.jpg')} />
    </div> 
       </main>
    );
  }
}

export default Contact;
