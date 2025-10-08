import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const updateFavorites = (inputItem) => {
    let existingItem = favorites.find(item => item.title === inputItem.title);
    if(existingItem){
      return;
    }else{
      setFavorites((prev) => ([ ...prev, inputItem ]));
    }
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

