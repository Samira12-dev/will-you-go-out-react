import { useState } from "react";
import ChoiceGrid from "../ChoiceGrid.jsx";
import { PLAN_CHOICES } from "../../data/choices.js";

export default function PlanScreen({ data, update, onNext }) {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!data.plan) {
      setError("خاصك تختاري واحد ❤️");
      return;
    }
    setError("");
    onNext();
  };

  return (
    <div className="screen">
      <div className="envelope">💕</div>
      <h2 className="headline">شنو نديرو فـ الـdate؟</h2>
      <p className="subtitle">اختاري واحد ولا ديري plan من عندك</p>

      <ChoiceGrid
        choices={PLAN_CHOICES}
        value={data.plan}
        onChange={(v) => update({ plan: v })}
        customPlaceholder="كتبي ليا plan ديالك..."
      />

      <p className="field-error">{error}</p>

      <div className="next-row">
        <button type="button" className="btn btn-primary" onClick={handleNext}>
          Next →
        </button>
      </div>
    </div>
  );
}
