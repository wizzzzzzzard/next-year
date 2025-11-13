"use client";
import { useState, useEffect } from 'react';

export default function YearCounter({ year }) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const then = new Date(year, 0, 1);
      const diff = then.getTime() - now.getTime();

      if (diff < 0) return;

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [year]);

  return (
    <div className="text-5xl font-bold">
      {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
    </div>
  );
}