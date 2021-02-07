import React from "react";

const PillBadge = ({ text, backgroundColor, color }) => {
  return (
    <div className='pillBadge' style={{ backgroundColor, color }}>
      <p>{text}</p>
    </div>
  );
};

export default PillBadge;