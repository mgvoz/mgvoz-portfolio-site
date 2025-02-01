import constructionImage from "../assets/construction.jpg";
import personalFinanceAppImage from "../assets/personal-finance-image.png";

var workCards = [
  {
    title: "Personal Finance App",
    image: personalFinanceAppImage,
    description:
      "An application that simulates scanning a user's email to find financial accounts and compiles the data into an interface. Planned improvements include enhanced filtering, more styling, additional charts & graphs, and functionality to cancel subscriptions. Upcoming code enhancements include robust comments, refactoring for optimization and conciseness.",
    photoCredit: { link: "", text: "" },
    link: "https://mgvoz.github.io/personal-finance-app/",
    tags: ["React", "Bootstrap", "Typescript"],
    disableClick: false,
  },
  {
    title: "Coming Soon!",
    image: constructionImage,
    description: "Next project coming soon...",
    photoCredit: {
      link: "http://www.freepik.com",
      text: "Image designed by jemastock / Freepik",
    },
    link: "",
    tags: ["Awesome", "Wow"],
    disableClick: true,
  },
];

export default workCards;
