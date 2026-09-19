import DodgeButton from "../DodgeButton.jsx";

export default function QuestionScreen({ onYes }) {
  return (
    <div className="screen">
      <div className="envelope">❤️</div>
      <p className="eyebrow">J'ai une petite question...</p>
      <h1 className="headline">
        Will you go out
        <br />
        with <em>me</em>?
      </h1>
      <p className="subtitle">واش غادي تخرجي معايا؟ 🥹</p>
      <DodgeButton onYes={onYes} />
    </div>
  );
}
