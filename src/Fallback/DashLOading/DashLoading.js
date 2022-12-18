import styles from './DashLoading.module.css';
import React from "react";
import gif from '../../Image/loading-gif.gif';

const DashLoading =()=>{
    return(
        <>
        <div className={styles.gif_loading}>
        <img  src={gif} alt="Loading_img_gif"  />
        </div>
            
        </>
    )
};
export default DashLoading;