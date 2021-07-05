import React, { useEffect, useState } from "react";
import "../App.css";
import ReduxState from "../models/redux.model";
//services
import { creatPagesService } from "../services/creatPagesService";
import {sortService} from "../services/sortService";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { setPage, fetchLogin } from "../redux/redux";
import Login from "../models/login.model";

const Result = () => {
  const [showTable, setShowTable] = useState(false);
  const [sortParam, setSortParam] = useState({
    fieldName: "login",
    mode: true,
  });
  const reduxState = useSelector((state: ReduxState) => state);
  const [sortState, setSortState] = useState<Login[]>(reduxState.state)
  const current_page = useSelector((state: ReduxState) => state.current_page);
  const searchValue = useSelector((state: ReduxState) => state.searchValue);
  
  const dispatch = useDispatch();

  const pagesCount = Math.ceil(
    reduxState.total_count / parseInt(reduxState.post_on_page)
  );
  const pages: number[] = creatPagesService([], pagesCount, parseInt(current_page));
  

  useEffect(() => {
    if (searchValue !== "") {
      dispatch(fetchLogin({ searchValue, current_page }));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current_page]);

  useEffect(() => {
    if (reduxState.state.length !== 0) {
      setShowTable(true);
    }
  }, [reduxState.state]);

  useEffect(()=>{
    if(reduxState.state.length!==0){
        let sortedState = sortService(reduxState.state,sortParam.fieldName, sortParam.mode )
        setSortState(sortedState);
    }
  },[sortParam, reduxState.state])

  useEffect(()=>{
    if(reduxState.error !== ""){
      alert(reduxState.error);
    }
  },[reduxState.error])

  return reduxState.status ? (
    <div className="preloader-wrapper big active">
      <div className="spinner-layer spinner-red-only">
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div>
        <div className="gap-patch">
          <div className="circle"></div>
        </div>
        <div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  ) : showTable ? (
    <div className="table_container">
      <div className="container">
        <table className="responsive-table table-style">
          <thead>
            <tr className="tr-thead">
              <th>{<div className="icon-container"> Avatar</div>}</th>
              <th>
                
                {
                  <div className="icon-container" onClick={() => setSortParam({fieldName:"login",mode: !sortParam.mode})}>
                    Login
                    <i className="tiny material-icons icon">arrow_drop_down</i>
                  </div>
                }
              </th>
              <th>
                {
                  <div className="icon-container" onClick={() => setSortParam({fieldName:"type",mode: !sortParam.mode})}>
                    Type
                    <i className="tiny material-icons icon">arrow_drop_down</i>
                  </div>
                }
              </th>
            </tr>
          </thead>

          <tbody>
            {sortState.map((item, index) => (
              <tr key={index} className="tr">
                <td>
                  {
                    <img
                      src={item.avatar_url}
                      alt=""
                      className="circle avatar"
                    ></img>
                  }
                </td>
                <td>{item.login}</td>
                <td>{item.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pages_container">
        {pages.map((page, index) => (
          <span
            key={index}
            className={
              parseInt(current_page) === page ? "current_page_num" : "page_num"
            }
            onClick={() => {
              if (searchValue !== "") {
                dispatch(setPage(page.toString()));
              } else {
                alert("Please enter login");
              }
            }}
          >
            {page}
          </span>
        ))}
      </div>
    </div>
  ) : null;
};

export default Result;
