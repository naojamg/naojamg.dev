import React from "react";

const ContactPreview = ({ picture, name, profession }) => {
  return (
    <div className='contactPreview'>
      <img src={picture} alt="contactPreview" />
      <div className='contactPreview-info'>
        <p className='contactPreview-name'>{name}</p>
        <p className='contactPreview-profession'>{profession}</p>
      </div>
    </div>
  );
};

export default ContactPreview;