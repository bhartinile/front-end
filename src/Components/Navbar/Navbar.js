import styles from "./Navbar.module.css";
import React from "react";
import logo from "../../Image/download.png";
import axios from "axios";

const Navbar = ({ flag }) => {
  const logoutHandler = async () => {
    try {
      const { data, status } = await axios.get("/api/logout");
      if (status === 200) {
        alert(data.message);
        window.location.href = "/";
      }
    } catch (error) {
      alert("Invalid Path");
    }
  };
  return (
    <>
      <div className={styles.Navbar_parent}>
        <img width="40" src={logo} alt="Digitius logo" title="Digitius"></img>
        <span> Digitius</span>
        {/* <button
          className={styles.Navbar_Logout_btn}
          style={{ display: flag ? "" : "none" }}
          onClick={logoutHandler}
        >
          {" "}
          Log-Out
        </button> */}
      </div>
    </>
  );
};

export default Navbar;
