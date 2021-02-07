import React from "react";

const Footer = ({ text, backgroundColor, color }) => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer>
      <p>{`Joel Morales @naojamg | Todos los derechos reservados © ${year}.`}</p>
    </footer>
  );
};

export default Footer;