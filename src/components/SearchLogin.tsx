import React from "react";
import { useState } from "react";
import "../App.css";
// import ReduxState from "../models/redux.model"

// Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin, setSearchValue, setPage } from "../redux/redux";
import ReduxState from "../models/redux.model";

const SearchLogin: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const current_page = useSelector((state: ReduxState) => state.current_page);

  const handleSearch = () => {
    if (inputValue !== "") {
      dispatch(setSearchValue(inputValue));
      dispatch(fetchLogin({ searchValue: inputValue, current_page }));
      setInputValue("");
      dispatch(setPage("1"));
    } else {
      alert("Please enter login");
    }
  };

  return (
    <div className="search_container">
      <div className="container">
        <div className="row">
          <div className="input-field col s6 label">
            <input
              value={inputValue}
              id="first_name"
              type="text"
              className="validate"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <label className="active">Login</label>
          </div>
          <div className=" input-field col s2">
            <button
              className="waves-effect waves-light btn-small blue-grey darken-3 rudius-btn"
              onClick={handleSearch}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchLogin;
