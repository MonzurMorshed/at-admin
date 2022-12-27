import React from 'react';
import {BrowserRouter as Router, Switch, useHistory,Route} from 'react-router-dom';
// import MasterLayout from './layouts/admin/MasterLayout';
import AdminPrivateRoute from './AdminPrivateRoute';
import Login from './app/frontend/auth/Login';
import Register from './app/frontend/auth/Register';

import axios from 'axios';

axios.defaults.baseURL = "http://165.232.40.251/api/admin/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;

function App() {
  let history = useHistory();
  return (
    <div className="App">
        <Router>
          <Switch>

            <AdminPrivateRoute path="/admin/dashboard" name="Dashboard" />

            <Route exact path="/">
              {localStorage.getItem('auth_token') ? history.push("/") : <Login />}
            </Route>

            <Route path="/register">
              {localStorage.getItem('auth_token') ? history.push("/") : <Register />}
            </Route>

            {/* <Route path="/" render={() => < Login/>} />

            <Route path="/register" render={() => <Register/>} />

            <Route path="/admin" name="Admin" render={(props) => <MasterLayout {...props} />} /> */}


          </Switch>
        </Router>
    </div>
  );
}

export default App;
