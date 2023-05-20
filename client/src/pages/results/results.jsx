import "./results.css";

export default function Results(){
    return(
        
       <div className="result">
       <div className="resHeading" >
        <h1 >Your Results</h1>
        <p>Analyse Your Scores..!</p>
        </div>
        <div>
            <h2>Sports Quiz:</h2>
            <div class="progress">
             <div className="progress-bar bar" role="progressbar" style={{width:"35%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">35%</div>
             </div>
        </div>
        <br/>
       <hr></hr>
       <div>
            <h2>Hertage & culture:</h2>
            <div class="progress">
             <div className="progress-bar bar" role="progressbar" style={{width:"45%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">45%</div>
             </div>
        </div>
        <br/>
       <hr></hr>
        <div>
            <h2>Current Affairs</h2>
            <div class="progress">
             <div className="progress-bar bar" role="progressbar" style={{width:"25%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">25%</div>
             </div>
        </div>
        <div>
        <br/>
        <hr></hr>
            <h2>Over All</h2>
            <div class="progress">
             <div className="progress-bar bar" role="progressbar" style={{width:"65%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">65%</div>
             </div>
        </div>
        <br />
        <hr></hr>
       <div>
           <br></br>
           <br></br>
           <br></br>
       </div>

       </div>
       
        
    )
}