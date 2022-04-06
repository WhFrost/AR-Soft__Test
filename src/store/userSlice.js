import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  users: [],
  organizations: [],
  usersRoles: [],
  usersImages: [],
  editableUserId: null,
  userImage: '',
  isEditionMode: false,
  removableUserId: null,
  isShowConfirmDeletePopup: false,
  isShowAddUserPopup: false,
  sortingType: null,
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
    getUsersImages: (state, action) => {
      state.usersImages = action.payload;
    },
    setEditableUserId: (state, action) => {
      state.editableUserId = action.payload;
      state.isEditionMode = true;
      state.isShowConfirmDeletePopup = false;
      state.isShowAddUserPopup = false;
    },
    getUserImage: (state, action) => {
      state.userImage = state.usersImages.find((image) => image.id === action.payload).image;
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
    },
    setSortingType: (state, action) => {
      state.sortingType = action.payload;
    }
  },
});

export const selectUsers = (state) => state.user.users;
export const selectOrganizations = (state) => state.user.organizations;
export const selectUsersRoles = (state) => state.user.usersRoles;
export const selectUserImage = (state) => state.user.userImage;
export const selectEditableUserId = (state) => state.user.editableUserId;
export const selectEditionMode = (state) => state.user.isEditionMode;
export const selectIsShowConfirmDeletePopup = (state) => state.user.isShowConfirmDeletePopup;
export const selectRemovableUserId = (state) => state.user.removableUserId;
export const selectIsShowAddUserPopup = (state) => state.user.isShowAddUserPopup;
export const selectSortingType = (state) => state.user.sortingType;

export const {
  getUsers,
  getOrganizations,
  getUsersRoles,
  getUsersImages,
  setEditableUserId,
  getUserImage,
  resetEditableUserId,
  updateUser,
  deleteUser,
  confirmDeletePopup,
  addUser,
  showAddUserPopup,
  closeAllPopups,
  setSortingType
} = userSlice.actions;

export default userSlice.reducer;
