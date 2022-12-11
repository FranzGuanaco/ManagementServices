import "./App.css";
import Homepage from "./Component/Homepage";
import Navbar from "./Component/Navbar";
import React from "react";
import Menu from "./Component/Menu";

  
function App() {
    
    return [
        <div className='App'>
        <Navbar/>
        <Menu />
        <Homepage/>
        </div>
      
        
    ];
}
  
export default App;