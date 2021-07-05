import {
  createSlice,
  PayloadAction,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
//interfaces
import User from "../models/login.model";
import ReduxState from "../models/redux.model";
//services
import loginApiSevice from "../services/loginApiService";

interface LoginObject{ 
  users: User[];
  total_count: number;
}
interface SearchParams{ 
  searchValue: string;
  current_page: string;
}
const initialData: ReduxState = {
  users: [] as User[],
  status: false,
  error: "",
  total_count:0,
  post_on_page:"9",
  current_page:"1",
  searchValue:''
};



export const fetchLogin = createAsyncThunk("logins/fetchLogin", async (searchParams:SearchParams) => {
     return await loginApiSevice.getLoginsData(searchParams.searchValue, searchParams.current_page , initialData.post_on_page);
});

const dataSlice = createSlice({
  name: "logins",
  initialState: initialData,
  reducers: {
    setSearchValue(
      reduxState: ReduxState,
      action: PayloadAction<string>
    ): ReduxState {
      reduxState.searchValue = action.payload;
      return reduxState;
    },
    setPage(reduxState: ReduxState, action: PayloadAction<string>):ReduxState{
      reduxState.current_page = action.payload;
      return reduxState
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.pending, (reduxState: ReduxState):ReduxState => {
      reduxState.status = true;
      return reduxState;
    });
    builder.addCase(fetchLogin.rejected, (reduxState: ReduxState, action):ReduxState => {
      reduxState.error = action.error.message;
      reduxState.status = false;
      return reduxState;
    });
    builder.addCase(
      fetchLogin.fulfilled,
      (reduxState: ReduxState, action: PayloadAction<LoginObject>):ReduxState => {
        reduxState.users=action.payload.users;
        reduxState.total_count = action.payload.total_count;
        reduxState.status = false;
        reduxState.error = '';
        return reduxState;
      }
    );
  },
});

const rootReducer = dataSlice.reducer;

export const { setSearchValue, setPage } = dataSlice.actions;
export type RootReducer = ReturnType<typeof store.getState>;
export const store = configureStore({
  reducer: rootReducer,
});
export default rootReducer;
