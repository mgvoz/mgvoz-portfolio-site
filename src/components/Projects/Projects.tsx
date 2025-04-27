import "./Projects.css";
import MapFactory from "../../services/MapFactory.tsx";

function Projects() {
  let projectMap = MapFactory.createMap("projects");

  return (
    <div className="work-container" data-aos="fade-up">
      <div className="heading">Projects</div>
      <div className="card-container">{projectMap}</div>
    </div>
  );
}

export default Projects;
