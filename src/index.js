import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Form from "./Form";
import Maincard from "./Maincard";
import Footer from "./Footer";
import bg from "./Medias/bg.png";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div>
      <img className="bgimg" src={bg} alt="background" />
      <div className="container">
        <App />
        <Form />
        <Maincard />
        <Footer />
      </div>
    </div>
  </StrictMode>
);
