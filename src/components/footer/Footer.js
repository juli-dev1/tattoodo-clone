import React from "react";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io5'
import Button from "../button/Button";

import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title">Explore</h2>

          <ul className="nav__ul">
            <li>
              <a href="#">Tattoos</a>
            </li>

            <li>
              <a href="#">Explore</a>
            </li>

            <li>
              <a href="#">Watch</a>
            </li>

            <li>
              <a href="#">Articles</a>
            </li>

            <li>
              <a href="#">Guides</a>
            </li>

            <li>
              <a href="#">Best Tattoos of 2021</a>
            </li>

            <li>
              <a href="#">Create a booking</a>
            </li>

            <li>
              <a href="#">Download the App</a>
            </li>
          </ul>
        </li>

        <li className="nav__item nav__item--extra">
          <h2 className="nav__title">Company</h2>
          <ul className="nav__ul nav__ul">
            <li>
              <a href="#">About</a>
            </li>

            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </li>

        <li className="nav__item">
          <h2 className="nav__title">Legal</h2>

          <ul className="nav__ul">
            <li>
              <a href="#">Terms & Conditions</a>
            </li>

            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="footer__signup">
        <h2 className="nav__title">Sign Up</h2>
        <ul >
          <li>
            <p>Join millions of people looking to find tattoo inspiration, discover artists and studios, and easily book tattoo appointments.</p>
          </li>

          <li>
            <Button inverted={false} link='#'> Get Started </Button>
            
          </li>
        </ul>

      </div>

      <div className="legal">
        <div>
          <p>Tattoo</p>
        </div>

        <div className="legal__links">
          <span>&copy; {new Date().getFullYear()} Tattoo.</span>
          <div >
            <a className='social__footer' href="#" >{<IoLogoFacebook color='black' size='30' />}</a>
            <a className='social__footer' href="#" >{<IoLogoInstagram color='black' size='30' />}</a>
            <a className='social__footer' href="#" >{<IoLogoTwitter color='black' size='30' />}</a>
            <a className='social__footer' href="#" >{<IoLogoYoutube color='black' size='30' />}</a>
          </div>
        </div>
        <div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
