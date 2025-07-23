import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import "./assets/globals.css";
import { MobileMenuContextProvider } from "./context/MenuMobileContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MobileMenuContextProvider>
        <App />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qui-sommes-nous" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MobileMenuContextProvider>
    </BrowserRouter>
  </StrictMode>
);
