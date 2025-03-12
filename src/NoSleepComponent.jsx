import React, { useState } from "react";
import NoSleep from "nosleep.js";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs"; // Import icons

const NoSleepComponent = () => {
  const [noSleep, setNoSleep] = useState(new NoSleep());
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleNoSleep = () => {
    if (isEnabled) {
      noSleep.disable(); // Disable NoSleep
      setIsEnabled(false);
    } else {
      noSleep.enable(); // Enable NoSleep
      setIsEnabled(true);
    }
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6">
      <div className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-xl p-8 text-center border border-white/20 transform transition-all duration-300  w-full max-w-md">

        <h1 className="text-4xl font-extrabold mb-4 flex items-center justify-center gap-2">
          {isEnabled ? <BsFillSunFill className="text-yellow-400 animate-spin" /> : <BsMoonStarsFill className="text-blue-300" />}
          No Sleep Mode
        </h1>

        <p className="text-gray-300 text-lg mb-4">
          Prevent your screen from sleeping. Click the button below to toggle the mode.
        </p>

        <ul className="text-gray-400 text-sm text-left mb-6 space-y-2">
          <li>✅ Keep this page open to stay awake.</li>
          <li>✅ Click the button again to turn off No Sleep mode.</li>
          <li>⚠️ Closing the tab will disable No Sleep mode.</li>
        </ul>

        <button
          onClick={toggleNoSleep}
          className={`w-full py-3 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-all transform duration-300 ${
            isEnabled
              ? "bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/50"
              : "bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/50"
          }`}
        >
          {isEnabled ? <BsFillSunFill className="animate-pulse" /> : <BsMoonStarsFill className="animate-spin" />}
          {isEnabled ? "Disable No Sleep " : "Enable No Sleep "}
        </button>
      </div>
    </div>
  );
};

export default NoSleepComponent;
