import "./Projects.css";
import { Project } from "../../classes/Project.ts";
import MapFactory from "../../services/MapFactory.tsx";

type Props = { item: Project; index: number };

function ProjectItem({ item, index }: Props) {
  var visitWork = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="card" key={item.title + "_" + index.toString()}>
      <img className="card-img-top" src={item.image} alt={item.title} />
      <a className="link" href={item.photoCredit.link}>
        <small>{item.photoCredit.text}</small>
      </a>
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <button
          onClick={() => visitWork(item.link)}
          className="btn card-button"
          disabled={item.disableClick ? true : false}
        >
          View
        </button>
        <div className="tags">
          {MapFactory.createMap("project-tags", item.tags)}
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
