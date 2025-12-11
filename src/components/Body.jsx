import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../utilis/constant";
import { useDispatch } from "react-redux";
import { addUser } from "../utilis/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchUser = async () => {
    try {
      const user = await axios.get(BASE_URL + "profile/view", {
        withCredentials: true,
      });

      dispatch(addUser(user.data));
    } catch (err) {
      if (err.status === 401) {
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="grow">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Body;
