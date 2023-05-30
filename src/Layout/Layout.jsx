import { Outlet } from "react-router-dom";
import Body from "../Components/Body/Body";
import Header from "../Components/Header/Header";

const Layout = () => {
  return (
    <>
      <div className=" absolute w-full h-[222px] bg-[#00a884] z-10 "></div>
      <div className="flex flex-col min-h-screen bg-[#f0f2f5] z-0">
        <Header />
        <Body>
          <Outlet />
        </Body>
      </div>
    </>
  );
};

export default Layout;
