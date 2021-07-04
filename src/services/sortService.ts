import Login from "../models/login.model";

export const sortService = (
  state: Login[],
  fieldName: string,
  mode: boolean
): Login[] => {
  let sortState: Login[] = state.map(item =>{return {avatar_url:item.avatar_url, login:item.login, type:item.type}} );
  if (mode) {
    if (fieldName === "login") {
        sortState.sort((a, b) => {return a.login < b.login ? -1 : a.login > b.login ? 1 : 0;});
        return sortState;
    } else {
        sortState.sort((a, b) => { return a.type < b.type ? -1 : a.type > b.type ? 1 : 0;});
        return sortState;
    }
  } else {
    if (fieldName === "login") {
        sortState.sort((a, b) => {return a.login > b.login ? -1 : a.login < b.login ? 1 : 0;});
      return sortState;
        
    } else {
        sortState.sort((a, b) => {return a.type > b.type ? -1 : a.type < b.type ? 1 : 0;});
      return sortState;
    }
        
  }
};
