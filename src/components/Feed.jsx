import React from "react";
import { useSelector } from "react-redux";

const Feed = () => {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <p>Feed:{user.firstName}</p>
    </div>
  );
};

export default Feed;
