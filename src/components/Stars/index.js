import React from "react";
import PropTypes from "prop-types";
import Star from "../Star";

export default function Stars({ count }) {
  if (count < 1 || count > 5 || !(Number(count) === count)) {
    return null;
  } else {
    return (
      <ul className="card-body-stars u-clearfix">
        {[...Array(count)].map((star, idx) => {
          return (
            <li key={idx + 1}>
              <Star />
            </li>
          );
        })}
      </ul>
    );
  }
}

Stars.defaultProps = {
  count: 0
};

Stars.propTypes = {
  count: PropTypes.number
};
