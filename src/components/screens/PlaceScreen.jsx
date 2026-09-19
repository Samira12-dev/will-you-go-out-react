import { useState } from "react";
import ChoiceGrid from "../ChoiceGrid.jsx";
import { PLACE_CHOICES } from "../../data/choices.js";

export default function PlaceScreen({ data, update, onNext }) {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!data.place) {
      setError("خاصك تختاري واحد ❤️");
      return;
    }
    setError("");
    onNext();
  };

  return (
    <div className="screen">
      <div className="envelope">📍</div>
      <h2 className="headline">فين غادي نمشيو؟ 👀</h2>
      <p className="subtitle">اختاري المكان ولا كتبي شي واحد من عندك</p>

      <ChoiceGrid
        choices={PLACE_CHOICES}
        value={data.place}
        onChange={(v) => update({ place: v })}
        customPlaceholder="فين بغيتي نمشيو؟"
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
