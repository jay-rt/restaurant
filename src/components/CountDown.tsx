"use client";

import { useEffect, useState } from "react";

const CountDown = () => {
  const startDate = new Date("2023-08-27");
  const currentDate = Date.now();
  const difference = startDate.valueOf() - currentDate.valueOf();
  const [timeLeft, setTimeLeft] = useState(difference);

  //prepending 0 to a number if it is single digit number
  const twoDigit = (num: number) => {
    return num.toLocaleString("en-CA", { minimumIntegerDigits: 2 });
  };

  const day = twoDigit(Math.floor(difference / (1000 * 60 * 60 * 24)));
  const hour = twoDigit(Math.floor((difference / (1000 * 60 * 60)) % 24));
  const minute = twoDigit(Math.floor((difference / (1000 * 60)) % 60));
  const second = twoDigit(Math.floor((difference / 1000) % 60));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    if (timeLeft === 0) clearInterval(timer);

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

  return (
    <span className="font-bold text-4xl sm:text-5xl xl:text-6xl text-yellow-300">
      {day}:{hour}:{minute}:{second}
    </span>
  );
};

export default CountDown;
