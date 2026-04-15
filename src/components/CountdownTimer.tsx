import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Flame } from "lucide-react";

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

  const TimeBlock = ({ value, label }: { value: string; label: string }) => (
    <div className="flex flex-col items-center">
      <motion.span
        key={value}
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="bg-primary/15 px-2.5 py-1 rounded-md text-primary font-heading font-bold text-sm tabular-nums"
      >
        {value}
      </motion.span>
      <span className="text-[10px] text-muted-foreground mt-0.5">{label}</span>
    </div>
  );

  return (
    <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full glass-card">
      <div className="flex items-center gap-1.5">
        <Flame className="w-4 h-4 text-destructive animate-pulse" />
        <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">Oferta expira em</span>
      </div>
      <div className="flex items-center gap-1.5">
        <TimeBlock value={pad(time.hours)} label="hrs" />
        <span className="text-primary font-bold text-xs">:</span>
        <TimeBlock value={pad(time.minutes)} label="min" />
        <span className="text-primary font-bold text-xs">:</span>
        <TimeBlock value={pad(time.seconds)} label="seg" />
      </div>
    </div>
  );
};

export default CountdownTimer;
