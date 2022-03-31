import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {store, api} from './store';
import {APIRoute} from '../const';

const initialState = {
  data: '',
  organizations: [],
};

export const getToken = createAsyncThunk(
  'user/getToken',
  async ({email, password}, {rejectWithValue, dispatch}) => {
    const {data} = await api.post(APIRoute.Login, {email, password});
    dispatch(getAuthToken(data));
  }
);

export const getOrganizations = createAsyncThunk(
  'user/getOrganizations',
  async () => {
    const res = await api.get(APIRoute.Organizations);
    console.log(res.data);
    store.dispatch(setOrganizations(res.data));
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getAuthToken: (state, action) => {
      state.data = action.payload;
    },
    setOrganizations: (state, action) => {
      state.organizations = action.payload;
    }
  },
  extraReducers: {
    // [getToken.pending]: () => console.log('pending'),
    // [getToken.fulfilled]: () => console.log('fulfilled'),
    // [getToken.rejected]: () => console.log('rejected'),
    // [getOrganizations.pending]: () => console.log('pending'),
    // [getOrganizations.fulfilled]: () => console.log('fulfilled'),
    // [getOrganizations.rejected]: () => console.log('rejected'),
  }
});

export const {getAuthToken, setOrganizations} = userSlice.actions;

export default userSlice.reducer;
