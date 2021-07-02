import React, {useState} from "react";
import "../App.css";

const SearchLogin = () => {
const [inputValue, setInputValue] = useState("")
    
  return (
    <div className="search_container">
      <div className="container">
        <div className="row">
        <div className="input-field col s6 label">
          <input 
            value={inputValue} 
            id="first_name2" 
            type="text" 
            className="validate"
            onChange={(e)=>setInputValue(e.target.value)}
            />
          <label className="active">Login</label>
        </div>
        <div className=" input-field col s2 sub-btn-container">
    
           <a className="waves-effect waves-light btn-small blue-grey darken-3 rudius-btn ">Submit</a>
           
        </div>
      </div>
      </div>
      
      {/* <a className="waves-effect waves-light btn-small">Button</a> */}
    </div>
  );
};

export default SearchLogin;
