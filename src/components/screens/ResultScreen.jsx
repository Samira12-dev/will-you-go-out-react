import { useState } from "react";
import { buildAnswerText, openWhatsApp } from "../../utils/whatsapp.js";

function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function ResultScreen({ data, onRestart, onChoose }) {
  const [copied, setCopied] = useState(false);
  const accepted = data.finalAnswer === "Yes ❤️";

  if (!accepted) {
    const sayYes = () => onChoose("Yes ❤️");
    const sendYes = () => {
      sayYes();
      openWhatsApp({ ...data, finalAnswer: "Yes ❤️" });
    };
    return (
      <div className="screen">
        <div className="big-heart">💔</div>
        <h1 className="headline" dir="rtl" lang="ar" style={{ fontFamily: "var(--font-arabic)" }}>
          منعرفش No 🙈
        </h1>
        <p className="subtitle">كيفاش No؟ ماكاينش غير Yes ❤️</p>
        <div className="result-actions">
          <button type="button" className="btn btn-primary" onClick={sayYes}>
            Yes ❤️
          </button>
          <button type="button" className="btn btn-ghost" onClick={sendYes}>
            Send 💬
          </button>
          <button type="button" className="btn btn-ghost" onClick={onRestart}>
            من جديد ↻
          </button>
        </div>
      </div>
    );
  }

  const handleCopy = async () => {
    const text = buildAnswerText(data);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — the visible summary still shows every answer
    }
  };

  const handleDownload = () => {
    const text = buildAnswerText(data);
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "our-date.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="screen">
      <div className="big-heart">💗</div>
      <h1 className="headline" dir="rtl" lang="ar" style={{ fontFamily: "var(--font-arabic)" }}>
        صافي سالينا ❤️
      </h1>
      <p className="subtitle">mmm good answer 🥹</p>

      <div className="summary-card">
        <div className="row">
          <span className="label">📅 Date</span>
          <span className="value">{formatDate(data.date)}</span>
        </div>
        <div className="row">
          <span className="label">⏰ Time</span>
          <span className="value">{data.time}</span>
        </div>
        <div className="row">
          <span className="label">💕 Plan</span>
          <span className="value">{data.plan}</span>
        </div>
        {data.message && (
          <div className="row">
            <span className="label">💌 Message</span>
            <span className="value">{data.message}</span>
          </div>
        )}
        {data.finalAnswer && (
          <div className="row">
            <span className="label">😭 Final answer</span>
            <span className="value">{data.finalAnswer}</span>
          </div>
        )}
      </div>

      <p className="final-text subtitle" style={{ marginBottom: 6 }}>
        دابا بقى غير نستناو هاد الـdate الجميل ✨
      </p>

      <div className="result-actions">
        <button type="button" className="btn btn-primary" onClick={() => openWhatsApp(data)}>
          Send on WhatsApp 💬
        </button>
        <button type="button" className="btn btn-ghost" onClick={handleCopy}>
          {copied ? "Copied ✓" : "Copy answer"}
        </button>
        <button type="button" className="btn btn-ghost" onClick={handleDownload}>
          Download as text
        </button>
        <button type="button" className="btn btn-ghost" onClick={onRestart}>
          من جديد ↻
        </button>
      </div>
      <p className="result-note">
        Press <strong>Send on WhatsApp 💬</strong> and it opens WhatsApp with your answer
        already filled in — just press send there. Copy or download below to share it another
        way.
      </p>
    </div>
  );
}
