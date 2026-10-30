import ReactDOM from "react-dom/client";
import "./index.css";
import "@fontsource-variable/plus-jakarta-sans";
import App from "./app";

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);

if (import.meta.env.PROD && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => undefined);
  });
}
