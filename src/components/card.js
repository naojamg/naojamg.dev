import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const Card = ({ article }) => {
  return (
    <Link to={`/${article.node.slug}`} className="uk-link-reset">
      <div className="uk-card uk-card-muted">
        <div className="uk-card-media-top">
          <Img
            fixed={article.node.image.localFile.publicURL}
            imgStyle={{ position: "static" }}
            fadeIn={false}
            loading="eager"
          />
        </div>
        <div className="uk-card-body">
          <p id="category" className="uk-text-uppercase">
            {article.node.category.name}
          </p>
          <p id="title" className="uk-text-large">
            {article.node.title}
          </p>
          <div>
            <hr className="uk-divider-small" />
            <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
              <div>
                {article.node.author.picture && (
                  <Img
                    fixed={article.node.author.picture.localFile.publicURL}
                    imgStyle={{ position: "static", borderRadius: "50%" }}
                  />
                )}
              </div>
              <div className="uk-width-expand">
                <p className="uk-margin-remove-bottom">
                  {article.node.author.username}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;