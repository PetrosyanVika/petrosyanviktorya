import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import ROUTES from "../../routes";

export default function Navbar() {
  return (
    <header>
      <div className="logo">
        <Link to="/">Traveland</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to={ROUTES.ABOUT}>About</Link>
          </li>
          <li>
            <Link to={ROUTES.BLOG}>Blog</Link>
          </li>
          <li>
            <Link to={ROUTES.CONTACT}>Contact us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
