import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const ExpandableDiv = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const contentAnimation = useSpring({
    maxHeight: isExpanded ? '1000px' : '0px',
    opacity: isExpanded ? 1 : 0,
    config: { duration: 300 },
  });

  return (
    <div>
      <button onClick={handleToggle} className="bg-blue-500 text-white px-4 py-2 rounded">
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
      <animated.div style={contentAnimation} className="mt-4 p-4 bg-gray-200 overflow-hidden">
        <p>This is the content that expands or collapses.</p>
        <p>You can add any additional content here.</p>
      </animated.div>
    </div>
  );
};

export default ExpandableDiv;
