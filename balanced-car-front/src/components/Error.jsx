import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ errorMessage }) => (
  <div>
    <p>{errorMessage}</p>
  </div>
);

Error.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};

export default Error;
