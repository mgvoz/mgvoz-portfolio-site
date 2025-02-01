import "./Introduction.css";
import taglines from "../../data/taglines";

function Introduction() {
  let taglineMap = taglines.map((tagline, index) => {
    return (
      <div
        className={
          "tagline fs-4 carousel-item heading" + (index == 0 ? " active" : "")
        }
        data-bs-interval="4000"
        key={tagline + "_" + index.toString()}
      >
        <span className="d-block w-100 heading">{tagline}</span>
      </div>
    );
  });

  return (
    <>
      <div className="introduction-container" data-aos="fade-up">
        <div className="title-container">
          <div className="i-am heading">
            Hi! I am a UI/UX Software Developer.
          </div>
          {/* <div className="carousel slide" data-bs-ride="carousel">
            <div className="i-am heading">Hi! I am </div>
            <div className="carousel-inner heading">{taglineMap}</div>
          </div> */}
        </div>
        <div className="description">
          After 7 years as a technology-forward educator, I wanted to learn more
          about the software that I had been using in my classroom; this is
          where my journey to becoming a self-taught programmer began. Now, I am
          a Software Developer that is equipped with all of the soft skills that
          are sharpened by a teaching career, and has the capacity to never stop
          learning. I am seeking new opportunities that will allow me to explore
          new, modern technologies, continue to grow as a software development
          professional, and contribute to innovative and dynamic projects.
        </div>
      </div>
    </>
  );
}

export default Introduction;
