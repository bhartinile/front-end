import styles from "../Accordians/VehicalInformation/VehicleInformation.module.css";
import stylesOwn from "./ReviewInfo.module.css";
import React, { useState } from "react";
import { VscOpenPreview } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import ReviewImg from "./ReviewImg";
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";

const ReviewPage = ({ handleClose, claimData, imgSrc, imgArr,setClaimData }) => {
  const [flag, _flag] = useState(false);
  const navigate = useNavigate();
  const conditionalArr = [...Object.values(claimData)];
  const onSubmitClaimHandler = async () => {
    try {
      _flag(true);
      const formData = new FormData();
      for (let file of imgArr) {
        formData.append("carImg", file);
      }
   
      if (conditionalArr.every((e) => e)) {
        formData.append("data", JSON.stringify(claimData));
        
        const { data, status } = await axios.post(
          "/api/user/car/car-claim",
          formData
        );

        if (status === 201) {
          _flag(false);
          alert(data.message);
          navigate("/dashboard");
          formData.delete("data");
          
        }
      } else {
        _flag(false);
        alert("Please Fill All The Details");
       
      }
    } catch (error) {
      _flag(false);
      alert(error.response.data.error);
    }
  };

  return (
    <>
      <div className={styles.accrdianHeading} >
        <span
          className={styles.accrdianHeading_pos}
          style={{ background: flag ? "purple" : "#ffffffb3" }}
        >
          {" "}
          <VscOpenPreview />
        </span>
      
        <input type="text" value="Review Information" readOnly />
      </div>
      <div
        className={styles.input_div_info}
         style={{opacity:flag?'.6':'1' }}
      >
        <input
          type="text"
          placeholder="Vehicle Vin*"
          value={claimData.Vehicle_Vin}
          readOnly
          style={{ borderBottom: claimData.Vehicle_Vin ? "" : "2px solid red" }}
        />
        <input
          type="text"
          placeholder="License No*"
          value={claimData.License_No}
          readOnly
          style={{ borderBottom: claimData.License_No ? "" : "2px solid red" }}
        />
        <input
          type="text"
          placeholder="Manufacturer*"
          value={claimData.Manufacturer}
          readOnly
          style={{
            borderBottom: claimData.Manufacturer ? "" : "2px solid red",
          }}
        />
        <input
          type="text"
          placeholder="Model*"
          value={claimData.Model}
          readOnly
          style={{ borderBottom: claimData.Model ? "" : "2px solid red" }}
        />
        <input
          type="text"
          placeholder="Manufacture_Year*"
          value={claimData.Manufacture_Year}
          readOnly
          style={{
            borderBottom: claimData.Manufacture_Year ? "" : "2px solid red",
          }}
        />
        <input
          type="text"
          placeholder="Owner*"
          value={claimData.Owner}
          readOnly
          style={{ borderBottom: claimData.Owner ? "" : "2px solid red" }}
        />
        <input
          type="text"
          placeholder="Color*"
          value={claimData.Color}
          readOnly
          style={{ borderBottom: claimData.Color ? "" : "2px solid red" }}
        />
        <input
          type="text"
          placeholder="Fuel Type**"
          value={claimData.Fuel}
          readOnly
          style={{ borderBottom: claimData.Fuel ? "" : "2px solid red" }}
        />
        <input
          type="text"
          placeholder="Transmission Type*"
          value={claimData.Transmission}
          readOnly
          style={{
            borderBottom: claimData.Transmission ? "" : "2px solid red",
          }}
        />
        <input
          type="text"
          placeholder="Insurance*"
          value={claimData.Insurance}
          readOnly
          style={{ borderBottom: claimData.Insurance ? "" : "2px solid red" }}
        />
        <input
          type="text"
          placeholder="Air Bags*"
          value={claimData.AirBags}
          readOnly
          style={{
            borderBottom: claimData.AirBags.length > 0 ? "" : "2px solid red",
          }}
        />
        <input
          type="text"
          placeholder="Kilometers Driven*"
          value={claimData.Kilometer_driven}
          readOnly
          style={{
            borderBottom: claimData.Kilometer_driven ? "" : "2px solid red",
          }}
        />

        <input type="text" placeholder="date" value={claimData.date} readOnly />
        <input
          type="text"
          placeholder="Damage State*"
          value={claimData.damage_state}
          readOnly
          style={{
            borderBottom: claimData.damage_state ? "" : "2px solid red",
          }}
        />
        <input
          type="text"
          placeholder="Odometer Reading*"
          value={claimData.Odometer_reading}
          readOnly
          style={{
            borderBottom: claimData.Odometer_reading ? "" : "2px solid red",
          }}
        />
        <br />
        <div className={stylesOwn.label_Review_div}>
          <label className={stylesOwn.img_label}> Car-Image : </label>
          <ReviewImg imgSrc={imgSrc} />
        </div>
      </div>
      <div className={stylesOwn.reviewinfo_btn}>
        <button className={stylesOwn.info_btn} onClick={() => handleClose()}>
          Edit
        </button>
        <button className={stylesOwn.info_btn} onClick={()=>{onSubmitClaimHandler(); }}>
          {" "}
          Submit Claim
        </button>
      </div>
    <div style={{display:flag?'':'none' ,opacity:flag?'1':'0'}} className={stylesOwn.review_loading}>
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
      </div>
      <input 
              type="checkbox"
              name="AirBags"
              value='GPU_PROCCESS'
              onChange={(e)=>setClaimData({ ...claimData, GPU_Process:e.target.value })}
            />
            <span style={{color:'white'}}>  GPU Instance</span>
      
    </>
  );
};
export default ReviewPage;
