import styles from "./ClaimResult.module.css";
import React, { useEffect, useState } from "react";
// import PriceResult from "./PriceResult";
import ClaimFeatureInfo from "./ClaimFeatureInfo";
import DamageResult from "./DamageResult";
import ImageDamageResult from "./ImageDamageResult";
import { useLocation } from "react-router-dom";
import axios from "axios";

const ClaimResults = () => {
  const [carClaimData, setCarClaimData] = useState({});
  const [carJobData , setCarJobData]= useState()
  const [count, setCount] = useState(0);
  const search = useLocation();
  const claimId = new URLSearchParams(search).get("pathname").split("/")[2];

  const fetchData = async () => {
    try {
      const { data, status } = await axios.get(
        `/api/user/claim-result-after-run-job/${claimId}`
      );
      if (status === 200) {
        setCarClaimData({
          Vehicle_Vin:data.message.Vehicle_Vin,
          License_No:data.message.License_No,
          Manufacturer:data.message.Manufacturer,
          Model:data.message.Model,
          Manufacture_Year:data.message.Manufacture_Year,
          Odometer_reading:data.message.Odometer_reading,
          pricePred :data.message.Pred_Price
        })
        setCarJobData(data.message.car_job);
       
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

 
  return (
    <>
      <div className={styles.gridClaimResult}>
        <ClaimFeatureInfo carClaimData={carClaimData} pricePred ={carClaimData.pricePred} />
        <ImageDamageResult car_job_data={carJobData} count={count} setCount ={setCount} />
        <DamageResult carJobData={carJobData} count={count}  />
        {/* <PriceResult pricePred ={carClaimData.pricePred} /> */}
      </div>
    </>
  );
};
export default ClaimResults;
