import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ image, name, info, glass, id }) => {
  return (
    <article key={id} className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn btn=primary btn-detail">
          detail
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
