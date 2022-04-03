import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  users: [],
  organizations: [],
  usersRoles: [],
  currentUser: {}
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload;
    },
    getOrganizations: (state, action) => {
      state.organizations = action.payload;
    },
    getUsersRoles: (state, action) => {
      state.usersRoles = action.payload;
    },
    getCurrentUser: (state, action) => {
      state.currentUser = state.users.find((user) => user.id === action.payload);
    },
    resetCurrentUser: (state) => {
      state.currentUser = initialState.currentUser;
    },
    updateUser: (state, action) => {
      state.users = state.users.find((user) => user.id === action.payload.id);
    },
    addUser: (state, action) => {
      state.users = state.users.push(action.payload);
    }
  },
});

export const selectUsers = (state) => state.user.users;
export const selectOrganizations = (state) => state.user.organizations;
export const selectUsersRoles = (state) => state.user.usersRoles;
export const selectCurrentUser = (state) => state.user.currentUser;

export const {
  getUsers,
  getOrganizations,
  getUsersRoles,
  getCurrentUser,
  resetCurrentUser,
  updateUser,
  addUser,
} = userSlice.actions;

export default userSlice.reducer;
