import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

//ROUTES//
import Home from "./router/home.jsx";
import Login from "./router/login.jsx";
import CreateAccount from "./router/createaccount.jsx";
import RecoveryPassword from "./router/recoverypassword.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/kia-inspire/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/recoverypassword" element={<RecoveryPassword />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
