import { useEffect, useState, useRef } from "react";
import "./AiAssistant.css";

const API_URL = "http://localhost:5000/ai/chat";

export default function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const chatRef = useRef(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      startChat();
    }
  }, [open]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const startChat = () => {
    setMessages([
      {
        type: "ai",
        text: "Welcome to VGPAY 👋 What type of business do you operate?",
        options: [
          { label: "Small Shop / Kirana", value: "small_shop" },
          { label: "Restaurant / Cafe", value: "restaurant" },
          { label: "Mobile Vendor", value: "mobile_vendor" },
          { label: "Enterprise Business", value: "enterprise" }
        ]
      }
    ]);
  };

  const handleOptionClick = async (option) => {
    setMessages((prev) => [
      ...prev,
      { type: "user", text: option.label }
    ]);

    const stage =
      ["small_shop", "restaurant", "mobile_vendor", "enterprise"].includes(
        option.value
      )
        ? "initial"
        : "followup";

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: option.value,
          stage
        })
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text: data.reply,
          options: data.options || []
        }
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text: "Something went wrong. Please try again.",
          options: []
        }
      ]);
    }
  };

  return (
  <>
   <button
  className="ai-trigger"
  onClick={() => setOpen(!open)}
>
  ✨
</button>


    {open && (
      <div className="ai-container">
        <div className="ai-header">
          <button className="ai-close" onClick={() => setOpen(false)}>
            ×
          </button>

          <div className="ai-top-icon">
            ✨
            <span className="status-dot"></span>
          </div>

          <div className="ai-heading">VGPAY Assistant</div>
          <div className="ai-subheading">
            How can I help you today?
          </div>
        </div>

        <div className="ai-body" ref={chatRef}>
          {messages.map((msg, index) => (
            <div key={index} className="ai-section">
              <div className="ai-text">{msg.text}</div>

              {msg.options && (
                <div className="ai-options">
                  {msg.options.map((opt) => (
                    <button
                      key={opt.value}
                      className="ai-option"
                      onClick={() => handleOptionClick(opt)}
                    >
                      {opt.label}
                      <span className="arrow">→</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    )}
  </>
);

}
