import React from "react";
import PropTypes from "prop-types";

const IcingaAllHosts = ({ data }) =>
  <div className="main__hosts-container">
    <h1 className="main__h1">All Hosts</h1>
    <p className="main__p">(Icinga2 API)</p>
    {data.map(el =>
      <div key={el.name} className="main__host-container">
        <div className="main__host-element">
          <p className="main__p">
            {el.name}
          </p>
        </div>
      </div>
    )}
  </div>;

IcingaAllHosts.propTypes = {
  data: PropTypes.array.isRequired
};

export default IcingaAllHosts;
