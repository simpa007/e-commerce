import React from "react";
import "./Category.scss";
import categories from "../Categories/Categories";
export const Category = () => {
  return (
    <div className="container categories_container">
      {categories.map(({ id, item, imgURL }) => {
        return (
          <div key={id} className="category_container">
            <div
              className="background_image"
              style={{ backgroundImage: `url(${imgURL})` }}
            />
            <div className="category_body_container">
              <h2>{item}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
