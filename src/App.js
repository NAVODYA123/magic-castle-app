import './App.css';
import MagicSpellList from "./components/MagicSpellList.tsx";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Route, Routes } from 'react-router-dom';
import MagicCastleHome from "./components/MagicCastleHome.tsx";
import MagicSpellDetails from "./components/MagicSpellDetails.tsx";

function App() {

    const client = new ApolloClient({
        uri: 'https://www.dnd5eapi.co/graphql',
        cache: new InMemoryCache(),
    });

  return (
    <div className="App">
        <ApolloProvider client={client}>
            <Routes>
                <Route path="/" element={<MagicSpellList/>} />
            </Routes>
            <Routes>
                <Route path="/home" element={<MagicCastleHome/>} />
            </Routes>
            <Routes>
                <Route path="/spell-information" element={<MagicSpellDetails/>} />
            </Routes>
        </ApolloProvider>
    </div>
  );
}

export default App;
