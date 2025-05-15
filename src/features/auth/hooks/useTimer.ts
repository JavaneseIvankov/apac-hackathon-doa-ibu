import { useEffect, useRef, useState } from 'react';

export function useTimer(initialTime: number) {
   const [timeLeft, setTimeLeft] = useState(initialTime);
   const timerRef = useRef<NodeJS.Timeout | null>(null);

   useEffect(() => {
      timerRef.current = setInterval(() => {
         setTimeLeft((prevTime) => {
            if (prevTime <= 1) {
               clearInterval(timerRef.current as NodeJS.Timeout);
               return 0;
            }
            return prevTime - 1;
         });
      }, 1000);

      return () => {
         if (timerRef.current) clearInterval(timerRef.current);
      };
   }, []);

   const formatTime = (seconds: number) => {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins.toString().padStart(2, '0')}:${secs
         .toString()
         .padStart(2, '0')}`;
   };

   return { timeLeft, formatTime };
}
