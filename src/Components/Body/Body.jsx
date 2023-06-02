const Body = (props) => {
  return (
    <div className="flex flex-col bg-white rounded drop-shadow-2xl min-h-vh-mobile lg:min-h-vh-164 max-w-[1122px] w-full lg:mb-10 mx-auto z-30">
      <div className="flex-auto lg:p-[60px]">{props.children}</div>
    </div>
  );
};

export default Body;
