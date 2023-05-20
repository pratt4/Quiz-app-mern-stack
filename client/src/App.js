
import Topbar from "../src/components/topbar/topbar";

import "../src/pages/home/home"
import Home from "./components/home/home";
import Quiz from "./pages/quiz/quiz";
import Login from "./pages/login/login"
import Register from "./pages/register/register"
import "../src/pages/sports/sports"
import Sports from "../src/pages/sports/sports";
import Currentaffairs from "./pages/currentaffairs/currentaffairs"
import Results from "./pages/results/results";
import AboutUs from "./pages/aboutus/aboutus"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Heritages from "../src/pages/heritages/heritages";

const user=true; 
function App() {
  return(
   
    <Router>
    <Topbar />
       <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/register' element={user ?<Home/>:<Register/>}/>
       <Route path='/login' element={user ?<Home/>:<Login/>}/>
       <Route path='/quiz' element={user ?<Quiz />:<Register/>}/>   
       <Route path='/quiz/sports' element={user ?<Sports />:<Register/>}/>
       <Route path='/quiz/currentaffairs' element={user ?<Currentaffairs/>:<Register/>}/>
       <Route path='/quiz/heritage' element={user ?<Heritages/>:<Register/>}/>
       <Route path='/results' element={user ?<Results/>:<Register/>}/>
       <Route path='/aboutus' element={<AboutUs/>}></Route>

       </Routes>
       </Router>
 

 
 
  )
  
}

export default App;

 
  
  
  
  
 