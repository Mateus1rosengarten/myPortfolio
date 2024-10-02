import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import "../components/footer.css";

function Footer() {
  const dateNow = new Date().getFullYear();
  return (
    <>
      <MDBFooter bgColor="dark" className="my-footer text-center w-100">
        <div className="text-center text-light p-3 footer-text">
          &copy; {dateNow} Mateus Rosengarten Mauricio Portfolio; All rigth
          reserverd.
        </div>
      </MDBFooter>
    </>
  );
}

export default Footer;
