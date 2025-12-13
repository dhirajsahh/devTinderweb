import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utilis/userSlice";
import { BASE_URL } from "../utilis/constant";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        BASE_URL + "login",
        {
          email: emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(response.data));
      navigate("/");
    } catch (error) {
      setError(error?.response?.data || "something went wrong");
    }
  };
  const handleSignUp = async () => {
    try {
      const response = await axios.post(
        BASE_URL + "signup",
        {
          email: emailId,
          password,
          firstName,
          lastName,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(response.data));
      navigate("/profile");
    } catch (error) {
      setError(error?.response?.data || "something went wrong");
    }
  };
  return (
    <div className="flex justify-center my-5">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body gap-5">
          <h2 className="card-title justify-center text-2xl">
            {isLoginForm ? "Login" : "SignUp"}
          </h2>
          <div>
            {!isLoginForm && (
              <>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-xl">FirstName</legend>
                  <input
                    type="text"
                    className="input"
                    placeholder="FirstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-xl">LastName</legend>
                  <input
                    type="text"
                    className="input"
                    placeholder="LastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </fieldset>
              </>
            )}
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-xl">Email ID</legend>
              <input
                type="text"
                className="input"
                placeholder="Email Id"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-xl">Password</legend>
              <input
                type="password"
                className="input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center">
            <button
              className="btn btn-primary"
              onClick={isLoginForm ? handleLogin : handleSignUp}
            >
              {isLoginForm ? "Login" : "SignUp"}
            </button>
          </div>
          <p
            className="cursor-pointer text-center my-2"
            onClick={() => setIsLoginForm((prev) => !prev)}
          >
            {isLoginForm ? "New User SignUp" : "Existing User Login"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
