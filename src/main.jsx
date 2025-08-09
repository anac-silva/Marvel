import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ComicsProvider } from "./context/ComicsContext";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ComicsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ComicsProvider>
    </BrowserRouter>
  </StrictMode>
);
