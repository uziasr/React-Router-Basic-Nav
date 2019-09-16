import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import {Link, Route} from 'react-router-dom'

const App = () => (
  <div>
    <Navigation />
    <Route path="/" exact component={Home} />
    <Route path="/about/" component={About} />
    <Route path="/contact/" exact component={Contact} />
  </div>
  
);

export default App;
