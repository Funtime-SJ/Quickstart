"use client";
import Clock from "../ui/clock";
import { useState, useEffect } from 'react';

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Home() {
    const time = useTime();
  return (
    <Clock time={time} />
  );
}
