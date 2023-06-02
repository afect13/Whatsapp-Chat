import { useEffect, useRef } from "react";

const ChatArea = (props) => {
  const chatAreaRef = useRef(null);
  useEffect(() => {
    chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
  }, [props.children]);
  return (
    <div
      ref={chatAreaRef}
      className="flex-1  bg-stone-200 rounded-xl max-h-chat-area overflow-auto scrollbar scrollbar-w-0"
    >
      {props.children}
    </div>
  );
};

export default ChatArea;
