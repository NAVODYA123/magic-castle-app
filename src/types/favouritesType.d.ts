import React from "react";

export type FavouritesType = {
  favouriteList: string[]|any;
  setFavouritesList: React.Dispatch<React.SetStateAction<any[]>>
};
