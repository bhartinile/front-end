import stylesImg from "./ReviewInfo.module.css";
import React, { useState } from "react";
import { FcStackOfPhotos } from "react-icons/fc";
import { useLocation, Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

function ReviewImg({ imgSrc }) {
  const [show, setShow] = useState(false);
  const search = useLocation();
  const url = new URLSearchParams(search).get("pathname");
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <div>
        <Link
          className={stylesImg.display_image_link}
          to={url}
          title="Photo Gallery"
          onClick={handleShow}
        >
          <FcStackOfPhotos />
        </Link>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "white" }}> Gallery :</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={stylesImg.scroll_grid_items_image_popup}>
            <div className={stylesImg.grid_container_image_popup}>
              {Array.from({ length: 1 }).map((_, idx) =>
                imgSrc.map((e, index) => (
                  <Card className={stylesImg.card_form_image}>
                    <Card.Img
                      className={stylesImg.form_img_popup}
                      variant="top"
                      key={index}
                      src={e}
                    />
                  </Card>
                ))
              )}
            </div>
          </div>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ReviewImg;
