import styles from './Loading.module.css';
import React, { useState } from "react";


const Loading =()=>{
    const [st ,_st]=useState(false);
   const myIntrval= setInterval(() => {
        _st(!st);
        clearInterval(myIntrval);
    }, 500);
    
    return(
        <>
        <div className={styles.loading_div_parent}>
        <h6 className={styles.loading_div}>
            Loading <span className={st?styles.span_div1:styles.span_div2}>...</span> 
        </h6>
        </div>
        

        </>
    )
};
export default Loading;