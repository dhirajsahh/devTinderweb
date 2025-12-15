import React, { useEffect, useMemo, useState } from "react";
import { BASE_URL } from "../utilis/constant";
import { io } from "socket.io-client";

const Chat = () => {
  const socket = useMemo(() => io(BASE_URL), []);
  const [message, setMessage] = useState("");
  const [room, setRoom] = useState("");

  const sendMessage = () => {
    socket.emit("sendMessage", { message, room });
  };
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected", socket.id);
    });
    socket.on("welcome", (s) => {
      console.log(s);
    });
    socket.on("receiveMessage", (mes) => {
      console.log(mes);
    });
    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <div>
      <fieldset className="fieldset">
        <input
          type="text"
          className="input"
          placeholder="FirstName"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </fieldset>
      <fieldset className="fieldset">
        <input
          type="text"
          className="input"
          placeholder="room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
      </fieldset>
      <button className="btn bg-pink-600" onClick={sendMessage}>
        Click me
      </button>
    </div>
  );
};

export default Chat;
