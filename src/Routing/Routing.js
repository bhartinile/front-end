import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../Components/Login/Login";
import axios from "axios";

const Routing = () => {
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();
  const onAuthHandler = async () => {
    try {
      const { status } = await axios.get("/api/user/authorized");
      if (status === 200) {
        setFlag(true);
      } else {
        navigate("/");
        setFlag(false);
      }
    } catch (error) {
      navigate("/");
      setFlag(false);
    }
  };
  useEffect(() => {
    onAuthHandler();
  },[]);

  return (
    <>
      <Navbar flag ={flag} />
      <div style={{ display: flag ? "none" : "" }}>
        <Routes>
        <Route path="/" excat element={<Login />} />
          <Route path="/login" excat element={<Login />} />
        </Routes>
      </div>
      <div style={{ display: flag ? "" : "none" }}>
        <ProtectedRoute />
      </div>

      <Footer />
    </>
  );
};

export default Routing;
