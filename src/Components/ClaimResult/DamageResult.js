import styles from "./ClaimResult.module.css";
import React from "react";
import Table from "react-bootstrap/Table";

const DamageResult = ({ carJobData, count }) => {
  const heading = ["Part Name", "Decision", "Confidence"];
  return (
    <>
      <div className={styles.DamageResult_parent_div}>
      {carJobData ? (
        <Table striped bordered hover variant="dark">
          <thead >
            <tr >
              {heading.map((head) => (
                <th >{head}</th>
              ))}
            </tr>
          </thead>
          
            {carJobData[count].RR_CNN_prediction.decisions.map((elem) => (
              <tbody>
                <tr>
                  <td> {(elem.part_name.charAt(0).toUpperCase()+elem.part_name.slice(1)).replaceAll('_',' ')} </td>
                  <td> {elem.decision.charAt(0).toUpperCase()+elem.decision.slice(1)} </td>
                  {elem.confidence_repair > elem.confidence_replace ? (
                    <td>{elem.confidence_repair.toFixed(2)}</td>
                  ) : (
                    <td>{elem.confidence_replace.toFixed(2)}</td>
                  )}
                </tr>
              </tbody>
            ))}
          
        </Table>
        ) : (
            <div className={styles.DamageResult_child2_div}>
              <span>    </span>
              <span>     </span>
              
              <span > No Data</span>
            </div>
          )}
      </div>
    </>
  );
};
export default DamageResult;
