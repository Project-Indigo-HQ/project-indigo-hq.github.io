import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTelegram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

const Footer = () => {
  return (
    <footer>
      <div class="footer-container">
        <div class="footer-left">
          <p>&copy; 2025 indigo-pdx.com All Rights Reserved.</p>
        </div>
        <div class="footer-center">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
        <div class="footer-right">
          <a href="https://www.facebook.com/people/Chatbot-for-Social-Services/61570612387489/" class="social-icon">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/teamindigopsu/" class="social-icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="sms:+15415323874" class="social-icon">
            <FontAwesomeIcon icon={faCommentDots} />
          </a>
          <a href="https://t.me/indigopdxbot" class="social-icon">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
