// GlobalLayout.jsx
import React from 'react';


const GlobalLayout = ({ children }) => {
  return (
    <div className="global-container min-h-screen bg-[#f7f1db]">
      {children}
    </div>
  );
};

export default GlobalLayout;
