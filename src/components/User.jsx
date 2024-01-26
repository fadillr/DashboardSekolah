import { FaFilter, FaPlus } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import { IoIosNotifications } from "react-icons/io";

const User = () => {
  const tableData = [
    {
      no: 1,
      name: "John Doe",
      nomerInduk: "123456789",
      status: "Active",
      profileImg: "/src/assets/profile.svg",
    },
    {
      no: 2,
      name: "Jane Smith",
      nomerInduk: "987654321",
      status: "Inactive",
      profileImg: "/src/assets/profile.svg",
    },
    {
      no: 3,
      name: "Bob Johnson",
      nomerInduk: "456789123",
      status: "Active",
      profileImg: "/src/assets/profile.svg",
    },
    {
      no: 4,
      name: "John Doe",
      nomerInduk: "123456789",
      status: "Active",
      profileImg: "/src/assets/profile.svg",
    },
    {
      no: 5,
      name: "Jane Smith",
      nomerInduk: "987654321",
      status: "Inactive",
      profileImg: "/src/assets/profile.svg",
    },
    {
      no: 6,
      name: "Bob Johnson",
      nomerInduk: "456789123",
      status: "Active",
      profileImg: "/src/assets/profile.svg",
    },
    // Add more dummy data as needed
  ];

  return (
    <div className="flex flex-row p-10 gap-5 h-full">
      <div className="flex flex-col gap-3 grow">
        <span className="font-semibold text-[22px] text-dark-purple">
          Data User
        </span>

        <div className="flex justify-between">
          <form className="flex gap-4 h-fit items-center py-2 px-3 bg-[#F5F7FA] rounded-full border-2">
            <FaFilter className="text-sm text-dark-purple opacity-50" />
            <input
              type="text"
              placeholder="Filter user"
              className="text-[15px] text-dark-purple opacity-50 outline-none border-none bg-transparent"
            />
            <div className="flex p-1 bg-blue-300 rounded">
              <VscSettings className=" text-dark-purple" />
            </div>
          </form>
          <div className="flex items-center gap-2 bg-blue-500 text-white px-3 py-2 rounded-full cursor-pointer">
            <FaPlus />
            <button>Add user</button>
          </div>
        </div>
        <div className="p-3 bg-white rounded-xl">
          <table className="w-full border-collapse border-gray-300">
            <thead>
              <tr>
                <th className="border-b border-gray-300 text-left">No</th>
                <th className="border-b border-gray-300 text-left">Profile</th>
                <th className="border-b border-gray-300 text-left">Nama</th>
                <th className="border-b border-gray-300 text-left">
                  Nomer Induk
                </th>
                <th className="border-b border-gray-300 text-left">Status</th>
                <th className="border-b border-gray-300"></th>{" "}
                {/* Empty column for the button */}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.no}>
                  <td className="py-4 border-t border-gray-300 text-left">
                    {row.no}
                  </td>
                  <td className="border-t border-gray-300">
                    <img
                      src={row.profileImg}
                      alt={`Profile of ${row.name}`}
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td className="border-t border-gray-300 text-left">
                    {row.name}
                  </td>
                  <td className="border-t border-gray-300 text-left">
                    {row.nomerInduk}
                  </td>
                  <td className="border-t border-gray-300 text-left">
                    {row.status}
                  </td>
                  <td className="border-t border-gray-300">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded-md">
                      Button
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default User;
