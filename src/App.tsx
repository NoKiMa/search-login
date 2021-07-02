import React from "react";
import "./App.css";

//components
import SearchLogin from './components/SearchLogin';
import Result from './components/Result';

function App() {
  return (
    <div className="App">
      <div className="container">
          <h1 className="header left-align">Search Login</h1>
      </div>
      <SearchLogin/>
      <Result/>
    </div>
  );
}

export default App;
