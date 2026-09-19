# Will You Go Out With Me? 💌

A little "love letter" proposal flow, rebuilt in React (Vite). Ask the question, dodge the
"No" button, pick a date/time/plan/place, leave a message, and get a recap at the end.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

To build a static version you can host anywhere:

```bash
npm run build
```

The output goes to `dist/` — upload that folder to any static host (Netlify, Vercel,
GitHub Pages, etc.) and send the link.

## About the final answer

This is a static site with no server, so the recap on the last screen is the only place
the answer exists — it lives in the recipient's browser only. Pressing **Send on WhatsApp 💬**
(or the **Send 💌** button on the message step) opens WhatsApp with the whole answer
pre-filled, so whoever fills it out just taps send and it reaches you.

**Important:** put your real WhatsApp number (with country code, digits only) in
`src/config.js` — `WHATSAPP_NUMBER` currently has a placeholder.

## Project structure

```
src/
  App.jsx                  step flow + shared state
  index.css                design system (colors, type, layout)
  data/choices.js           plan/place options + "No" button captions
  components/
    Petals.jsx              ambient background hearts
    ProgressSeal.jsx        wax-seal badge + step dots
    ChoiceGrid.jsx          reusable choice buttons + custom text input
    DodgeButton.jsx         the "No" button that runs away
    screens/                one component per step
```

## Customize

- **Text/copy**: edit the JSX directly in each file under `src/components/screens/`.
- **WhatsApp number**: edit `src/config.js`.
- **Choices**: edit `src/data/choices.js`.
- **Colors/fonts**: edit the `:root` variables at the top of `src/index.css`.
