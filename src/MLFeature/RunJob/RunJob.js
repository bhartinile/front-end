import styles from "./RunJob.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { BsFillGearFill } from "react-icons/bs";
import Timer from "../../Fallback/Timer/Timer";

// import axios from "axios";

function RunJob({show, setShow,onClickHandler}) {
  const [st ,_st]=useState(false);
  const myIntrval= setInterval(() => {
       _st(!st);
       clearInterval(myIntrval);
   }, 500);
  
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <Link to={"#"} onClick={()=>{ handleShow();  onClickHandler(); }} className={styles.runJob_link_div}>
        Run Job
      </Link>

      <Modal show={show}>
        <Modal.Body style={{ padding: "15%" }}>
          <div className={styles.Model_body}>
            <h3 className={styles.Model_body_line}>
              {" "}
              Please wait a while 
              <span className={st ? styles.runjob_span_div1 : styles.runjob_span_div2}>
                ...
              </span>{" "}
            </h3>
            <div style={{color:'white',marginLeft:'41%',marginBottom:'10%'}}>
            <Timer />
            </div>
            <div className={styles.Model_body_imgs}>
              <BsFillGearFill
                className={styles.img1}
                style={{ color: "gray" }}
              />
              <BsFillGearFill
                className={styles.img2}
                style={{ color: "gray" }}
              />
            </div>
            
                
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RunJob;
