// import styles from './Timer.module.css';
import React, { useState } from "react";


const Timer =()=>{
    const [min ,_min] = useState(0);
    const [sec ,_sec] = useState(0);
   const myIntrval= setInterval(() => {
        
        _min(min+1);
        clearInterval(myIntrval);
   }, 60*1000);
   const myIntrvals= setInterval(() => {
    sec<59 ?
    _sec(sec+1)
    :
    _sec(0)
    clearInterval(myIntrvals);
},
 1000)
    
    return(
        <>
        <div>
        <h6 style={{fontSize:'210%',textShadow:'1px 1px red'}}>
       { ("0" + min).slice(-2)}  : { ("0" + sec).slice(-2)}
        </h6>
        </div>
        

        </>
    )
};
export default Timer;