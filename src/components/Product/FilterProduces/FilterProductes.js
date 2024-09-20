/**
 * eslint-disable jsx-a11y/anchor-is-valid
 *
 * @format
 */

/** @format */

import React, { useState } from "react";
import "./style.css";
import "./my";

const FilterProductes = () => {
  const [rangeFrom, setRangFrom] = useState(0);
  const [rangeTo, setRangTo] = useState(0);
  console.log(rangeFrom);
  console.log(rangeTo);
  return (
    <div className=" mt-4 pt-4">
      <div className="filter-widget">
        <h2 className="fw-title">الفئات</h2>
        <ul className="category-menu">
          <li>
            <label>
              <input type="checkbox" />
              <span className="custom-checkbox"></span>
              <a href="#">ملابس نسائية</a>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span className="custom-checkbox"></span>
              <a href="#">ملابس رجالية</a>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span className="custom-checkbox"></span>
              <a href="#">أطفال</a>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span className="custom-checkbox"></span>
              <a href="#">الحقائب والمحافظ</a>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span className="custom-checkbox"></span>
              <a href="#">نظارات</a>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span className="custom-checkbox"></span>
              <a href="#">أحذية</a>
            </label>
          </li>
        </ul>
      </div>
      <div className="filter-widget">
        <h2 className="fw-title">الماركات</h2>
        <ul className="brand-menu">
          <li>
            <label>
              <input type="checkbox" className="checkbox-hidden" />
              <span className="custom-checkbox"></span>
              <a href="#">ماركة 1</a>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" className="checkbox-hidden" />
              <span className="custom-checkbox"></span>
              <a href="#">ماركة 2</a>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" className="checkbox-hidden" />
              <span className="custom-checkbox"></span>
              <a href="#">ماركة 3</a>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" className="checkbox-hidden" />
              <span className="custom-checkbox"></span>
              <a href="#">ماركة 4</a>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" className="checkbox-hidden" />
              <span className="custom-checkbox"></span>
              <a href="#">ماركة 5</a>
            </label>
          </li>
        </ul>
      </div>
      <div className="filter-widget mb-0">
        <h2 className="fw-title">تصفية بواسطة</h2>
        <div className="price-range-wrap">
          <h4>السعر</h4>
          <div className="price-input">
            <label for="customRange1" className="form-label">
              من
            </label>
           
            <input
              type="range"
              className="form-range"
              id="customRange1"
              min={500}
              max={10000}
              onChange={(e) => {
                setRangFrom(e.target.value);
              }}
            />
            <p>ريال {rangeFrom}</p>
            <label for="customRange1" className="form-label">
              الى
            </label>
            <input
              type="range"
              className="form-range"
              id="customRange1"
              min={500}
              max={10000}
              onChange={(e) => {
                setRangTo(e.target.value);
              }}
            />
            <p>ريال {rangeTo}</p>
          </div>
        </div>
      </div>
      <div className="filter-widget mb-0">
        <h2 className="fw-title">تصفية بواسطة اللون</h2>
        <div className="fw-color-choose">
          <div className="cs-item">
            <input type="radio" name="cs" id="gray-color" />
            <label className="cs-gray" for="gray-color">
              <span>(3)</span>
            </label>
          </div>

          <div className="cs-item">
            <input type="radio" name="cs" id="yollow-color" />
            <label className="cs-yollow" for="yollow-color">
              <span>(112)</span>
            </label>
          </div>
          <div className="cs-item">
            <input type="radio" name="cs" id="green-color" />
            <label className="cs-green" for="green-color">
              <span>(75)</span>
            </label>
          </div>
          <div className="cs-item me-3">
            <input type="radio" name="cs" id="purple-color" />
            <label className="cs-purple" for="purple-color">
              <span>(9)</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterProductes;
