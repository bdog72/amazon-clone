//
//

import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/'>
            <Header />
          </Route>
          {/* <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={Home} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
