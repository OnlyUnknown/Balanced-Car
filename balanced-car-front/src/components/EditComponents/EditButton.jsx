import React from 'react';

const EditButton = ({ onClick }) => {
    return (
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
            onMouseOver={(e) => (e.target.style.backgroundColor = '#45a049')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#4CAF50')}
        >
            Edit
        </button>
    );
};

export default EditButton;