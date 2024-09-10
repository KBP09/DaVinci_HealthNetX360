import React, { useState, useEffect } from 'react';

const CountingEffect = () => {
  const [count, setCount] = useState(0);
  const targetNumber = 18004;
  const duration = 2000; // Total duration for the counting effect in milliseconds
  const incrementTime = 10; // Time between each increment

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(targetNumber / (duration / incrementTime)); // Determine the increment per step

    const interval = setInterval(() => {
      start += increment;
      if (start > targetNumber) {
        start = targetNumber;
        clearInterval(interval); // Stop the interval when target is reached
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [targetNumber]);

  return (
    <p className="text-5xl font-semibold">
      {count.toLocaleString()} {/* Formats number with commas */}
    </p>
  );
};

export default CountingEffect;
