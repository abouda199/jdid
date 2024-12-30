import React, { useState } from 'react';
import './HelpBubble.css';
import avatar1 from '../../assets/b.jpg'; // Exemple d'avatar
import avatar2 from '../../assets/a.jpg'; // Exemple d'avatar
import avatar3 from '../../assets/f.png'; // Exemple d'avatar
import chatIcon from '../../assets/chaticon.png'; // Icône pour le bouton d'aide

const HelpBubble = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  return (
    <div className="help-bubble">
      {isChatOpen ? (
        <div className="chat-box">
          <div className="chat-header">
            <h4>Posez vos questions</h4>
            <button onClick={toggleChat} className="close-chat">×</button>
          </div>
          <div className="chat-body">
            <p>
              Posez vos questions à des membres de la communauté BlaBlaCar heureux de pouvoir vous aider
            </p>
            <div className="message-list">
              {messages.map((msg, index) => (
                <div key={index} className="user-message">
                  {msg}
                </div>
              ))}
            </div>
          </div>
          <div className="chat-footer">
            <input
              type="text"
              placeholder="Écrivez un message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handleSendMessage}>
              <img src={chatIcon} alt="Envoyer" />
            </button>
          </div>
        </div>
      ) : (
        <div className="bubble-content" onClick={toggleChat}>
          <h4>Besoin d’aide ?</h4>
          <p>Échangez avec des membres de la communauté shareMyride</p>
          <div className="avatars">
            <img src={avatar1} alt="Avatar 1" />
            <img src={avatar2} alt="Avatar 2" />
            <img src={avatar3} alt="Avatar 3" />
          </div>
        </div>
      )}
      <div className="help-icon" onClick={toggleChat}>
        <img src={chatIcon} alt="Aide" />
      </div>
    </div>
  );
};

export default HelpBubble;
