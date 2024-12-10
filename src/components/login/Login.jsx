import React from 'react'
import "../login/Login.scss"
const Login = () => {
  return (
    <section className='login'>
      <div className="login__content">
        <h1>Pay roll managment</h1>
        <div className="login_container">
          <h3>Login</h3>
          <div className="login_item">
            <span>Username</span>
            <input type="text" />
          </div>
          <div className="login_item">
            <span>Password</span>
            <input type="text" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
