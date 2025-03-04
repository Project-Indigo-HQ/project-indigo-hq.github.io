import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTelegram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="body">
      <Header />
      <Navbar />
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>Reach out to the team using the email below.</p>

        <div className="contact-details">
          <p>
            📧 Email:{" "}
            <a href="mailto:contact@projectindigo.com">
              teamindigofw24@gmail.com
            </a>
          </p>
          <br></br>
          <p>Contact IndigoBot using any of the these platforms.</p>
          <p>
            <FontAwesomeIcon icon={faCommentDots} /> SMS:{" "}
            <a href="tel:+1234567890">+1 (234) 567-890</a>
          </p>
        </div>

        <div className="contact-socials">
          <a href="" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTelegram} />
            Telegram
          </a>
          <a
            href="https://www.facebook.com/people/Chatbot-for-Social-Services/61570612387489/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
            Facebook
          </a>
          <a
            href="https://www.instagram.com/teamindigopsu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
            Instagram
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
