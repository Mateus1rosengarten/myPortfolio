import { MDBFooter } from "mdb-react-ui-kit";
import { useContext } from "react";
import { contextDarkMode } from "../context/contextDarkMode";

function Footer() {
  const { itsDark } = useContext(contextDarkMode);
  const dateNow = new Date().getFullYear();
  return (
    <>
      <MDBFooter
        bgColor={!itsDark ? "dark" : "white"}
        className="text-center w-100 position-fixed bottom-0 z-3"
      >
        <div
          className={`text-center ${
            !itsDark ? "text-light" : "text-dark"
          } p-3 font-primary`}
        >
          &copy; {dateNow} Mateus Rosengarten Mauricio Portfolio; All rigth
          reserverd.
        </div>
      </MDBFooter>
    </>
  );
}

export default Footer;
