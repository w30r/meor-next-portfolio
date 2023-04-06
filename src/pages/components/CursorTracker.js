import { useState, useEffect } from "react";

const CursorTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [delayedPosition, setDelayedPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    document.addEventListener("mousemove", onMouseMove);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useEffect(() => {
    const trail = document.querySelector(".trail");
    if (trail) {
      trail.style.transform = `translate(${delayedPosition.x}px, ${delayedPosition.y}px)`;
    }
    setDelayedPosition(position);
  }, [position, delayedPosition.x, delayedPosition.y]);

  return (
    <>
      <div
        className="fixed z-50 top-0 left-0 w-2 h-2 bg-teal-500 rounded-lg pointer-events-none"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />
      <div
        className="fixed z-50 top-0 left-0 w-5 h-5 bg-teal-700 rounded-lg pointer-events-none trail"
        style={{
          transform: `translate(${delayedPosition.x}px, ${delayedPosition.y}px)`,
        }}
      />
      <div
        className="fixed z-50 top-0 left-0 w-5 h-5 bg-teal-900 rounded-lg pointer-events-none traill"
        style={{
          transform: `translate(${delayedPosition.x}px, ${delayedPosition.y}px)`,
        }}
      />
    </>
  );
};

export default CursorTracker;
