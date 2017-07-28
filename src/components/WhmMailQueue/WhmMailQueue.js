import React from "react";
import PropTypes from "prop-types";

const queueThreshold = 50;

const WhmMailQueue = ({ data }) =>
  <div className="main__hosts-container">
    <h1 className="main__h1">WHM Mail Queue Status</h1>
    <p className="main__p">(WHM API)</p>
    {data.map(el =>
      <div key={el.host} className="main__host-container">
        <div className="main__host-element">
          <p className="main__p">
            {el.host}
          </p>
        </div>
        <div
          className={
            el.total > queueThreshold
              ? "main__host-element main__host-element--warn"
              : "main__host-element main__host-element--total"
          }
        >
          <p className="main__p">
            {el.total}
          </p>
        </div>
      </div>
    )}
  </div>;

WhmMailQueue.propTypes = {
  data: PropTypes.array.isRequired
};

export default WhmMailQueue;
