import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import Admin from '../admin/Admin'
import Posts from '../posts/Posts'
import PostDetail from '../posts/PostDetail/PostDetail'
import ProtectedRoute from './ProtectedRoute'
import Login from '../login/Login'
import { AuthContext } from '../App'

const TOFRouter = () => (
  <Router>
    <Switch>
      <Router>
        <Switch>
          <Route path="/post/:id">
            <PostDetail />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <ProtectedRoute path="/admin">
            <AuthContext.Consumer>
              {value => <Admin user={value.getUser()} />}
            </AuthContext.Consumer>
          </ProtectedRoute>

          <Route exact path="/">
            <Posts />
          </Route>

          <Route>
            <div>404 not found</div>
          </Route>

        </Switch>
      </Router>
    </Switch>
  </Router>
)

export default TOFRouter