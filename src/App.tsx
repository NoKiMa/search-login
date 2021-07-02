import React from "react";
import "./App.css";

//components
import SearchLogin from './components/SearchLogin';
import Result from './components/Result';

function App() {
  return (
    <div className="App">
      <h1 className="header">Search Login</h1>
      <SearchLogin/>
      <Result/>
    </div>
  );
}

export default App;
