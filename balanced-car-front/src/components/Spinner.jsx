import React from 'react';

const Spinner = () => {
  return (
    <div style={styles.spinnerContainer}>
      <div style={styles.spinner}></div>
    </div>
  );
};

const styles = {
  spinnerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  spinner: {
    border: '16px solid #f3f3f3', /* Light grey */
    borderTop: '16px solid #3498db', /* Blue */
    borderRadius: '50%',
    width: '120px',
    height: '120px',
    animation: 'spin 2s linear infinite',
  },
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
};

export default Spinner;
