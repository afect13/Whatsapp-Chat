import React from "react";

const ChatTitle = ({ number }) => {
  return (
    <div className="relative">
      <h2 className="text-xl py-1 mb-0  border-gray-200">
        Чат с <b>{number}</b>
      </h2>
    </div>
  );
};

export default ChatTitle;
