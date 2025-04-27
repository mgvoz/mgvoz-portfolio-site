import Skill from "../../classes/Skill";
import "./About.css";

type Props = { item: Skill; index: number };

function SkillItem({ item, index }: Props) {
  return (
    <div className="skill" key={item.text + "_" + index.toString()}>
      <span>
        <span className="skill-title">{item.text}</span>
        <span className="skill-percent">{item.value}%</span>
      </span>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          data-aos-duration="1000"
          data-aos="fade-right"
          style={{ width: item.value + "%" }}
          aria-valuenow={10}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  );
}

export default SkillItem;
