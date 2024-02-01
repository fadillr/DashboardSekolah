import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { FaArrowLeft, FaHome } from "react-icons/fa";
import { PiGitlabLogoSimpleFill } from "react-icons/pi";
import { MdClass, MdNotifications } from "react-icons/md";
import { BiSolidMessageAltDots } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Menu array
  const menuItems = [
    { icon: <FaHome />, text: "Dashboard", link: "/" },
    { icon: <MdClass />, text: "Class", link: "/class" },
  ];

  return (
    <section className="flex flex-row">
      {/* Sidebar */}
      <div
        className={`fixed h-screen bg-white px-2 ${
          sidebarOpen ? "w-60" : "w-20"
        }`}
      >
        <div
          className="text-white bg-blue absolute cursor-pointer -right-4 p-2 top-7 bg-dark-purple rounded-full"
          onClick={toggleSidebar}
        >
          <FaArrowLeft className={`${sidebarOpen ? "" : " rotate-180"}`} />
        </div>
        <div className="w-full h-20 text-blue border-b-2">
          <PiGitlabLogoSimpleFill className="w-full h-full" />
        </div>
        <div className="flex flex-col gap-6 w-full h-full bg-white py-2 px-4">
          {/* Menu */}
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className={`flex flex-row items-center gap-4 rounded-md ${
                sidebarOpen ? "w-full" : "w-fit"
              } ${
                location.pathname === item.link
                  ? "bg-blue text-white"
                  : " text-gray-400"
              }`}
            >
              <div className="text-lg p-2">
                {/* Warna ikon */}
                <span
                  className={`${
                    location.pathname !== item.link ? "text-blue" : ""
                  }`}
                >
                  {item.icon}
                </span>
              </div>
              <p className={`${sidebarOpen ? "" : "hidden"}`}>{item.text}</p>
            </Link>
          ))}
        </div>
      </div>
      {/* Main */}
      <div
        className={`flex flex-col ${
          sidebarOpen ? "ml-60" : "ml-20 "
        } h-screen w-screen`}
      >
        {/* Header */}
        <div className="flex fle-row gap-5 w-full h-20 p-10 bg-white">
          <div className="flex items-center gap-12 grow">
            <form className="flex gap-4 items-center py-2 px-6 bg-[#F5F7FA] rounded-lg border-2 w-full">
              <input
                type="text"
                placeholder="Search"
                className="text-base opacity-50 outline-none border-none bg-transparent"
              />
            </form>
          </div>
          <div className="flex items-center justify-end gap-5 h-full">
            <div className="flex flex-row  gap-5 text-blue">
              <MdNotifications className="h-8 w-8" />
              <BiSolidMessageAltDots className="h-8 w-8" />
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col text-end">
                <p className="text-sm font-bold">Felicia Angelita</p>
                <p className=" text-sm font-normal text-gray-400">Nim : 1212121212</p>
              </div>
              <img src="/src/assets/profile.svg" alt="" className="h-10 w-10" />
              <IoIosArrowDown className="h-5 w-5" />
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className="flex flex-row bg-slate-100">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Layout;
