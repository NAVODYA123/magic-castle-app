import './App.css';
import MagicSpellList from "./components/MagicSpellList.tsx";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Route, Routes } from 'react-router-dom';
import FavouriteMagicList from "./components/FavouriteMagicList.tsx";
import MagicSpellDetails from "./components/MagicSpellDetails.tsx";
import Header from "./components/header/Header.tsx";
import React from "react";
import HomePage from "./components/header/HomePage.tsx";

function App() {

    const client = new ApolloClient({
        uri: 'https://www.dnd5eapi.co/graphql',
        cache: new InMemoryCache(),
    });

  return (
    <div className="App">
        <ApolloProvider client={client}>
            <Header/>
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
    </div>
  );
}

export default App;
