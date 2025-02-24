"use client"
// components/MessageInput.tsx
import React, { useState } from "react";

interface MessageInputProps {
  characterLimit?: number;
  placeholder?: string;
}

const MessageInput: React.FC<MessageInputProps> = ({ characterLimit = 4000, placeholder = "Enter your message..." }) => {
  const [message, setMessage] = useState("");

  return (
    <div>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        maxLength={characterLimit}
        placeholder={placeholder}
        className="w-full border rounded-md p-3"
      />
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>Please enter a message between 10 and {characterLimit} characters.</span>
        <span className={message.length < 10 || message.length > characterLimit ? "text-red-500" : ""}>
          {message.length}/{characterLimit}
        </span>
      </div>
    </div>
  );
};

export default MessageInput;