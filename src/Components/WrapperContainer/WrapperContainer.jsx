const WrapperContainer = ({ type, children }) => {
  return (
    <div className=" flex flex-col  items-center">
      <div
        className={type === "chat" ? "flex flex-col min-h-vh-chat max-w-[600px] w-full justify-between" : "w-[320px]"}
      >
        {children}
      </div>
    </div>
  );
};

export default WrapperContainer;
