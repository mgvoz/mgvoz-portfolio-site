import "./App.css";
import Navigation from "../src/components/Navigation/Navigation.tsx";
import About from "./components/About/About.tsx";
import Introduction from "./components/Introduction/Introduction.tsx";
import Work from "./components/Work/Work.tsx";
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
          <Work></Work>
          <ScrollToTop></ScrollToTop>
        </div>
      </div>
    </>
  );
}

export default App;
