import React, { useEffect } from "react";
import { BASE_URL } from "../utilis/constant";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utilis/userConnection";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();
  const getConnections = async () => {
    const res = await axios.get(BASE_URL + "user/connections", {
      withCredentials: true,
    });
    console.log(res);

    dispatch(addConnection(res.data.data));
  };
  useEffect(() => {
    getConnections();
  }, []);

  if (!connections) return <h1>No Connection Found</h1>;
  if (connections.length === 0) return <h1>No Connection Found</h1>;
  return (
    <div className="flex justify-center items-center w-full mt-10">
      <div className="flex flex-col gap-4 w-full max-w-2xl">
        <h1 className="text-center text-2xl">Connections</h1>
        {connections.map((c) => {
          return (
            <div
              key={c._id}
              className="flex w-full items-center gap-5 bg-base-200 hover:bg-base-300 
                 border border-base-300 rounded-xl p-4 shadow-md 
                 transition-all duration-200 hover:shadow-xl cursor-pointer"
            >
              <figure>
                <img
                  className="h-20 w-20 rounded-full object-cover border-2 border-secondary shadow-sm"
                  src={c.photoUrl}
                  alt="Photo"
                />
              </figure>

              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  {c.firstName} {c.lastName}
                </h2>

                {c.age && c.gender && (
                  <p className="text-sm opacity-80">
                    {c.age +
                      ", " +
                      c.gender.charAt(0).toUpperCase() +
                      c.gender.slice(1)}
                  </p>
                )}

                {c.about && (
                  <p className="text-sm text-base-content/70">{c.about}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Connections;
