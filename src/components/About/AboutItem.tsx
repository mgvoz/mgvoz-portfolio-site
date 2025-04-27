import About from "../../classes/About";
import "./About.css";

type Props = {
  item: About;
  index: number;
};

function AboutItem({ item, index }: Props) {
  return (
    <div
      key={item.heading + "_" + index.toString()}
      className="about-section"
      data-aos="fade-up"
    >
      <div className="heading">{item.heading}</div>
      <div className={item.className}>{item.mapList}</div>
    </div>
  );
}

export default AboutItem;
