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
import Admin from './Pages/Admin.js';
import Contact from './Pages/Contact';
import CurdUser from './Pages/CrudUser';
import InfluxScreen from './Pages/InfluxScreen';
import AgileoScreen from './Pages/AgileoScreen';

function App() {
  return (
    <Router>
    <div className="App">
    <main>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/crud-user' component={CurdUser} />
        <Route exact path='/influx-img' component={InfluxScreen} />
        <Route exact path='/agileo-img' component={AgileoScreen} />
        <Route exact path='/project' component={Project} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/admin' component={Admin} />
      </Switch>
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
