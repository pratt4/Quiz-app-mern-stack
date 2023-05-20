import "./quiz.css";

export default function Quizes(){
  return(
  <div claassName="slides">
   <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" style={{height:"500px"}} src="https://wallpaperaccess.com/full/3308617.png" alt="First slide" />
      <div class="carousel-caption d-none d-md-block">
       <h5>Quiz</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100"  style={{height:"500px"}} src="https://wallpaperaccess.com/full/1436808.jpg" alt="Second slide" />
      <div class="carousel-caption d-none d-md-block">
      <a href="/quiz/sports" style={{color:"inherit"}}><h5>sports Quiz</h5></a>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" style={{height:"500px"}} src="https://wallpaperaccess.com/full/1623438.jpg" alt="Third slide" />
      <div class="carousel-caption d-none d-md-block">
      <a href="/quiz/currentaffairs" style={{color:"inherit"}}><h5>Current affairs quiz</h5></a>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" style={{height:"500px"}} src="https://wallpaperaccess.com/full/309838.jpg" alt="Third slide" />
      <div class="carousel-caption d-none d-md-block">
      <a href="/quiz/heritage" style={{color:"inherit"}}><h5>Culture & Heritage Quiz</h5></a>
      </div>
    </div>
   
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
  </div>
  ) 
}