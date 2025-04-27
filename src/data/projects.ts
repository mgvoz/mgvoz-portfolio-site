import constructionImage from "../assets/construction.jpg";
import { Project, PhotoCredit } from "../classes/Project.ts";

//import personalFinanceAppImage from "../assets/personal-finance-image.png";

var defaultProject = new Project(
  "Coming Soon!",
  constructionImage,
  "Next project coming soon...",
  new PhotoCredit(
    "http://www.freepik.com",
    "Image designed by jemastock / Freepik"
  ),
  "",
  ["Awesome", "Wow"],
  true
);

var projects: Project[] = [
  defaultProject,
  // {
  //   title: "Personal Finance App",
  //   image: personalFinanceAppImage,
  //   description:
  //     "An application that simulates scanning a user's email to find financial accounts and compiles the data into an interface. Planned improvements include enhanced filtering, more styling, additional charts & graphs, and functionality to cancel subscriptions. Upcoming code enhancements include adding robust comments and refactoring for optimization and conciseness. It is certainly still a work in progress.",
  //   photoCredit: { link: "", text: "" },
  //   link: "https://mgvoz.github.io/personal-finance-app/",
  //   tags: ["React", "Bootstrap", "Typescript", "Github Pages", "ApexCharts"],
  //   disableClick: false,
  // },
];

export default projects;
