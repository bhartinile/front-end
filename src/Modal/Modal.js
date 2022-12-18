// import styles from './Modal.module.css';
import React, { useState } from "react";
import { Link,useLocation } from "react-router-dom";
import { Modal } from "react-bootstrap";
import ReviewPage from "../Page/ReviewInformation/ReviewPage";


const ModalPopUp = ({_popUp,claimData,imgArr,setClaimData}) => {
  const [show, setShow] = useState(false);
  const [imgSrc ,setImgSrc] = useState([])
  const handleClose = () => {setShow(false);_popUp(false)};
  const handleShow = () => setShow(true);
  const search = useLocation();
  const url = new URLSearchParams(search).get("pathname");

  const imgDisplayHandler = ()=>{
    const imgBase64 =[]
    for(let file of imgArr){
     
        const reader = new FileReader();
     
      reader.onloadend =  function () {
        imgBase64.push(reader.result);
        setImgSrc(imgBase64)
    }
   
    reader.readAsDataURL(file) ;
    
    }
  }

  return (
    <>
    <div>
        <Link
          style={{textDecoration :'none',color:'white' ,background:'#ffffff11'}}
          to={url}
          
          onClick={()=>{handleShow();
            imgDisplayHandler();}}
        >
          Review Information
        </Link>
      </div>
      <Modal
        show={show}
        onHide={() => {
          handleClose();
        }}
      >
        
        <Modal.Body>
          <div>
           <ReviewPage handleClose={handleClose} setClaimData={setClaimData} claimData={claimData} imgSrc={imgSrc} imgArr={imgArr} />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalPopUp;