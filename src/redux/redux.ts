import {
  createSlice,
  PayloadAction,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
//interfaces
import Login from "../models/login.model";
import ReduxState from "../models/redux.model";
//services
import loginApiSevice from "../services/loginApiService";

const initialData: ReduxState = {
  state: [],
  status: false,
  error: "",
  // total_count:0
};



export const fetchLogin = createAsyncThunk("logins/fetchLogin", async () => {
  return await loginApiSevice.getLoginsData();
});

const dataSlice = createSlice({
  name: "logins",
  initialState: initialData,
  reducers: {
    saveStatesData(
      reduxState: ReduxState,
      action: PayloadAction<Login[]>
    ): ReduxState {
      reduxState.state = action.payload;
      return reduxState;
    },
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
      (reduxState: ReduxState, action: PayloadAction<Login[]>):ReduxState => {
        reduxState.state=action.payload
        reduxState.status = false;
        return reduxState;
      }
    );
  },
});

const rootReducer = dataSlice.reducer;

export const { saveStatesData } = dataSlice.actions;
export type RootReducer = ReturnType<typeof store.getState>;
export const store = configureStore({
  reducer: rootReducer,
});
export default rootReducer;
