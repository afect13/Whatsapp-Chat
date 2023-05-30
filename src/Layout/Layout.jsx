import Body from "../Components/Body/Body";
import Header from "../Components/Header/Header";

const Layout = () => {
  return (
    <>
      <div className=" absolute w-full h-[222px] bg-[#00a884] z-10 "></div>
      <div className="flex flex-col bg-[#f0f2f5] z-0">
        <Header />
        <Body></Body>
      </div>
    </>
  );
};

export default Layout;
