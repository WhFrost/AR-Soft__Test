import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  users: [],
  organizations: [],
  usersRoles: [],
  editableUserId: null,
  isEditionMode: false
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
    setEditableUserId: (state, action) => {
      state.editableUserId = action.payload;
      state.isEditionMode = true;
    },
    resetEditableUserId: (state) => {
      state.editableUserId = initialState.editableUserId;
      state.isEditionMode = false;
    },
    updateUser: (state, action) => {
      state.users.splice(state.users.findIndex((item) => item.id === action.payload.id), 1, action.payload);
    },
    deleteUser: (state, action) => {
      state.users.splice(state.users.findIndex((item) => item.id === action.payload.id), 1);
    },
    addUser: (state, action) => {
      state.users = state.users.push(action.payload);
    }
  },
});

export const selectUsers = (state) => state.user.users;
export const selectOrganizations = (state) => state.user.organizations;
export const selectUsersRoles = (state) => state.user.usersRoles;
export const selectEditableUserId = (state) => state.user.editableUserId;
export const selectEditionMode = (state) => state.user.isEditionMode;

export const {
  getUsers,
  getOrganizations,
  getUsersRoles,
  setEditableUserId,
  resetEditableUserId,
  updateUser,
  deleteUser,
  addUser,
} = userSlice.actions;

export default userSlice.reducer;
