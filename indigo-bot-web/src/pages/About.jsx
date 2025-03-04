import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div className="body">
      <Header />
      <Navbar />
      <div className="about-container">
        <section className="about-project">
          <h1>About Project Indigo</h1>
          <p>
            Project Indigo is an AI-powered chatbot designed to provide social
            service information for the Portland community. Whether users need
            housing resources, food assistance, or mental health support,
            Project Indigo helps them find the right services quickly and
            easily.
          </p>
        </section>

        <section className="about-team">
          <h2>Project Indigo Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <h3>Kyle</h3>
              <p>Team Lead</p>
            </div>
            <div className="team-member">
              <h3>Avesta</h3>
              <p>Infrastructure Engineer</p>
            </div>
            <div className="team-member">
              <h3>Melissa</h3>
              <p>UI/UX Designer</p>
            </div>
            <div className="team-member">
              <h3>Sam</h3>
              <p>Frontend Engineer</p>
            </div>
            <div className="team-member">
              <h3>Grace</h3>
              <p>Database Engineer</p>
            </div>
            <div className="team-member">
              <h3>Karl</h3>
              <p>Backend Engineer</p>
            </div>
            <div className="team-member">
              <h3>Junfan</h3>
              <p>Backend Engineer</p>
            </div>
          </div>
        </section>

        <section className="about-links">
          <h2>Resources</h2>
          <p>
            <a
              href="https://github.com/Project-Indigo-HQ/indigobot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
              &nbsp; GitHub Repository
            </a>
          </p>
          <p>
            <a
              href="https://indigobot.readthedocs.io/en/latest/"
              target="_blank"
              rel="noopener noreferrer"
            >
              📖 Read the Docs
            </a>
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default About;
