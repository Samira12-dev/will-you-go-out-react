const PETALS = [
  { left: "8%", delay: "0s", duration: "17s" },
  { left: "28%", delay: "3s", duration: "15s" },
  { left: "55%", delay: "6s", duration: "18s" },
  { left: "76%", delay: "2s", duration: "16s" },
  { left: "92%", delay: "5s", duration: "19s" },
];

export default function Petals() {
  return (
    <div className="petals" aria-hidden="true">
      {PETALS.map((p, i) => (
        <span
          key={i}
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        >
          ❤
        </span>
      ))}
    </div>
  );
}
