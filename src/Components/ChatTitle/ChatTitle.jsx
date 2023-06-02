import React from "react";

const ChatTitle = ({ number }) => {
  return (
    <div className="relative lg:rounded-tl-lg lg:rounded-tr-lg bg-[#00a884] ">
      <h2 className="text-xl text-center font-bold text-white py-1 mb-0 ">{number}</h2>
    </div>
  );
};

export default ChatTitle;
