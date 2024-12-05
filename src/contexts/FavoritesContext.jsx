import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const updateFavorites = (item) => {
    setFavorites((prev) => ([ ...prev, item ]));
  }
  const removeFavorites = (title) => {
    setFavorites((prev) => (prev.filter(item => item.title !== title)));
  }
  return (
    <FavoritesContext.Provider
      value={{ updateFavorites, favorites, removeFavorites}}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

