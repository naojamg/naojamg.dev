import React from "react";
import Img from 'gatsby-image';

const ContactPreview = ({ picture, name, profession }) => {
  return (
    <div className='contactPreview'>
      <Img
        className="contactPreview-img"
        fluid={picture} alt="Foto de contacto"
        title="Foto de contacto"
        imgStyle={{ objectFit: "cover" }}
      />
      <div className='contactPreview-info'>
        <p className='contactPreview-name'>{name}</p>
        <p className='contactPreview-profession'>{profession}</p>
      </div>
    </div>
  );
};

export default ContactPreview;