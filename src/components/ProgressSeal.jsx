export default function ProgressSeal({ step, total }) {
  return (
    <div className="seal-row">
      <div className="seal">❤</div>
      {step > 0 && (
        <div className="progress-dots">
          {Array.from({ length: total }).map((_, i) => (
            <span
              key={i}
              className={i + 1 < step ? "done" : i + 1 === step ? "current" : ""}
            />
          ))}
        </div>
      )}
    </div>
  );
}
