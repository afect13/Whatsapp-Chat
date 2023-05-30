const Body = (props) => {
  return (
    <div className="flex flex-col bg-white rounded drop-shadow-2xl min-h-vh-164 w-[1122px] mb-10 mx-auto z-30">
      <div className="p-[60px]">{props.children}</div>
    </div>
  );
};

export default Body;
