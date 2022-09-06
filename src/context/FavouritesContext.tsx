import React, {createContext} from 'react'
import {FavouritesType} from "../types/favouritesType";

const favouriteInitial:FavouritesType ={
    favouriteList:[],
    setFavouritesList:()=>{}
}

export const FavouritesContext = createContext ({favoritesList:[''], setFavouritesList:(fav:string[])=>{}})
