import styles from "./ClaimResult.module.css";
import React from "react";

const PriceResult = ({ pricePred }) => {
  return (
    <>
      <div className={styles.price_div}>
        <h2> Price</h2>
        {pricePred ? (
          <h4>
            {pricePred} <span> Rs</span>
          </h4>
        ) : (
          <h4>
            {" "}
            <span> Rs</span>
          </h4>
        )}
      </div>
    </>
  );
};
export default PriceResult;
