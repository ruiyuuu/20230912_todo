import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Todolist from '../view/Todolist'
import Login from '../view/Login'
import Register from '../view/Register'
import NoMatch from '../view/NoMatch'

export default function AppRouter() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/Login" >
            <Login />
          </Route>
          <Route exact path="/Register" >
            <Register />
          </Route>
          <Route exact path="/" >
            <Todolist />
          </Route>
          {/* ----- No Found ----- */}
          <Route path="*" >
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
