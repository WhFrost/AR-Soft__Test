import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  users: [],
  organizations: [],
  usersRoles: [],
  editableUserId: null,
  isEditionMode: false,
  removableUserId: null,
  isShowConfirmDeletePopup: false,
  isShowAddUserPopup: false,
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
      state.isShowConfirmDeletePopup = false;
      state.isShowAddUserPopup = false;
    },
    resetEditableUserId: (state) => {
      state.editableUserId = initialState.editableUserId;
      state.isEditionMode = false;
    },
    updateUser: (state, action) => {
      state.users.splice(state.users.findIndex((item) => item.id === action.payload.id), 1, action.payload);
    },
    deleteUser: (state, action) => {
      state.users.splice(state.users.findIndex((item) => item.id === action.payload), 1);
    },
    confirmDeletePopup: (state, action) => {
      state.removableUserId = action.payload ? action.payload : initialState.removableUserId;
      state.isShowConfirmDeletePopup = action.payload && true;
      state.isEditionMode = false;
      state.isShowAddUserPopup = false;
    },
    showAddUserPopup: (state, action) => {
      state.isEditionMode = false;
      state.isShowConfirmDeletePopup = false;
      state.isShowAddUserPopup = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
      state.isShowAddUserPopup = false;
    },
    closeAllPopups: (state) => {
      state.isEditionMode = false;
      state.isShowConfirmDeletePopup = false;
      state.isShowAddUserPopup = false;
    }
  },
});

export const selectUsers = (state) => state.user.users;
export const selectOrganizations = (state) => state.user.organizations;
export const selectUsersRoles = (state) => state.user.usersRoles;
export const selectEditableUserId = (state) => state.user.editableUserId;
export const selectEditionMode = (state) => state.user.isEditionMode;
export const selectIsShowConfirmDeletePopup = (state) => state.user.isShowConfirmDeletePopup;
export const selectRemovableUserId = (state) => state.user.removableUserId;
export const selectIsShowAddUserPopup = (state) => state.user.isShowAddUserPopup;

export const {
  getUsers,
  getOrganizations,
  getUsersRoles,
  setEditableUserId,
  resetEditableUserId,
  updateUser,
  deleteUser,
  confirmDeletePopup,
  addUser,
  showAddUserPopup,
  closeAllPopups
} = userSlice.actions;

export default userSlice.reducer;
