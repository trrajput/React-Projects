import React, { useEffect, useState } from "react";

function TimerLogic({ date = "1 Jan 2021" }) {
  const calculateTimer = () => {
    const difference = +new Date(date) - +new Date();

    let timeLeft = { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    if (difference > 0) {
      timeLeft = {
        months: Math.floor((difference / 2592000000) % 12) || 0,
        days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 30) || 0,
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24) || 0,
        minutes: Math.floor((difference / 1000 / 60) % 60) || 0,
        seconds: Math.floor((difference / 1000) % 60) || 0,
      };
    }

    return timeLeft;
  };

  const [dateTimeInterval, setDateTimeInterval] = useState(calculateTimer);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDateTimeInterval(calculateTimer());
    }, 1000);

    return () => clearTimeout(timer);
  });
  const timerDisplay = [];
  console.log(dateTimeInterval);
  Object.keys(dateTimeInterval).forEach((interval) => {
    if (!dateTimeInterval[interval]) {
      return;
    }

    // Here Design or Timer
    // Interval is Days,Month like this
    timerDisplay.push(
      <span>
        {dateTimeInterval[interval]} {interval}{" "}
      </span>
    );
  });

  return <div>{timerDisplay.length && timerDisplay}</div>;
}

export default TimerLogic;
