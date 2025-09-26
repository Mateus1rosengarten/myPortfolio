import { MDBFooter } from "mdb-react-ui-kit";
import { useContext } from "react";
import { contextDarkMode } from "../context/contextDarkMode";
import "../components/footer.css";

function Footer() {
  const { itsDark } = useContext(contextDarkMode);
  const dateNow = new Date().getFullYear();
  return (
    <>
      <MDBFooter
        bgColor={!itsDark ? "dark" : "white"}
        className={`${itsDark ? "footer" : "footer-black"} text-center w-100`}
      >
        <div
          className={`text-center ${
            !itsDark ? "text-light" : "text-dark"
          } p-3 footer-text`}
        >
          &copy; {dateNow} Mateus Rosengarten Mauricio Portfolio; All rigth
          reserverd.
        </div>
      </MDBFooter>
    </>
  );
}

export default Footer;
