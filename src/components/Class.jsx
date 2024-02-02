import { FaClock, FaUser } from "react-icons/fa";
import { BsCalculatorFill, BsCalendarEvent } from "react-icons/bs";
import { RiPlantFill } from "react-icons/ri";
import { IoLogoElectron } from "react-icons/io5";

const Class = () => {
  // Data kartu disimpan dalam array
  const cards = [
    {
      id: 1,
      title: "Matematika",
      icon: <BsCalculatorFill />,
      guru: "John Doe",
      jam: "07.30 - 09.00",
    },
    {
      id: 2,
      title: "Biologi",
      icon: <RiPlantFill />,
      guru: "Jane Smith",
      jam: "09.30-10.30",
    },
    {
      id: 3,
      title: "Fisika",
      icon: <IoLogoElectron />,
      guru: "Michael Johnson",
      jam: "10.30-12.00",
    },
    {
      id: 1,
      title: "Matematika",
      icon: <BsCalculatorFill />,
      guru: "John Doe",
      jam: "07.30 - 09.00",
    },
    {
      id: 2,
      title: "Biologi",
      icon: <RiPlantFill />,
      guru: "Jane Smith",
      jam: "09.30-10.30",
    },
    {
      id: 3,
      title: "Fisika",
      icon: <IoLogoElectron />,
      guru: "Michael Johnson",
      jam: "10.30-12.00",
    },
    {
      id: 1,
      title: "Matematika",
      icon: <BsCalculatorFill />,
      guru: "John Doe",
      jam: "07.30 - 09.00",
    },
    {
      id: 2,
      title: "Biologi",
      icon: <RiPlantFill />,
      guru: "Jane Smith",
      jam: "09.30-10.30",
    },
    {
      id: 3,
      title: "Fisika",
      icon: <IoLogoElectron />,
      guru: "Michael Johnson",
      jam: "10.30-12.00",
    },
  ];

  return (
    <div className="flex flex-col p-10 gap-5 w-full">
      <p className="font-semibold text-2xl">Mata Pelajaran</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Mapping array untuk membuat kartu */}
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white shadow-md rounded-lg p-4 w-full"
          >
            <div className="flex flex-row items-center justify-between">
              <div className="p-2 bg-blue text-white w-fit rounded-lg text-2xl">
                {card.icon}
              </div>
              <div className="flex flex-row items-center px-3 py-1 bg-gray-200 w-fit rounded-full text-gray-500 text-sm font-light gap-2">
                <BsCalendarEvent />
                <p className="">Senin, 08 Febuari 2024</p>
              </div>
            </div>
            <div className="flex flex-col mt-4 gap-1">
              <h2 className="text-lg font-semibold">{card.title}</h2>
              <div className="flex flex-row gap-2 items-center text-gray-400 text-sm font-light">
                <FaUser />
                <p>{card.guru}</p>
              </div>
              <div className="flex flex-row gap-2 items-center text-gray-400 text-sm font-light">
                <FaClock />
                <p>{card.jam}</p>
              </div>
              <div className="flex items-center justify-center p-2 mt-2  border-t-2">
                <p className="text-blue font-semibold">buka</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Class;
