import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { FaStar } from "react-icons/fa"; // استيراد أيقونة النجمة
import DeleteRateHook from "../../hook/review/delete-rate-hook";
import EditRateHook from "../../hook/review/edit-rate-hook";
import ReactStars from "react-rating-stars-component";

const RateItem = ({ rate }) => {
  const [user, setUser] = useState(null); // استخدم null بدلاً من ""
  const [onDelete, showModel, show, handleClose] = DeleteRateHook(
    rate?._id,
    rate?.user?._id,
    user?._id
  );

  const [
    onEdite,
    editRateTxt,
    hadelEditRateTxt,
    editRateVal,
    handleEditRateVal,
    showEdit,
    showModelEdite,
    ,
    handleCloseEdit,
  ] = EditRateHook(rate?._id, rate?.user?._id, user?._id, rate?.rating, rate?.review);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const setting = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: editRateVal || rate?.rating,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => handleEditRateVal(newValue),
  };

  return (
    <div>
      {/* Modal لحذف التقييم */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>حذف التقييم</Modal.Title>
        </Modal.Header>
        <Modal.Body>هل أنت متأكد من حذف التقييم؟</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>إغلاق</Button>
          <Button variant="success" onClick={onDelete}>نعم</Button>
        </Modal.Footer>
      </Modal>

      {/* Modal لتعديل التقييم */}
      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header>
          <Modal.Title>تعديل التقييم</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="اكتب هنا ..."
              value={editRateTxt}
              onChange={hadelEditRateTxt}
            />
          </div>
          <ReactStars {...setting} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseEdit}>إغلاق</Button>
          <Button variant="success" onClick={onEdite}>نعم</Button>
        </Modal.Footer>
      </Modal>

      <Row className="mt-3 text-end py-2">
        <Col className="d-flex me-5">
          <div className="rate-name d-inline ms-2">{rate?.user?.name}</div>
          <FaStar className="ms-1" style={{ color: '#f51167', width: '16px', height: '16px' }} /> {/* أيقونة النجمة */}
          <div className="cat-rate d-inline me-1">{rate?.rating}</div>
        </Col>
      </Row>
      <Row className="border-bottom mx-2 text-end">
        <div className="d-flex me-4 pb-2 justify-content-between">
          <div className="rate-description d-inline ms-2">{rate?.review}</div>
          {user?._id === rate?.user?._id && (
            <div className="ms-4">
              <AiOutlineEdit
                color="blue"
                onClick={showModelEdite}
                size={25}
                style={{ cursor: "pointer" }}
              />
              <AiOutlineDelete
                color="red"
                onClick={showModel}
                size={25}
                style={{ cursor: "pointer" }}
              />
            </div>
          )}
        </div>
      </Row>
    </div>
  );
};

export default RateItem;
