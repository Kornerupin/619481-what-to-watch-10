import {UserDataType} from '../types/user-data-type';
import {AuthStatus} from '../const';
import {createReducer} from '@reduxjs/toolkit';
import {deleteUserData, requireAuth, saveUserData, setError} from './action';

interface initialStateTypes {
  authStatus: AuthStatus,
  userData: UserDataType | null,
  error: string | null,
}

const initialState = <initialStateTypes> {
  authStatus: AuthStatus.Unknown,
  userData: null,
  error: null,
};

const reducerAuth = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuth, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(saveUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(deleteUserData, (state) => {
      state.userData = null;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export default reducerAuth;
