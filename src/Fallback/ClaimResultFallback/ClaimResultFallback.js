import styles from "./ClaimResultFallback.module.css";
import React from "react";
import gif from '../../Image/ben-redblock-loading.gif';

const ClaimResultsFallback = () => {
  return (
    <>
      <div className={styles.gridClaimResults}>
      
            <img src={gif}  alt='loading_img' className={styles.div1}/>
      
       
        <img src={gif}  alt='loading_img' className={styles.div2}/>
       
        
        <img src={gif}  alt='loading_img' className={styles.div3}/>
        
      
        <img src={gif}  alt='loading_img' className={styles.div4}/>
       
      </div>
    </>
  );
};
export default ClaimResultsFallback;
