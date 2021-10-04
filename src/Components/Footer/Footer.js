import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-dark">
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-3 item">
            <h3>Services</h3>
            <ul>
              <li>Cemera</li>
              <li>Photography</li>
              <li>Teaching center</li>
            </ul>
          </div>
          <div className="col-md-6 item text">
            <h3>Learn With cam</h3>
            <p>Cameras are complicated. I was frustrated with my first DSLR. I couldn’t capture what I saw through my viewfinder. It took a ton of trial and error to improve your photography.</p>
          </div>
         
        </div>
        <p className="copyright">Company Name © 2018</p>
      </div>
    </footer>
  </div>
    );
};

export default Footer;