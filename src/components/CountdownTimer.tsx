import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

const CountdownTimer = () => {
  const [time, setTime] = useState({ hours: 7, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        const totalSec = prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1;
        if (totalSec <= 0) return { hours: 7, minutes: 59, seconds: 59 };
        return {
          hours: Math.floor(totalSec / 3600),
          minutes: Math.floor((totalSec % 3600) / 60),
          seconds: totalSec % 60,
        };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm">
      <Clock className="w-4 h-4 text-primary animate-pulse" />
      <span className="text-muted-foreground font-medium">OFERTA EXPIRA EM:</span>
      <div className="flex items-center gap-1 font-heading font-bold text-foreground">
        <span className="bg-primary/10 px-2 py-0.5 rounded text-primary">{pad(time.hours)}</span>
        <span className="text-primary">:</span>
        <span className="bg-primary/10 px-2 py-0.5 rounded text-primary">{pad(time.minutes)}</span>
        <span className="text-primary">:</span>
        <span className="bg-primary/10 px-2 py-0.5 rounded text-primary">{pad(time.seconds)}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
