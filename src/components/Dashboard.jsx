import React, { useState } from 'react';
import { PiStudent } from 'react-icons/pi';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {
  // State for calendar
  const [value, onChange] = useState(new Date());

  return (
    <div className="flex flex-row p-10 gap-5 h-full">
      <div className="flex grow h-fit gap-5">
        <div className="flex flex-col grow bg-purple-200 items-center py-5 gap-2 rounded-md">
          <div className="p-3 bg-purple-500 rounded text-white">
            <PiStudent />
          </div>
          <div className="flex flex-col items-center ">
            <span>Total Student</span>
            <span className="font-semibold">1220</span>
          </div>
        </div>
        <div className="flex flex-col grow bg-red-200 items-center py-5 gap-2 rounded-md">
          <div className="p-3 bg-red-500 rounded text-white">
            <PiStudent />
          </div>
          <div className="flex flex-col items-center ">
            <span>Total Student</span>
            <span className="font-semibold">1220</span>
          </div>
        </div>
        <div className="flex flex-col grow bg-blue-200 items-center py-5 gap-2 rounded-md">
          <div className="p-3 bg-blue-500 rounded text-white">
            <PiStudent />
          </div>
          <div className="flex flex-col items-center ">
            <span>Total Student</span>
            <span className="font-semibold">1220</span>
          </div>
        </div>
        <div className="flex flex-col grow bg-orange-200 items-center py-5 gap-2 rounded-md">
          <div className="p-3 bg-orange-500 rounded text-white">
            <PiStudent />
          </div>
          <div className="flex flex-col items-center ">
            <span>Total Student</span>
            <span className="font-semibold">1220</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full bg-red-400">
        <Calendar onChange={onChange} value={value} className="rounded-xl"/>
      </div>
    </div>
  );
};

export default Dashboard;
