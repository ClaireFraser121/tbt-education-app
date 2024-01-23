// GlobalLayout.jsx
import React from 'react';

const GlobalLayout = ({ children }) => {
  return (
    <div className="global-container min-h-screen bg-gray-100">
      {children}
    </div>
  );
};

export default GlobalLayout;
