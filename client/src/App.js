import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes'


//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'

import './App.css';
if(localStorage.token) {
  setAuthToken(localStorage.token)
}
function App() {

  useEffect(() => {
    store.dispatch(loadUser())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route component={Routes} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
