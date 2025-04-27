import { JSX } from "react";
import About from "../classes/About";
import AboutItem from "../components/About/AboutItem";
import certifications from "../data/certifications";
import CertificationItem from "../components/About/CertificationItem";
import Certification from "../classes/Certification";
import education from "../data/education";
import Education from "../classes/Education";
import EducationItem from "../components/About/EducationItem";
import experiences from "../data/experiences";
import Experience from "../classes/Experience";
import ExperienceItem from "../components/About/ExperienceItem";
import skills from "../data/skills";
import Skill from "../classes/Skill";
import SkillItem from "../components/About/SkillItem";
import projects from "../data/projects";
import { Project } from "../classes/Project";
import ProjectItem from "../components/Projects/ProjectCard";
import contact from "../data/contact";
import Contact from "../classes/Contact";
import ContactItem from "../components/Contact/ContactItem";

export type MapFactoryType =
  | "about"
  | "certification"
  | "education"
  | "experience"
  | "experience-description"
  | "skill"
  | "projects"
  | "project-tags"
  | "contacts";

export default class MapFactory {
  static createMap(type: MapFactoryType, stringData?: string[], objectData?: About[]): JSX.Element[] {
    switch (type) {
      case "about":
        return objectData!.map((item: About, index: number) => {
          return <AboutItem item={item} index={index}></AboutItem>;
        });
      case "certification":
        return certifications.map((item: Certification, index: number) => {
          return (
            <CertificationItem item={item} index={index}></CertificationItem>
          );
        });
      case "education":
        return education.map((item: Education, index: number) => {
          return <EducationItem item={item} index={index}></EducationItem>;
        });
      case "experience":
        return experiences.map((item: Experience, index: number) => {
          return <ExperienceItem item={item} index={index}></ExperienceItem>;
        });
      case "experience-description":
        return stringData!.map((item: string, index: number) => {
          return <li key={item + "_" + index.toString()}>{item}</li>;
        });
      case "skill":
        return skills.map((item: Skill, index: number) => {
          return <SkillItem item={item} index={index}></SkillItem>;
        });
      case "projects":
        return projects.map((item: Project, index: number) => {
          return <ProjectItem item={item} index={index}></ProjectItem>;
        });
      case "project-tags":
        return stringData!.map((item: string, index: number) => {
          return (
            <span
              key={item + "_" + index.toString()}
              className="badge badge-pill tag"
            >
              {item}
            </span>
          );
        });
      case "contacts":
        return contact.map((item: Contact, index: number) => {
          return <ContactItem item={item} index={index}></ContactItem>;
        });
      default:
        throw new Error("Invalid map type");
    }
  }
}
