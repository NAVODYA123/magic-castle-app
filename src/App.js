import './App.css';
import MagicSpellList from "./components/MagicSpellList.tsx";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Route, Routes } from 'react-router-dom';
import FavouriteMagicList from "./components/FavouriteMagicList.tsx";
import MagicSpellDetails from "./components/MagicSpellDetails.tsx";
import Header from "./components/header/Header.tsx";
import React from "react";

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
                <Route path="/" element={<MagicSpellList/>} />
            </Routes>
            <Routes>
                <Route path="/home" element={<FavouriteMagicList/>} />
            </Routes>
            <Routes>
                <Route path="/spell-information" element={<MagicSpellDetails/>} />
            </Routes>
        </ApolloProvider>
    </div>
  );
}

export default App;
