import React from "react";
import PropTypes from "prop-types";

const IcingaServicesWithProblems = ({ data }) =>
  <div className="main__hosts-container">
    <h1 className="main__h1">Hosts with problems</h1>
    <p className="main__p">(Icinga2 API)</p>
    {data.map(el =>
      <div
        key={`${el.attrs.host_name}_${el.attrs.display_name}`}
        className="main__host-container"
      >
        <div className="main__host-element">
          <p className="main__p">
            {el.attrs.host_name}
          </p>
        </div>
        <div className="main__host-element main__host-element--warn">
          <p className="main__p">
            {el.attrs.display_name}
          </p>
        </div>
      </div>
    )}
  </div>;

IcingaServicesWithProblems.propTypes = {
  data: PropTypes.array.isRequired
};

export default IcingaServicesWithProblems;
