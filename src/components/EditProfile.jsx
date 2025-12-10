import React, { useState } from "react";
import UserCards from "./UserCards";
import axios from "axios";
import { BASE_URL } from "../utilis/constant";
import { useDispatch } from "react-redux";
import { addUser } from "../utilis/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [age, setAge] = useState(user?.age);
  const [gender, setGender] = useState(user?.gender);
  const [about, setAbout] = useState(user?.about);
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
  const [error, setError] = useState("");
  const [toast, setToast] = useState(false);
  const dispatch = useDispatch();
  const updateProfile = async () => {
    try {
      setError("");
      const response = await axios.patch(
        BASE_URL + "profile/edit",
        { firstName, lastName, age, gender, about, photoUrl },
        { withCredentials: true }
      );

      dispatch(addUser(response.data.data));
      setToast(true);
      setTimeout(() => {
        setToast(false);
      }, 3000);
    } catch (err) {
      console.log(err);
      setError(err.response.data);
    }
  };

  return (
    <div className="flex justify-center  gap-8 my-10">
      <div className="flex justify-center">
        <div className="card bg-base-300 w-96 shadow-xl">
          <div className="card-body gap-5">
            <h2 className="card-title justify-center text-2xl">
              Edit Profile!
            </h2>
            <div>
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
                <legend className="fieldset-legend text-xl">lastName</legend>
                <input
                  type="text"
                  className="input"
                  placeholder="LastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-xl">Age</legend>
                <input
                  type="text"
                  className="input"
                  placeholder="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </fieldset>

              <div className="dropdown dropdown-hover w-full mt-4">
                <div tabIndex={0} role="button" className="btn  w-full">
                  {gender}
                </div>
                <ul
                  tabIndex="-1"
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <a onClick={() => setGender("male")}>male</a>
                  </li>
                  <li>
                    <a onClick={() => setGender("female")}>female</a>
                  </li>
                  <li>
                    <a onClick={() => setGender("others")}>others</a>
                  </li>
                </ul>
              </div>

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-xl">PhotoUrl</legend>
                <input
                  type="text"
                  className="input"
                  placeholder="photoUrl"
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-xl">About</legend>
                <input
                  type="text"
                  className="input"
                  placeholder="About"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                />
              </fieldset>
            </div>
            <p className="text-red-500">{error}</p>
            <div className="card-actions justify-center">
              <button className="btn btn-secondary" onClick={updateProfile}>
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <UserCards user={{ firstName, lastName, age, gender, about, photoUrl }} />
      {toast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>profile updated successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
