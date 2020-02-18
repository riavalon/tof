import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.scss'
import Header from './components/header/Header'
import Posts from './posts/Posts'
import PostDetail from './posts/PostDetail/PostDetail'

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Router>
        <Switch>
          <Route path="/post/:id">
            <PostDetail />
          </Route>
          <Route path="/">
            <Posts />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
