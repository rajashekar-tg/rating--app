import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineStar } from "react-icons/ai";
import StarRating from "./StarRating";

function RatingModel() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = () => {};

  return (
    <>
      <button className="btn btn-outline-primary" onClick={handleShow}>
        <AiOutlineStar size={25} /> &nbsp; Rate
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h6>RATE THIS</h6>
          <h5>TEEN WOLF THE MOVIE</h5>
          <br />
          <StarRating />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleClick}>
            REVIEW
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default RatingModel;
