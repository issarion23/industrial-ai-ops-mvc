import React, { useState } from "react";
import { assistantResponses } from "../data/assistantResponses";

export default function Assistant() {
  const [messages, setMessages] = useState([{ sender: 'ai', text: assistantResponses.default }]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input };
    const query = input.toLowerCase().trim();
    const aiResponseText = assistantResponses[query] || "I don't have information on that topic right now.";
    const aiMessage = { sender: 'ai', text: aiResponseText };
    setMessages([...messages, userMessage, aiMessage]);
    setInput('');
  };

  const handleKeyPress = (e) => e.key === 'Enter' && handleSend();

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-white border-b border-gray-700 pb-2 mb-6">RAG Engineer Assistant</h2>
      <div className="bg-gray-800/50 border border-gray-700 rounded-lg h-[60vh] flex flex-col">
        <div className="flex-1 p-6 space-y-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-lg p-3 rounded-lg ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200'}`}>
                <p className="whitespace-pre-wrap">{msg.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-gray-700 flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about standards or procedures..."
            className="flex-1 bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button onClick={handleSend} className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
