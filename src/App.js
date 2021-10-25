
import React from "react";
import './App.css';
import Steps from "./components/Steps";

const tempMin = -20 ;
const temMax = 40 ;
const heartMin = 80 ;
const heartMax = 180 ;
const stepsMin = 0 ;
const stepsMax = 5000 ;





class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
            <p>Heart : {heartMin}</p>
            <p>Temperature : {tempMin}</p>
            <p>Steps : {stepsMin}</p>
            <Steps />
        </div>    
      </div>
    )
  }
}

export default App