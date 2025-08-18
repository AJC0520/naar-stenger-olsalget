import { useEffect, useRef } from "react";

export default function BeerBubbles() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let bubbleId = 0;
    let running = true;

    function spawnBubble() {
      if (!running) return;
      const bubble = document.createElement("div");
      bubble.className = "beer-bubble";
      // Random size between 8px and 32px
      const size = Math.random() * 24 + 8;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      // Random horizontal position (0% to 100%)
      bubble.style.left = `${Math.random() * 100}%`;
      // Random animation duration (2s to 6s)
      const duration = Math.random() * 4 + 2;
      bubble.style.animationDuration = `${duration}s`;
      // Random opacity (0.3 to 0.7)
      bubble.style.opacity = (Math.random() * 0.4 + 0.3).toFixed(2);
      // Unique key for React strict mode
      bubble.dataset.key = `bubble-${bubbleId++}`;
      container.appendChild(bubble);
      // Remove bubble after animation
      setTimeout(() => {
        container.removeChild(bubble);
      }, duration * 1000);
    }

    // Spawn bubbles continuously
    const interval = setInterval(spawnBubble, 350);
    // Initial burst
    for (let i = 0; i < 10; i++) spawnBubble();

    return () => {
      running = false;
      clearInterval(interval);
      if (container) container.innerHTML = "";
    };
  }, []);

  return <div className="beer-bubbles-container" ref={containerRef} aria-hidden="true" />;
}
