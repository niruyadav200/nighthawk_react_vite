import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./scss/styles.scss";
import "./assets/fonts/font.css";
import "./index.css";

import { GoogleOAuthProvider } from "@react-oauth/google";

// Import our custom CSS

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="573959570269-phvv1t2rmang1jhtva2assakses7vpjn.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
