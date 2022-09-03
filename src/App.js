import './App.css';
import MagicSpell from "./components/MagicSpell.tsx";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Route, Routes } from 'react-router-dom';
import MagicCastleHome from "./components/MagicCastleHome.tsx";

function App() {

    const client = new ApolloClient({
        uri: 'https://www.dnd5eapi.co/graphql',
        cache: new InMemoryCache(),
    });

  return (
    <div className="App">
        <ApolloProvider client={client}>
            <Routes>
                <Route path="/" element={<MagicSpell/>} />
            </Routes>
            <Routes>
                <Route path="/home" element={<MagicCastleHome/>} />
            </Routes>
        </ApolloProvider>
    </div>
  );
}

export default App;
