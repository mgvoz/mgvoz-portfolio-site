import "./Contact.css";
import MapFactory from "../../services/MapFactory";

function Contact() {
  let contactMap = MapFactory.createMap("contacts");

  return (
    <div className="contact-container" id="contact">
      <div className="connect">Let's connect</div>
      <div className="map">{contactMap}</div>
    </div>
  );
}
export default Contact;
