import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import "../components/footer.css";
import { useContext } from "react";
import { contextBgColor } from "../contextBgColor";

function Footer() {
  const {itsDark} = useContext(contextBgColor)
  const dateNow = new Date().getFullYear();
  return (
    <>
      <MDBFooter bgColor={!itsDark ? "dark" : "white"} className={`${itsDark ? "my-footer" : "footer-black"}text-center w-100`}>
        <div className={`text-center ${!itsDark ? "text-light" : "text-dark"} p-3 footer-text`}
>
          &copy; {dateNow} Mateus Rosengarten Mauricio Portfolio; All rigth
          reserverd.
        </div>
      </MDBFooter>
    </>
  );
}

export default Footer;
