import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const ChatWindow = ({ apiKey, model }) => {
  apiKey = "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";
  model = "text-davinci-003";
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const configuration = new Configuration({ apiKey });
  const openai = new OpenAIApi(configuration);

  const handleInput = async () => {
    console.log("input", input);
    console.log("apiKey", apiKey);

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, sender: "user" },
    ]);
    const response = await openai.createCompletion({
      model,
      prompt: input,
      max_tokens: 50,
      temperature: 0.7,
    });
    console.log("response", response);
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: response.data.choices[0].text, sender: "bot" },
    ]);
    setInput("");
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            {message.sender === "user" ? (
              <div>
                <strong>User:</strong> {message.text}
              </div>
            ) : (
              <div>
                <strong>Bot:</strong> {message.text}
              </div>
            )}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleInput}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
