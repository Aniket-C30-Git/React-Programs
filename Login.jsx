import React,{ useState } from 'react'
import './Login.css'

function Login() {

    const [email, setEmail] = useState(""); //email : input la samjnya sathi value dili jate
    const [password, setPassword] = useState("");


    const submitHandler = (e) =>{ // e :- object of event.
        console.log("user logged in ,email " + email)
        e.preventDefault();
        setEmail("")//data ha stored krun page empty zala pahijel.
        setPassword("");
    }
  return (
    <div className='login-page'>
        <div className='welcome-img'></div>
      <form className='login-form' onSubmit={(e) => submitHandler(e)}>
      <h1 className='login-header'>Login Page</h1>
        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email' className='login-input' required />
        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Password' className='login-input' required />
        <button type='submit' className='login-btn'>Login</button>
      </form>
    </div>
  )
}

export default Login
