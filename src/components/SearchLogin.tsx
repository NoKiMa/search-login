import React from "react";
import {useState} from 'react'
import "../App.css";
import ReduxState from "../models/redux.model"

// Redux
import {useDispatch} from 'react-redux';
import { fetchLogin, setSearchValue } from '../redux/redux';

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
            ()=> {
              if(inputValue!==''){
                dispatch(setSearchValue(inputValue));
                dispatch(fetchLogin(inputValue));
                setInputValue('')
              } else{
                alert("Please enter login")
              }
              
            }
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
