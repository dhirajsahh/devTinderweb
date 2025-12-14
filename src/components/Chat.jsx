import React from "react";
import { useParams } from "react-router-dom";

const Chat = () => {
  const targetUserId = useParams();

  return (
    <div className="w-1/2 mx-auto m-5  border border-b-gray-200 h-[76vh] flex flex-col">
      <h1 className="text-center text-2xl border-b border-b-gray-200">Chat</h1>
      <div className="flex-1 overflow-scroll p-5"></div>
      <div className="border-t border-b-gray-400 flex gap-2">
        <input
          type="text"
          className="input flex-1 border border-gray-500 text-white rounded p-2 "
          placeholder="message"
        />
        <button className="btn btn-primary">send</button>
      </div>
    </div>
  );
};

export default Chat;
