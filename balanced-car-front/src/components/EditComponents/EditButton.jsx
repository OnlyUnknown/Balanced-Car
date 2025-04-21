import React from 'react';
import PropTypes from 'prop-types';

const EditButton = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s ease',
    }}
    onMouseOver={(e) => { e.target.style.backgroundColor = '#45a049'; }}
    onMouseOut={(e) => { e.target.style.backgroundColor = '#4CAF50'; }}
    onFocus={(e) => { e.target.style.backgroundColor = '#45a049'; }}
    onBlur={(e) => { e.target.style.backgroundColor = '#4CAF50'; }}
    type="button"
  >
    Edit
  </button>
);

EditButton.propTypes = {
  onClick: PropTypes.string.isRequired, // Assuming cid is a number
};

export default EditButton;
