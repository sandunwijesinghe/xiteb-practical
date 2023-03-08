import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./footer.css";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer-main-container">
      <div className="footer-sub-container">
        <div className="footer-bg"></div>
        <button className="footer-scrollUp">
          <i className="angle-up">^</i>
          Scroll Up
        </button>
        <div className="footer-content-box">
          <div className="footer-section">
            <h4 className="footer-title">About</h4>
            <ul className="footer-list" id="about">
              <li>
                <a href="https://www.cinnamonhotels.com/about-us">
                  About Cinnamon Hotels &amp; Resorts
                </a>
              </li>
              <li>
                <a href="https://www.cinnamonhotels.com/media-accolades">
                  Media &amp; Accolades
                </a>
              </li>
              <li>
                <a href="https://www.cinnamonhotels.com/gallery">Gallery</a>
              </li>
              <li>
                <a href="https://www.cinnamonhotels.com/cinnamon-csr-sustainability">
                  CSR &amp; Sustainability
                </a>
              </li>
              <li>
                <a
                  href="https://www.keells.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  John Keells Group
                </a>
              </li>
              <li>
                <a
                  href="https://www.cinnamonair.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cinnamon Air
                </a>
              </li>
              <li>
                <a
                  href="https://www.cinnamonnaturetrails.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nature Trails
                </a>
              </li>
              <li>
                <a
                  href="https://cinnamonboxoffice.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cinnamon Box Office
                </a>
              </li>
              <li>
                <a href="https://www.cinnamonhotels.com/terms-and-conditions">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="https://www.cinnamonhotels.com/privacy-statement">
                  Privacy Statement
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Get In Touch</h4>
            <ul className="footer-list" id="getInTouch">
              <li>
                <a href="https://www.cinnamonhotels.com/know-sri-lanka">
                  Know Sri Lanka
                </a>
              </li>
              <li>
                <a href="https://www.cinnamonhotels.com/know-maldives">
                  Know Maldives
                </a>
              </li>
              <li>
                <a
                  href="https://cinnamonhotels.freshdesk.com/support/home"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <h4 className="footer-title">Sections</h4>
            <ul className="footer-list" id="section">
              <li>
                <a href="https://www.cinnamonhotels.com/careers">Careers</a>
              </li>
              <li>
                <a
                  href="http://blog.cinnamonhotels.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </li>
              <li>
                <a href="https://www.cinnamonhotels.com/affiliateprogramme">
                  Cinnamon Affiliate Programme
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section-contact">
            <h4 className="footer-title">Follow Us</h4>
            <ul className="footer-list-inline">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/cinnamonhotels"
                >
                  <span className="fa fa-facebook">
                    <FontAwesomeIcon icon={faFacebook} />
                  </span>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/CinnamonHotels"
                >
                  <span className="fa fa-twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                  </span>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/company/cinnamon-hotels-&amp;-resorts"
                >
                  <span className="fa fa-linkedin">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </span>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/cinnamonhotels"
                >
                  <span className="fa fa-instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                  </span>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/channel/UCw6HmIsvHGq2HcBQCzE7J5A?view_as=subscriber"
                >
                  <span className="fa fa-youtube">
                    <FontAwesomeIcon icon={faYoutube} />{" "}
                  </span>
                </a>
              </li>
            </ul>
            <h4 className="footer-title">Get Cinnamon in your inbox</h4>
            <div className="input-group">
              <input
                type="text"
                id="email"
                className="input-form"
                placeholder="Email Address"
              />
              <span className="input-group-btn">
                <button className="input-btn" id="fooSubmit">
                  <span className="input-btn-arrow">
                    <img
                      src="https://www.cinnamonhotels.com/themes/cinnamon/images/svg/right-arw.svg"
                      height="20"
                      alt=""
                    />
                  </span>
                </button>
              </span>
            </div>
            <div className="footer-input-checkbox">
              <label className="checkbox-label">
                <input id="terms" type="checkbox" className="checkbox" /> By
                Checking this box, I consent to the processing of my Personal
                Data by Cinnamon for the purpose and within the Conditions set
                out in this form and the{" "}
                <a
                className="checkbox-link"
                  href="https://www.cinnamonhotels.com/privacy-statement"
                 
                >
                  Cinnamon Data Protection Policy
                </a>.*
              </label>
              <span className="checkmark"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
