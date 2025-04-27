import Education from "../../classes/Education";
import "./About.css";

type Props = { item: Education; index: number };

function EducationItem({ item, index }: Props) {
  return (
    <div
      className="education-item"
      key={item.college + "_" + index.toString()}
    >
      <div className="college">{item.college}</div>
      <div className="degree">{item.degree}</div>
      <small className="years">{item.years}</small>
      <div className="major">{item.major}</div>
    </div>
  );
}

export default EducationItem;
