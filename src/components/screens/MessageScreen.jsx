import { openWhatsApp } from "../../utils/whatsapp.js";

export default function MessageScreen({ data, update, onFinish }) {
  const handleSend = () => {
    openWhatsApp(data);
    onFinish();
  };
  return (
    <div className="screen">
      <div className="envelope">💌</div>
      <h2 className="headline">قبل ما نساليو...</h2>
      <p className="subtitle">كاين شي اعتراف، حقيقة، ولا شي حاجة بغيتي تقوليها ليا؟ ❤️</p>

      <textarea
        placeholder="كتبي هنا اللي بغيتي تقولي..."
        value={data.message}
        onChange={(e) => update({ message: e.target.value })}
      />

      <div className="next-row">
        <button type="button" className="btn btn-primary" onClick={handleSend}>
          Send 💌
        </button>
      </div>
    </div>
  );
}
