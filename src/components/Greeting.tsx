"use client";

import { useEffect, useState } from "react";

export function Greeting() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    let message = "";
    let emoji = "";

    if (hour >= 5 && hour < 12) {
      message = "Good Morning";
      emoji = "☀️";
    } else if (hour >= 12 && hour < 17) {
      message = "Good Afternoon";
      emoji = "🌤️";
    } else if (hour >= 17 && hour < 21) {
      message = "Good Evening";
      emoji = "🌙";
    } else {
      message = "Working Late";
      emoji = "🌃";
    }

    setGreeting(`${message} ${emoji}`);
  }, []);

  return (
    <div className="text-lg font-medium text-light-text-secondary dark:text-dark-text-secondary animate-fade-in">
      {greeting}
    </div>
  );
}
