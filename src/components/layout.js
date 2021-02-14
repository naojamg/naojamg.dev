import React from "react";
import PropTypes from "prop-types";
import Nav from "./nav";
import Footer from "./footer"
import "../assets/css/main.css";
import Seo from "./seo";

const Layout = ({ children, seo }) => {
  return (
    <>
      <Seo seo={seo} />
      <div className="viewport">
        <div className="viewport-top">
          <Nav />
          <main className="container">{children}</main>
        </div>
        <div className="viewport-bottom">
          <Footer />
        </div>
      </div>
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;