import React from 'react';

const LeftArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'grey', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
};

export default LeftArrow;