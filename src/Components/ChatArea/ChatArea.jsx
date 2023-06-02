import { useEffect, useRef } from "react";

const ChatArea = (props) => {
  const chatAreaRef = useRef(null);
  useEffect(() => {
    chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
  }, [props.children]);
  return (
    <div
      ref={chatAreaRef}
      className="flex-1  bg-stone-200 lg:rounded-bl-2xl lg:rounded-br-2xl  max-h-vh-chat lg:max-h-chat-area overflow-auto scrollbar scrollbar-w-0"
    >
      {props.children}
    </div>
  );
};

export default ChatArea;
