import styles from "./ClaimResult.module.css";
import React from "react";

const ClaimFeatureInfo = ({carClaimData,pricePred}) => {
  return (
    <>
      <div className={styles.feature_div}>
        <div>

          <fieldset class="border p-2">
            <legend  class="float-none w-auto p-2" style={{fontSize:'90%' }} >VIN</legend>
            {/* <span style={{display: 'flex', justifyContent: 'center',paddingTop:'-10%'  }} > {carClaimData.Vehicle_Vin}</span> */}
            <p style={{display: 'flex', justifyContent: 'center',margin: '-12%',paddingTop: '4.5%'}} > {carClaimData.Vehicle_Vin}</p>
          </fieldset>
          <label className={styles.claimFeature_label} >Vehicle Vin Number</label>
        </div>

        <div>
          <fieldset class="border p-2" >
            <legend class="float-none w-auto p-2" style={{fontSize:'90%' }}> License Plate</legend>
            <p style={{display: 'flex', justifyContent: 'center' ,margin: '-12%' }} > {carClaimData.License_No}</p>
          </fieldset>
          <label className={styles.claimFeature_label} >Vehicle License Plate Number</label>
        </div>

        <div>
          <fieldset class="border p-2" >
            <legend class="float-none w-auto p-2" style={{fontSize:'90%' }}>Maker</legend>
            <p style={{display: 'flex', justifyContent: 'center',margin:'-12%',paddingTop: '4.5%'  }} > {carClaimData.Manufacturer}</p>
          </fieldset>
          <label className={styles.claimFeature_label} >Vehicle Maker</label>
        </div>

        <div>
          <fieldset class="border p-2" >
            <legend class="float-none w-auto p-2" style={{fontSize:'90%' }} >Model</legend>
            <p style={{display: 'flex', justifyContent: 'center',margin:'-12%' }} > {carClaimData.Model}</p>
          </fieldset>
          <label className={styles.claimFeature_label} >Vehicle Model</label>
        </div>

        <div>
          <fieldset class="border p-2" >
            <legend class="float-none w-auto p-2" style={{fontSize:'90%' }}>Manufratured</legend>
            <p style={{display: 'flex', justifyContent: 'center',margin:'-12%',paddingTop: '4.5%'  }} > {carClaimData.Manufacture_Year}</p>
          </fieldset>
          <label className={styles.claimFeature_label} >Vehicle Manufratured Year</label>
        </div>

        <div>
          <fieldset class="border p-2" >
            <legend class="float-none w-auto p-2" style={{fontSize:'90%' }}>Odometer</legend>
            <p style={{display: 'flex', justifyContent: 'center',margin:'-12%'  }} > {carClaimData.Odometer_reading}</p>
          </fieldset>
          <label className={styles.claimFeature_label} >Odometer Reading</label>
        </div>
        <div className={styles.priceDiv}>
        <span className={styles.price_label}> Price : </span>
        {pricePred ? (
          <span className={styles.price_value}>
          <span> ₹ </span> {pricePred} 
          </span>
        ) : (
          <span style={{fontSize:'120%',fontWeight:4.500}}>
            .... 
          </span>
        )}
      </div>
      </div>
      
    </>
  );
};
export default ClaimFeatureInfo;
