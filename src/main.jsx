import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ProductProvider } from "./contexts/ProductContext.jsx";
import {FavoritesContextProvider} from "./contexts/FavoritesContext.jsx";

createRoot(document.getElementById("root")).render(
  <FavoritesContextProvider>
    <ProductProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ProductProvider>
  </FavoritesContextProvider>
);
