import React, {useEffect} from "react";
import "../App.css"
import ReduxState from "../models/redux.model"
// Redux
import {useSelector, useDispatch} from 'react-redux';
import { setPage , chengePage} from '../redux/redux';

const Result = ()=>{
  const current_page= useSelector((state: ReduxState) => state.current_page);
  const dispatch = useDispatch();

  const pages = [1,2,3,4,5];

useEffect(()=>{dispatch(chengePage())}, [current_page])
    return(
      <div className="table_container">
        <p>Good</p>
        <div className="pages_container">
      {pages.map((page, index) => <span 
      key={index} 
      className={current_page ===page?"current_page_num":"page_num"}
      onClick={()=>dispatch(setPage(page))}
      >{page}</span>)}
        </div>
      </div>
    )
};

export default Result;