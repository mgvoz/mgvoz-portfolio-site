import "./Work.css";
import workCards from "../../data/workcards";

function Work() {
  var visitWork = (link: string) => {
    window.open(link, "_blank");
  };

  let workMap = workCards.map((workCard, index) => {
    return (
      <div className="card" key={workCard.title + "_" + index.toString()}>
        <img
          className="card-img-top"
          src={workCard.image}
          alt={workCard.title}
        />
        <a className="link" href={workCard.photoCredit.link}>
          <small>{workCard.photoCredit.text}</small>
        </a>
        <div className="card-body">
          <h5 className="card-title">{workCard.title}</h5>
          <p className="card-text">{workCard.description}</p>
          <button
            onClick={() => visitWork(workCard.link)}
            className="btn card-button"
            disabled={workCard.disableClick ? true : false}
          >
            View
          </button>
          <div className="tags">
            {workCard.tags.map((tag, index) => {
              return (
                <span
                  key={tag + "_" + index.toString()}
                  className="badge badge-pill tag"
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="work-container" data-aos="fade-up">
      <div className="heading">Work</div>
      <div className="card-container">{workMap}</div>
    </div>
  );
}

export default Work;
