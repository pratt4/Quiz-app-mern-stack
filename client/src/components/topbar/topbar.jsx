import "./topbar.css"

function Topbar(){
    return (
       <div className="Top">
            <nav class="navbar sticky-top navbar-light bg-light" >
         <a class="navbar-brand" href="/home">Quiz App</a>
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="quiz">QUIZ</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="results">MY RESULTS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="register">REGISTER</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="login">LOGIN</a>
      </li>
      <li>
        <a class="nav-link" href="aboutus">ABOUT US</a>
      </li>
    </ul>
    
  </div>
</nav>
         </nav>
       </div>
    )
}

export default Topbar;