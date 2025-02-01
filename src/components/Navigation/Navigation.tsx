import "./Navigation.css";
import logo from "../../assets/mg-logo2.png";
import Footer from "../Footer/Footer";

function Navigation() {
  return (
    <>
      <div className="navigation-container">
        <div className="color-block"></div>
        <div className="content-block">
          <div className="logo">
            <img
              src={logo}
              alt="marissa-gvozdenovich-logo"
              height={"70%"}
              width={"100%"}
            />
          </div>
          <div className="heading">Marissa Gvozdenovich</div>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default Navigation;
