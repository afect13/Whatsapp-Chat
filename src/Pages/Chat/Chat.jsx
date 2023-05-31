const Chat = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col min-h-vh-chat max-w-[600px] w-full justify-between">
        <div className="relative">
          <h2 className="text-xl py-1 mb-0 border-b-2 border-gray-200">
            Чат с <b>+7999666665</b>
          </h2>
        </div>
        <div className="flex-1  max-h-chat-area overflow-auto scrollbar scrollbar-w-0">
          <div className="my-4 flex">
            <div className="flex flex-col items-start px-2">
              <div className="inline-block bg-gray-300 max-w-[80%] rounded-2xl p-2 px-6 text-gray-700">
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, eligendi?</span>
              </div>
              <div className="pl-4">
                <small className="text-gray-500">15 April</small>
              </div>
            </div>
          </div>
          <div className="my-4 flex justify-end">
            <div className="flex flex-col items-end px-2 ">
              <div className="inline-block  bg-emerald-500 max-w-[80%] rounded-2xl p-2 px-6 text-white">
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat placeat velit sequi fugit quaerat
                  ipsa!
                </span>
              </div>
              <div className="pr-4 ">
                <small className="text-gray-500">15 April</small>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <form>
            <label htmlFor="chat" className="sr-only">
              Your message
            </label>
            <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
              <textarea
                id="chat"
                rows="1"
                className="block mr-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300"
                placeholder="Ваше сообщение..."
              ></textarea>
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
                <span className="sr-only">Send message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
