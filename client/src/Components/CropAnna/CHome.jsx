import React, { useState } from "react";
import "./Chome.css";
import { FaSeedling } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import Sidebar from "./Sidebar/Sidebar.jsx"; 
import gemini from "./Gemini/gemini.js";
import canna from "../../../public/CropAnna.jpg";
import { TbArrowBackUp } from "react-icons/tb";
const Main = () => {
  const [input, setInput] = useState("");
  const [resultData, setResultData] = useState(""); 
  const [recentPrompt, setRecentPrompt] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [previousPrompts, setPreviousPrompts] = useState([]);
  const [promptResults, setPromptResults] = useState({}); 

  const formatResultData = (data) => {
    let formattedData = data
      .replace(/[^\w\s,.]/g, '') 
      .split('.')                
      .filter(sentence => sentence.trim() !== '')
      .map((sentence, index) => `<li key=${index}>${sentence.trim()}.</li>`)
      .join('');
    return `<ul>${formattedData}</ul>`;
  };

  const onSent = async (query = input) => {
    if (!query) return;
    setRecentPrompt(query);
    setLoading(true);
    setShowResult(true);
    setResultData("");
    
    try {
      const result = await gemini(query);
      const formatted = formatResultData(result);
      setResultData(formatted);
      setPromptResults(prev => ({ ...prev, [query]: formatted }));
    } catch (error) {
      setResultData("Error fetching result, please try again.");
    }
    
    setLoading(false);
    setPreviousPrompts(prev => [query, ...prev]);
  };

  const loadPrompt = (prompt) => {
    const previousResult = promptResults[prompt];
    if (previousResult) {
      setResultData(previousResult);
      setShowResult(true);
      setRecentPrompt(prompt); 
    }
  };

  const deletePrompt = (promptToDelete) => {
    setPreviousPrompts((prev) => prev.filter(prompt => prompt !== promptToDelete));
    setPromptResults((prev) => {
      const { [promptToDelete]: _, ...rest } = prev;
      return rest;
    });
  };

  const newChat = () => {
    if (input.trim()) {
      setPreviousPrompts(prev => [input, ...prev]);
    }
    setInput("");
    setShowResult(false);
  };

  async function handleCardClick(event) {
    if (!event.target.closest(".card")) return;

    const clickedCard = event.target.closest(".card");
    let clickedCardText = clickedCard.querySelector("h1").textContent;
    clickedCardText = "How to grow " + clickedCardText + " plants";
    await onSent(clickedCardText);
  }

  return (
    <div className="chat-bot-home">
      <Sidebar 
        onSent={loadPrompt}
        previousPrompt={previousPrompts} 
        setRecentPrompt={setRecentPrompt} 
        newChat={newChat} 
        deletePrompt={deletePrompt}
        className="sidebar"
      />
      <div className="main">
        <div className="top">
          <img src={canna} alt="" />
          <div className="text">
            <span>Crop Anna</span>
            <span>Your Farming Guide</span>
          </div>
          <div className="back-icon"><TbArrowBackUp /></div>
        </div>
        <div className="main-container">
          {!showResult ? (
            <></>
          ) : (
            <div className="result">
              <div className="result-title">
                <FaSeedling size={20} />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                {loading ? (
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="search-box">
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Ask Anything..."
            value={input}
          />
          <div>
            <IoSend onClick={() => onSent()} className="input-icons" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
