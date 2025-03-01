import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

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
          <a href="#" class="social-icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" class="social-icon">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="#" class="social-icon">
            <FontAwesomeIcon icon={faCommentDots} />
          </a>
          <a href="#" class="social-icon">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
