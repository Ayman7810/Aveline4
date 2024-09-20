/** @format */

import React from "react";
import NavMovePage from "../../../components/Uitilty/NavMovePage/NavMovePage";
import { Col, Container, Dropdown, Pagination, Row } from "react-bootstrap";
import FilterProductes from "../../../components/Product/FilterProduces/FilterProductes";
import ProductContainerGrid from "../../../components/Product/ProductContinerGrid/ProductContinerGrid";
import "./style.css";
import NavBar from "../../../components/Uitilty/NavBarLogin/NavBar";
import { FaFilter } from "react-icons/fa";
import Footer from "../../../components/Uitilty/Footer/Footer";

const ProductesFilterPage = () => {
  const totalPages = 10;
  return (
    <>
      <NavBar />
      <div>
        <NavMovePage category={true} title="كل المنتجات" page="المنتجات" />
        <Container>
          <div className="filter-menu mt-4 justify-content-end">
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <FaFilter color="#ff8f9c" /> فلترة المنتجات
              </Dropdown.Toggle>
              <Dropdown.Menu className="text-end">
                <Dropdown.Item>الأكثر تقييمًا</Dropdown.Item>
                <Dropdown.Item>الأكثر مبيعًا</Dropdown.Item>
                <Dropdown.Item>السعر من الأعلى إلى الأدنى</Dropdown.Item>
                <Dropdown.Item>السعر من الأدنى إلى الأعلى</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Row>
            <Col sm="2">
              <FilterProductes />
            </Col>
            <Col sm="10">
              <ProductContainerGrid nulll={1} />
              {/* <ProductContainerGrid nulll={1} />
              <ProductContainerGrid nulll={1} />
              <ProductContainerGrid nulll={1} />
              <ProductContainerGrid nulll={1} /> */}
            </Col>
          </Row>
          <div className="pagination-container">
            <Pagination>
              <Pagination.Prev />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item>{4}</Pagination.Item>
              <Pagination.Item>{5}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
          </div>
        </Container>
      </div>
      <Footer/>
    </>
  );
};

export default ProductesFilterPage;
