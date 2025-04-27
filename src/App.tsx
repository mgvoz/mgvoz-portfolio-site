import "./App.css";
import Navigation from "../src/components/Navigation/Navigation.tsx";
import About from "./components/About/About.tsx";
import Introduction from "./components/Introduction/Introduction.tsx";
import Projects from "./components/Projects/Projects.tsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.tsx";

function App() {
  return (
    <>
      <div className="app-container">
        <div className="left">
          <Navigation></Navigation>
        </div>
        <div className="right">
          <Introduction></Introduction>
          <About></About>
          <Projects></Projects>
          <ScrollToTop></ScrollToTop>
        </div>
      </div>
    </>
  );
}

export default App;
