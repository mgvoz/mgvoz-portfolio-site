import "./About.css";
import skills from "../../data/skills";
import experiences from "../../data/experiences";
import education from "../../data/education";
//import Skills from "../Skills/Skills";
//import certifications from "../../data/certifications";

function About() {
  let educationMap = education.map((ed, index) => {
    return (
      <div className="education-item" key={ed.college + "_" + index.toString()}>
        <div className="college">{ed.college}</div>
        <div className="degree">{ed.degree}</div>
        <small className="years">{ed.years}</small>
        <div className="major">{ed.major}</div>
      </div>
    );
  });

  let skillsMap = skills.map((s, index) => {
    return (
      <div className="skill" key={s.text + "_" + index.toString()}>
        <span>
          <span className="skill-title">{s.text}</span>
          <span className="skill-percent">{s.value}%</span>
        </span>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            data-aos-duration="1000"
            data-aos="fade-right"
            style={{ width: s.value + "%" }}
            aria-valuenow={10}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>
      </div>
    );
  });

  //  let certificationsMap = certifications.map((c, index) => {
  //    return (
  //      <div className="cert" key={c.name + "_" + index.toString()}>
  //        {c.name}
  //      </div>
  //    );
  //  });

  let experiencesMap = experiences.map((e, index) => {
    return (
      <div className="experience-item" key={e.title + "_" + index.toString()}>
        <div className="job">
          <div className="title">{e.title}</div>
          <div className="company">{e.company}</div>
          <small className="employment-dates">{e.dates}</small>
          <div className="job-description">
            <ul>
              {e.description.map((d, index) => {
                return <li key={d + "_" + index.toString()}>{d}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="about-container">
      <div className="about-section" data-aos="fade-up">
        <div className="heading">Education</div>
        <div className="about-content education">{educationMap}</div>
      </div>
      <div className="about-section" data-aos="fade-up">
        <div className="heading">Skills</div>
        <div className="skills">
          {skillsMap}
          {/* <Skills /> */}
        </div>
      </div>
      {/* <div className="about-section" data-aos="fade-up">
        <div className="heading">Certifications</div>
        <div className="about-content certs">{certificationsMap}</div>
      </div> */}
      <div className="about-section" data-aos="fade-up">
        <div className="heading">Experience</div>
        <div className="about-content experience">{experiencesMap}</div>
      </div>
    </div>
  );
}

export default About;
