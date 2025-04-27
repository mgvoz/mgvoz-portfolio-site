import Certification from "../../classes/Certification";
import "./About.css";

type Props = { item: Certification ; index: number };

function CertificationItem({ item , index}: Props) {
  return (
    <div className="cert" key={item.name + "_" + index.toString()}>
      {item.name}
    </div>
  );
}

export default CertificationItem;
