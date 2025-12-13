import axios from "axios";
import React from "react";
import { BASE_URL } from "../utilis/constant";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utilis/userFeed";

const UserCards = ({ user }) => {
  const dispatch = useDispatch();
  //request/send/interested/69329434ebb99960b09f290f

  const handleRequest = async (status, id) => {
    try {
      const res = await axios.post(
        BASE_URL + "request/send/" + status + "/" + id,
        {},
        { withCredentials: true }
      );
      dispatch(removeFeed(id));
    } catch (err) {
      console.log(err);
    }
  };
  if (!user)
    return (
      <h1 className="flex justify-center text-2xl my-4">
        No More User is Available
      </h1>
    );
  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;

  return (
    <div className="card bg-base-300 w-96 shadow-sm my-10">
      <figure>
        <img src={photoUrl} alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {about && <p>{about}</p>}
        {age && gender && <p>{age + " " + gender}</p>}
        <div className="card-actions justify-center gap-6">
          <button
            className="btn btn-primary"
            onClick={() => handleRequest("ignored", _id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleRequest("interested", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCards;
