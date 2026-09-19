import { useState } from "react";

export default function DateScreen({ data, update, onNext }) {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!data.date || !data.time) {
      setError("خاصنا Date و Time ❤️");
      return;
    }
    setError("");
    onNext();
  };

  return (
    <div className="screen">
      <div className="envelope">📅</div>
      <h2 className="headline">مزيان... دابا اختاري ليا</h2>
      <p className="subtitle">نهاراش بغيتي نخرجو؟ ❤️</p>

      <div className="field-group">
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          value={data.date}
          onChange={(e) => update({ date: e.target.value })}
        />
        <label htmlFor="time">Time</label>
        <input
          id="time"
          type="time"
          value={data.time}
          onChange={(e) => update({ time: e.target.value })}
        />
      </div>

      <p className="field-error">{error}</p>

      <div className="next-row">
        <button type="button" className="btn btn-primary" onClick={handleNext}>
          Next →
        </button>
      </div>
    </div>
  );
}
