import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import MasterLayout from './layouts/admin/MasterLayout';
import Home from './components/frontend/Home';
import AdminPrivateRoute from './AdminPrivateRoute';
import PublicRoute from './PublicRoute';
import {Route} from 'react-router-dom';


import axios from 'axios';

axios.defaults.baseURL = "http://192.168.88.107:3001/api/admin/";
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.post['Accept'] = 'application/json';
// axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>

            <AdminPrivateRoute path="/admin/dashboard" name="Dashboard" />

            {/* <Route path="/login">
              {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Login />}
            </Route>

            <Route path="/register">
              {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Register />}
            </Route> */}

            <Route path="/admin" name="Admin" render={(props) => <MasterLayout {...props} />} />


          </Switch>
        </Router>
    </div>
  );
}

export default App;
