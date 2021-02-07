import React from "react";
import { Link } from "gatsby";
import Moment from "react-moment";
import PillBadge from './pillBadge';
import 'moment/locale/es';

const ArticlePreview = ({
  image,
  title,
  slug,
  published_at,
  categories,
  description
}) => {
  return (
    <div className='articlePreview'>
      <img src={`.${image}`} alt={`${title} - Imágen de portada`} title={`${title} - Imágen de portada`}/>
      <div className="articlePreview-footer">
        <div className="articlePreview-footer-header">
          <div className="badgeContainer">
            {categories.map((category, i) => {
              return (
                <PillBadge
                  text={category.name}
                  backgroundColor={category.backgroundColor}
                  color={category.color}
                  key={category.name}
                />
              );
            })}
          </div>
          <p className="articlePreview-footer-published_at">
            <Moment format="DD MMM YYYY">{published_at}</Moment>
          </p>
        </div>
        <Link to={`/article/${slug}`}>
          <h2 className="articlePreview-footer-title">{title}</h2>
        </Link>
        <p className="articlePreview-footer-description">{description.slice(0, 92)}...</p>
      </div>
    </div>
  );
};

export default ArticlePreview;