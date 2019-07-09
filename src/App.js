import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import './index.css';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <HashRouter basename='/'>
     <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
     </div>
    </HashRouter>
   );
}

export default App;
