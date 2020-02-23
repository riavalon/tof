import React, { createContext, useState } from 'react'

import './App.scss'

import TOFRouter from './router/Router'
import Header from './components/header/Header'
import { mockAuthService } from './utils/auth'

export const AuthContext = createContext(new mockAuthService())

function App() {
  const [authService, _] = useState(new mockAuthService())
  return (
    <AuthContext.Provider value={authService}>
      <div className="App">
        <Header></Header>
        <TOFRouter />
      </div>
    </AuthContext.Provider>
  )
}

export default App
