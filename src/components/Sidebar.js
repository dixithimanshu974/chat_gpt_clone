import React, { useState } from "react";
import "./sidebar.css";
import { BiPlus } from "react-icons/bi";
import Typewriter from "typewriter-effect";
import { TbMessageShare } from "react-icons/tb";
import { NavLink } from "react-router-dom";
const Sidebar = ({ setChats, allChats, setOldChat, setAnimation }) => {
  const [chatsArr, setChatsArr] = useState([]);
  const [isSetChat, setIsSetChat] = useState(true);
  const clearChat = (e) => {
    setChats([{ user: "", chat: "" }]);
    setIsSetChat(true);
    if (isSetChat === true) {
      setChatsArr([...chatsArr, allChats]);
    }
    setAnimation(false);
  };

  const getOldChats = (index, data) => {
    setOldChat(data);
    setIsSetChat(false);
  };


  return (
    <div className="sidebar-container">
      <div className="newchat" onClick={clearChat}>
        <BiPlus className="add-icon" />
        <p>New Chat</p>
      </div>
      {chatsArr.map((data, index) => {
        return (
          <div
            className="chats-history"
            tabindex="1"
            onClick={() => getOldChats(index, data)}
          >
            <TbMessageShare style={{ marginRight: "10px", fontSize: "20px" }} />
            <Typewriter
              className="bot-message"
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    data[1]?.chat.length > 28
                      ? data[1].chat.substring(0, 28) + "..."
                      : data[1]?.chat
                  )
                  .changeDelay(1000)
                  .start();
              }}
              options={{
                delay: 100,
              }}
            />
          </div>
        );
      })}
      <NavLink to="login">
        <p>Login</p>
      </NavLink>
    </div>
  );
};

export default Sidebar;
