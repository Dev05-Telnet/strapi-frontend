import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import HomePage from "./pages";
import AboutPage from "./pages/about-us";
import AllPages from "./pages/pages";
import Navbar from "./components/navbar";


const client = new ApolloClient({
  uri:'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <div className="App">
      <Router>
        <ApolloProvider client={client}>
          <Navbar/>
          <Switch>
            <Route path="/pages">
              <AllPages />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </ApolloProvider>
      </Router>
    </div>
  );
}

export default App;
