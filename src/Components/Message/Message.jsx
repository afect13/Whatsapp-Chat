const Message = ({ isUserMessage, message, date }) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  const messageDate = new Date(date * 1000);
  const year = messageDate.getFullYear();
  const month = messageDate.getMonth() + 1;
  const day = messageDate.getDate();
  const hours = messageDate.getHours();
  const minutes = messageDate.getMinutes();
  return (
    <>
      {isUserMessage ? (
        <div className="my-4 flex">
          <div className="flex flex-col items-start pl-6 pr-20">
            <div className="inline-block bg-gray-300  rounded-tr-xl rounded-tl-xl rounded-br-xl p-2 px-6 text-gray-700">
              <span>{message}</span>
            </div>
            <div className="pl-2">
              <small className="text-gray-500">
                {year === currentYear && month === currentMonth && day === currentDay
                  ? `${hours}:${minutes}`
                  : `${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}`}
              </small>
            </div>
          </div>
        </div>
      ) : (
        <div className="my-4 flex justify-end">
          <div className="flex flex-col items-end px-2 pr-6 pl-20">
            <div className="inline-block  bg-emerald-500  rounded-tr-xl rounded-tl-xl rounded-bl-xl  p-2 px-6 text-white">
              <span>{message}</span>
            </div>
            <div className="pr-2 ">
              <small className="text-gray-500">
                {year === currentYear && month === currentMonth && day === currentDay
                  ? `${hours}:${minutes}`
                  : `${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}`}
              </small>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
