import { useState, useEffect } from "react";

const useCountdown = (initialTimer) => {
  const [timer, setTimer] = useState(initialTimer);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => {
        let { seconds, minutes, hours, days } = prev;

        if (seconds === 0) {
          if (minutes > 0) {//when it reaches 0 or below 0 to prevent errors
            minutes--;
            seconds = 59;
          } else if (hours > 0) {
            hours--;
            minutes = 59;
            seconds = 59;
          } else if (days > 0) {
            days--;
            hours = 23;
            minutes = 59;
            seconds = 59;
          } else {
            clearInterval(countdown);//remove setInterval if the countdown ends
            return { seconds: 0, minutes: 0, hours: 0, days: 0 };
          }
        } else {
          seconds--;
        }
        return { seconds, minutes, hours, days };
      });
    }, 1000);
    return () => clearInterval(countdown);//remove setInterval if the components unmounts to prevent memory leaks and unexpected behavior
  }, []);

  return timer;
};

export default useCountdown;
