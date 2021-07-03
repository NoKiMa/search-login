import React, {useEffect} from "react";
import "../App.css"
import ReduxState from "../models/redux.model"
import {creatPagesSevice} from "../services/creatPagesSevice"
// Redux
import {useSelector, useDispatch} from 'react-redux';
import { setPage , fetchLogin} from '../redux/redux';

const Result = ()=>{
  const current_page= useSelector((state: ReduxState) => state.current_page);
  const searchValue = useSelector((state: ReduxState) => state.searchValue);
  const state = useSelector((state: ReduxState) => state);
  const dispatch = useDispatch();

  const pagesCount = Math.ceil(state.total_count/parseInt(state.post_on_page));
  const pages:number[] = []
  creatPagesSevice(pages, pagesCount, parseInt(current_page));

useEffect(()=>{
  if(searchValue!==''){
     dispatch(fetchLogin({searchValue, current_page}));
  }
}, [current_page])
    return(
      <div className="table_container">
        <p>Good</p>
        <div className="pages_container">
      {pages.map((page, index) => 
      <span 
      key={index} 
      className={parseInt(current_page)===page?"current_page_num":"page_num"}
      onClick={()=>{
        if(searchValue!==""){
          dispatch(setPage(page.toString()))
        } else{
          alert("Please enter login");
        }
        
      }}
      >{page}</span>)}
        </div>
      </div>
    )
};

export default Result;