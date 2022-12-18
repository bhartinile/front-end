import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Logout = () => {
  const navigate = useNavigate();
  const onLogoutHandler = async () => {
    try {
      const { data, status } = await axios.get("/api/logout");
      if (status === 200) {
        navigate("/login");
        alert(data.message);
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };
  // useEffect(() => {
  //   onLogoutHandler();
  // }, []);

  return (
    <>
      <button
        onClick={onLogoutHandler}
        style={{ marginTop: "100px", background: "blue" }}
      >
        {" "}
        logout
      </button>
    </>
  );
};

export default Logout;
