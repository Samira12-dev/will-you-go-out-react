import { useRef, useState } from "react";
import { NO_HINTS } from "../data/choices.js";

export default function DodgeButton({ onYes }) {
  const containerRef = useRef(null);
  const btnRef = useRef(null);
  const [pos, setPos] = useState(null);
  const [attempts, setAttempts] = useState(0);

  const dodge = () => {
    const container = containerRef.current;
    const btn = btnRef.current;
    if (!container || !btn) return;

    const area = container.getBoundingClientRect();
    const box = btn.getBoundingClientRect();

    const maxX = Math.max(10, area.width - box.width - 10);
    const maxY = Math.max(10, area.height - box.height - 10);

    setPos({
      left: Math.random() * maxX,
      top: Math.random() * maxY,
    });
    setAttempts((n) => n + 1);
  };

  const hint = attempts > 0 ? NO_HINTS[Math.min(attempts - 1, NO_HINTS.length - 1)] : "";

  return (
    <>
      <div className="yes-no-row" ref={containerRef}>
        <button type="button" className="btn btn-primary" onClick={onYes}>
          Yes ❤️
        </button>
        <button
          type="button"
          ref={btnRef}
          className="btn-no"
          style={pos ? { position: "absolute", left: pos.left, top: pos.top } : undefined}
          onMouseEnter={dodge}
          onTouchStart={(e) => {
            e.preventDefault();
            dodge();
          }}
          onClick={(e) => {
            e.preventDefault();
            dodge();
          }}
        >
          No 🙈
        </button>
      </div>
      <p className="dodge-hint">{hint}</p>
    </>
  );
}
