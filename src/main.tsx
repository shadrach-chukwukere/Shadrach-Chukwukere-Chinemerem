import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@fontsource/lexend";
import "@fontsource/lexend/100";
import "@fontsource/lexend/200";
import "@fontsource/lexend/300";
import "@fontsource/lexend/400";
import "@fontsource/lexend/500";
import "@fontsource/lexend/600";
import "@fontsource/lexend/700";
import "@fontsource/lexend/800";
import "@fontsource/lexend/900";

import "react-lazy-load-image-component/src/effects/blur.css";
import App from "./app";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
