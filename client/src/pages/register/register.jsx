import React,{useState} from 'react';
import "./register.css";
const server_base = "http://localhost:3001";
var userstate=false;

export default function Register() {
  const [newUser , setNewUser] = useState("");  


  // const [user , setUser] = useState("false");  
  
  const saveUser = async () => {
    const data = await fetch(server_base+ "/abc/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: newUser,
      }),
    }).then((res) => res.json());
  
    setNewUser("");
  }; 

  function mess()
  {
    alert("registration successful")
    
   userstate=true;
  }


  function mess2()
  {
    alert("login successful");
  }




  return (
    <>
      <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your name..."
            onChange={(e) => setNewUser(e.target.value)}
            value={newUser}
          />
          <label>Email</label>
          <input type="email" placeholder="Enter your Email" />
          <label>password</label>
          <input type="password" placeholder="Enter your password" />
          <button className="registerButton" type="submit" onClick={mess}>
            Register
          </button>
        </form>
        <button className="loginregisterButton" onClick={mess2}>
          Login
        </button>
      </div>
    </>
  );
}

 export {userstate};
 console.log(userstate)