import { FaClock, FaUser } from "react-icons/fa";
import { BsCalculatorFill, BsCalendarEvent, BsThreeDots } from "react-icons/bs";
import { RiPlantFill } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";
import { IoLogoElectron } from "react-icons/io5";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Dashboard = () => {
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
  ];

  return (
    <section className="flex flex-row p-10 gap-5 w-full h-full">
      <div className="flex flex-col gap-5 w-9/12 h-full">
        <div className="bg-white p-10 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold">Welcome to SMP N 1 Wakanda</h1>
          <h1 className="text-base font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            fermentum est in aliquet feugiat. Praesent dapibus lectus et semper
            aliquet.
          </h1>
        </div>
        <div className="flex flex-col grow gap-5">
          <h2 className="text-xl font-bold">Matapelajaran Hari ini</h2>
          <div className="flex flex-row w-full grow gap-5">
            {/* Mapping array untuk membuat kartu */}
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-white shadow-md rounded-lg p-4 w-2/6"
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
          <div className="flex flex-row gap-5">
            <div className="flex flex-row w-1/2 gap-5">
              <div className="flex flex-col w-1/2">
                <div className="flex flex-col bg-white shadow-md rounded-lg p-5 h-full gap-4">
                  <div className="flex flex-row items-center justify-between">
                    <h3 className=" text-base font-semibold">Kehadiran</h3>
                    <BsThreeDots />
                  </div>
                  {/* Circular progress bar untuk kehadiran */}
                  <CircularProgressbar
                    value={95}
                    text={`${95}%`}
                    className="h-20"
                    styles={{
                      path: {
                        stroke: "#5354ED", // warna fill
                      },
                      trail: {
                        stroke: "#d6d6d6", // warna trail
                      },
                      text: {
                        fill: "#5354ED", // warna teks
                        fontSize: "20px", // ukuran teks
                      },
                    }}
                  />
                  <div>
                    <div className="flex flex-row items-center  justify-between">
                      <div className="flex flex-row items-center gap-2">
                        <GoDotFill className="text-gray-500" />
                        <p>sakit</p>
                      </div>
                      <span>3%</span>
                    </div>
                    <div className="flex flex-row items-center  justify-between">
                      <div className="flex flex-row items-center gap-2">
                        <GoDotFill className="text-yellow-500" />
                        <p>izin</p>
                      </div>
                      <span>2%</span>
                    </div>
                    <div className="flex flex-row items-center  justify-between">
                      <div className="flex flex-row items-center gap-2">
                        <GoDotFill className="text-red-500" />
                        <p>alpha</p>
                      </div>
                      <span>0%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-1/2">
                <div className="flex flex-col bg-white shadow-md rounded-lg p-5 h-full gap-5">
                  <div className="flex flex-row items-center justify-between">
                    <h3 className=" text-base font-semibold">Tugas</h3>
                    <BsThreeDots />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row text-xs items-center justify-between p-2 border-2 rounded-md">
                      <div className="flex flex-row items-center gap-1">
                        <div className="p-2 bg-blue text-white w-fit rounded-lg">
                          <BsCalculatorFill />
                        </div>
                        <p>Matematika</p>
                      </div>
                      <p>senin, 13/02/24</p>
                      <BsThreeDots />
                    </div>
                    <div className="flex flex-row text-xs items-center justify-between p-2 border-2 rounded-md">
                      <div className="flex flex-row items-center gap-1">
                        <div className="p-2 bg-blue text-white w-fit rounded-lg">
                          <BsCalculatorFill />
                        </div>
                        <p>Matematika</p>
                      </div>
                      <p>senin, 13/02/24</p>
                      <BsThreeDots />
                    </div>
                    <div className="flex flex-row text-xs items-center justify-between p-2 border-2 rounded-md">
                      <div className="flex flex-row items-center gap-1">
                        <div className="p-2 bg-blue text-white w-fit rounded-lg">
                          <BsCalculatorFill />
                        </div>
                        <p>Matematika</p>
                      </div>
                      <p>senin, 13/02/24</p>
                      <BsThreeDots />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-1/2">
              <div className="flex flex-col w-full rounded-lg h-full gap-5">
                <div className="flex flex-col bg-white shadow-md h-full rounded-lg p-5">
                  <div className="flex flex-row items-center justify-between">
                    <h3 className=" text-base font-semibold">Nilai</h3>
                    <BsThreeDots />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-3/12 h-full">
        <div className="flex flex-col bg-white shadow-md h-1/2 rounded-lg">
          <Calendar className="rounded-lg w-full h-full flex flex-col items-center justify-center border-none" />
        </div>
        <div className="flex flex-col bg-white shadow-md h-1/2 rounded-lg p-5">
          <div className="flex flex-row items-center justify-between">
            <h3 className="text-base font-semibold">Kegiatan</h3>
            <BsThreeDots />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
