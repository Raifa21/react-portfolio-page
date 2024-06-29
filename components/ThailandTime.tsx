// src/components/ThailandTime.tsx
import React, { useEffect, useState } from "react";
import "./ThailandTime.css";

const ThailandTime: React.FC = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Bangkok",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };

      const timeString = new Intl.DateTimeFormat("en-US", options).format(now);
      setTime(timeString);
    };

    // Update the time immediately when the component mounts
    updateTime();

    // Update the time every second
    const intervalId = setInterval(updateTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="local-time">
      <span className="time-label">My current time is </span>
      {time}
    </div>
  );
};

export default ThailandTime;
