import Contact from "../classes/Contact";
import resume from "../assets/Marissa_Gvozdenovich_Resume.pdf";

var contact = [
  new Contact("location", "bi-geo-alt", "Philadelphia, PA", "", ""),
  new Contact("phone", "bi-phone", "(518) 929-4790", "", ""),
  new Contact(
    "email",
    "bi-envelope-check",
    "marissagvozdenovich@gmail.com",
    "mailto:marissagvozdenovich@gmail.com",
    ""
  ),
  new Contact(
    "linkedin",
    "bi-linkedin",
    "linkedin.com/in/mgvozdenovich",
    "https://www.linkedin.com/in/mgvozdenovich/",
    ""
  ),
  /*  new Contact (
        "blog",
        "bi-pen",
        "Visit my blog",
        "<blog link here>",
        ""
  ), */
  new Contact(
    "resume",
    "bi-download",
    "Resumé",
    resume,
    "Marissa_Gvozdenovich_Resume.pdf"
  ),
];

export default contact;
