// import styles from "./ClaimDisplayTable.module.css";
import React, { useState } from "react";
import {
  CgChevronRight,
  CgPushChevronRight,
  CgChevronLeft,
  CgPushChevronLeft,
} from "react-icons/cg";

const PagiNation = ({
  currentPage,
  setCurrentPage,
  npages,
  indexOfFirstRecord,
  recordsPerPage,
  indexOfLastRecord,
  fastSufflePage,
  setFastSufflePage,
}) => {
  const [clrFlagR, setClrFlagR] = useState(true);
  const [clrFlagL, setClrFlagL] = useState(true);
  const onChevronLeft = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setClrFlagL(true);
      setClrFlagR(true);
    } else {
      setCurrentPage(1);
      setFastSufflePage(1);
      setClrFlagL(false);
    }
  };
  const onChevronRight = () => {
    if (indexOfFirstRecord < npages - indexOfFirstRecord) {
      setCurrentPage(currentPage + 1);
      setClrFlagR(true);
      setClrFlagL(true);
    } else {
      setCurrentPage(currentPage);
      setFastSufflePage(1);
      setClrFlagR(false);
    }
  };
  const onPushChevronRight = () => {
    if (indexOfFirstRecord < npages - indexOfFirstRecord) {
      setFastSufflePage(fastSufflePage * 2);
      setClrFlagR(true);
      setClrFlagL(true);
    } else {
      setFastSufflePage(fastSufflePage);
      setClrFlagR(false);
    }
  };
  const onPushChevronLeft = () => {
    if (indexOfFirstRecord > 1) {
      setFastSufflePage(Math.ceil(fastSufflePage / 2));
      setClrFlagR(true);
      setClrFlagL(true);
    } else {
      setFastSufflePage(fastSufflePage);
      setClrFlagL(false);
    }
  };
  return (
    <>
      <span> Items per page: {recordsPerPage} </span>{" "}
      <span style={{ marginLeft: "4%" }}>
        {" "}
        {indexOfFirstRecord} –{" "}
        {npages > indexOfLastRecord ? indexOfLastRecord - 1 : npages - 1} of{" "}
        {npages}{" "}
      </span>
      <CgPushChevronLeft
        onClick={onPushChevronLeft}
        style={{
          marginLeft: "10%",
          color: clrFlagL ? "" : "rgb(191, 180, 180)",
        }}
      />{" "}
      <CgChevronLeft
        onClick={onChevronLeft}
        style={{ color: clrFlagL ? "" : "rgb(191, 180, 180)" }}
      />
      <CgChevronRight
        style={{
          marginLeft: "10%",
          color: clrFlagR ? "" : "rgb(191, 180, 180)",
        }}
        onClick={onChevronRight}
      />{" "}
      <CgPushChevronRight
        onClick={onPushChevronRight}
        style={{ color: clrFlagR ? "" : "rgb(191, 180, 180)" }}
      />
    </>
  );
};

export default PagiNation;
