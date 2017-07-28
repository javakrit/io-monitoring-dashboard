import React from "react";
import PropTypes from "prop-types";
import "./Header.css";
import SocketIOLogo from "./socket-io-logo.png";

const Header = ({ heading, subheading }) =>
  <header className="header">
    <h1 className="header__h1">
      {heading}
    </h1>
    <h2 className="header__h2">
      {subheading}
    </h2>
    <img src={SocketIOLogo} alt="Socket - IO -Logo" />
  </header>;

Header.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired
};

export default Header;
