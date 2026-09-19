import { useState } from "react";

export default function ChoiceGrid({ choices, value, onChange, customPlaceholder }) {
  const isCustomSelected =
    value !== "" && !choices.some((c) => c.value !== "custom" && c.value === value);

  const [showCustom, setShowCustom] = useState(isCustomSelected);
  const [customValue, setCustomValue] = useState(isCustomSelected ? value : "");

  const handlePick = (choice) => {
    if (choice.value === "custom") {
      setShowCustom(true);
      onChange("");
    } else {
      setShowCustom(false);
      onChange(choice.value);
    }
  };

  const handleCustomInput = (text) => {
    setCustomValue(text);
    onChange(text.trim());
  };

  return (
    <>
      <div className="choice-grid">
        {choices.map((choice) => {
          const selected =
            choice.value === "custom" ? showCustom : !showCustom && value === choice.value;
          return (
            <button
              key={choice.value}
              type="button"
              className={`choice${selected ? " selected" : ""}`}
              onClick={() => handlePick(choice)}
            >
              {choice.label}
            </button>
          );
        })}
      </div>
      {showCustom && (
        <input
          className="custom-input"
          type="text"
          placeholder={customPlaceholder}
          value={customValue}
          onChange={(e) => handleCustomInput(e.target.value)}
          autoFocus
        />
      )}
    </>
  );
}
