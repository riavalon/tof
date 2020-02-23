import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import './Login.styles.scss'
import TextInput from '../components/form/textInput/TextInput'
import { AuthContext } from '../App'

const Login = () => {
  const context = useContext(AuthContext)
  const history = useHistory()
  const handleOnClick = function() {
    context.login()
    history.push('/admin')
  }
  return (
    <div className="page-container">
      <div className="tof-login">
        <div className="tof-login__form">
          <h2>Admin Login</h2>
          <TextInput className="tof-login__username" label="username" id="tof-test-login-username" handleChange={(val: any) => {}} />
          <TextInput className="tof-login__password" type="password" label="password" id="tof-test-login-password" handleChange={(val: any) => {}} />
          <button onClick={handleOnClick} className="tof-login__login-btn" data-testid="tof-test-login-button">
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login