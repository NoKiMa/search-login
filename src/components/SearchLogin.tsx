import React from "react";
import {useState} from 'react'
import "../App.css";

// Redux
import {useDispatch} from 'react-redux';
import { fetchLogin } from '../redux/redux';

const SearchLogin:React.FC = () => {
const [inputValue, setInputValue] = useState("");
const dispatch = useDispatch();

    
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
        <div className=" input-field col s2">
    
           <button 
           className="waves-effect waves-light btn-small blue-grey darken-3 rudius-btn"
           onClick={
            ()=> dispatch(fetchLogin())
            // getData
            }
           >Submit
           </button>
           
        </div>
      </div>
      </div>
    </div>
  );
};

export default SearchLogin;
