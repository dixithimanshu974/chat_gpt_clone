import React, { useState } from "react";
import Chatbot from "../components/Chatbot";
import Sidebar from "../components/Sidebar";
import "./home.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";

const Home = () => {
  const [setChats, setRemoveChat] = useState("");
  const [allChats, setAllChats] = useState();
  const [animation, setAnimation] = useState(false);
  const getChatData = (setChats, chats) => {
    setRemoveChat(() => setChats);
    setAllChats(chats);
  };
  const setOldChat = (oldChat) => {
    setChats(oldChat);
  };
  return (
    <>
        <div className="home-container">
          <Sidebar
            setChats={setChats}
            allChats={allChats}
            setOldChat={setOldChat}
            setAnimation={setAnimation}
          />
          <Chatbot
            getChatData={getChatData}
            animation={animation}
            setAnimation={setAnimation}
          />
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      
    </>
  );
};

export default Home;
