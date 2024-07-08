import React from 'react';

const ErrorComponent = ({ errorMessage }) => {
  return (
    <div>
      <p>{errorMessage}</p>
    </div>
  );
};


export default ErrorComponent;