import Contact from "../../classes/Contact";
import "./Contact.css";

type Props = { item: Contact; index: number };

function ContactItem({ item, index }: Props) {
  return (
    <div
      className={"contact " + item.type}
      key={item.type + "_" + index.toString()}
    >
      <i className={"bi " + item.icon}></i>
      {item.link == "" ? (
        <span>{item.content}</span>
      ) : item.download == "" ? (
        <a href={item.link} target="_blank">
          {item.content}
        </a>
      ) : (
        <a href={item.link} download={item.download}>
          {item.content}
        </a>
      )}
    </div>
  );
}

export default ContactItem;
