import Experience from "../../classes/Experience";
import MapFactory from "../../services/MapFactory";
import "./About.css";

type Props = { item: Experience; index: number };

function ExperienceItem({ item, index }: Props) {
  return (
    <div className="experience-item" key={item.title + "_" + index.toString()}>
      <div className="job">
        <div className="title">{item.title}</div>
        <div className="company">{item.company}</div>
        <small className="employment-dates">{item.dates}</small>
        <div className="job-description">
          <ul>
            {MapFactory.createMap("experience-description", item.description)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ExperienceItem;
