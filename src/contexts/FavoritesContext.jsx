import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const updateFavorites = (item) => {
    setFavorites((prev) => ([ ...prev, item ]));
  }
  return (
    <FavoritesContext.Provider
      value={{ updateFavorites, favorites}}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

