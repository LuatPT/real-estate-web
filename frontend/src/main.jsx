import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import App from './App'
import './index.css'
import Login from './user/Login'
import SignUp from './user/SignUp'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <Switch>  
          <Route path="/SignUp">   
          <SignUp/>
          </Route>
          <Route path="/Login" >   
          <Login />
          </Route>
          </Switch> 
    </Router>
  </React.StrictMode>
)
