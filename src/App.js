import './App.css';
import MagicSpell from "./components/MagicSpell.tsx";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

function App() {

    const client = new ApolloClient({
        uri: 'https://www.dnd5eapi.co/graphql',
        cache: new InMemoryCache(),
    });




  return (
    <div className="App">
        <ApolloProvider client={client}>
            <MagicSpell/>
        </ApolloProvider>
    </div>
  );
}

export default App;
