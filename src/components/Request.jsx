import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utilis/constant";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addRequest, removeRequest } from "../utilis/connectionRequest";

const Request = () => {
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const dispatch = useDispatch();
  const connectionRequest = useSelector((store) => store.request);
  const connectionRequests = async () => {
    try {
      const response = await axios.get(BASE_URL + "request/received", {
        withCredentials: true,
      });
      dispatch(addRequest(response.data.data));
    } catch (err) {
      console.log(err);
    }
  };
  const handleRequest = async (status, id) => {
    try {
      const res = axios.post(
        BASE_URL + `request/review/${status}/${id}`,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(id));
      setToast({
        show: true,
        message:
          status === "accepted"
            ? "Request accepted successfully."
            : "Request rejected successfully.",
        type: status === "accepted" ? "success" : "error",
      });
    } catch (err) {
      console.log(err);
    }
  };
  setTimeout(() => {
    setToast({ show: false, message: "", type: "" });
  }, 3000);
  useEffect(() => {
    connectionRequests();
  }, []);
  if (!connectionRequest) return <h1>No Reqeust Received</h1>;
  return (
    <div className="flex justify-center items-center w-full mt-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-center text-2xl">Request</h1>
        {connectionRequest.map((c) => {
          const { _id, firstName, lastName, age, gender, photoUrl, about } =
            c.fromUserId;
          return (
            <div
              key={_id}
              className="flex flex-row gap-10 items-center justify-between bg-base-200 
                 border border-base-300 rounded-xl p-4 shadow-md  cursor-pointer"
            >
              <div className="flex gap-5 items-center">
                <figure>
                  <img
                    className="h-20 w-20 rounded-full object-cover border-2 border-secondary shadow-sm"
                    src={photoUrl}
                    alt="Photo"
                  />
                </figure>

                <div className="flex flex-col gap-1">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    {firstName + " " + lastName}
                  </h2>

                  {age && gender && (
                    <p className="text-sm opacity-80">
                      {age +
                        ", " +
                        gender.charAt(0).toUpperCase() +
                        gender.slice(1)}
                    </p>
                  )}

                  {about && (
                    <p className="text-sm text-base-content/70">{about}</p>
                  )}
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  className="btn btn-secondary"
                  onClick={() => handleRequest("accepted", c._id)}
                >
                  Accept
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => handleRequest("rejected", c._id)}
                >
                  Reject
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {toast.show && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>{toast.message}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Request;
