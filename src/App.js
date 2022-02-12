import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchPage from "./Components/SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" exact component={SearchPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
