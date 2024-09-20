import React from 'react'
import { Col, Row } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
const RatePost = () => {
    const setting = {
        size: 20,
        count: 5,
        color: "#979797",
        activeColor: "#f51167",
        value: 7.5,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: newValue => {
            console.log(`Example 2: new value is ${newValue}`);
        }
    };
  return (
    <div className=''>

           <Row className="mt-3 ">
          <Col sm="12" className="  d-flex">
            <div className="rate-name  d-inline ms-3 mt-1 ">علي محمد</div>
            <ReactStars {...setting} />
          </Col>
        </Row>
        <Row className="border-bottom mx-2">
          <Col className="d-felx me-2 pb-2">
           
              <textarea className="form-control mt-1" id="exampleFormControlTextarea1" rows="3"  placeholder="اكتب تعليقك...."></textarea>
            <div className=" d-flex justify-content-md-end justify-content-center  ">
              {/* <div className="product-cart-add px-3  py-2 text-center d-inline mt-2">
              اضف تعليق
              <

              /div> */}
              <button type="submit" className="btn btn-primary mb-3 mt-2 border-0" style={{backgroundColor:'#f51167'}}>   اضف تعليق</button>
            </div>
          </Col>
        </Row>
    </div>
  )
}

export default RatePost
