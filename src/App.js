import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header';
import Project from './Pages/Project';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Footer from './Components/Footer';
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
    <Router>
    <div className="App">
    <CssBaseline />
    <main style={{ flex: "1 0 auto" }}>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/project' component={Project} />
      </Switch>
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
