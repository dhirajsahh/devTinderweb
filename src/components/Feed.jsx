import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utilis/constant";
import { addFeed } from "../utilis/userFeed";
import UserCards from "./UserCards";

const Feed = () => {
  const users = useSelector((state) => state.feed);

  const dispatch = useDispatch();
  const getFeed = async () => {
    try {
      const response = await axios.get(BASE_URL + "feed", {
        withCredentials: true,
      });
      dispatch(addFeed(response.data));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getFeed();
  }, []);

  return (
    users && (
      <div className="flex justify-center">
        <UserCards user={users[0]} />
      </div>
    )
  );
};

export default Feed;
