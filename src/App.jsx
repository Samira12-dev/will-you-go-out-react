import { useState } from "react";
import Petals from "./components/Petals.jsx";
import ProgressSeal from "./components/ProgressSeal.jsx";
import QuestionScreen from "./components/screens/QuestionScreen.jsx";
import DateScreen from "./components/screens/DateScreen.jsx";
import PlanScreen from "./components/screens/PlanScreen.jsx";
import PlaceScreen from "./components/screens/PlaceScreen.jsx";
import MessageScreen from "./components/screens/MessageScreen.jsx";
import ResultScreen from "./components/screens/ResultScreen.jsx";

const STEPS = ["question", "date", "plan", "place", "message", "result"];
const TOTAL_STEPS = 5;

const initialData = {
  date: "",
  time: "",
  plan: "",
  place: "",
  message: "",
};

export default function App() {
  const [stepIndex, setStepIndex] = useState(0);
  const [data, setData] = useState(initialData);

  const step = STEPS[stepIndex];
  const goTo = (name) => setStepIndex(STEPS.indexOf(name));
  const update = (patch) => setData((prev) => ({ ...prev, ...patch }));

  const restart = () => {
    setData(initialData);
    setStepIndex(0);
  };

  const stepNumber = step === "result" ? 0 : stepIndex + 1;

  return (
    <div className="page">
      <Petals />
      <div className="letter-stack">
        <div className="card">
          <ProgressSeal step={stepNumber} total={TOTAL_STEPS} />

          {step === "question" && <QuestionScreen onYes={() => goTo("date")} />}
          {step === "date" && (
            <DateScreen data={data} update={update} onNext={() => goTo("plan")} />
          )}
          {step === "plan" && (
            <PlanScreen data={data} update={update} onNext={() => goTo("place")} />
          )}
          {step === "place" && (
            <PlaceScreen data={data} update={update} onNext={() => goTo("message")} />
          )}
          {step === "message" && (
            <MessageScreen data={data} update={update} onFinish={() => goTo("result")} />
          )}
          {step === "result" && <ResultScreen data={data} onRestart={restart} />}
        </div>
      </div>
    </div>
  );
}
