import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/header'
import Account from './components/Account'
import Todo from './components/Todo'

ReactDOM.render(
  <React.StrictMode>
       <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/account" component={Account} />
        <Route path="/todo" component={Todo} />
        
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
