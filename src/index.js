import ReactDom from "react-dom/client";
import App from "./App";
import "./index.css";
import AppContextProvider from "./context/AppContext";
import MailContextProvider from "./context/mail";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <AppContextProvider>
    <MailContextProvider>
      <App />
    </MailContextProvider>
  </AppContextProvider>
);
