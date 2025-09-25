import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider } from "./Context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Wrap the whole app with Provider */}
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);