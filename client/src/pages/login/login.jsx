import "./login.css";

export default function Login(){
    return(
        <>
        <div className="login">
         <span className="loginTitle">Login</span>
         <form className="loginForm">
           <label>Username</label>
           <input type="text" 
           placeholder="Enter your Username..."/>
           <label>password</label>
           <input type="password" 
           placeholder="Enter your password"/>
           <button className="loginButton" type="submit">Login</button>
         </form>
         <button className="loginregisterButton">
            Register
         </button>
        </div>
        </>
    )
}