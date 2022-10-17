import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link style={{ color: "white", textDecoration: "none" }} to="/">
        <div style={{ fontSize: "35px", fontWeight: "", fontFamily: "Showcard Gothic"}}>
        💬 Reddit Discussion 📎
          <img ></img>
        </div>
      </Link>
      <ul className="nav-links">
        <Link
          style={{
            color: "white",
            textDecoration: "none",
            marginTop: "10px",
            marginRight: "40px",
          }}
          to="/symptom"
        >
          <li>Overview</li>
        </Link>
        <Link
          style={{
            color: "white",
            textDecoration: "none",
            marginTop: "10px",
            marginRight: "40px",
          }}
          to="/graph"
        >
          <li>Result Chart</li>
        </Link>

        <Link
          style={{
            color: "white",
            textDecoration: "none",
            marginTop: "10px",
            marginRight: "40px",
          }}
          to="/word"
        >
          <li>word</li>
        </Link>
        <Link
          style={{ color: "white", textDecoration: "none", marginTop: "10px" }}
          to="/about"
        >
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
