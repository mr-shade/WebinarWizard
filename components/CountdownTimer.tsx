"use client";

import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string;
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, className }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className={`flex justify-center space-x-4 ${className}`}>
      {timeBlocks.map((block) => (
        <div key={block.label} className="flex flex-col items-center">
          <div className="relative group">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-lg blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Main countdown box */}
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-lg p-3 w-20 h-20 flex items-center justify-center text-3xl font-bold shadow-lg transform transition-transform duration-300 group-hover:scale-105">
              {block.value < 10 ? `0${block.value}` : block.value}
            </div>
          </div>
          <span className="text-sm mt-2 text-white/70 font-medium">{block.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
