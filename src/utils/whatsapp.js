import { WHATSAPP_NUMBER } from "../config.js";

function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function buildAnswerText(data) {
  const lines = ["❤️ YES! ❤️", ""];
  if (data.date) lines.push(`📅 Date: ${formatDate(data.date)}`);
  if (data.time) lines.push(`⏰ Time: ${data.time}`);
  if (data.plan) lines.push(`💕 Plan: ${data.plan}`);
  if (data.place) lines.push(`📍 Place: ${data.place}`);
  if (data.message) lines.push("", `💌 Message: ${data.message}`);
  lines.push("", "— sent from the love letter 💌");
  return lines.join("\n");
}

export function openWhatsApp(data) {
  const text = buildAnswerText(data);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}