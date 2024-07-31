import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Interface() {
  return (
    <div className="main-container">
      <div className="container1">
        Get your all Notes <br /> & <br /> Previous Questions Paper Here
      </div>
      <div className="container2">
        <Link to={"/createuser"}>
          <div className="btn1">SignUp</div>
        </Link>
        <Link to={"/login"}>
          <div className="btn1">Login</div>
        </Link>
      </div>
    </div>
  );
}
