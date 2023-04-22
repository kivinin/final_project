import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

function Footer(): JSX.Element {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-left footer">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-dark" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
