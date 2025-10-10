import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ProductProvider } from "./contexts/ProductContext.jsx";
import { FavoritesContextProvider } from "./contexts/FavoritesContext.jsx";
import { ScreenSizeContextProvider } from "./contexts/ScreenSizeContext.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ScreenSizeContextProvider>
      <FavoritesContextProvider>
        <ProductProvider>
          <StrictMode>
            <App />
          </StrictMode>
        </ProductProvider>
      </FavoritesContextProvider>
    </ScreenSizeContextProvider>
  </Provider>
);
