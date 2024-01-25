import { Outlet, NavLink } from "react-router-dom";
import { FaArrowLeft, FaSchool, FaSlack, FaThLarge, FaUser, FaUserCircle,  } from "react-icons/fa";
import { IoIosDocument, IoIosNotifications } from "react-icons/io";
import { useState } from "react";

const Layout = () => {
    const Navlinks = [
        { title: "Dashboard", icon: <FaThLarge />, to: "/" },
        { title: "User", icon: <FaUser />, to: "/user" },
        { title: "Class", icon: <FaSchool />, to: "/class" },
        { title: "Report", icon: <IoIosDocument />, to: "/report" },
        // Tambahkan lebih banyak Navlinks jika diperlukan
    ];
    const [open, setOpen] = useState(true);

    const handleMenuClick = () => {
        setOpen(!open);
    };

    const getNavLinkClass = (path) => {
        const isActive = window.location.pathname.startsWith(path);
        // Tambahkan logika untuk mengecualikan "Dashboard" dari kelas aktif saat "Product" aktif
        if (path === "/" && (window.location.pathname.startsWith("/user") || window.location.pathname.startsWith("/class") || window.location.pathname.startsWith("/report"))) {
            return "flex items-center gap-4 p-2 rounded-md cursor-pointer";
        }
        return `flex items-center gap-4 p-2 rounded-md cursor-pointer ${isActive ? "bg-blue-400 p-2 rounded-md" : ""}`;
    };

    return (
        <div className="flex">
            <div className={` ${open ? "w-72" : "w-fit"} duration-300 h-screen bg-dark-purple relative`}>
                <div className="text-white absolute cursor-pointer -right-3 top-9 p-2 border-2 border-white bg-dark-purple rounded-full" onClick={handleMenuClick}>
                    <FaArrowLeft className={`${!open && "rotate-180"}`} />
                </div>
                <div className="flex items-center gap-4 py-5 justify-center">
                    <div>
                        <FaSlack className="text-white text-5xl" />
                    </div>
                    <span className={`text-white origin-left font-medium text-xl duration-300 ${!open && "hidden"}`}>SMA N 3 Bungo</span>
                </div>
                <div className="flex flex-col py-2 px-7 gap-6">
                    {/* Panggil Navlinks menggunakan map */}
                    {Navlinks.map((navLink, index) => (
                        <NavLink key={index} to={navLink.to} className={getNavLinkClass(navLink.to)}>
                            <div className="text-white text-2xl">{navLink.icon}</div>
                            <span className={`text-white origin-left font-medium text-xl duration-300 ${!open && "hidden"}`}>{navLink.title}</span>
                        </NavLink>
                    ))}
                </div>
            </div>
            <div className="flex flex-col p-5 h-screen  w-screen">
                <div className="flex fle-row gap-5 w-full">
                    <div className="grow">
                        <div className="flex items-center">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 w-1/2"
                            />
                        </div>
                    </div>
                    <div className=" grow flex items-center justify-end">
                        <div className="flex gap-4 text-2xl">
                            <IoIosNotifications/>
                            <FaUserCircle/>
                        </div>
                    </div>
                </div>
                <div>
                    {/* Outlet digunakan untuk merender konten dari rute-rute anak */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
