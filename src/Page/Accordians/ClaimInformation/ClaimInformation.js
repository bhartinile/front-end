import styles from "../VehicalInformation/VehicleInformation.module.css";
import React from "react";

const ClaimInformation = ({
  setClaimData,
  claimData,
  accordianFlag,
  setaccordianFlag,
}) => {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;

  const onChnangeHandler = (e) => {
    let name, value;
    name = e.target.name;
    value = e.target.value;
    setClaimData({ ...claimData, [name]: value, date: currentDate });
  };
  const accordianHandler = (e) => {
    var id = e.target.id;
    setaccordianFlag({
      [id]: !accordianFlag[id],
    });
  };

  return (
    <>
      <div className={styles.parent_div}>
        <div id="claimInfo"
          className={styles.accrdianHeading}
          onClick={(e) => accordianHandler(e)}
        >
          <span id="claimInfo"
            className={styles.accrdianHeading_pos}
            style={{
              background: accordianFlag.claimInfo ? "purple" : "#ffffffb3",
            }}
          >
            {" "}
            2
          </span>
          <input
          id="claimInfo"
            type="text"
            value="Fill out the Claim Info"
            readOnly
          />
        </div>
        <div
          className={styles.input_div_info}
          style={{ display: accordianFlag.claimInfo ? "" : "none" }}
        >
          <input
            type="text"
            name="date"
            value={currentDate}
            onChange={(e) => onChnangeHandler(e)}
            readOnly
          />
          <input
            type="text"
            name="damage_state"
            placeholder="Damage State*"
            value={claimData.damage_state}
            onChange={(e) => onChnangeHandler(e)}
          />
          <input
            type="text"
            name="Odometer_reading"
            placeholder="Odometer Reading*"
            value={claimData.Odometer_reading}
            onChange={(e) => onChnangeHandler(e)}
          />
        </div>
      </div>
    </>
  );
};
export default ClaimInformation;
