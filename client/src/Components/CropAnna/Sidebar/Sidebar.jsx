import React, { useState } from "react";
import "./Sidebar.css";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";
import { FaRegMessage } from "react-icons/fa6";
import { FaLeaf, FaPlus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const Sidebar = ({
  onSent,
  previousPrompt,
  setRecentPrompt,
  newChat,
  deletePrompt,
}) => {
  const [extend, setExtend] = useState(false);

  const loadPrompt = (prompt) => {
    setRecentPrompt(prompt);
    onSent(prompt);
  };

  const about = () => {
    alert(
      "This app provides plant growing information, climate advice, and more!"
    );
  };

  const handleDelete = (prompt) => {
    // Call the deletePrompt function, passing the prompt that needs to be deleted
    deletePrompt(prompt);
  };

  const handleNewChat = () => {
    // Reset the prompt or initiate a new chat properly
    setRecentPrompt(""); // Clear any previous prompt if necessary
    onSent(""); // Ensure that the chat window is reset or ready for new input
    newChat(); // Execute the newChat functionality (assuming it clears or sets up a new state)
  };

  return (
    <div className={`sidebar ${extend ? "extended" : ""}`}>
      <div className="top">
        <BiMenuAltRight
          className="sidebar-icons"
          size={40}
          onClick={() => setExtend((prev) => !prev)}
        />
        <div onClick={handleNewChat} className="new-chat">
          <button className="button button-green">
            <span className="button-decor"></span>
            <div className="button-content">
              <div className="button__icon">
                <FaPlus />
              </div>
              <span className="button__text">New Chat</span>
            </div>
          </button>
        </div>
      </div>

      {extend && (
        <div className="recent">
          <p className="recent-title">Recents</p>
          {previousPrompt.map((item, index) => (
            <div key={index} className="recent-entry">
              <FaRegMessage size={30} onClick={() => loadPrompt(item)} />
              <p>{`${item.slice(0, 18)}`}</p>
              <FaTrash
                onClick={() => handleDelete(item)}
                className="delete-icon"
                size={20}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
