import styles from "../VehicalInformation/VehicleInformation.module.css";
import React from "react";

const UploadImage = ({ setImgArr, accordianFlag, setaccordianFlag }) => {
  const accordianHandler = (e) => {
    var id = e.target.id;
    setaccordianFlag({
      [id]: !accordianFlag[id],
    });
  };
  const onClickImgHandler = (e) => {
    const img = [];
    const file = e.target.files;
    for (let i of file) {
      img.push(i);
    }
    setImgArr(img);
  };

  return (
    <>
      <div className={styles.parent_div}>
        <div id="uploadImg"
          className={styles.accrdianHeading}
          onClick={(e) => accordianHandler(e)}
        >
          <span id="uploadImg"
            className={styles.accrdianHeading_pos}
            style={{
              background: accordianFlag.uploadImg ? "purple" : "#ffffffb3",
            }}
          >
            {" "}
            3
          </span>
          <input id="uploadImg" type="text" value="Upload Images" readOnly />
        </div>
        <div
          className={styles.input_div_info}
          style={{ display: accordianFlag.uploadImg ? "" : "none" }}
        >
          <input
            type="file"
            name="carImg"
            multiple
            onChange={onClickImgHandler}
          />
        </div>
      </div>
    </>
  );
};
export default UploadImage;
