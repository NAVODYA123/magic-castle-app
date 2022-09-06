import './App.css';
import MagicSpellList from "./components/MagicSpellList.tsx";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Route, Routes } from 'react-router-dom';
import FavouriteMagicList from "./components/FavouriteMagicList.tsx";
import MagicSpellDetails from "./components/MagicSpellDetails.tsx";
import Header from "./components/header/Header.tsx";
import React from "react";
import HomePage from "./components/homePage/HomePage.tsx";
import MagicCastleTheme from "./components/customStyles/theme/MagicCastleTheme.tsx";
import { ThemeProvider } from '@mui/material/styles';

function App() {

    const client = new ApolloClient({
        uri: 'https://www.dnd5eapi.co/graphql',
        cache: new InMemoryCache(),
    });

  return (
    <div className="App">
        <ThemeProvider theme={MagicCastleTheme}>
        <ApolloProvider client={client}>
           <Routes>
                <Route path="/" element={<HomePage/>} />
            </Routes>
            <Routes>
                <Route path="/spell-room" element={<MagicSpellList/>} />
            </Routes>
            <Routes>
                <Route path="/favourite-spells" element={<FavouriteMagicList/>} />
            </Routes>
            <Routes>
                <Route path="/spell-information" element={<MagicSpellDetails/>} />
            </Routes>
        </ApolloProvider>
    </ThemeProvider>
    </div>
  );
}

export default App;
