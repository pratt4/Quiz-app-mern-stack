import "./home.css"

export default function Home(){
return (
    <>
    <div className="home">
    <h2 className="intro">Test your Knowledge</h2>
    <img className="introimg" src="https://wallpaperaccess.com/full/2384073.jpg" alt="Quiz" />
    </div>
    <div className="quizType">
    <div class="row">
  <div class="col-sm-4" id="current">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">CURRENT AFFAIRS</h5>
        <p class="card-text">Reading daily current affairs will help you in gaining more knowledge and you can know the news happening around you.</p>
        <a href="/quiz/currentaffairs" class="btn btn-primary">Take Quiz</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4" id="sports" >
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">SPORTS & ENTERTAINMENT</h5>
        <p class="card-text">Through participation in sports and games, a student gains various skills, experience and confidence that are helpful for developing their personality.</p>
        <a href="/quiz/sports" class="btn btn-primary">Take Quiz</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4" id="heritage" >
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">HERITAGE AND CULTURE</h5>
        <p class="card-text">it is important to develop educational policies for  conservation of culture concerning the promotion and protection of cultural heritage.</p>
        <a href="/quiz/history" class="btn btn-primary">Take Quiz</a>
      </div>
    </div>
  </div>
</div>
    </div>
    </>
)
}