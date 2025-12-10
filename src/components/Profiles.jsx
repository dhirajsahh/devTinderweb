import React from "react";
import EditProfile from "./EditProfile";
import { useSelector } from "react-redux";

const Profiles = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <EditProfile user={user} />
    </div>
  );
};

export default Profiles;
