import React from "react";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ heading, subheading }) =>
  <header className="header">
    <h1 className="header__h1">
      {heading}
    </h1>
    <h2 className="header__h2">
      {subheading}
    </h2>
  </header>;

Header.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired
};

export default Header;
