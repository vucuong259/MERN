import React from 'react';
import Header from './components/Header';
import Todos from './components/Todos';
import Landing from './components/layout/Landing';
import Auth from './views/Auth';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AuthContextProvider from './contexts/AuthContext'
import './App.css';

const App = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/login' render={props => <Auth {...props} authRoute='login' />} />
          <Route exact path='/register' render={props => <Auth {...props} authRoute='register' />} />
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
