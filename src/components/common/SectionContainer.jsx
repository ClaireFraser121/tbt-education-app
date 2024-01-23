import React from 'react';
import '../../styles/SectionContainer.css';

const SectionContainer = ({ children, hasNav }) => {
  const containerClass = hasNav ? 'section-container-with-nav' : 'section-container';

  return <div className={containerClass}>{children}</div>;
};

export default SectionContainer;
