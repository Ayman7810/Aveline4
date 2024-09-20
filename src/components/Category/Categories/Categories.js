// Categories.jsx
import React, { useState, useEffect } from 'react';
import CategoryItem from './CategoryItem';
import './style.css'

import dress from '../../../images/icons2/dress.svg'
import coat from '../../../images/icons2/coat.svg'
import glasses from '../../../images/icons2/glasses.svg'
import shorts from '../../../images/icons2/shorts.svg'
import tee from '../../../images/icons2/tee.svg'
import jacket from '../../../images/icons2/jacket.svg'
import watch from '../../../images/icons2/watch.svg'
import hat from '../../../images/icons2/hat.svg'

const categoriesData = [
    {
      imgSrc: dress,
      altText: 'فستان وعباءة',
      title: 'فستان وعباءة',
      amount: '53',
    },
    {
      imgSrc: coat,
      altText: 'ملابس شتوية',
      title: 'ملابس شتوية',
      amount: '58',
    },
    {
      imgSrc: glasses,
      altText: 'نظارات وعدسات',
      title: 'نظارات وعدسات',
      amount: '68',
    },
    {
      imgSrc: shorts,
      altText: 'شورتات وجينز',
      title: 'شورتات وجينز',
      amount: '84',
    },
    {
      imgSrc: tee,
      altText: 'تي شيرتات',
      title: 'تي شيرتات',
      amount: '35',
    },
    {
      imgSrc: jacket,
      altText: 'جاكيت',
      title: 'جاكيت',
      amount: '16',
    },
    {
      imgSrc: watch,
      altText: 'ساعة',
      title: 'ساعة',
      amount: '27',
    },
    {
      imgSrc: hat,
      altText: 'قبعات وقبعات رأس',
      title: 'قبعات وقبعات رأس',
      amount: '39',
    },
  ];
  
  const Categories = () => {
    const [displayedCategories, setDisplayedCategories] = useState(
      categoriesData.slice(0, 4)
    );
  
    useEffect(() => {
      const interval = setInterval(() => {
        setDisplayedCategories((prevCategories) => {
          const newCategories = [
            ...prevCategories.slice(1),
            categoriesData[
              (categoriesData.indexOf(prevCategories[3]) + 1) % categoriesData.length
            ],
          ];
          return newCategories;
        });
      }, 3000); // تغيير كل 3 ثواني
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="category">
        <div className="container">
          <div className="category-item-container has-scrollbar">
            {displayedCategories.map((category, index) => (
              <CategoryItem
                key={index}
                imgSrc={category.imgSrc}
                altText={category.altText}
                title={category.title}
                amount={category.amount}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Categories;
