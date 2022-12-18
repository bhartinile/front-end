import styles from "./VehicleInformation.module.css";
import React from "react";
//import { MDBInput } from "mdbreact";

const VehicleInformation = ({
  setClaimData,
  claimData,
  accordianFlag,
  setaccordianFlag,
}) => {
  const onChnangeHandler = (e) => {
    let name, value;
    name = e.target.name;
    value = e.target.value;
    setClaimData({ ...claimData, [name]: value });
    if (name === "AirBags") {
      setClaimData({ ...claimData, AirBags: [...claimData.AirBags, value] });
    }
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
        <div id="vehicleInfo"
          className={styles.accrdianHeading}
          onClick={(e) => accordianHandler(e)}
        >
          <span id="vehicleInfo"
            className={styles.accrdianHeading_pos}
            style={{
              background: accordianFlag.vehicleInfo ? "purple" : "#ffffffb3",
            }}
          >
            {" "}
            1
          </span>
          <input
            id="vehicleInfo"
            type="text"
            value="Fill out the Vehicle Info"
            readOnly
          />
        </div>
        <div
          className={styles.input_div_info}
          style={{ display: accordianFlag.vehicleInfo ? "" : "none" }}
        >
          <input
            type="text"
            name="Vehicle_Vin"
            placeholder="Vehicle Vin*"
            value={claimData.Vehicle_Vin}
            onChange={(e) => onChnangeHandler(e)}
          />
          <input
            type="text"
            name="License_No"
            placeholder="License No*"
            value={claimData.License_No}
            onChange={(e) => onChnangeHandler(e)}
          />
          <input
            type="text"
            name="Manufacturer"
            placeholder="Manufacturer*"
            value={claimData.Manufacturer}
            onChange={(e) => onChnangeHandler(e)}
          />
          <input
            type="text"
            name="Model"
            placeholder="Model*"
            value={claimData.Model}
            onChange={(e) => onChnangeHandler(e)}
          />
          <input
            type="text"
            name="Manufacture_Year"
            placeholder="Manufacture Year*"
            value={claimData.Manufacture_Year}
            onChange={(e) => onChnangeHandler(e)}
          />
          <input
            type="text"
            name="Owner"
            placeholder="Owner*"
            value={claimData.Owner}
            onChange={(e) => onChnangeHandler(e)}
          />
          <input
            type="text"
            name="Color"
            placeholder="Color*"
            value={claimData.Color}
            onChange={(e) => onChnangeHandler(e)}
          />
          <select id="Type" name="Fuel" onChange={(e) => onChnangeHandler(e)}>
            <option selected="selected" style={{background:'#424242'}} disabled value="">
              Fuel Type*
            </option>
            <option style={{background:'#424242'}} value="Diesel">Diesel</option>
            <option style={{background:'#424242'}} value="Other">Petrol & Other</option>
          </select>
          <select
            id="Type"
            name="Transmission"
            onChange={(e) => onChnangeHandler(e)}
          >
            <option selected="selected" style={{background:'#424242'}} disabled value="">
              Transmission Type*
            </option>
            <option style={{background:'#424242'}} value="Manual">Manual</option>
            <option style={{background:'#424242'}} value="Other">Automatic & Other</option>
          </select>
          <select
            id="Type"
            name="Insurance"
            onChange={(e) => onChnangeHandler(e)}
          >
            <option style={{background:'#424242'}} selected="selected" disabled value="">
              Insurance*
            </option>
            <option style={{background:'#424242'}} value="Zero Dep or Not Available">
              Zero Dep or Not Available
            </option>
            <option  style={{background:'#424242'}} value="Other">Other</option>
          </select>

          <input
            type="text"
            name="Kilometer_driven"
            placeholder="Kilometers Driven*"
            value={claimData.Kilometer_driven}
            onChange={(e) => onChnangeHandler(e)}
          />
          <div className={styles.airbagsDiv}>
            <label>Air Bags* :</label>
            <input
              type="checkbox"
              name="AirBags"
              value="Driver Air Bag"
              onChange={(e) => onChnangeHandler(e)}
            />
            
            Driver Air Bag
          
            <input
              type="checkbox"
              name="AirBags"
              value="Passenger Air Bag"
              onChange={(e) => onChnangeHandler(e)}
            />
            Passenger Air Bag
            <input
              type="checkbox"
              name="AirBags"
              value="Side Air Bag Front"
              onChange={(e) => onChnangeHandler(e)}
            />
            Side Air Bag Front
            <input
              type="checkbox"
              name="AirBags"
              value="Side Air Bag Rear"
              onChange={(e) => onChnangeHandler(e)}
            />
            Side Air Bag Rear
            <input
              type="checkbox"
              name="AirBags"
              value="Knee Airbags"
              onChange={(e) => onChnangeHandler(e)}
            />
            Knee Airbags
          </div>
        </div>
      </div>
    </>
  );
};
export default VehicleInformation;
