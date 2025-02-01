import { useState, useEffect } from "react";
import "./ScrollToTop.css";

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScrollToTopButtonVisiblity = () => {
      window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", handleScrollToTopButtonVisiblity);
    return () => {
      window.removeEventListener("scroll", handleScrollToTopButtonVisiblity);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <button className="btn scroll-to-top" onClick={handleScrollToTop}>
          Top <i className="bi bi-arrow-up"></i>
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
