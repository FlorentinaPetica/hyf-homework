import React, {useState, useEffect} from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [seconds]);
  
    return <p>You have spent {seconds} seconds on this website</p>
    
  }

export default Timer
