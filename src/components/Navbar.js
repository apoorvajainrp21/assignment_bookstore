import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { carts } = useContext(Context);
  return (
    <div className="bg-white border-bottom sticky-top shadow-sm p-3 px-md-4 mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center">
        <Link
          className="heading my-0 mr-md-auto font-weight-normal"
          style={{
            textDecoration: "none",
            color: "#F1C40F ",
            fontWeight: 3000,
            fontSize: "2rem",
            fontFamily: "Source Code Pro, monospace"
          }}
          to="/"
        >
          BookWorld


        </Link>
        <nav >
          <a href="http://127.0.0.1:5500/src/components/pages/aboutus.html">
            <button id="btn-abtus-home" className="button_about"><span>ABOUT</span></button>
          </a>

        </nav>


        <nav>
          <div>
            <Link className="btn btn-outline-primary btn-login1" to="/login">
              LOG IN
            </Link></div>
        </nav>
        <nav>
          <Link className="btn btn-outline-primary btn-reg1" to="/register">
            REGISTER
          </Link>

        </nav>


        <nav>
          <Link className="btn btn-outline-primary btnnn" to="/book-cart">
            Book Cart (
            <span style={{ color: "white" }}>
              {carts.length !== 0 ? carts.length : 0}
            </span>
            )
          </Link>
        </nav>

      </div>
    </div>
  );
};

export default Navbar;
