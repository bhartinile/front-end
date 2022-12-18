import styles from "./CreateClaim.module.css";
import React, { useState } from "react";
import VehicleInformation from "../Accordians/VehicalInformation/VehicleInformation";
import ClaimInformation from "../Accordians/ClaimInformation/ClaimInformation";
import UploadImage from "../Accordians/UploadImage/UploadImage";
import ModalPopUp from "../../Modal/Modal";

const CreateClaim = () => {
  const [popUp, _popUp] = useState(false);
  const [accordianFlag, setaccordianFlag] = useState({
    claimInfo: false,
    uploadImg: false,
    vehicleInfo: false,
  });
  const [claimData, setClaimData] = useState({
    Vehicle_Vin: "",
    License_No: "",
    Manufacturer: "",
    Model: "",
    Manufacture_Year: "",
    Owner: "",
    Color: "",
    Fuel: "",
    Transmission: "",
    Insurance: "",
    AirBags: [],
    Kilometer_driven: "",
    date: "",
    damage_state: "",
    Odometer_reading: "",
    GPU_Process :'no data'
  });
  const [imgArr, setImgArr] = useState([]);

  return (
    <>
      <div style={{ display: popUp ? "none" : "" }}>
        <div className={styles.claim_mainDiv}>
          <VehicleInformation
            setClaimData={setClaimData}
            claimData={claimData}
            accordianFlag={accordianFlag}
            setaccordianFlag={setaccordianFlag}
          />
          <ClaimInformation
            setClaimData={setClaimData}
            claimData={claimData}
            accordianFlag={accordianFlag}
            setaccordianFlag={setaccordianFlag}
          />
          <UploadImage
            setImgArr={setImgArr}
            accordianFlag={accordianFlag}
            setaccordianFlag={setaccordianFlag}
          />
        </div>
        <div className={styles.review_btn}>
          <button className={styles.btn} onClick={() => _popUp(true)}>
            Review
          </button>
        </div>
      </div>
      <div
        style={{ display: popUp ? "" : "none" }}
        className={styles.claim_mainDiv}
      >
        <ModalPopUp _popUp={_popUp} setClaimData={setClaimData} claimData={claimData} imgArr={imgArr}  />
      </div>
    </>
  );
};
export default CreateClaim;
