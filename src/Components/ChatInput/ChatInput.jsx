import { useState } from "react";

const ChatInput = ({ handleSendMessage }) => {
  const [messageText, setMessageText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (messageText.trim() !== "") {
      handleSendMessage(messageText.trim());
      setMessageText("");
    }
  };

  const handleChange = (e) => {
    setMessageText(e.target.value);
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <label htmlFor="chat" className="sr-only">
          Ваше сообщение
        </label>
        <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
          <input
            type="text"
            id="chat"
            value={messageText}
            onChange={handleChange}
            placeholder="Ваше сообщение..."
            className="block mr-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300"
          ></input>
          <button
            type="submit"
            className="inline-flex justify-center p-2 text-emerald-500 rounded-full cursor-pointer hover:bg-emerald-100"
          >
            <svg
              aria-hidden="true"
              className="w-6 h-6 rotate-90"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
            </svg>
            <span className="sr-only">Отправить сообщение</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
