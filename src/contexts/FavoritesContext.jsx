import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  function updateFavorites(item) {
    setFavorites((prev) => ([ ...prev, item ]));
  }
  function updateWishlist(item) {
    setWishlist((prev) => ([ ...prev, item ]));
  }
  return (
    <FavoritesContext.Provider
      value={{ updateFavorites, favorites, updateWishlist, wishlist }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

