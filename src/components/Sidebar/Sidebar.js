import React from "react";
import PropTypes from "prop-types";

const Sidebar = ({ data }) =>
  <div className="main__sidebar">
    <p className="main__p">Last updated:</p>
    <p className="main__p">
      {data}
    </p>
  </div>;

Sidebar.propTypes = {
  data: PropTypes.string.isRequired
};

export default Sidebar;
