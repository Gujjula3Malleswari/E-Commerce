import React,{useState} from 'react'
import "./Login.css"
 function Login() {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  function save(e){
    setUsername(e.target.value)
  }
  function show(){
    console.log(username,password)
    setUsername("")
    setPassword("")
  }
  return (
    <div className='div' >
      <form className='form'> 
  
    <div className="container">
      <label for="uname"><b>Username</b></label>
      <input  value={username} type="text" placeholder="Enter Username" name="uname" required onChange={save}/>
  
      <label for="psw"><b>Password</b></label>
      <input value={password} type="password" placeholder="Enter Password" name="psw" required onChange={(e)=>setPassword(e.target.value)}/>
  
      <button onClick={show} type="submit">Login</button>
      <label>
        <input type="checkbox" name="remember"/> Remember me
      </label>
    </div>
  
    <div className="container" >
      <button type="button"onClick={show} class="cancelbtn">Cancel</button>
      <span className="psw">Forgotpassword?</span>
    </div>
  </form>
  </div>
  )
}
 
 export default Login
 
 
 