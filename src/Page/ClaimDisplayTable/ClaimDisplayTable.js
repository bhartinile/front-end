import styles from "./ClaimDisplayTable.module.css";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import PagiNation from "../Pagination/Pagination";
import { FaEllipsisV } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import RunJob from "../../MLFeature/RunJob/RunJob";
import axios from "axios";

const ClaimDisplayTable = ({ claimData }) => {
  const [show, setShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [fastSufflePage, setFastSufflePage] = useState(1);
  const recordsPerPage = 10;
  const indexOfLastRecord = currentPage * recordsPerPage *fastSufflePage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = claimData.slice(indexOfFirstRecord, indexOfLastRecord);
  const npages = claimData.length;

  const navigate = useNavigate();
  const heading = [
    "Sr. No",
    "Incident Date",
    "Damage State",
    "Odometer Reading",
    "Claim Status",
    "Vin No.",
    "License PlateNo.",
    "Make",
    "Model",
    "Manufracture Date",
    "Actions",
  ];
  const TimeDifference = (date) => {
    const date1 = new Date(date.split("-").reverse().join("-"));
    const date2 = new Date(Date.now());
    const diffDays = Math.floor(
      Math.abs(date2 - date1) / (1000 * 60 * 60 * 24)
    );
    return diffDays > 6 ? "Old" : "New";
  };

  const onClickHandler = async (id) => {
    try {
      const { data, status } = await axios.get(
        `/api/user/car/run-job/car-claim/${id}`
      );
      if (status === 201) {
        //console.log(data);
        setShow(false);
         alert(data.message);
         window.location.reload();
      }
    } catch (error) {
      alert(error.response.data.error);
      setShow(false);
      window.location.reload();
    }
  };

  return (
    <>
      <div>
        <Table
          striped
          bordered
          hover
          variant="dark"
          className={styles.table_dashboard}
        >
          <thead>
            <tr>
              {heading.map((head) => (
                <th>{head}</th>
              ))}
            </tr>
          </thead>
          {claimData ? (
            currentRecords.map((claimdata, index) => (
              <tbody>
                <tr>
                  <td> {index+indexOfFirstRecord} </td>
                  <td> {claimdata.date} </td>
                  <td> {claimdata.damage_state} </td>
                  <td style={{ display: "flex", justifyContent: "center" }}>
                    {claimdata.Odometer_reading}
                  </td>
                  <td>{TimeDifference(claimdata.date)}</td>
                  <td>{claimdata.Vehicle_Vin}</td>
                  <td>{claimdata.License_No}</td>
                  <td>{claimdata.Manufacturer}</td>
                  <td>{claimdata.Model}</td>
                  <td style={{ display: "flex", justifyContent: "center" }}>
                    {claimdata.Manufacture_Year}
                  </td>
                  <td>
                    <div className={styles.btn_tble}>
                      <DropdownButton title=<FaEllipsisV />>
                        <Dropdown.Item>
                          {claimdata.job_flag === 0 ? (
                            <RunJob
                              show={show}
                              setShow={setShow}
                              onClickHandler={() =>
                                onClickHandler(claimdata._id)
                              }
                            />
                          ) : (
                            <button
                              style={{
                                zIndex: 0,
                                color: "rgba(220, 220, 220, 0.721)",
                                cursor: "text",
                              }}
                            >
                              Run Job
                            </button>
                          )}
                        </Dropdown.Item>
                        <Dropdown.Item>
                          {claimdata.job_flag === 1 ? (
                            <button
                              onClick={() =>
                                navigate(`/claim-results/${claimdata._id}`)
                              }
                            >
                              {" "}
                              View Result
                            </button>
                          ) : (
                            <button
                              style={{
                                zIndex: 0,
                                color: "rgba(220, 220, 220, 0.721)",
                                cursor: "text",
                              }}
                            >
                              {" "}
                              View Result
                            </button>
                          )}
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <button>Edit Claim</button>
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))
          ) : (
            <tbody></tbody>
          )}

          <td
            colspan="11"
            style={{
              padding: "1%",
              paddingLeft: "74%",
              fontSize: "95%",
              color: "white",
            }}
          >
            <PagiNation
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              indexOfLastRecord={indexOfLastRecord}
              indexOfFirstRecord ={indexOfFirstRecord}
              recordsPerPage ={recordsPerPage}
              claimdata={claimData}
              npages={npages}
              setFastSufflePage ={setFastSufflePage}
              fastSufflePage={fastSufflePage}
            /> 
           
          </td>
        </Table>
      </div>
    </>
  );
};

export default ClaimDisplayTable;
