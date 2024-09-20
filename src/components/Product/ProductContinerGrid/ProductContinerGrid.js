/** @format */

import React from "react";
import ProductGrid from "./ProductGrid"; // تأكد من صحة المسار
import "./style.css"; // تأكد من تضمين ملف CSS
import jacket1 from "../../../images/products/jacket-1.jpg";
import jacket2 from "../../../images/products/jacket-2.jpg";
import clothes1 from "../../../images/products/clothes-1.jpg";
import clothes2 from "../../../images/products/clothes-2.jpg";
import shorts1 from "../../../images/products/1.jpg";
import short2 from "../../../images/products/2.jpg";
import shorts3 from "../../../images/products/3.jpg";
import short4 from "../../../images/products/4.jpg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductContainerGrid = ({ title, btn ,nulll }) => {
  const products = [
    {
      imgSrcDefault: jacket1,
      imgSrcHover: jacket2,
      altText: "جاكيتات جلدية شتوية للرجال",
      badge: "15%",
      badgeClass: "angle black",
      category: "جكاكيت",
      title: "جاكيتات جلدية شتوية للرجال",
      rating: 3,
      price: "48.00 دولار",
      oldPrice: "75.00 دولار",
    },
    {
      imgSrcDefault: clothes1,
      imgSrcHover: clothes2,
      altText: "أحذية رسمية جلدية للرجال",
      badge: "",
      badgeClass: "",
      category: "رسمية",
      title: "أحذية رسمية جلدية للرجال",
      rating: 4,
      price: "50.00 دولار",
      oldPrice: "65.00 دولار",
    },
    {
      imgSrcDefault: shorts1,
      imgSrcHover: shorts3,
      altText: "شورتات فرينش تيري أساسية",
      badge: "تخفيض",
      badgeClass: "angle black",
      category: "شورتات",
      title: "شورتات فرينش تيري أساسية",
      rating: 3,
      price: "78.00 دولار",
      oldPrice: "85.00 دولار",
    },
    {
      imgSrcDefault: short2,
      imgSrcHover: short4,
      altText: "قبعة صيفية أنيقة",
      badge: "جديد",
      badgeClass: "pink",
      category: "إكسسوارات",
      title: "قبعة صيفية أنيقة",
      rating: 4,
      price: "25.00 دولار",
      oldPrice: "35.00 دولار",
    },
  ];

  return (
    <div className="container">
      <div className="product-header">
       {nulll === 1 ?null : <h2>{title}</h2>}
        {
          btn ? 
        
        <Button
          className="rounded-pill btn-more"
          style={{ backgroundColor: "#ff66b2", border: "none" }}>
         <Link  to='/products'style={{textDecoration:'none' ,color:'#fff'}}>
         المزيد
         </Link>
        </Button> : null
        }
      </div>
      <div className="row">
        {products.map((product, index) => (
          <ProductGrid
            key={index}
            imgSrcDefault={product.imgSrcDefault}
            imgSrcHover={product.imgSrcHover}
            altText={product.altText}
            badge={product.badge}
            badgeClass={product.badgeClass}
            category={product.category}
            title={product.title}
            rating={product.rating}
            price={product.price}
            oldPrice={product.oldPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductContainerGrid;
