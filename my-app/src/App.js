// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbars';
import TextForm from './components/TextForm';
import About from './components/About';
import React , {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// let name = "akash 12";
function App() {
  const [mode,setMode]=useState("light");
  const toggleMode = ()=>{
      if(mode==="light"){
        document.body.style.background = "#042743";
        document.body.style.color = "#fff";
        var styleclass = document.querySelector('.form-check-input:checked');
        
        console.log(styleclass);
        setMode("dark");
      }else{
        document.body.style.background = "white";
        document.body.style.color = "#000";
        setMode("light");
      }
  }

  return (
    <>
    <Router>
    <Navbar title="React" mode={mode}  toggleMode={toggleMode} />
    <div className="container">
    
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm heading="Convert to uppecase latter"/>
          </Route>
          </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
