import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (favorite) => {
    setFavorites([...favorites, favorite]);
  };

  const removeFavorite = (favorite) => {
    setFavorites(favorites.filter((fav) => fav.name !== favorite.name));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
