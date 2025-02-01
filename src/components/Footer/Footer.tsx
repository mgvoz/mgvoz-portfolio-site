import "./Footer.css";
import Contact from "../Contact/Contact";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-contact">
        <Contact></Contact>
      </div>
      <div className="footer-details">
        <small>
          Built with React, Bootstrap, and Typescript, and deployed on Github
          Pages.{" "}
          <a
            className="code-link"
            href="https://github.com/mgvoz/mgvoz-portfolio-site"
          >
            See the code here.
          </a>
        </small>
      </div>
    </div>
  );
}

export default Footer;
