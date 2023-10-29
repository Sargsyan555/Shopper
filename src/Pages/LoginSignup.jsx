import React from 'react'
import './Css/LoginSignup.css'
export default function LoginSignup() {
  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
          <h1>Sing Up</h1>
          <div className="loginsignup-fields">
            <input type="text" placeholder='Your Name'/>
            <input type="email" placeholder='Email address' />
            <input type="password" placeholder='Password' />
          </div>
          <button>Continue</button>
          <p className='loginsignup-login'>Already have an account ? <span>Login here</span></p>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id=''/>
            <p>By continuing,  i agree </p>
          </div>
        </div>
    </div>
  )
}
