export default function ConfirmScreen({ onChoose }) {
  return (
    <div className="screen">
      <div className="envelope">😭</div>
      <h2 className="headline">  اه نسيت، ف الأول كنتي اختاريتي لا... مازال لا؟ 😜  </h2>
      <p className="subtitle">Yes ❤️ = بغيت نخرجو / No 🙈 = لا، مابغيتش</p>

      <div className="confirm-row">
        <button type="button" className="btn btn-primary" onClick={() => onChoose("Yes ❤️")}>
          Yes ❤️ 
        </button>
        <button type="button" className="btn btn-ghost" onClick={() => onChoose("No 🙈")}>
          No 🙈 
        </button>
      </div>
    </div>
  );
}