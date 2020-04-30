import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ErrorPage from './components/ErrorPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

export const routing = (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/ErrorPage" component={ErrorPage} />
    </Switch>
    </BrowserRouter>
)
ReactDOM.render(
    routing,
  document.getElementById('root')
); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
