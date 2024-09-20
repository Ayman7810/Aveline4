// CategoryItem.jsx
import React from 'react';

const CategoryItem = ({ imgSrc, altText, title, amount }) => {
  return (
    <div className="category-item">
      <div className="category-img-box">
        <img src={imgSrc} alt={altText} width="30" />
      </div>
      <div className="category-content-box">
        <div className="category-content-flex mb-0">
          <h3 className="category-item-title">{title}</h3>
          <p className="category-item-amount">({amount})</p>
        </div>
        <a href="#" className="category-btn text-end">عرض الكل</a>
      </div>
    </div>
  );
};

export default CategoryItem;
