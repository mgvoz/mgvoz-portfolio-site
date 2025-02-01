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
          Built with React, Bootstrap, and Typescript.{" "}
          <a
            className="code-link"
            href="https://codesandbox.io/p/devbox/mgvoz-portfolio-site-6rh9hc"
          >
            See the code here.
          </a>
        </small>
      </div>
    </div>
  );
}

export default Footer;
