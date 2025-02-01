import "./Contact.css";
import contact from "../../data/contact";

function Contact() {
  let contactMap = contact.map((c, index) => {
    return (
      <div
        className={"contact " + c.type}
        key={c.type + "_" + index.toString()}
      >
        <i className={"bi " + c.icon}></i>
        {c.link == "" ? (
          <span>{c.content}</span>
        ) : c.download == "" ? (
          <a href={c.link} target="_blank">
            {c.content}
          </a>
        ) : (
          <a href={c.link} download={c.download}>
            {c.content}
          </a>
        )}
      </div>
    );
  });

  return (
    <div className="contact-container" id="contact">
      <div className="connect">Let's connect</div>
      <div className="map">{contactMap}</div>
    </div>
  );
}
export default Contact;
