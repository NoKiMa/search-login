import React from "react";
import "./App.css";

//components
import SearchLogin from './components/SearchLogin';
import Result from './components/Result';

// Redux
import {Provider} from 'react-redux';
import {store} from './redux/redux';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <div className="container">
          <h1 className="header left-align">Search Login</h1>
      </div>
      <SearchLogin/>
      <Result/>
    </div>
    </Provider>
  );
}

export default App;
