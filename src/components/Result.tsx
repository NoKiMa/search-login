import React, { useEffect, useState } from "react";
import "../App.css";
import ReduxState from "../models/redux.model";
import { creatPagesSevice } from "../services/creatPagesSevice";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { setPage, fetchLogin } from "../redux/redux";

const Result = () => {
  const [showTable, setShowTable] = useState(false);
  const current_page = useSelector((state: ReduxState) => state.current_page);
  const searchValue = useSelector((state: ReduxState) => state.searchValue);
  const reduxState = useSelector((state: ReduxState) => state);
  const dispatch = useDispatch();

  const pagesCount = Math.ceil(
    reduxState.total_count / parseInt(reduxState.post_on_page)
  );
  const pages: number[] = [];
  creatPagesSevice(pages, pagesCount, parseInt(current_page));

  useEffect(() => {
    if (searchValue !== "") {
      dispatch(fetchLogin({ searchValue, current_page }));
    }
    
  }, [current_page]);

  useEffect(()=>{
    if (reduxState.state.length !== 0){
      setShowTable(true);
    }
  },[reduxState.state])



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
  ) : showTable?(
    <div className="table_container">
      <div className="container">
        <table className="responsive-table table-style">
          <thead>
            <tr className="tr-thead">
              <th>Avatar</th>
              <th>Login</th>
              <th>Type</th>
            </tr>
          </thead>

          <tbody>
            {reduxState.state.map((item, index) => (
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
  ):null;
};

export default Result;
