import "./About.css";
import MapFactory from "../../services/MapFactory";
import AboutClass from "../../classes/About"

function About() {
  var certification = new AboutClass()
  .setHeading("Certifications")
  .setClassName("about-content certs")
  .setMapList("certification");

var education = new AboutClass()
  .setHeading("Education")
  .setClassName("about-content education")
  .setMapList("education");

var skills = new AboutClass()
  .setHeading("Skills")
  .setClassName("skills")
  .setMapList("skill");

var experience = new AboutClass()
  .setHeading("Experience")
  .setClassName("about-content experience")
  .setMapList("experience");

var aboutItems: AboutClass[] = [education, skills, certification, experience];

let aboutMap = MapFactory.createMap("about", [], aboutItems);

  return <div className="about-container">{aboutMap}</div>;
}

export default About;
